import React from "react";
import styled from "styled-components";

import Text from "../text";

const MemoFrame = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

function Memo({ source: { title, content } }) {
  return (
    <MemoFrame>
      <Text size={16} lineHeight={1.53} bold>
        {title}
      </Text>
      <Text size={15} lineHeight={1.53} ellipsis={2}>
        {content}
      </Text>
    </MemoFrame>
  );
}

export default Memo;
