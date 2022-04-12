<template>
  <input type="text" maxlength="1" @input="checkInputMaxLengthAndIsANumber" />
</template>
<script>
export default {
  name: "Number",
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    // check input length is 1 and number
    checkInputMaxLengthAndIsANumber(event) {
      const value = event.currentTarget.value;
      event.currentTarget.value = value.replace(/[^0-9]/g, "");
      if (value.length > 1) {
        event.currentTarget.value = value.slice(0, 1);
        return false;
      }
      this.$emit("input", value);
    },
  },
};
</script>

<style>
input {
  background: none;
  text-align: center;
  margin: 2em;
  font-size: 28px;
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
