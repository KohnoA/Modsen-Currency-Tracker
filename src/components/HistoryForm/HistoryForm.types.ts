import { OhlcvResponseType } from '@/types';
import { PAIR_OPTIONS } from './HistoryForm.constants';

export type HistoryFormProps = {
  onSubmit: (pair: string, data: OhlcvResponseType[]) => void;
};

export type HistoryFormState = {
  pair: string;
  pairOptions: typeof PAIR_OPTIONS;
  date: string;
  isLoading: boolean;
  error: Error | null;
};
