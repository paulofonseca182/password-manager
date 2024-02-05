type DataProps = {
  name: string;
  login: string;
  password: string;
};

function validationPassword(senha: string): boolean | string {
  // Verifica se a senha está preenchida
  if (!senha) {
    return 'A senha deve estar preenchida.';
  }

  // Verifica o comprimento da senha
  if (senha.length < 8 || senha.length > 16) {
    return 'Possuir 8 ou mais caracteres';
  }

  // Verifica se a senha contém letras e números
  if (!senha.match(/[a-zA-Z]/) || !senha.match(/[0-9]/)) {
    return 'A senha deve conter letras e números.';
  }

  // Verifica se a senha contém algum caractere especial
  if (!senha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    return 'A senha deve conter pelo menos um caractere especial.';
  }

  // Se a senha passou por todas as verificações, é considerada válida
  return true;
}

const validationData = ({ name, login, password }: DataProps): boolean => {
  const nameIsTrue = name.length > 0;
  const loginIsTrue = login.length > 0;
  const passwordIsTrue = validationPassword(password);
  if (nameIsTrue && loginIsTrue && passwordIsTrue === true) {
    return nameIsTrue;
  }
  return false;
};

export default validationData;
