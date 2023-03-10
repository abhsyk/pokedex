import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokeItem from './components/PokeItem';
import { GlobalStyle } from './styles';

function App() {
  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      const data = await response.json();
      setPokemon(data.results);
    };
    loadPokemon();
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <PokeWrapper>
        <Title>Pokemon</Title>
        <Description>
          Nam massa enim, sodales commodo euismod id, dictum sed magna.
        </Description>
        <Grid>
          {pokemon
            ? pokemon.map((item) => (
                <PokeItem key={item.name} name={item.name} />
              ))
            : null}
        </Grid>
      </PokeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #060047 13.57%, #b3005e 98.38%);
`;

const PokeWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 0.8rem;
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.8rem;
`;

const Title = styled.h1`
  line-height: 130%;
  text-transform: uppercase;
  color: #fff;
`;

const Description = styled.p`
  color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  gap: 0.75rem;
  width: 100%;
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 50px 100px rgba(34, 79, 169, 0.3);
  margin: 0 auto;
  backdrop-filter: blur(40px);
  border-radius: 1rem;
  justify-content: center;
`;

export default App;
