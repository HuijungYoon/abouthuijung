import React from "react";
import { css } from "@emotion/react";
import { FadeIn } from "../../../components/common/FadeIn/index";

const data = {
  title: "안녕하세요.\n웹 개발자 \n윤희중입니다.",
  descriptions: [
    "기본을 중요하게 생각하고 정확히 알고 쓰려고 노력합니다.",
    "UI,UX 에 관해 끊임 없이 고민합니다.",
    "기록하고 기록을 통해 되돌아봅니다.",
    "물류 회사에서 OMS 유지보수 및 홈페이지 관리를 담당하고있습니다.",
  ],
};

const Profile = () => {
  return (
    <>
      <section css={Container}>
        <FadeIn as="p" className="title font-bold">
          {data.title}
        </FadeIn>
        <FadeIn as="ul" className="descriptions"></FadeIn>
        <FadeIn as="ul" className="descriptions">
          {data.descriptions.map((description, index) => (
            <li key={index}>
              <p className="font-medium">{description}</p>
            </li>
          ))}
        </FadeIn>
      </section>
    </>
  );
};

export default Profile;

const Container = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  > .title {
    font-size: 60px;
    margin: 2em 0 2em;
    /* background: linear-gradient(var(--orange4), var(--orange5)); */
    -webkit-background-clip: text;
    /* color: transparent; */
    white-space: pre-line;
    @media screen and (max-width: 650px) {
      font-size: 35px;
    }
  }
  > .descriptions > li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
