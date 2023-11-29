export default function shuffleArray(inputArray: Array<any>) {
  inputArray.sort(() => Math.random() - 0.5);
}
