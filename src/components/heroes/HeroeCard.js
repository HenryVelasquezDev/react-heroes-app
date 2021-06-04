import React from 'react'
import { Link } from 'react-router-dom'

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className="card mb-3">
            <div className="row g-4">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt= {superhero} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{ superhero+' - '+ alter_ego  }</h5>
                    <p className="card-text"> <b>Primera Aparición:</b> { first_appearance } </p>

                    {
                        ( alter_ego !== characters ) &&
                         <p className="card-text"> <b>Otros Caracteres:</b> { characters } </p>
                    }

                    <Link className="btn btn-primary" to={ `./hero/${ id }` }>
                        Más...
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
