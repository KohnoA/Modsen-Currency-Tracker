import { ChangeEvent, PureComponent, KeyboardEvent, FormEvent } from 'react';
import SearchIcon from '@/assets/icons/search-icon.svg';
import { filterOptions } from '@/utils';
import styles from './ElasticSearch.module.scss';

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
  constructor(props: ElasticSearchProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handlerCurrentValue = () => {
    const { onChange } = this.props;
    const { value } = this.state;

    onChange(value);
  };

  onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    this.handlerCurrentValue();
  };

  onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!value.length) {
      this.setState({ value }, this.handlerCurrentValue);
    } else {
      this.setState({ value });
    }
  };

  setCurrentOption = (option: string) => {
    this.setState({ value: option }, this.handlerCurrentValue);
  };

  onKeyDownHanlder = (event: KeyboardEvent<HTMLLIElement>, option: string) => {
    if (event.code === 'Enter') {
      this.setState({ value: option }, this.handlerCurrentValue);
    }
  };

  render() {
    const { className, placeholder, options } = this.props;
    const { value } = this.state;
    const filteredOptions = filterOptions(options, value);
    const showOptions = !!filteredOptions.length;

    return (
      <div className={`${styles.wrapper} ${className ?? ''}`}>
        <form onSubmit={this.onSubmitHandler} className={styles.elasticSearch}>
          <input
            value={value}
            onChange={this.onChangeHanlder}
            className={styles.elasticSearch__input}
            type="search"
            placeholder={placeholder}
          />

          <button type="submit" className={styles.elasticSearch__submit}>
            <span className="hidden">Search</span>
            <SearchIcon width={24} height={24} />
          </button>
        </form>

        {showOptions && (
          <ul className={styles.results}>
            {filteredOptions.map((option) => (
              <li
                key={option}
                onClick={() => this.setCurrentOption(option)}
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
