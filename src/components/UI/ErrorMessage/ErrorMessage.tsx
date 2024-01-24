import styles from './ErrorMessage.module.scss';

type ErrorProps = {
  className?: string;
  message?: string;
  'data-testid'?: string;
};

export default function Error({ className, message, ...other }: ErrorProps) {
  return (
    <p className={`text-light-m ${styles.error} ${className ?? ''}`} {...other}>
      {!message ? 'Something went wrong, try again later' : message}
    </p>
  );
}
