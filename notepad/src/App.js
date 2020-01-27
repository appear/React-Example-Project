import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ApplicationContextProvider } from "./application-context";

import Container from './container'
import Memos from "./memos";
import Content from "./content";

const AppFrame = styled.div`
  display: flex;
  height: 100vh;
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
