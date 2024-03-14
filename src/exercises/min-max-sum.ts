export function minMaxSum(arr: number[]): void {
  // Ordernar array de menor a mayor con .sort((a, b) => a - b);
  arr.sort((a, b) => {
    return a - b // "a - b" está calculando la diferencia entre a y b. Si el resultado es negativo, significa que a es menor que b, por lo que a debe estar antes en el orden. Si el resultado es positivo, significa que b es menor que a, por lo que b debe estar antes en el orden. Si el resultado es cero, significa que a y b son iguales en términos de orden.
  });
  const minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
  const maxSum = arr.slice(1).reduce((acc, num) => acc + num, 0);
  console.log(minSum, maxSum);
}