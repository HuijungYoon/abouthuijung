import React from "react";
import { css } from "@emotion/react";

export function Content({ children }: React.PropsWithChildren<{}>) {
  return <div css={Container}>{children}</div>;
}

const Container = css`
  margin-top: 70px;
  padding: 0 20px;
  @media screen and (max-width: 950px) {
    padding: 0 16px;
  }
`;
