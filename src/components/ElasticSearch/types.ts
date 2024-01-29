export type ElasticSearchProps = {
  className?: string;
  placeholder?: string;
  options: string[];
  onChange: (current: string) => void;
};

export type ElasticSearchState = {
  value: string;
};
