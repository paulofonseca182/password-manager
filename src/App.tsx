import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Button from './components/Button';
import Records from './types/typeRecord';
import RecordsCard from './components/RecordsCard';

function App() {
  const [newRegister, setNewRegister] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [registeredList, setRegisteredList] = useState<Records[]>([]);
  const [passwordRegisteredMsg, setPasswordRegisteredMsg] = useState(true);
  const [passwordRegisteredCard, setPasswordRegisteredCard] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [hideAsteristics, setHideAsteristics] = useState(true);

  const changeRegisterTrue = () => {
    setNewRegister(true);
    setShowButton(false);
  };
  const changeRegisterFalse = () => {
    setNewRegister(false);
    setShowButton(true);
  };

  const addNewRecord = ({ name, login, password, url }: Records) => {
    const newRecord = {
      name,
      login,
      password,
      url,
    };
    setRegisteredList([...registeredList, newRecord]);
    setPasswordRegisteredMsg(false);
    setPasswordRegisteredCard(true);
  };

  const removeRecord = (name: string): void => {
    const newList = registeredList.filter((record) => record.name !== name);
    setRegisteredList(newList);
    if (newList.length === 0) {
      setPasswordRegisteredMsg(true);
    }
  };

  const handleChangeHidePassword = () => {
    if (hidePassword === false) {
      setHidePassword(true);
      setHideAsteristics(false);
    } else {
      setHidePassword(false);
      setHideAsteristics(true);
    }
  };

  return (
    <div className="password-manager">
      <Title />
      {showButton && (
        <Button
          responsibility={ changeRegisterTrue }
          validBtn={ false }
        >
          Cadastrar nova senha
        </Button>
      )}

      {newRegister && (
        <Form
          responsibility={ changeRegisterFalse }
          records={ addNewRecord }
        />)}

      {passwordRegisteredMsg && <p className="no-password">Nenhuma senha cadastrada</p>}

      <form>
        <div className="form-check form-switch case-radio-password">
          <input
            className="form-check-input"
            checked={ hidePassword }
            onClick={ () => handleChangeHidePassword() }
            id="radio-password"
            type="checkbox"
          />
          <label
            className="form-check-label label-password"
            htmlFor="radio-password"
          >
            Esconder senhas
          </label>
        </div>
      </form>
      <div className="case-registered">
        {
          passwordRegisteredCard
          && registeredList.map((record) => (
            <div key={ record.name }>
              <RecordsCard
                record={ record }
                removeRecord={ removeRecord }
                hidePassword={ hidePassword }
                hideAsteristics={ hideAsteristics }
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
