export function birthdayCakeCandles(candles: number[]): number {
  // Primero conseguimos el numero máximo
  let max = Math.max(...candles); // si existen varios iguales solo toma uno

  // Ahora vamos a recorrer el array candles para saber cuantos max hay
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }
  console.log(count);
  // Retornamos la cantidad de numeros máximos
  return count;
}
