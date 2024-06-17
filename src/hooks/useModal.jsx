import { useCallback, useState } from "react";
import Modal from "@components/atoms/Modal";

// useBlur: 모달 외부를 클릭 시 닫기 on/off(default: on)
const useModal = (useBlur = true) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  // isOpen이 true라면 Modal 컴포넌트를 반환, false라면 null을 반환
  return {
    Modal: isOpen
      ? ({ children }) => (
          <Modal onClose={useBlur ? close : () => {}}>{children}</Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
