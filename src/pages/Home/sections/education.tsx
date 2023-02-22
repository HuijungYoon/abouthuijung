import { css } from "@emotion/react";
import { FadeIn } from "../../../components/common/FadeIn";
import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <div css={Container}>
      <SectionTitle>교육</SectionTitle>
      <FadeIn className="item-container">
        <div className="university font-bold">비트교육학원</div>
        <div className="major font-regular">기본/고급반 - C,C++,C#</div>
        <div className="period font-medium">2017.09 ~ 2018.06</div>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="university font-bold">솔브릿지국제대학</div>
        <div className="major font-regular">
          International Business Management(IBM) 전공 / 학사
        </div>
        <div className="period font-medium">2013.03 ~ 2017.03</div>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="university font-bold">경북전문대학</div>
        <div className="major font-regular">중국통상학과 / 전문학사</div>
        <div className="period font-medium">2008.03 ~ 2012.03</div>
      </FadeIn>
    </div>
  );
};

export default Education;

const Container = css`
  > .item-container {
    display: flex;
    flex-direction: column;
    > .university {
      font-size: 1.8rem;
    }
    > .major {
      margin: 0.2rem 0 0.4rem;
    }
    > .period {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
    }
  }
`;
