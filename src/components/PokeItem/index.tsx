import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
};

const PokeItem: FC<Props> = ({ name }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Wrapper>
      {/* <Index>1</Index> */}
      <Detail>
        <ImageWrapper>
          <img
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
            alt={`${name}`}
          />
        </ImageWrapper>
        <Name>{displayName}</Name>
      </Detail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: 2.5rem auto; */
  gap: 0.5rem;
  /* max-width: 16rem; */
  padding: 0.7rem;
  /* background-blend-mode: overlay; */
  /* mix-blend-mode: normal; */
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(34, 79, 169, 0.3);
  align-items: flex-end;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    opacity: 0.7;
    box-shadow: inset 0 0 0 0.5px rgba(68, 66, 178, 0.2);
  }
`;

const Index = styled.div`
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(68, 66, 178, 0.1);
  background-blend-mode: overlay;
  border-radius: 50%;
  place-items: center;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const Detail = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  /* width: 10rem; */
  /* height: 10rem; */
  border-radius: 0.5rem;
  overflow: hidden;
  justify-self: center;
  padding: 0.7rem;
  /* background-color: #fff; */

  img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`;

const Name = styled.p`
  /* max-width: 12rem; */
  font-weight: 500;
  line-height: 1.2rem;
  justify-self: center;
  font-weight: 700;
  /* color: #3913b8; */
`;

export default PokeItem;
