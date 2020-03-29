# 3분 Styled-Components

## 1. Styled Component

Styled-Component 는 스타일을 가진 컴포넌트를 만들 수 있도록 도와주는 CSS-in-JS 라이브러리 입니다.

컴포넌트 선언법은 아래와 같습니다.

```js
import styled from "styled-components";

styled.<HTML_ELEMENT>``

// margin 10px 을 가진 div

const ContainerMargin10 = styled.div`
  margin: 10px;
`;
```

## 2. 유동적인 스타일을 가진 컴포넌트

유동적인 스타일 Prop 을 가진 컴포넌트를 만들어서 사용할 수 있습니다.

```js
const ContainerMarginPadding = styled.div`
  // margin 이 있을 때만 스타일 적용
  ${({ margin }) =>
    margin &&
    `
        margin: ${margin};
    `}
  
  // padding 이 있을 때만 스타일 적용
  ${({ padding }) =>
    padding &&
    `
        padding: ${padding};
    `}
`;

<ContainerMarginPadding margin="10px">
  margin 10px을 가진 컨테이너
</ContainerMarginPadding>;

<ContainerMarginPadding padding="10px">
  padding 10px을 가진 컨테이너
</ContainerMarginPadding>;
```

## 3. 스타일 상속

Styled-Component 로 만들어진 컴포넌트들은 스타일 상속이 가능합니다.

```js
const MarginContainer = styled.div`
  margin: 10px;
`;

const MergedContainer = styled(MarginContainer)`
  padding: 10px;
`;

<MergedContainer>Margin 10px 을 상속받은 컨테이너</MergedContainer>;
```

## 4. as 를 이용한 Element Tag 변경

as Props 를 이용하면 Element Tag 변경이 가능합니다.

```js
const Container = styled.div``;

<Container as="a">div 지만 as 를 이용하여 a tag 로 변경</Container>;
```

## 5. Mixin 을 사용하여 스타일 정의하기

Mixin 을 이용하면 중복되는 스타일을 줄일 수 있습니다.

Container 와 Section 모두 Margin 값이 필요합니다.
아래처럼 같은 코드를 정의해주는 것보다는 Mixin 을 활용하여 코드를 줄이는 것이 좋습니다.

```js
/*
 * Mixin 적용전
 */
const Container = styled.div`
  ${({ margin }) =>
    margin &&
    `
        margin: ${margin};
    `}
`;

const Section = styled.div`
  ${({ margin }) =>
    margin &&
    `
        margin: ${margin};
    `}
`;

/*
 * Mixin 적용
 */

import styled, { css } from "styled-components";

const margin = css`
  ${({ margin }) => margin && `margin: ${margin};`}
`;

const MixinMarginContainer = styled.div`
  ${margin}
`;

const MixinMarginSection = styled.div`
  ${margin}
`;

<MixinMarginContainer margin="10px">
  Mixin 을 사용하여 margin 을 정의한 Container
</MixinMarginContainer>
<MixinMarginSection margin="10px">
  Mixin 을 사용하여 margin 을 정의한 Section
</MixinMarginSection>
```

## 6. createGlobalStyle 을 이용한 전역 스타일

createGlobalStyle 을 이용하면 글로벌하게 스타일을 적용 할 수 있습니다.
reset css 스타일을 적용 할 때 유용하게 이용 할 수 있습니다.

```js
import styled, { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
 }
`;

<ResetStyle />;
```

## 7. 내부에 속한 특정 컴포넌트 스타일

Styled-Component 내부의 특정 컴포넌트를 명시하여 스타일을 추가 할 수 있습니다.

```js
const InnerContainer = styled.div``;

const OutterContainer = styled.div`
  ${InnerContainer} {
    margin: 10px;
  }
`;

<OutterContainer>
  <InnerContainer>
    OutterContainer 에서 정의한 margin 을 가진 Inner Container
  </InnerContainer>
</OutterContainer>;
```

## 8. 타입스크립트 환경에서 Styled-Component 사용하기

타입스크립트에서는 style prop 을 정의하면 해당 prop 의 type 을 정의해주어야합니다.

```js
// margin 은 없을 수도 있기 때문에 필수 값으로 주면 안됩니다.
const Container = styled.div<{ margin?: string }>`
  ${({ margin }) => margin && `margin: ${margin};`}
`;

// 아래와 같은 타이핑은 불가합니다.
const Container = styled.div`
  ${({ margin }: { margin?: string }) => margin && `margin: ${margin};`}
  ${({ padding }: { padding?: string }) => padding && `padding: ${padding};`}
`;
```
