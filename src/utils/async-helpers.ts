export const sleep = (ms = 700) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
