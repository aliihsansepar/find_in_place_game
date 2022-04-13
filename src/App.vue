<script>
import Number from "./components/Number.vue";
export default {
  components: {
    Number,
  },
  data() {
    return {
      result: "0 Found, 0 In Place",
      input_1: 0,
      input_2: 0,
      input_3: 0,
      input_4: 0,
      randomNumber: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
    };
  },
  methods: {
    checkResult(event) {
      console.log(this.randomNumber);
      let found = [],
        inPlace = [];
      let realNumberArray = this.randomNumber.toString().split("");
      if (realNumberArray[0] == this.input_1.data) {
        inPlace.push(this.input_1.data);
      }
      if (realNumberArray[1] == this.input_2.data) {
        inPlace.push(this.input_1.data);
      }
      if (realNumberArray[2] == this.input_3.data) {
        inPlace.push(this.input_1.data);
      }
      if (realNumberArray[3] == this.input_4.data) {
        inPlace.push(this.input_1.data);
      }
      if (realNumberArray.includes(this.input_1.data)) {
        found.push(this.input_1.data);
      }
      if (realNumberArray.includes(this.input_2.data)) {
        found.push(this.input_2.data);
      }
      if (realNumberArray.includes(this.input_3.data)) {
        found.push(this.input_3.data);
      }
      if (realNumberArray.includes(this.input_4.data)) {
        found.push(this.input_4.data);
      }
      this.result = `${found.length} Found, ${inPlace.length} In Place`;
      if (found.length == 4 && inPlace.length == 4) {
        this.result = "Congratulations! You found the number!";
      }
      this.focusNextInput(event);
    },
    focusNextInput(event) {
      var target = event.srcElement || event.target;
      var maxLength = 1;
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        var next = target;
        while ((next = next.nextElementSibling)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
        var previous = target;
        while ((previous = previous.previousElementSibling)) {
          if (previous == null) break;
          if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            break;
          }
        }
      }
    },
  },
};
</script>

<template>
  <div class="input-group">
    <Number v-bind="input_1" @input="input_1 = $event" @keyup="checkResult" />
    <Number v-bind="input_2" @input="input_2 = $event" @keyup="checkResult" />
    <Number v-bind="input_3" @input="input_3 = $event" @keyup="checkResult" />
    <Number v-bind="input_4" @input="input_4 = $event" @keyup="checkResult" />
  </div>
  <p id="result">{{ result }}</p>
</template>

<style>
.input-group {
  display: flex;
  justify-content: center;
  height: 50vh;
  align-items: center;
}
#result {
  font-size: 40px;
  font-weight: bold;
  color: #00ffc6;
  margin-top: 1rem;
  text-align: center;
}
</style>
