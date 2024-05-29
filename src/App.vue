<script>
import Number from "./components/Number.vue";
export default {
  components: {
    Number,
  },
  data() {
    return {
      result: "0 Found, 0 In Place",
      inputs: ["", "", "", ""],
      randomNumber: this.generateRandomNumber(),
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    },
    checkResult(event) {
      const realNumberArray = this.randomNumber.toString().split("");
      let found = 0,
        inPlace = 0;

      this.inputs.forEach((input, index) => {
        if (input === realNumberArray[index]) {
          inPlace++;
        }
        if (realNumberArray.includes(input)) {
          found++;
        }
      });

      this.result = `${found} Found, ${inPlace} In Place`;

      if (found === 4 && inPlace === 4) {
        this.result = "Congratulations! You found the number!";
        confetti.start();
        setTimeout(() => confetti.stop(), 5000);
      }

      this.focusNextInput(event);
    },
    focusNextInput(event) {
      const target = event.target;
      const maxLength = 1;
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        let next = target.nextElementSibling;
        while (next) {
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
          next = next.nextElementSibling;
        }
      } else if (myLength === 0) {
        let previous = target.previousElementSibling;
        while (previous) {
          if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            break;
          }
          previous = previous.previousElementSibling;
        }
      }
    },
  },
};
</script>

<template>
  <div class="input-group">
    <Number v-for="(input, index) in inputs" :key="index" v-model="inputs[index]" @keyup="checkResult" />
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
