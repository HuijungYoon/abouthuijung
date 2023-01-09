import { css } from "@emotion/react";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div css={test}>잘나오네</div>
    </div>
  );
}

export default App;

const test = css`
  font-size: 50px;
`;
