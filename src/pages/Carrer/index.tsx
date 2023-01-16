import React, { useMemo } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const data = [
  {
    id: "imyourbox",
    title: "아임유어박스 경력 상세페이지입니다.",
    detail: "",
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

  console.log(id);
  const { title, detail } = useMemo<any>(() => detailMap.get(id)!, [id]);

  return (
    <>
      <main css={Container}>
        <p className="title">{title}</p>
      </main>
    </>
  );
};

const Container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  > .title {
    margin: 1.5rem 0 2.5rem;
  }
`;

export default Carrer;
