import styled, { css } from "preact-emotion";

export const SearchLabel = styled("label")`
  display: block;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 1rem;
  color: #016fb9;
  font-size: 2rem;

  @media (min-width: 32rem) {
    font-size: 2.5rem;
  }

  @media (min-width: 64rem) {
    font-size: 3rem;
  }
`;

export const SearchInputContainer = styled("fieldset")`
  position: relative;
`;

export const SearchInput = styled("input")`
  display: block;
  width: 100%;
  height: 3rem;
  border: 2px solid #ff9505;
  color: #016fb9;
  font-size: 1.25rem;
  text-align: left;
  padding: 1rem 4rem 1rem 1rem;
  margin: 0 0 1rem;
  transition: 333ms opacity ease-out;
  outline-color: #ff9505;
  background: #fffbfe;

  @media (min-width: 32rem) {
    font-size: 1.5rem;
    height: 4rem;
    padding-right: 5rem;
  }
`;

export const SearchSubmit = styled("input")`
  display: block;
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: 0;
  top: 0;
  cursor: pointer;
  background: #ff9505;
  color: #f5f5f5;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  outline-color: #ff9505;

  @media (min-width: 32rem) {
    height: 4rem;
    width: 4rem;
    font-size: 1.25rem;
  }
`;

export const Sort = styled("div")`
  text-align: right;
`;

export const SortContainer = styled("div")`
  display: inline-block;
  margin: 0 0 1rem 1rem;
  vertical-align: baseline;
`;

export const SortLabel = styled("label")`
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  display: inline-block;
  vertical-align: middle;
  color: #016fb9;
  margin: 0 .5rem 0 0;
`;

export const SortSelectContainer = styled("div")`
  display: inline-block;
  cursor: pointer;
  position: relative;
  background: #016fb9;
  display: inline-block;
  vertical-align: middle;
  padding: 0 .5rem 0 0;

  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 25.875px;
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAzNC41Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y1ZjVmNTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnNlbGVjdC1hcnJvdzwvdGl0bGU+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMTYgMTYgMTYgOCAwIDAgMTYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTYgMTguNSAwIDE4LjUgOCAzNC41IDE2IDE4LjUiLz48L3N2Zz4=) no-repeat;
    pointer-events: none;
  }
`;

export const SortSelect = styled("select")`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #f5f5f5;
  background: transparent;
  padding: .75rem;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const Separator = styled("hr")`
  margin: 0 0 1rem;
  background: #016fb9;
  height: .125rem;
  border: 0;
`;
