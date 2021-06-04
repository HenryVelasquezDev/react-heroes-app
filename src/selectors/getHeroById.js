import { heroes } from '../data/heroes';

 export const getHeroById = ( p_id ) => {

    return heroes.find( hero => hero.id === p_id );

 }