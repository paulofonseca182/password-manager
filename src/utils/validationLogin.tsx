type DataProps = {
  name: string;
  login: string;
  password: string;
};

export function validationPassword(senha: string): string {
  // Verifica se a senha está preenchida
  if (!senha) {
    return 'characters';
  }

  // Verifica o comprimento da senha
  if (senha.length < 8 || senha.length > 16) {
    return 'amount characters';
  }

  // Verifica se a senha contém letras e números
  if (!senha.match(/[a-zA-Z]/) || !senha.match(/[0-9]/)) {
    return 'numbers';
  }

  // Verifica se a senha contém algum caractere especial
  if (!senha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    return 'special';
  }

  // Se a senha passou por todas as verificações, é considerada válida
  return 'true';
}

export const validationData = ({ name, login, password }: DataProps): boolean => {
  const nameIsTrue = name.length > 0;
  const loginIsTrue = login.length > 0;
  const passwordIsTrue = validationPassword(password);
  if (nameIsTrue && loginIsTrue && passwordIsTrue === 'true') {
    return nameIsTrue;
  }
  return false;
};
