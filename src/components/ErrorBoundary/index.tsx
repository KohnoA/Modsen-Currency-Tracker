import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorMessage, Modal } from '../UI';

import styles from './styles.module.scss';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Modal isActive={hasError} onClose={() => {}}>
          <ErrorMessage className={styles.reserveComponent} />
        </Modal>
      );
    }

    return children;
  }
}
