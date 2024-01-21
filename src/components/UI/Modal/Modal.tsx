/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import { createPortal } from 'react-dom';
import { ReactNode, KeyboardEvent, MouseEvent } from 'react';
import CrossIcon from '@/assets/icons/cross-icon.svg';
import styles from './Modal.module.scss';
import { selectTheme } from '@/store/selectors';
import { useAppSelector } from '@/store/hooks';

type ModalProps = {
  isActive: boolean;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ isActive, children, onClose }: ModalProps) {
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
        className={`${styles.content} ${isLightTheme ? styles.content_light : ''}`}
        onClick={contentClickHanlder}
      >
        <button onClick={onClose} className={styles.cross} type="button">
          <span className={styles.cross__label}>Close Modal</span>
          <CrossIcon className={styles.cross__icon} width={60} height={60} />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById('modal-portal')!,
  );
}
