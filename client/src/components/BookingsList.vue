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
import BookingItem from "./BookingItem.vue";
import { eventBus } from "@/main.js";

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
    BookingsService.getBookings()
      .then(data => this.bookings = data);

    eventBus.$on("booking-deleted", (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1);
    })
  }
}
</script>

<style>

</style>
