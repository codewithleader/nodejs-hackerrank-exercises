// Para resolver este problema, necesitamos comprobar si es posible que ambos canguros estén en la misma ubicación al mismo tiempo. Esto ocurrirá si sus posiciones se igualan después de un cierto número de saltos.

// La idea clave aquí es que, para que los canguros se encuentren en la misma posición después de un salto, la diferencia entre sus posiciones iniciales debe ser divisible por la diferencia entre sus velocidades. Entonces, la solución es bastante simple.

// Aquí está la implementación en TypeScript

export function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {
  // Comprobar si los canguros se están alejando el uno del otro inicialmente
  if ((x2 > x1 && v2 >= v1) || (x1 > x2 && v1 >= v2)) {
    return 'NO';
  }

  // Comprobar si las velocidades permiten que los canguros se encuentren
  if ((x1 - x2) % (v2 - v1) === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// Esta función primero verifica si los canguros se están alejando el uno del otro inicialmente, lo cual es una condición de imposibilidad para que se encuentren. Luego, comprueba si la diferencia entre las posiciones iniciales es divisible por la diferencia entre las velocidades. Si es así, devuelve "YES", de lo contrario, devuelve "NO".
