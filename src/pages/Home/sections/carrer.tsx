import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "../../../components/common/FadeIn";
import LinkButton from "./LinkButton";
import Test from "../../Carrer/index";
const Carrer = () => {
  return (
    <div css={Container}>
      <Test />
      <SectionTitle>경력 기술</SectionTitle>
      <FadeIn className="item-container">
        <div className="company font-bold">아임유어박스</div>
        <div className="role font-regular">프론트엔드 엔지니어</div>
        <div className="role font-medium">2021.10 ~ 현재</div>
        <ul className="buttons">
          <li>
            <LinkButton to="/carrer/imyourbox">자세히보기</LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="company font-bold">에이티엔</div>
        <div className="role font-regular">프론트엔드 엔지니어</div>
        <div className="role font-medium">2019.07 ~ 2021.10</div>
        <ul className="buttons">
          <li>
            <LinkButton to="/carrer/ATN">자세히보기</LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="company font-bold">인텍플러스</div>
        <div className="role font-regular">반도체기계제어과</div>
        <div className="role font-medium">2018.10 ~ 2019.02</div>
        <ul className="buttons">
          <li>
            <LinkButton to="/carrer/intekpls">자세히보기</LinkButton>
          </li>
        </ul>
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

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
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
    .buttons {
      display: flex;
      > li {
        padding: 0;
        font-size: 0.85rem;
        &::before {
          display: none;
        }
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
