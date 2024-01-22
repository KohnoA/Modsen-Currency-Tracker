import styles from './Switch.module.scss';

type SwitchProps = {
  className?: string;
  isToggled: boolean;
  onChange: () => void;
};

export default function Switch({ className, isToggled, onChange }: SwitchProps) {
  return (
    <label htmlFor="switch-id" className={`${styles.switch} ${className ?? ''}`}>
      <span className="hidden">Switch Button</span>

      <input id="switch-id" type="checkbox" checked={isToggled} onChange={onChange} />

      <span className={styles.slider}>
        <span className={styles.slider__lever} />
      </span>
    </label>
  );
}
