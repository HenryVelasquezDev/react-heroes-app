import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroId } = useParams();//se utiliza para obtener los argumentos enviados por el URL

    const hero =useMemo(() => getHeroById( heroId ), [heroId])

    //evaluamos si el objeto hero existe, en caso de que no entonces lo redireccionamos
    //a una pagina valida

    if (!hero){
        return <Redirect to="/"/>
    }

    const handleReturn = () =>{

        if( history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ heroId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeIn"
                />
            </div>

            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"> <b>First Appearence:</b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick= {handleReturn}
                >
                    Return
                </button>


            </div>
        </div>
    )
}
