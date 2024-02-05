import { useState } from 'react';
import Button from './Button';
import validationData from '../utils/validationLogin';

type FormProps = {
  responsibility: () => void;
};

function Form({ responsibility }: FormProps) {
  const log = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('aqui');
  };

  const data = {
    name: '',
    login: '',
    password: '',
    url: '',
  };

  const [dataLogin, setDataLogin] = useState(data);
  const [validBtn, setValidBtn] = useState(true);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    const validation = validationData(dataLogin);
    if (validation) {
      setValidBtn(false);
    } else {
      setValidBtn(true);
    }
  };

  return (
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

      <Button responsibility={ log } validBtn={ validBtn }>
        Cadastrar
      </Button>

      <Button responsibility={ responsibility }>
        Cancelar
      </Button>
    </form>
  );
}

export default Form;
