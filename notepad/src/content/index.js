import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../application-context";

import Text from "../text";
import Container from "../container";

const Button = styled.button`
  padding: 5px 15px;
  color: ${({ active }) => (active ? "#fff" : "#368fff")};
  background: ${({ active }) => (active ? "#368fff" : "#fff")};
  border: 1px solid #368fff;
  border-radius: 2px;
  font-size: 13px;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

function Content() {
  const { memo } = useApplicationContext();
  const [editMemo] = useState({
    title: "",
    content: "",
    isEditing: false
  });

  const { title, content } = memo;
  const { isEditing } = editMemo;

  return (
    <Container padding={{ top: 10, right: 10, bottom: 10, left: 10 }}>
      <Container display="flex" justify="flex-end">
        {memo && !isEditing && <Button active>수정</Button>}
        {memo && isEditing && (
          <>
            <Button>취소</Button>
            <Button active>수정</Button>
          </>
        )}
        {!isEditing && <Button>새 글 작성</Button>}
      </Container>
      <Container margin={{ bottom: 20 }}>
        <Text size={27} bold>
          {title}
        </Text>
      </Container>
      <Text size={16}>{content}</Text>
    </Container>
  );
}

export default Content;
