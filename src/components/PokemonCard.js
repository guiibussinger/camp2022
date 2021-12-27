import styled from "styled-components";

const PokemonCard = ({ id, name }) => (
  <Container>
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt={id}
    />
    <Title>{name}</Title>
  </Container>
);

const Container = styled.div`
  height: 180px;
  width: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img``;

const Title = styled.p`
  color: white;
  text-transform: capitalize;
`;

export default PokemonCard;
