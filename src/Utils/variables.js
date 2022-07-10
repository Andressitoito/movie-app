export const urlBase = 'https://api.themoviedb.org/3/'
export const apiKey = 'api_key=07b7fbf0aa198d742f7f3020308675d2'
export const q_page = '&page='
export const q_search = '&query='

export const definePath = (media_type, id) => {
 switch (media_type) {
  case 'movie':
   return `/popularmovies/${id}/moviedetailinfo`;
  case 'tv':
   return `/popularseries/${id}/seriedetailinfo`
  case 'person':
   return `/castprofile/${id}`
 }
}
