import * as React from 'react';
import EntityHOC from '../EntityHOC';

export const Actors =  EntityHOC('people', 'gender');
export const Planets =  EntityHOC('planets', 'planets');
export const Species =  EntityHOC('species', 'species');
export const Movies =  EntityHOC('films', 'films');
export const StarShips =  EntityHOC('starships', 'starships');
export const Vehicles =  EntityHOC('vehicles', 'vehicles');