import React from "react";
import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { colors } from "../../../lib/colors";

const Header = () => {
  const [ref, inView] = useInView({ initialInView: true });
  console.log(inView);

  return (
    <>
      <div ref={ref} />
      <header css={Contaier} className={!inView ? "scrolled" : ""}>
        <Link className="link-to-home font-medium" to="/">
          huijung
        </Link>
        <a
          className="link-to-blog font-medium"
          href="https://reactdev.tistory.com/"
        >
          blog
        </a>
        <a
          className="link-to-github font-medium"
          href="https://github.com/huijungyoon"
        >
          github
        </a>
      </header>
    </>
  );
};

export default Header;

const Contaier = css`
  position: fixed;
  top: 10px;
  z-index: 99999999;
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: ${colors.white0};
  backdrop-filter: blur(8px);
  transition: background-color 0.2s, box-shadow 0.2s;

  @media screen and (max-width: 950px) {
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    border-radius: 0;
  }
  &.scrolled {
    background-color: ${colors.white0_t70};
    box-shadow: 0 0 10px ${colors.grey1};
  }

  > a {
    font-size: 1.5rem;
    transition: color 0.1s;
  }
  > .link-to-home {
    color: ${colors.green1};
    &:hover {
      color: ${colors.green2};
    }
  }
  > .link-to-home {
    color: ${colors.green1};
    &:hover {
      color: ${colors.green2};
    }
  }
  > .link-to-blog {
    margin-left: auto;
    &:hover {
      color: ${colors.black1};
    }
  }
  > .link-to-github {
    margin-left: 12px;
    &:hover {
      color: ${colors.black1};
    }
  }
`;
