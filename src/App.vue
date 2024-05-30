<script>
import Number from "./components/Number.vue";
import Timer from "./components/Timer.vue";
import Result from "./components/Result.vue";
import GameControls from "./components/GameControls.vue";
import Welcome from "./components/Welcome.vue";
import { generateRandomNumber, updateElapsedTime } from "./GameLogic";

export default {
  components: {
    Number,
    Timer,
    Result,
    GameControls,
    Welcome,
  },
  data() {
    return {
      result: "0 Found, 0 In Place",
      inputs: [],
      randomNumber: null,
      attempts: 0,
      startTime: null,
      timer: null,
      elapsedTime: "0 sec",
      difficulty: null,
      gameStarted: false,
    };
  },
  methods: {
    startGame(difficulty) {
      this.difficulty = difficulty;
      this.gameStarted = true;
      this.resetGame();
    },
    resetGame() {
      const digitCount = this.getDigitCount();
      this.randomNumber = generateRandomNumber(digitCount);
      this.inputs = Array(digitCount).fill("");
      this.result = "0 Found, 0 In Place";
      this.attempts = 0;
      this.startTime = new Date();
      this.updateElapsedTime();
      clearInterval(this.timer);
      this.timer = setInterval(this.updateElapsedTime, 1000);
      this.$nextTick(() => {
        this.focusFirstInput();
      });
    },
    getDigitCount() {
      switch (this.difficulty) {
        case "easy":
          return 3;
        case "hard":
          return 5;
        default:
          return 4;
      }
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
      this.attempts++;

      if (
        found === realNumberArray.length &&
        inPlace === realNumberArray.length
      ) {
        const totalTime = Math.floor((new Date() - this.startTime) / 1000);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        clearInterval(this.timer);
        this.result = `Congratulations! You found the number in ${this.attempts} attempts in ${minutes} min ${seconds} sec!`;
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
        this.focusNext(target);
      } else if (myLength === 0) {
        this.focusPrevious(target);
      }
    },
    focusNext(target) {
      let next = target.nextElementSibling;
      while (next) {
        if (next.tagName.toLowerCase() === "input") {
          next.focus();
          break;
        }
        next = next.nextElementSibling;
      }
    },
    focusPrevious(target) {
      let previous = target.previousElementSibling;
      while (previous) {
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
        previous = previous.previousElementSibling;
      }
    },
    focusFirstInput() {
      const firstInput = this.$el.querySelector("input");
      if (firstInput) {
        firstInput.focus();
      }
    },
    updateElapsedTime() {
      this.elapsedTime = updateElapsedTime(this.startTime);
    },
  },
  mounted() {
    if (this.gameStarted) {
      this.resetGame();
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <div class="container">
    <template v-if="!gameStarted">
      <Welcome @start-game="startGame" />
    </template>
    <template v-else>
      <Timer :elapsedTime="elapsedTime" />
      <div class="input-group">
        <Number
          v-for="(input, index) in inputs"
          :key="index"
          v-model="inputs[index]"
          @keyup="checkResult"
        />
      </div>
      <Result :result="result" />
      <GameControls @reset="resetGame" />
    </template>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.input-group {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
