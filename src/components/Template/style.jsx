import styled from "@emotion/styled";

const DivStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #2bc0e4, #eaecc6);

  & > div {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 680px;
    background-color: lightyellow;
    border: 5px solid blue;
    padding: 12px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

    @media (min-width: 420px) {
      & {
        box-shadow: 10px 10px magenta;
      }
    }

    header {
      & > a > h1 {
        text-align: center;
        color: magenta;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 12px;
        &:hover {
          color: blue;
        }
      }

      & > p.myname {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 12px;

        cursor: pointer;
        &:hover {
          color: blue;
        }
      }

      p {
        font-size: 14px;
        margin-bottom: 12px;
      }
    }

    article {
      margin: 14px 0;
      height: max-content;
    }

    footer {
      border-top: 1px dashed black;
      padding-top: 4px;
      text-align: center;
      font-size: 12px;
    }
  }
`;

export default DivStyle;
