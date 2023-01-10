import React from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";

type FadeInProps = {
  [key: string]: any;
  as?: string | React.ComponentType<any> | any;
};

export const FadeIn = ({ children, as, ...props }: FadeInProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const className = useMemo(() => {
    return [props.className ?? "", inView ? "viewed" : ""].join(" ");
  }, [props.className, inView]);

  return (
    <Container as={as} {...props} className={className} ref={ref}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;

  &.viewed {
    visibility: visible;
    opacity: 1;
  }
`;
