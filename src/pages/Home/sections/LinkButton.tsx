import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { colors } from "../../../lib/palette";
type LinkButtonProps = {
  className?: string;
  to: string;
};

const LinkButton = ({
  className,
  to,
  children,
}: React.PropsWithChildren<LinkButtonProps>) => {
  return (
    <>
      <Link css={LinkButtonCss} to={to} className={className}>
        {children}
      </Link>
    </>
  );
};

export default LinkButton;

const LinkButtonCss = css`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 12px;
  background-color: ${colors.orange[4]};

  &:hover {
    background-color: ${colors.orange[3]};
  }
`;
