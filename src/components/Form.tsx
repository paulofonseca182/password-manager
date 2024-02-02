import Button from './Button';

function Form() {
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
        <input id="password-input" type="password" />
      </div>

      <div>
        <label htmlFor="url-input">URL</label>
        <input id="url-input" type="text" />
      </div>

      <Button>
        Cadastrar
      </Button>

      <Button>
        Cancelar
      </Button>
    </form>
  );
}

export default Form;
