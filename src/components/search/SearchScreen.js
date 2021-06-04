import React, { useMemo } from 'react'
import queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
/*
EJ: http://localhost:3000/search?q=asd&casa=521
con el queryString.parse obtenemos el objeto  {casa: "521", q: "asd"}
de esta forma desestructuramos y obtenemos el valor "q" que nos interesa
Al desestructurar de utiliza la sentencia { q = ''} para igualar a vacio el valor de 
la variable en caso de que se undefined por no encontrarse en el URL
*/
    // const { q = ''} = queryString.parse(location.search);//se obtiene del queryString del url el valor de q
    const valorQueryString = useMemo(() => queryString.parse(location.search), [location.search]);
    const {q = ''} = valorQueryString;


    const [formValues , handleInputChange, reset ] = useForm({
        // heroInput: '' //sin usar el queryString
        heroInput: q
    });
    
    const {heroInput} = formValues;
    
    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSeach = (e) =>{
        e.preventDefault();
        history.push(`?q=${ heroInput }`);

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSeach }>
                        <input 
                            type="text"
                            name="heroInput"
                            autoComplete="off"
                            placeholder="Find your hero"
                            className="form-control"
                            value = {heroInput}
                            onChange = { handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>
                    {
                        (q === '') 
                            &&
                            <div className="alert alert-info">
                                Search a Hero
                            </div>
                    }

                    {
                        (q !== '' && heroesFilter.length === 0) 
                            &&
                            <div className="alert alert-danger">
                                There is no hero with { q }
                            </div>
                    }


                    {
                        heroesFilter.map( hero => (
                            <HeroeCard 
                                key= {hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
