import styled from "@emotion/styled";

const WrapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  width: 380px;
  height: fit-content;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
`;

// 어떠한 작업도 하지 않고 모달을 보여주는 역할만 함
const Modal = ({ onClose, children }) => {
  return (
    <WrapContainer onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>{children}</Container>
    </WrapContainer>
  );
};

export default Modal;
