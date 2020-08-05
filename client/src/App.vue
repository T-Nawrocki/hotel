<template>
  <div id="app">
    <booking-form />
    <bookings-list />
  </div>
</template>

<script>
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

export default {
  name: 'App',

  components: {
    "booking-form": BookingForm,
    "bookings-list": BookingsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
