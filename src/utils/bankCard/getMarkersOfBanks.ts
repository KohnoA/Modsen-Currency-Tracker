import { BANKS_DATA } from '@/constants';

export function getMarkersOfBanks(banks = BANKS_DATA) {
  return banks.map(({ name, coords, currencies }) => ({
    desc: `${name} ${currencies}`,
    coords,
  }));
}
