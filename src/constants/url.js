import constants from "./constants"


export const trending =`/trending/all/day?api_key=${constants.API_KEY}&language=en-US`;
export const original =`/discover/tv?api_key=${constants.API_KEY}&with_networks=213`;
export const action =`/discover/movie?api_key=${constants.API_KEY}&with_genres=28`;
export const comedy =`/discover/movie?api_key=${constants.API_KEY}&with_genres=35`;
export const adventure =`/discover/movie?api_key=${constants.API_KEY}&with_genres=12`;
export const drama =`/discover/movie?api_key=${constants.API_KEY}&with_genres=18`;
export const horror =`/discover/movie?api_key=${constants.API_KEY}&with_genres=27`;
export const thriller =`/discover/movie?api_key=${constants.API_KEY}&with_genres=53`;

