<template>
  <div id="booking-form">
    <h1>Add New Booking</h1>
    <form v-on:submit="addBooking">

      <div id="questions">
        <div class="form-item">
          <label for="name-input">Name</label>
          <input type="text" id="name-input" v-model="name" required>
        </div>

        <div class="form-item">
          <label for="email-input">Email</label>
          <input type="text" id="email-input" v-model="email" required>
        </div>

        <div class="form-item">
          <label>Checked In?</label>

          <div id="radio-buttons">
            <input type="radio" 
                  name="checkedIn"
                  id="checked-in-true"
                  v-model="checkedIn"
                  v-bind:value="true">
            <label for="checked-in-true">Yes</label>

            <input type="radio" 
                  name="checkedIn"
                  id="checked-in-false"
                  v-model="checkedIn"
                  v-bind:value="false">
            <label for="checked-in-false">No</label>
          </div>
        </div>
      </div>

      <input type="submit" value="Save">

    </form>
  </div>
</template>

<script>
import BookingsService from "../services/BookingsService";
import { eventBus } from "@/main.js";

export default {
  name: "BookingForm",

  data () {
    return {
      name: "",
      email: "",
      checkedIn: null
    }
  },

  methods: {
    addBooking () {
      event.preventDefault();

      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };

      if (booking.name && booking.email) {
        BookingsService.postBooking(booking)
          .then(res => eventBus.$emit("booking-added", res));
      } else {
        console.log("FAILED TO SAVE: Booking requires name and email.");
      }
    }
  }

}
</script>

<style>

#booking-form {
  padding-top: 60px;
}

#questions {
  display: flex;
  justify-content: center;
}

.form-item {
  padding: 10px;
}

#radio-buttons, .form-item > input {
  display: block;
  width: 200px;
}

</style>
