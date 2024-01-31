import { useState } from 'react';

import { getCurrencyRateCached, truncateNumber } from '@/utils';

export function useConverter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<number | null>();

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

  const reset = () => {
    if (result) setResult(null);
    if (error) setError(null);
  };

  return { result, isLoading, error, converter, reset };
}
