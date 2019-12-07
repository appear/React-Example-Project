import styled, { css } from "styled-components";

const Text = styled.div`
  font-size: ${({ size }) => size || 14}px;

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

    ${({ ellipsis }) => css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;
    `}
`;

export default Text;
