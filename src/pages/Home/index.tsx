import React from "react";
import { css } from "@emotion/react";
import Profile from "./sections/profile";
import Skill from "./sections/skill";
import Carrer from "./sections/carrer";

const Home = () => {
  return (
    <div css={Container}>
      <Profile />
      <Skill />
      <Carrer />
    </div>
  );
};

export default Home;
const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
