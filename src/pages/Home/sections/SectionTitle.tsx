import React from "react";
import { css } from "@emotion/react";
import { FadeIn } from "../../../components/common/FadeIn";

const SectionTitle = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <FadeIn css={Container} as="h3" className={className}>
        {children}
      </FadeIn>
    </>
  );
};

export default SectionTitle;

const Container = css`
  margin: 4rem 0 1.5rem;
  font-size: 1.5rem;
`;
