<template>
  <p id="timer">{{ elapsedTime }}</p>
</template>

<script>
export default {
  name: "TimerComponent",
  props: ["elapsedTime"],
};
</script>

<style>
#timer {
  font-size: 70px;
  font-weight: bold;
  color: #ab0606;
  margin-bottom: 1rem;
  border: 1px solid #c8c8c8;
  padding: 0.6rem;
  border-radius: 5px;
}
</style>
