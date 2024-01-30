/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import CrossIcon from '@/assets/icons/cross-icon.svg';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';

import styles from './styles.module.scss';

type ModalProps = {
  isActive: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ isActive, children, onClose }: ModalProps) => {
  const isLightTheme = useAppSelector(selectTheme);

  const contentClickHanlder = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  const onKeydownCloseModal = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      onClose();
    }
  };

  if (!isActive) {
    return null;
  }

  return createPortal(
    <div
      onClick={onClose}
      onKeyDown={onKeydownCloseModal}
      className={styles.backdrop}
      role="button"
      tabIndex={0}
    >
      <div
        data-testid="modal"
        className={`${styles.content} ${isLightTheme ? 'lightTheme' : ''}`}
        onClick={contentClickHanlder}
      >
        <button onClick={onClose} className={styles.cross} type="button">
          <span className="hidden">Close Modal</span>
          <CrossIcon className={styles.cross__icon} width={60} height={60} />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById('modal-portal')!,
  );
};
