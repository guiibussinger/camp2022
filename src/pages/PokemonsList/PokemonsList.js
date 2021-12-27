import { useState } from "react";
import styled from "styled-components";

import api from "../../services/api";

import loading from "../../assets/loading.gif";

const PokemonsList = () => {
  const [isLoading, setIsloading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  const onPressButton = () => {
    setIsloading(true);

    api
      .get("/pokemon?limit=1000")
      .then((response) => {
        const {
          data: { results },
        } = response;
        console.log(response);
        setPokemons(results);
        setIsloading(false);
      })
      .catch((error) => {
        setError(error);
        setIsloading(false);
      });
  };

  return (
    <StyledContainer>
      {isLoading && <StyledLoader src={loading} alt="...Loading" />}
      {!pokemons.length && !isLoading ? (
        <StyledButton onClick={onPressButton}>Carregar Pokemons</StyledButton>
      ) : null}
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

export default PokemonsList;
