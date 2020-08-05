const baseURL = "http://localhost:3000/api/bookings/";

export default {
  getBookings () {
    return fetch(baseURL)
      .then(res => res.json());
  },

  postBooking(booking){
    return fetch(baseURL, {
      method: 'Post',
      body: JSON.stringify(booking),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  },

  deleteBooking (id) {
    return fetch(baseURL + id, {
        method: 'Delete'
    })
  }
};
