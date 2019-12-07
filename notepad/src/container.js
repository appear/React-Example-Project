import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;

  

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin-top: ${margin.top}px;
      margin-right: ${margin.right}px;
      margin-bottom: ${margin.bottom}px;
      margin-left: ${margin.left}px;
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding-top: ${padding.top}px;
      padding-right: ${padding.right}px;
      padding-bottom: ${padding.bottom}px;
      padding-left: ${padding.left}px;
    `};

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
`;

export default Container;
