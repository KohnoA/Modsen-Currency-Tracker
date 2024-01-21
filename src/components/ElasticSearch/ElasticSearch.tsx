import { ChangeEvent, PureComponent, KeyboardEvent } from 'react';
import SearchIcon from '@/assets/icons/search-icon.svg';
import styles from './ElasticSearch.module.scss';
import { filterOptions } from '@/utils';

type ElasticSearchProps = {
  className?: string;
  placeholder?: string;
  options: string[];
  onChange: (current: string) => void;
};

type ElasticSearchState = {
  value: string;
};

export default class ElasticSearch extends PureComponent<ElasticSearchProps, ElasticSearchState> {
  timer: number | null;

  constructor(props: ElasticSearchProps) {
    super(props);

    this.timer = null;
    this.state = {
      value: '',
    };
  }

  componentDidUpdate(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = window.setTimeout(() => {
      const { onChange } = this.props;
      const { value } = this.state;

      onChange(value);
    }, 500);
  }

  hanldeCurrentValue = (current: string) => {
    this.setState({ value: current });
  };

  onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    this.hanldeCurrentValue(event.target.value);
  };

  onKeyDownHanlder = (event: KeyboardEvent<HTMLLIElement>, option: string) => {
    if (event.code === 'Enter') {
      this.hanldeCurrentValue(option);
    }
  };

  render() {
    const { className, placeholder, options } = this.props;
    const { value } = this.state;
    const filteredOptions = filterOptions(options, value);
    const showOptions = !!filteredOptions.length;

    return (
      <div className={`${styles.wrapper} ${className ?? ''}`}>
        <div className={styles.elasticSearch}>
          <input
            value={value}
            onChange={this.onChangeHanlder}
            className={styles.elasticSearch__input}
            type="text"
            placeholder={placeholder}
          />
          <SearchIcon className={styles.elasticSearch__icon} width={24} height={24} />
        </div>

        {showOptions && (
          <ul className={styles.results}>
            {filteredOptions.map((option) => (
              <li
                key={option}
                onClick={() => this.hanldeCurrentValue(option)}
                onKeyDown={(event) => this.onKeyDownHanlder(event, option)}
                className={styles.results__item}
                role="tab"
                tabIndex={0}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
