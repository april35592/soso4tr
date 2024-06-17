import styled from "@emotion/styled";

const BannerUrlStyle = styled.p`
  font-size: 12px;
  margin-bottom: 12px;
`;

const NoticeStyle = styled.p``;

function Home() {
  return (
    <>
      <img src="/banner.png" />
      <BannerUrlStyle>
        banner: https://soso4tr.naru.pub/banner.png
      </BannerUrlStyle>
      <NoticeStyle>현재 방명록만 정상작동됩니다.</NoticeStyle>
    </>
  );
}

export default Home;
