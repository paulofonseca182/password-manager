import { useState } from 'react';
import Button from './Button';
import { validationData } from '../utils/validationLogin';
import Records from '../types/typeRecord';

type FormProps = {
  responsibility: () => void;
  records: ({ name, login, password, url } : Records) => void;
};

function Form({
  responsibility,
  records,
}: FormProps) {
  const data = {
    name: '',
    login: '',
    password: '',
    url: '',
  };

  const passwordCheck = 'valid-password-check';
  const passwordInvalid = 'invalid-password-check';
  const [dataLogin, setDataLogin] = useState(data);
  const [validBtn, setValidBtn] = useState(true);
  const [characters, setCharacters] = useState(passwordInvalid);
  const [amountCharacters, setAmountCharacters] = useState(passwordInvalid);
  const [numbers, setNumbers] = useState(passwordInvalid);
  const [special, setSpecial] = useState(passwordInvalid);

  const changeClassCharacter = () => {
    if (dataLogin.password.length > 7) {
      setCharacters(passwordCheck);
    } else {
      setCharacters(passwordInvalid);
    }
  };

  const changeClassAmountCharacter = () => {
    if (dataLogin.password.length > 0 && dataLogin.password.length <= 15) {
      setAmountCharacters(passwordCheck);
    } else {
      setAmountCharacters(passwordInvalid);
    }
  };

  const changeClassNumbers = () => {
    if (dataLogin.password.match(/[a-zA-Z]/) && dataLogin.password.match(/[0-9]/)) {
      setNumbers(passwordCheck);
    } else {
      setNumbers(passwordInvalid);
    }
  };

  const changeClassSpecial = () => {
    if (dataLogin.password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      setSpecial(passwordCheck);
    } else {
      setSpecial(passwordInvalid);
    }
  };

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    changeClassCharacter();
    changeClassAmountCharacter();
    changeClassNumbers();
    changeClassSpecial();
    const validation = validationData(dataLogin);
    if (validation) {
      setValidBtn(false);
    } else {
      setValidBtn(true);
    }
  };

  const registeredPassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    records(dataLogin);

    responsibility();
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="nameService-input">Nome do serviço</label>
          <input
            onChange={ (e) => handleChangeData(e) }
            name="name"
            value={ dataLogin.name }
            id="nameService-input"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="login-input">Login</label>
          <input
            onChange={ (e) => handleChangeData(e) }
            value={ dataLogin.login }
            name="login"
            id="login-input"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="password-input">Senha</label>
          <input
            onChange={ (e) => handleChangeData(e) }
            name="password"
            value={ dataLogin.password }
            id="password-input"
            type="password"
            autoComplete="on"
          />
        </div>

        <div>
          <label htmlFor="url-input">URL</label>
          <input
            onChange={ (e) => handleChangeData(e) }
            name="url"
            value={ dataLogin.url }
            id="url-input"
            type="text"
          />
        </div>

        <div>
          <Button responsibility={ (e) => registeredPassword(e) } validBtn={ validBtn }>
            Cadastrar
          </Button>

          <Button responsibility={ responsibility }>
            Cancelar
          </Button>
        </div>
      </form>

      {validBtn && (
        <div>
          <p className={ characters }>Possuir 8 ou mais caracteres</p>
          <p className={ amountCharacters }>Possuir até 16 caracteres</p>
          <p className={ numbers }>Possuir letras e números</p>
          <p className={ special }>Possuir algum caractere especial</p>
        </div>)}
    </>
  );
}

export default Form;
