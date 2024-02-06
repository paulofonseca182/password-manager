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
  console.log(registeredList.length);

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

  return (
    <div>
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
        <Form responsibility={ changeRegisterFalse } records={ addNewRecord } />)}

      {passwordRegisteredMsg && <p>Nenhuma senha cadastrada</p>}

      {
        passwordRegisteredCard
        && registeredList.map((record) => (
          <div key={ record.name }>
            <RecordsCard
              record={ record }
              removeRecord={ removeRecord }
            />
          </div>
        ))
      }

    </div>
  );
}

export default App;
