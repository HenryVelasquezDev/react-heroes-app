import { heroes } from '../data/heroes';

 export const getHeroesByName = ( p_name = '' ) => {

    if (p_name === ''){
        return [];
    }

    p_name = p_name.toLocaleLowerCase();

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(p_name));

 }