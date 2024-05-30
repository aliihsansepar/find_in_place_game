<template>
  <button @click="$emit('reset')">Reset Game</button>
</template>

<script>
export default {
  name: "GameControlsComponent",
  props: ["controls"],
};
</script>

<style>
button {
  margin-top: 1rem;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00ffc6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #00e6b3;
}
</style>
