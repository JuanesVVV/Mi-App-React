import { useState } from 'react';
import Button from './Button';

const Contador = () => {
  const [numeros, setNumeros] = useState([]);
  const [resultado, setResultado] = useState(null);

  const inputNumber = (num) => {
    if (numeros.length < 2) {
      setNumeros([...numeros, num]);
    }
  };

  const sumar = () => {
    if (numeros.length === 2) {
      setResultado(numeros[0] + numeros[1]);
      setNumeros([]);
    }
  };

  const restar = () => {
    if (numeros.length === 2) {
      setResultado(numeros[0] - numeros[1]);
      setNumeros([]);
    }
  };

  const limpiar = () => {
    setNumeros([]);
    setResultado(null);
  };

  return (
    <div className="calculadora-container">
      <label className="calculadora-display">
        {numeros.length === 0 && resultado === null && 'Selecciona dos números'}
        {numeros.length === 1 && `Primer número: ${numeros[0]}`}
        {numeros.length === 2 && `Segundo número: ${numeros[1]}`}
        {resultado !== null && `Resultado: ${resultado}`}
      </label>

      <div className="calculadora-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Button key={num} onClick={() => inputNumber(num)}>
            {num}
          </Button>
        ))}
        <Button onClick={sumar}>+</Button>
        <Button onClick={restar}>−</Button>
        <Button onClick={limpiar}>C</Button>
      </div>
    </div>
  );
};

export default Contador;