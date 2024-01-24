import { getCurrenciesRate } from '../getCurrenciesRate';
import { currenciesResponseMock } from '@/__mocks__/currenciesResponseMock';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import { CurrenciesResponseType } from '@/types';
import axios from 'axios';

const requestCodes = DEFAULT_QUOTES.map(({ code }) => code).toString();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Testing getCurrenciesRate service', () => {
  let response: { data: CurrenciesResponseType };

  beforeAll(() => {
    response = { data: currenciesResponseMock };
  });

  afterAll(() => jest.clearAllMocks());

  it('Request succes', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve(response));

    const responseMock = await getCurrenciesRate(requestCodes);

    expect(responseMock).toEqual(response.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
