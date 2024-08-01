import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.cardContainer.bgColor};
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet_small}) {
    display: none;
  }
`;

const ModalCard = styled.div`
  width: calc(100% - 64px);
`;

const MobileSearchModal = ({ isModalOpen, toggleModalDisplay, children }) => {
  useEffect(() => {
    const handleCloseModal = (event) => {
      if (event.key === 'Escape') {
        toggleModalDisplay();
      }
    };
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [toggleModalDisplay]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModalDisplay();
    }
  };

  return createPortal(
    <ModalBackdrop
      aria-hidden={!isModalOpen}
      aria-describedby='Filter job posting by location and job status'
      aria-labelledby='Additional search criterias'
      role='dialog'
      onClick={handleBackdropClick}>
      <ModalCard>{children}</ModalCard>
    </ModalBackdrop>,
    document.body
  );
};

export default MobileSearchModal;
