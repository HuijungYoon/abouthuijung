import React, { useMemo } from "react";
import { css } from "@emotion/react";
import ReactMarkDown from "react-markdown";
import imyourbox from "./imyourbox.md";
import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { colors } from "../../lib/palette";
const data = [
  {
    id: "imyourbox",
    title: "아임유어박스 경력 상세페이지입니다.",
    detail: imyourbox,
  },
  {
    id: "ATN",
    title: "ATN 경력 상세페이지입니다.",
    detail: "",
  },
];

const detailMap = new Map(
  data.map(({ id, title, detail }) => [id, { title, detail }])
);

const Carrer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { title, detail } = useMemo(() => detailMap.get(id)!, [id]);

  const onPrevPaeClcik = () => {
    navigate(-1);
  };

  return (
    <>
      <main css={Container}>
        <p className="title">
          <FiChevronLeft
            className="back-icon"
            size={30}
            onClick={onPrevPaeClcik}
          />
          {title}
        </p>
        <ReactMarkDown css={MarkdownContainerCss}>{detail}</ReactMarkDown>
      </main>
    </>
  );
};
export default Carrer;

const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  > .title {
    .back-icon {
      cursor: pointer;
    }
    margin: 1.5rem 0 2.5rem;
    display: flex;
    align-items: center;
  }
`;

const MarkdownContainerCss = css`
  a {
    color: ${colors.orange[3]};
    font-weight: 500;
    transition: color 0.1s;
    &:hover {
      color: ${colors.orange[4]};
    }
  }
  ul {
    margin: 0.8rem 0;
    > li {
      margin: 0.4rem 0;
    }
  }
`;
