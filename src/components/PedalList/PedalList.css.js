import styled, { css } from "preact-emotion";

export const PedalList = styled("ul")`
  width: 100%;
  max-width: 64rem;

  @media (min-width: 22rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;
  }

  @media (min-width: 32rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
