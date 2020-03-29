import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";

/**
 * 기본 선언법
 */

const Container = styled.div``;

/**
 * margin 10px 을 가진 div
 */

const ContainerMargin10 = styled.div`
  margin: 10px;
`;

/**
 * margin 또는 padding 이 있을때 해당 스타일을 적용한다.
 */
const ContainerMarginPadding = styled.div`
  ${({ margin }) =>
    margin &&
    `
        margin: ${margin};
    `}

  ${({ padding }) =>
    padding &&
    `
        padding: ${padding};
    `}
`;

/**
 * margin 10px 을 가진 div 의 스타일을 상속 받습니다.
 */
const MarginContainer = styled.div`
  margin: 10px;
`;

const MergedContainer = styled(MarginContainer)`
  padding: 10px;
`;

/**
 * Margin Mixin
 */

const margin = css`
  ${({ margin }) => margin && `margin: ${margin};`}
`;

const MixinMarginContainer = styled.div`
  ${margin}
`;

const MixinMarginSection = styled.div`
  ${margin}
`;

/**
 * Global Style
 */

const ResetStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
 }
`;

/**
 * 내부의 특정 컴포넌트 스타일
 */

const InnerContainer = styled.div``;

const OutterContainer = styled.div`
  ${InnerContainer} {
    margin: 10px;
  }
`;

function App() {
  return (
    <div>
      <ResetStyle />
      <ContainerMargin10>Margin 10px 을 가진 컴포넌트</ContainerMargin10>
      <ContainerMarginPadding margin="10px">
        margin 10px을 가진 컨테이너
      </ContainerMarginPadding>
      <ContainerMarginPadding padding="10px">
        padding 10px을 가진 컨테이너
      </ContainerMarginPadding>
      <MergedContainer>Margin 10px 을 상속받은 컨테이너</MergedContainer>
      <Container as="a">div 지만 as 를 이용하여 a tag 로 변경</Container>
      <MixinMarginContainer margin="10px">
        Mixin 을 사용하여 margin 을 정의한 Container
      </MixinMarginContainer>
      <MixinMarginSection margin="10px">
        Mixin 을 사용하여 margin 을 정의한 Section
      </MixinMarginSection>

      <OutterContainer>
        <InnerContainer>
          OutterContainer 에서 정의한 margin 을 가진 Inner Container
        </InnerContainer>
      </OutterContainer>
    </div>
  );
}

export default App;
