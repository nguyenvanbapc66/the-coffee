export const isNil = (value: any): value is undefined | null =>
  typeof value === 'undefined' || value === null;

export const isEmpty = (value: any): boolean => {
  if (isNil(value)) {
    return true;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  }
  return value.length === 0;
};

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

export const getDataFromStorage = (storageKey: string) => {
  if (typeof window === 'undefined') {
    return null;
  }
  const cachedData = localStorage.getItem('the-coffee-' + storageKey) || '';
  if (isEmpty(cachedData)) {
    return null;
  }
  return JSON.parse(cachedData);
};

export const setDataToStorage = (storageKey: string, data: any) => {
  localStorage.setItem('the-coffee-' + storageKey, JSON.stringify(data));
};
