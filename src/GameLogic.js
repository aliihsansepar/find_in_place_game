export function generateRandomNumber(digits) {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function updateElapsedTime(startTime) {
  const currentTime = new Date();
  const totalTime = Math.floor((currentTime - startTime) / 1000);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  // format must be "mm : ss"
  return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}
