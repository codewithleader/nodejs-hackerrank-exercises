function getTotalX(a: number[], b: number[]): number {
  // Encontrar los factores comunes entre todos los elementos de b
  const commonFactors = findCommonFactors(b);

  // Contar cuántos de estos factores son divisibles por todos los elementos de a
  const count = commonFactors.filter((factor) =>
    isFactorOfArray(factor, a, b)
  ).length;

  return count;
}

// Función para encontrar los factores comunes entre todos los elementos del array b
function findCommonFactors(arr: number[]): number[] {
  let factors: number[] = [];
  let maxNum = Math.max(...arr);

  for (let i = 1; i <= maxNum; i++) {
    if (arr.every((num) => num % i === 0)) {
      factors.push(i);
    }
  }

  return factors;
}

// Función para verificar si un número es un factor común de todos los elementos de a y b
function isFactorOfArray(num: number, arrA: number[], arrB: number[]): boolean {
  return (
    arrA.every((element) => num % element === 0) &&
    arrB.every((element) => element % num === 0)
  );
}

// Ejemplo de uso
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3
