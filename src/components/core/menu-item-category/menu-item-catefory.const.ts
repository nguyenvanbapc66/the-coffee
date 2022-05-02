export const formatPrice = (price: number) => {
  const result = String(price)
    .split('')
    .reverse()
    .reduce((prev, current) => {
      let newString = prev;
      const noDotString = prev.split('').filter((char) => char !== '.');
      if (prev && noDotString.length % 3 === 0 && current !== '.') {
        newString += '.' + current;
        return newString;
      }
      newString += current;
      return newString;
    }, '');
  return result.split('').reverse().join('');
};
