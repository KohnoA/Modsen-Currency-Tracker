import { useState } from 'react';
import { getCurrencyRateCached, truncateNumber } from '@/utils';

export function useConverter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [result, setResult] = useState<number>();

  const converter = async (target: string, count: number, base: string) => {
    setIsLoading(true);

    try {
      const rate = await getCurrencyRateCached(target, base);
      const output = Number(truncateNumber(rate * count));

      setResult(output);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { result, isLoading, error, converter };
}
