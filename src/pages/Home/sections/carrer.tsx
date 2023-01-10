import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "../../../components/common/FadeIn";
const Carrer = () => {
  return (
    <div css={Container}>
      <SectionTitle>경력 기술</SectionTitle>
      <FadeIn className="item-container">
        <div className="company font-bold">아임유어박스</div>
        <div className="role font-regular">프론트엔드 엔지니어</div>
        <div className="role font-medium">2021.10 ~ 현재</div>
      </FadeIn>
    </div>
  );
};

export default Carrer;

const Container = css`
  display: flex;
  flex-direction: column;

  > .item-container {
    display: flex;
    flex-direction: column;

    > .company {
      font-size: 1.8rem;
    }
    > .role {
      margin: 0.2rem 0 0.4rem;
    }
    > .period {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
    }
  }
`;
