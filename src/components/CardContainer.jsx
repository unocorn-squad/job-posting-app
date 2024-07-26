import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import styled from "@emotion/styled";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.cardContainer.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardContainer.card.bgColor};
  border-radius: 8px;
  width: 85%;
  padding-top: ${(props) => props.theme.layout.space100};
  padding-bottom: ${(props) => props.theme.layout.space300};
  z-index: 1001;
`;

const CardContainer = ({ onClose, children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCardClick = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Card ref={cardRef} onClick={handleCardClick}>
        {children}
      </Card>
    </Backdrop>,
    document.body
  );
};

export default CardContainer;
