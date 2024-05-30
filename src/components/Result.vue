<template>
  <p id="result">{{ result }}</p>
</template>

<script>
export default {
  props: ["result"],
  name: "ResultComponent",
};
</script>

<style>
#result {
  font-size: 40px;
  font-weight: bold;
  color: #00ffc6;
  margin-top: 1rem;
  text-align: center;
}
</style>
