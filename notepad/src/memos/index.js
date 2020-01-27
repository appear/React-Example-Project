import React from "react";
import styled from "styled-components";

import { useApplicationContext } from "../application-context";

import Memo from "../memo";

const MemosFrame = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
`;

function Memos() {
  const { memos } = useApplicationContext();

  return (
    <MemosFrame>
      {memos.map(memo => (
        <Memo key={memo.id} source={memo} />
      ))}
    </MemosFrame>
  );
}

export default Memos;
