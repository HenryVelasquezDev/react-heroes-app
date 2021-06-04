import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// Se obtiene la propiedad history de las props que contiene la pantalla
// estas props se observan en el inspector de chrome en la pestaña components
// y seleccionando el componente de LoginScreen
export const LoginScreen = ({history}) => {


    const {user, dispatch } = useContext(AuthContext);

    const HandleLogin = () =>{
        // history.push('/');//Se utiliza push para agregar navegación realizada al history de navegacion
        // history.replace('/');//Se utiliza para reemplazar el contenido del history y establecer la pagina destino como unica pagina visitada

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch( {
            type: types.login,
            payload: {
                name: 'Henry'
            }
        });

        history.replace(lastPath);

    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>


            <button
                className="btn btn-primary"
                onClick= { HandleLogin }
            >
                Login
            </button>
        </div>
    )
}
