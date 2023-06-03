const baseURL = 'http://localhost:9000/api/search/';

//WE WANT THIS TO BE RESPONSIBLE FOR GETTING OUR GEOLIST AND SETTING THE STATE 

const ExternalServices =  {

  getGeoList (location) {
    
    const resultOfFetch = fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
    .then(data => data.json())
    .catch((error) => {
      console.error("Error fetching geoList:", error);})
    if (! resultOfFetch.results) {
      return resultOfFetch
    } else {
      return Object.assign( resultOfFetch, {"results": []})
    }
    
  }
//   getBookings() {
//     return fetch(baseURL)
//       .then(res => res.json());
//   },

//   addBooking(searchObj) {
//     return fetch(baseURL, {
//       method: 'POST',
//       body: JSON.stringify(searchObj),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   },

//   updateBooking(searchObj) {
//     return fetch(baseURL + searchObj._id, {
//       method: 'PUT',
//       body: JSON.stringify(searchObj),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   },

//   deleteBooking(id) {
//     return fetch(baseURL + id, {
//       method: 'DELETE'
//     });
//   }
};

export default ExternalServices;