import React, { useState } from 'react';
import styled from 'styled-components';

const ExampleComponent1 = ({ count }) => {
  return (
    <DivContainer>
      <p>componente 1</p>
      <ExampleComponent2 count={count} />
    </DivContainer>
  );
};

const ExampleComponent2 = ({ count }) => {
  return (
    <DivContainer>
      <p>componente 2</p>
      <ExampleComponent3 count={count} />
    </DivContainer>
  );
};

const ExampleComponent3 = ({ count }) => {
  return (
    <DivContainer>
      <p>componente 3</p>
      <div>count:{count}</div>
    </DivContainer>
  );
};

const NonReduxExample = () => {
  const [count, setCount] = useState(0);
  return (
    <DivContainer style={{ marginTop: '20px', marginLeft: '20px' }}>
      <p>componente pai</p>
      <button onClick={() => setCount(prev => prev + 1)}>aumentar count</button>
      <ExampleComponent1 count={count} />
    </DivContainer>
  );
};

export default NonReduxExample;

const DivContainer = styled.div`
  min-height: 50px;
  height: auto;
  max-width: 250px;
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid black;
`;
