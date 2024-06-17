import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavStyle = styled.nav`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 8px 0;
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
`;

const Nav = () => {
  return (
    <NavStyle>
      <Link to="/schedule">스케줄</Link> | <Link to="/trpg">TRPG</Link> |{" "}
      <Link to="/boardgames">보드게임</Link> | <Link to="/library">서재</Link> |{" "}
      <Link to="/blog">주저리</Link> | <Link to="/guestbook">방명록</Link>
    </NavStyle>
  );
};

export default Nav;
