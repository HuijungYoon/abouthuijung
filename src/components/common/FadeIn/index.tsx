import React from "react";
import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { ReactComponentElement } from "react";
import { useMemo } from "react";

type FadeInProps = {
  [key: string]: any;
  as?: string | React.ComponentType<any>;
};

const FadeIn = ({ children, as, ...props }: FadeInProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const className = useMemo(() => {
    return [props.className ?? "", inView ? "viewed" : ""].join(" ");
  }, [props.className, inView]);

  return (
    <div className={className} {...props} css={Contatier} ref={ref}>
      {children}
    </div>
  );
};

export default FadeIn;

const Contatier = css`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  &.viewed {
    visibility: visible;
  }
`;
