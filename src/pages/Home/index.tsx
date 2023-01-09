import React from "react";
import { css } from "@emotion/react";
import Profile from "./sections/profile";

const Home = () => {
  return (
    <div css={Container}>
      <Profile />
    </div>
  );
};

export default Home;
const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
