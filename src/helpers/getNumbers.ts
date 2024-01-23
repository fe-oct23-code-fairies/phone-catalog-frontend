type GetNumbersType = (from: number, to: number) => number[];

export const getNumbers:GetNumbersType = (from, to) => {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
};
