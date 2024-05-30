<template>
  <div class="welcome-container">
    <h1>Welcome to the Number Guessing Game</h1>
    <p>Select your difficulty level to start the game:</p>
    <div class="difficulty-options">
      <div class="difficulty-option" @click="selectDifficulty('easy')">
        <button>Easy <br />(3 digits)</button>
      </div>
      <div class="difficulty-option" @click="selectDifficulty('medium')">
        <button>Medium <br />(4 digits)</button>
      </div>
      <div class="difficulty-option" @click="selectDifficulty('hard')">
        <button>Hard <br />(5 digits)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectDifficulty(difficulty) {
      this.$emit("start-game", difficulty);
    },
  },
};
</script>

<style>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 1rem;
}

h1 {
  font-size: 3rem;
  color: #00ffc6;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.difficulty-options {
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
}

.difficulty-option {
  margin: 1rem;
  text-align: center;
  flex: 1 1 150px;
}

.difficulty-option button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: transparent;
  border: 3px solid #00e6b3;
  border-radius: 6px;
  cursor: pointer;
  color: azure;
}

.difficulty-option button:hover {
  background-color: #00e6b3;
  color: #3a3845;
}

@media (max-width: 768px) {
  .difficulty-option img {
    width: 80px;
    height: 80px;
  }

  .difficulty-option button {
    padding: 8px 16px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .difficulty-option img {
    width: 60px;
    height: 60px;
  }

  .difficulty-option button {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
