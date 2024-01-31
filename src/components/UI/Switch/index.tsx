import { memo } from 'react';

import styles from './styles.module.scss';

type SwitchProps = {
  className?: string;
  isToggled: boolean;
  onChange: () => void;
  'data-testid'?: string;
};

export const Switch = memo((props: SwitchProps) => {
  const { className, isToggled, onChange, ...otherProps } = props;

  return (
    <label
      data-testid={otherProps['data-testid']}
      htmlFor="switch-id"
      className={`${styles.switch} ${className ?? ''}`}
    >
      <span className="hidden">Switch Button</span>

      <input id="switch-id" type="checkbox" checked={isToggled} onChange={onChange} />

      <span className={styles.slider}>
        <span className={styles.slider__lever} />
      </span>
    </label>
  );
});
