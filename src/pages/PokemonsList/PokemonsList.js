import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import loading from '../../assets/loading.gif';

import PokemonCard from '../../components/PokemonCard';

import { GET_POKEMONS } from '../../store/slices/pokemonSlice';

const PokemonsList = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemonList, error } = useSelector(({ pokemon }) => pokemon);

  const onPressButton = () => {
    dispatch(GET_POKEMONS());
  };

  return (
    <StyledContainer>
      {isLoading && <StyledLoader src={loading} alt='...Loading' />}
      {!pokemonList.length && !isLoading ? (
        <StyledButton onClick={onPressButton}>Carregar Pokemons</StyledButton>
      ) : (
        <PokemonList>
          {pokemonList.map((poke, index) => (
            <PokemonCard id={index + 1} name={poke.name} />
          ))}
        </PokemonList>
      )}
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
`;

const StyledLoader = styled.img`
  width: 40px;
  height: 40px;
  align-self: center;
  margin: auto;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  align-self: center;
  margin: auto;
`;

const StyledErrorText = styled.p`
  align-self: center;
  margin: auto;
  color: red;
`;

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default PokemonsList;
