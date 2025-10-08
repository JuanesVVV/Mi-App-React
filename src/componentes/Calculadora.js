import React, { useState } from 'react';
import Button from './Button';

const Calculadora = () => {
  const [contador, setContador] = useState('');

  const InputNumber = (value) => {
    setContador((prev) => prev + value);
  };

  const calcularResultado = () => {
    try {
      setContador(eval(contador).toString()); 
    } catch {
      setContador('Error');
    }
  };

  const limpiar = () => {
    setContador('');
  };

  return (
    <div>
      <h2>{contador || '0'}</h2>

      <div>
        
        <Button onClick={() => InputNumber('1')}>1</Button>
        <Button onClick={() => InputNumber('2')}>2</Button>
        <Button onClick={() => InputNumber('3')}>3</Button>
        <Button onClick={() => InputNumber('4')}>4</Button>
        <Button onClick={() => InputNumber('5')}>5</Button>
        <Button onClick={() => InputNumber('6')}>6</Button>
        <Button onClick={() => InputNumber('7')}>7</Button>
        <Button onClick={() => InputNumber('8')}>8</Button>
        <Button onClick={() => InputNumber('9')}>9</Button>
        <Button onClick={() => InputNumber('0')}>0</Button>

        
        <Button onClick={() => InputNumber('+')}>+</Button>
        <Button onClick={() => InputNumber('-')}>−</Button>
        <Button onClick={() => InputNumber('*')}>×</Button>
        <Button onClick={() => InputNumber('/')}>÷</Button>

        
        <Button onClick={limpiar}>C</Button>
        <Button onClick={calcularResultado}>=</Button>
      </div>
    </div>
  );
};

export default Calculadora;