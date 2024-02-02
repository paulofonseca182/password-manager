import Button from './Button';

type FormProps = {
  responsibility: () => void;
};

function Form({ responsibility }: FormProps) {
  const log = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('aqui');
  };

  return (
    <form>
      <div>
        <label htmlFor="nameService-input">Nome do serviço</label>
        <input id="nameService-input" type="text" />
      </div>

      <div>
        <label htmlFor="login-input">Login</label>
        <input id="login-input" type="text" />
      </div>

      <div>
        <label htmlFor="password-input">Senha</label>
        <input id="password-input" type="password" autoComplete="on" />
      </div>

      <div>
        <label htmlFor="url-input">URL</label>
        <input id="url-input" type="text" />
      </div>

      <Button responsibility={ log }>
        Cadastrar
      </Button>

      <Button responsibility={ responsibility }>
        Cancelar
      </Button>
    </form>
  );
}

export default Form;
