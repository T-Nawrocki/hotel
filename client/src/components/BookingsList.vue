<template>
  <div id="bookings-list">
    <h1>Active Bookings</h1>
    <ul>
      <booking-item v-for="(booking, index) in bookings"
                    :booking="booking"
                    :key="index" />
    </ul>
  </div>
</template>

<script>
import BookingsService from "../services/BookingsService.js";
import BookingItem from "./BookingItem.vue"

export default {
  name: "BookingsList",

  components: {
    "booking-item": BookingItem
  },

  data () {
    return {
      bookings: []
    }
  },

  mounted () {
    // fetch bookings list from server
    BookingsService.getBookings()
      .then(data => this.bookings = data);
  }
}
</script>

<style>

</style>
