import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { INCREASE_COUNT } from './store/slices/exampleSlice';

const ExampleComponent1 = () => {
  return (
    <DivContainer>
      <p>componente 1</p>
      <ExampleComponent2 />
    </DivContainer>
  );
};

const ExampleComponent2 = () => {
  return (
    <DivContainer>
      <p>componente 2</p>
      <ExampleComponent3 />
    </DivContainer>
  );
};

const ExampleComponent3 = () => {
  const { count } = useSelector(({ example }) => example);
  return (
    <DivContainer>
      <p>componente 3</p>
      <div>count:{count}</div>
    </DivContainer>
  );
};

const ReduxExample = () => {
  const dispatch = useDispatch();
  return (
    <DivContainer style={{ marginTop: '20px', marginLeft: '20px' }}>
      <p>componente pai</p>
      <button onClick={() => dispatch(INCREASE_COUNT())}>aumentar count</button>
      <ExampleComponent1 />
    </DivContainer>
  );
};

export default ReduxExample;

const DivContainer = styled.div`
  min-height: 50px;
  height: auto;
  max-width: 250px;
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid black;
`;
