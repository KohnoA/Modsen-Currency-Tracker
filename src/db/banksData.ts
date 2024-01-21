type BankDataType = {
  name: string;
  coord: [number, number];
  currencies: string[];
};

export const BANKS_DATA: BankDataType[] = [
  { name: 'AlfaBank', coord: [53.90129, 27.46167], currencies: ['USD', 'ARS'] },
  { name: 'BelarusBank', coord: [53.889647, 27.646079], currencies: ['BTC', 'YEN'] },
  { name: 'BelAgroPromBank', coord: [53.863481, 27.491736], currencies: ['USD', 'YUAN'] },
  { name: 'PriorBank', coord: [53.86331, 27.578593], currencies: ['ARS', 'AUD'] },
  { name: 'BelGazPromBank', coord: [53.904639, 27.557857], currencies: ['CAD', 'EUR'] },
];
