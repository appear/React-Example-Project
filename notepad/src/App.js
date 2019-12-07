import React from "react";
import styled, { css } from "styled-components";

import { ApplicationContextProvider } from "./application-context";

import Memos from "./memos";
import Content from "./content";

const AppFrame = styled.div`
  display: flex;
  height: 100vh;
`;

const Container = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex: ${flex};
    `}
`;

function App() {
  return (
    <ApplicationContextProvider>
      <AppFrame>
        <Container flex={1}>
          <Memos />
        </Container>
        <Container flex={2}>
          <Content />
        </Container>
      </AppFrame>
    </ApplicationContextProvider>
  );
}

export default App;
