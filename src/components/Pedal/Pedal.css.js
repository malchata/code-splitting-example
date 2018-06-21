import styled, { css } from "preact-emotion";

export const PedalListItem = styled("li")`
  text-align: center;
  padding: 0 0 .5rem;
  margin: 0 0 .5rem;
  background: #fffbfe;
  box-shadow: .25rem .25rem .5rem rgba(5, 5, 5, .25);

  @media (min-width: 22rem) {
    margin: 0;
  }

  h3 {
    font-weight: 700;
    font-size: 1.319rem;
    line-height: 1.319;
    padding: 0 .5rem;
    margin: 0 0 .5rem;
    color: #050505;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.319;
    padding: 0 .5rem;
    color: #050505;
  }
`;

export const PedalLink = styled("a")`
  display: block;
  text-decoration: none;
`;
