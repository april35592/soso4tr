import { useState } from "react";
import { Link } from "react-router-dom";

import DivStyle from "./style";

import Self from "@components/Template/Self";
import Nav from "@components/Template/Nav";

const Template = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const switchOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <DivStyle>
      <div>
        <div>
          <header>
            <Link to="/">
              <h1>&lt; rathole &gt;</h1>
            </Link>
            <p className="myname" onClick={switchOpen}>
              서서: SoSo. & 사월: April {isOpen ? "▼" : "▲"}
            </p>
            {isOpen ? <Self /> : null}
            <Nav />
          </header>
          <article>{children}</article>
        </div>
        <footer>soso4tr.naru.pub</footer>
      </div>
    </DivStyle>
  );
};

export default Template;
