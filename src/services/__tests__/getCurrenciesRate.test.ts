import axios from 'axios';

import { currenciesResponseMock } from '@/__mocks__/currenciesResponseMock';
import { DEFAULT_CURRENCIES } from '@/constants';
import { CurrenciesResponseType } from '@/types';

import { getCurrenciesRate } from '../getCurrenciesRate';

const requestCodes = DEFAULT_CURRENCIES.map(({ code }) => code).toString();

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
