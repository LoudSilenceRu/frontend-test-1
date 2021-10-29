<template>
  <div id="app">
    <product-add></product-add>
  </div>
</template>

<script>
import ProductAdd from "@/views/product/ProductAdd";

export default {
  name: "App",
  components: {
    ProductAdd,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  margin: 2rem;
  font-size: 1rem;
  color: #3f3f3f;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  background-color: #fffefb;
}
h1,
h2,
h3,
p,
ul {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
