import styled from "@emotion/styled";

const BannerUrlStyle = styled.div`
  p {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

const NoticeStyle = styled.div`
  & > p {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  div {
    width: 100%;
    height: 60px;
    overflow-y: auto;
    background-color: white;
    border: 1px dashed black;

    p {
      margin: 4px;
      font-size: 14px;
    }
  }
`;

function Home() {
  return (
    <>
      <BannerUrlStyle>
        <img src="/banner.png" />
        <p>banner: https://soso4tr.naru.pub/banner.png</p>
      </BannerUrlStyle>

      <NoticeStyle>
        <p>notice & update</p>
        <div>
          <p>방명록 수정/삭제는 개인적으로 문의주세요</p>
          <p>2024.06.17. 스케줄 구현</p>
          <p>2024.06.16. 방명록 구현</p>
        </div>
      </NoticeStyle>
    </>
  );
}

export default Home;
