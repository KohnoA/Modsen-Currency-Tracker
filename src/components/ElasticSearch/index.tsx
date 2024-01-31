import { ChangeEvent, FormEvent, PureComponent } from 'react';

import { ICONS } from '@/constants';
import { filterOptions } from '@/utils';

import { SearchOptions } from './SearchOptions';

import styles from './styles.module.scss';

type ElasticSearchProps = {
  className?: string;
  placeholder?: string;
  options: string[];
  onChange: (current: string) => void;
};

type ElasticSearchState = {
  value: string;
};

const { SearchIcon } = ICONS;

export class ElasticSearch extends PureComponent<ElasticSearchProps, ElasticSearchState> {
  constructor(props: ElasticSearchProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleCurrentValue = () => {
    const { onChange } = this.props;
    const { value } = this.state;

    onChange(value);
  };

  onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    this.handleCurrentValue();
  };

  onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!value.length) {
      this.setState({ value }, this.handleCurrentValue);
    } else {
      this.setState({ value });
    }
  };

  setCurrentHandler = (option: string) => {
    this.setState({ value: option }, this.handleCurrentValue);
  };

  render() {
    const { className, placeholder, options } = this.props;
    const { value } = this.state;
    const filteredOptions = filterOptions(options, value);

    return (
      <div data-testid="elastic-search" className={`${styles.wrapper} ${className ?? ''}`}>
        <form onSubmit={this.onSubmitHandler} className={styles.elasticSearch}>
          <input
            data-testid="elastic-search-input"
            value={value}
            onChange={this.onChangeHanlder}
            className={styles.elasticSearch__input}
            type="search"
            placeholder={placeholder}
          />

          <button
            data-testid="elastic-search-submit"
            type="submit"
            className={styles.elasticSearch__submit}
          >
            <span className="hidden">Search</span>
            <SearchIcon width={24} height={24} />
          </button>
        </form>

        <SearchOptions options={filteredOptions} setCurrent={this.setCurrentHandler} />
      </div>
    );
  }
}
