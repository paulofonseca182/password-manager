import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  const [newRegister, setNewRegister] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const changeRegisterTrue = () => {
    setNewRegister(true);
    setShowButton(false);
  };
  const changeRegisterFalse = () => {
    setNewRegister(false);
    setShowButton(true);
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

      {newRegister && <Form responsibility={ changeRegisterFalse } />}

    </div>
  );
}

export default App;
