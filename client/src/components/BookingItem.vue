<template>
  <div class="booking-item">
    <h2>{{booking.name}}</h2>
    <p><b>Email:</b> {{booking.email}}</p>
    <p><b>Checked In:</b> {{booking.checkedIn ? "Yes" : "No"}}</p>
    <button v-on:click="cancelBooking">Cancel Booking</button>
  </div>
</template>

<script>
import BookingsService from "../services/BookingsService.js";
import { eventBus } from "@/main.js";

export default {
  name: "BookingItem",

  props: {
    booking: {
      type: Object,
      required: true
    }
  },

  methods: {
    cancelBooking () {
      BookingsService.deleteBooking(this.booking._id)
        .then(eventBus.$emit("booking-deleted", this.booking._id));
    }
  }
}
</script>

<style>

</style>
