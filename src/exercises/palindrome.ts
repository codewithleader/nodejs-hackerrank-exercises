export function isPalindrome(str: string) {
  const regExp = /[\W_]/g; // or const regExp = /[^A-Za-z0-9]/g;
  const lowRegStr = str.toLowerCase().replace(regExp, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  const isPalindrome = reverseStr === lowRegStr;
  const message = isPalindrome ? 'is palindrome' : 'is not palindrome';
  console.log(str, message);
  return isPalindrome;
}

export function createPalindrome(str: string) {
  const regExp = /[\W_]/g; // or const regExp = /[^A-Za-z0-9]/g;
  const lowRegStr = str.toLowerCase().replace(regExp, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  const palindrome = reverseStr + lowRegStr;
  console.log(str, '\nCreated palindrome:', palindrome);
  return palindrome;
}
