type ElasticSearchProps = {
  className?: string;
};

export default function ElasticSearch({ className }: ElasticSearchProps) {
  return <div className={`classes ${className ?? ''}`}>ElasticSearch</div>;
}
