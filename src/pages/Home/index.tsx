import React from "react";
import { css } from "@emotion/react";
import Profile from "./sections/profile";
import Skill from "./sections/skill";

const Home = () => {
  return (
    <div css={Container}>
      <Profile />
      <Skill />
    </div>
  );
};

export default Home;
const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
