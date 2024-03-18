export function timeConversion(s: string): string {
  // Write your code here
  const hh = s.split(':')[0];
  const mmss = s.slice(3, -2);
  const isAM = s.slice(-2).toUpperCase() === 'AM';

  if (hh === '12' && isAM) {
    console.log(`00:${mmss}`);
    return `00:${mmss}`;
  } else if ((hh !== '12' && isAM) || (hh === '12' && !isAM)) {
    console.log(s.slice(0, -2));
    return s.slice(0, -2);
  } else {
    // hh !== '12' && !isAM
    console.log(`${Number(hh) + 12}:${mmss}`);
    return `${Number(hh) + 12}:${mmss}`;
  }
}
