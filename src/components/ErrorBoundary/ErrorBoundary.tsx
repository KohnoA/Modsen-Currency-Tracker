import { Component, ReactNode, ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.scss';
import { ErrorMessage, Modal } from '../UI';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
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
