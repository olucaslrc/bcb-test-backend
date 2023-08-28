function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  let digit1 = remainder === 10 ? 0 : remainder;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  let digit2 = remainder === 10 ? 0 : remainder;

  if (
    digit1.toString() === cpf.charAt(9) &&
    digit2.toString() === cpf.charAt(10)
  ) {
    return true;
  } else {
    return false;
  }
}

function extractNumbers(cpf: string): string {
  return cpf.replace(/\D/g, '');
}

const cpfWithPontuation = '123.456.789-09';
const cpfWithoutPontuation = extractNumbers(cpfWithPontuation);
const isValid = validateCPF(cpfWithoutPontuation);

console.log(`CPF com pontuação: ${cpfWithPontuation}`);
console.log(`CPF sem pontuação: ${cpfWithoutPontuation}`);
console.log(`O CPF ${cpfWithPontuation} é ${isValid ? 'válido' : 'inválido'}.`);
