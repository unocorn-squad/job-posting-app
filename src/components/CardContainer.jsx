import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 90%;
  height: 6%;
  position: absolute;
  top: 4%; 
  padding-top: 5px;
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

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Card ref={cardRef} onClick={handleCardClick}>
        {children}
      </Card>
    </Backdrop>
  );
};

export default CardContainer;

