import styled from "styled-components";

export default styled.div<{ wide?: boolean }>`
  max-width: ${({ wide }) => (wide ? 95 : 68)}rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (min-width: 64rem) {
    padding: 0 5rem;
  }
`;
