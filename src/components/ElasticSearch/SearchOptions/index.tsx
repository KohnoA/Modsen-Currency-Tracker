import { KeyboardEvent, PureComponent } from 'react';

import styles from './styles.module.scss';

type SearchOptionsProps = {
  options: string[];
  setCurrent: (option: string) => void;
};

export class SearchOptions extends PureComponent<SearchOptionsProps> {
  onKeyDownHanlder = (event: KeyboardEvent<HTMLLIElement>, option: string) => {
    if (event.code === 'Enter') {
      const { setCurrent } = this.props;

      setCurrent(option);
    }
  };

  render() {
    const { options, setCurrent } = this.props;

    if (!options.length) {
      return null;
    }

    return (
      <ul data-testid="elastic-search-options" className={styles.results}>
        {options.map((option) => (
          <li
            data-testid="elastic-search-option"
            key={option}
            onClick={() => setCurrent(option)}
            onKeyDown={(event) => this.onKeyDownHanlder(event, option)}
            className={styles.results__item}
            role="tab"
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    );
  }
}
