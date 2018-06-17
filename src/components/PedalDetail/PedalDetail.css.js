import styled, { css } from "preact-emotion";

export const PedalHeading = styled("div")`
  display: flex;
  align-items: baseline;
  margin: 0 0 1rem;
`;

export const BackLink = styled("a")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  min-width: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem 0 0;
  font-size: 1.25rem;
  line-height: 1;
  background: #016fb9;
  color: #fffbfe;
  text-decoration: none;
  vertical-align: middle;
  box-shadow: .125rem .125rem .5rem rgba(5, 5, 5, .25);
`;

export const PedalName = styled("h1")`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.319;
  vertical-align: middle;
  display: inline-block;
`;

export const PedalInfo = styled("section")`
  padding-left: 3.5rem;
`;

export const PedalImageContainer = styled("div")`
  position: relative;
  display: inline-block;
  margin: 0 0 1rem;
`;

export const PedalImage = styled("img")`
  position: relative;
  z-index: 1;
  box-shadow: .25rem .25rem .5rem rgba(5, 5, 5, .25);
`;

export const ToggleFavorite = styled("button")`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fffbfe;
  line-height: 1;
  cursor: pointer;
  font-size: 1.5rem;
  bottom: .5rem;
  right: .5rem;
  position: absolute;
  z-index: 2;
  background: #016fb9;
  box-shadow: .125rem .125rem .5rem rgba(5, 5, 5, .25);
  border: 0;
`;

export const PedalInfoHeading = styled("h2")`
  font-size: 1.1372251706rem;
  line-height: 1.618;
  font-weight: 600;
  margin: 0 0 .5rem;
`

export const PedalCopy = styled("p")`
  line-height: 1.618;
  margin: 0 0 .5rem;
`;

export const PedalVideo = styled("iframe")`
  max-width: 100%;
  border: 0;
`;
