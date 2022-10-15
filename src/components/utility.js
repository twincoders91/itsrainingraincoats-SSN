export const capitaliseFirstLetter = (string) => {
  const words = string.split(/ |-/);
  const newWords = [];
  for (let word of words) {
    const arr = word.split("");
    arr[0] = arr[0].toUpperCase();
    newWords.push(arr.join(""));
  }
  return newWords.join(" ");
};
