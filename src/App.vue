<template>
  <div id="app">
    <h3>Colors list</h3>
    <colors :colorsList="myColors" />
    <small>wwww.nightprogrammer.com</small>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      myColors: ["Red", "Blue", "Green", "Yellow"],
    };
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>