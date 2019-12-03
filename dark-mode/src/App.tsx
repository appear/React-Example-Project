import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './global-styles'
import light from './themes/light'
import dark from './themes/dark'
import { ReactComponent as Sun } from './assets/sun.svg';
import { ReactComponent as Moon } from './assets/moon.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { color: { background } } }) => background};
`

const Button = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  border-radius: 15px;
  
  ${({ theme: { color: { buttonBackground, buttonColor } } }) => `
    background-color: ${buttonBackground};
    color: ${buttonColor};
    border: 1px solid ${buttonColor}
  `};
`

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <Container>
        {isDark ? <Sun /> : <Moon />}
        <Button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
