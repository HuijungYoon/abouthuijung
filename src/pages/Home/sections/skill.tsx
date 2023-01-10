import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "./SectionTitle";
import { FadeIn } from "../../../components/common/FadeIn";
import { colors } from "../../../lib/palette";

const Skill = () => {
  return (
    <>
      <section css={Container}>
        <SectionTitle>기술 및 역량</SectionTitle>
        <ul>
          <FadeIn as={"li"}>
            <p className="font-regular">
              Javascript ES6+ 와
              <span className="font-medium" css={Highlight}>
                {" "}
                TypeScript
              </span>{" "}
              에 익숙합니다.{" "}
              <span className="font-medium" css={Highlight}>
                타입추론
              </span>{" "}
              을 적극활용하여
              <span className="font-medium" css={Highlight}>
                의도
              </span>
              를 다른개발자들에게 명시적으로 알려줍니다.
            </p>
          </FadeIn>
          <FadeIn as={"li"}>
            <p className="font-regular">
              Next.js를 사용해서 SSR 기반 프론트앤드 개발에 익숙합니다.
            </p>
          </FadeIn>
          <FadeIn as={"li"}>
            <p className="font-regular">
              <span className="font-medium" css={Highlight}>
                {" "}
                Webpack{" "}
              </span>{" "}
              을 사용해서 Javascript 번들 사이즈를 크게 줄인 경험이있습니다.
            </p>
          </FadeIn>
          <FadeIn as={"li"}>
            <p className="font-regular">
              <span className="font-medium" css={Highlight}>
                GitAction
              </span>{" "}
              을 통해서 형상관리(CI/CD)를 하였습니다.
            </p>
          </FadeIn>
        </ul>
      </section>
    </>
  );
};

export default Skill;

const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  > ul > li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const Highlight = css`
  color: ${colors.orange[4]};
`;
