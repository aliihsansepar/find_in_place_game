<template>
  <input
    type="text"
    maxlength="1"
    v-model="inputValue"
    @input="checkInputMaxLengthAndIsANumber"
  />
</template>

<script>
export default {
  name: "NumberComponent",
  props: ["value"],
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      if (newValue !== this.inputValue) {
        this.inputValue = newValue;
      }
    },
  },
  methods: {
    checkInputMaxLengthAndIsANumber(event) {
      let value = event.currentTarget.value;
      value = value.replace(/\D/g, "").slice(0, 1);
      this.inputValue = value;
    },
  },
};
</script>

<style>
input {
  background: none;
  text-align: center;
  margin: 1.5em;
  font-size: 75px; /* Font boyutunu artırdık */
  padding: 10px;
  display: block;
  width: 100px;
  border: none;
  border-radius: 0;
  color: #00ffc6;
  border-bottom: 4px solid #247881;
}
input:focus {
  outline: none;
  border-bottom: 4px solid #fff;
}
</style>
