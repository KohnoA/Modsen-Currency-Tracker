import styles from './styles.module.scss';

type ErrorProps = {
  className?: string;
  message?: string;
  'data-testid'?: string;
};

export const ErrorMessage = ({ className, message, ...other }: ErrorProps) => {
  return (
    <p className={`text-light-m ${styles.error} ${className ?? ''}`} {...other}>
      {!message ? 'Something went wrong, try again later' : message}
    </p>
  );
};
