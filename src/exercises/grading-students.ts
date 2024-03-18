export function gradingStudents(grades: number[]) {
  return grades.map((grade) => {
    // Si la nota es menor que 38, no se modifica.
    if (grade < 38) {
      return grade;
    }

    // Calcular la diferencia con el próximo múltiplo de 5.
    const difference = 5 - (grade % 5);

    // Si la diferencia es menor que 3, se redondea la nota.
    if (difference < 3) {
      return grade + difference;
    }

    // Si la diferencia es 3 o más, se mantiene la nota original.
    return grade;
  });
}
