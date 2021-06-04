import { heroes } from '../data/heroes';

 export const getHeroesByPublisher = ( p_publisher ) => {

    const validPublishers = ['DC Comics','Marvel Comics'];

    if ( !validPublishers.includes( p_publisher ) ){
        throw new Error(`Publisher "${ p_publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === p_publisher );

 }