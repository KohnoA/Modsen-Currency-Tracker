import { useState } from 'react';
import { getCurrencyRateCached } from '@/utils/getCurrencyRateCached';

export function useConverter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [result, setResult] = useState<number>();

  const converter = async (target: string, count: number, base: string) => {
    setIsLoading(true);

    try {
      const rate = await getCurrencyRateCached(target, base);
      const output = Number((rate * count).toFixed(2));

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
