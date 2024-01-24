const ohlcvReponseMock = [
  {
    time_period_start: '2019-01-01T00:00:00.0000000Z',
    time_period_end: '2019-01-02T00:00:00.0000000Z',
    time_open: '2019-01-01T00:00:00.8060000Z',
    time_close: '2019-01-01T23:59:59.9220000Z',
    price_open: 0.002005,
    price_high: 0.00205,
    price_low: 0.001985,
    price_close: 0.002039,
    volume_traded: 181659.51,
    trades_count: 11504,
  },
  {
    time_period_start: '2019-01-02T00:00:00.0000000Z',
    time_period_end: '2019-01-03T00:00:00.0000000Z',
    time_open: '2019-01-02T00:00:05.8680000Z',
    time_close: '2019-01-02T23:59:54.3500000Z',
    price_open: 0.002044,
    price_high: 0.00207,
    price_low: 0.002009,
    price_close: 0.002047,
    volume_traded: 278931.25,
    trades_count: 16569,
  },
  {
    time_period_start: '2019-01-03T00:00:00.0000000Z',
    time_period_end: '2019-01-04T00:00:00.0000000Z',
    time_open: '2019-01-03T00:00:02.2340000Z',
    time_close: '2019-01-03T23:59:38.5010000Z',
    price_open: 0.002044,
    price_high: 0.002054,
    price_low: 0.00196,
    price_close: 0.001996,
    volume_traded: 245859.19,
    trades_count: 15055,
  },
  {
    time_period_start: '2019-01-04T00:00:00.0000000Z',
    time_period_end: '2019-01-05T00:00:00.0000000Z',
    time_open: '2019-01-04T00:00:01.0870000Z',
    time_close: '2019-01-04T23:59:52.5180000Z',
    price_open: 0.001995,
    price_high: 0.002015,
    price_low: 0.00196,
    price_close: 0.001969,
    volume_traded: 216801.1,
    trades_count: 13508,
  },
  {
    time_period_start: '2019-01-05T00:00:00.0000000Z',
    time_period_end: '2019-01-06T00:00:00.0000000Z',
    time_open: '2019-01-05T00:00:03.5390000Z',
    time_close: '2019-01-05T23:59:37.4620000Z',
    price_open: 0.001968,
    price_high: 0.00206,
    price_low: 0.001968,
    price_close: 0.002046,
    volume_traded: 320971.58,
    trades_count: 18260,
  },
  {
    time_period_start: '2019-01-06T00:00:00.0000000Z',
    time_period_end: '2019-01-07T00:00:00.0000000Z',
    time_open: '2019-01-06T00:00:01.3870000Z',
    time_close: '2019-01-06T23:59:57.3210000Z',
    price_open: 0.002046,
    price_high: 0.002206,
    price_low: 0.002002,
    price_close: 0.002121,
    volume_traded: 727956.13,
    trades_count: 39903,
  },
  {
    time_period_start: '2019-01-07T00:00:00.0000000Z',
    time_period_end: '2019-01-08T00:00:00.0000000Z',
    time_open: '2019-01-07T00:00:10.2060000Z',
    time_close: '2019-01-07T23:59:49.4890000Z',
    price_open: 0.002122,
    price_high: 0.002211,
    price_low: 0.002062,
    price_close: 0.002104,
    volume_traded: 664499.92,
    trades_count: 37544,
  },
  {
    time_period_start: '2019-01-08T00:00:00.0000000Z',
    time_period_end: '2019-01-09T00:00:00.0000000Z',
    time_open: '2019-01-08T00:00:04.1230000Z',
    time_close: '2019-01-08T23:59:59.4980000Z',
    price_open: 0.002104,
    price_high: 0.002334,
    price_low: 0.002065,
    price_close: 0.002277,
    volume_traded: 974889.39,
    trades_count: 53287,
  },
  {
    time_period_start: '2019-01-09T00:00:00.0000000Z',
    time_period_end: '2019-01-10T00:00:00.0000000Z',
    time_open: '2019-01-09T00:00:00.0770000Z',
    time_close: '2019-01-09T23:59:59.6020000Z',
    price_open: 0.002276,
    price_high: 0.002408,
    price_low: 0.002201,
    price_close: 0.002267,
    volume_traded: 1004939.68,
    trades_count: 54216,
  },
  {
    time_period_start: '2019-01-10T00:00:00.0000000Z',
    time_period_end: '2019-01-11T00:00:00.0000000Z',
    time_open: '2019-01-10T00:00:00.2200000Z',
    time_close: '2019-01-10T23:59:54.7460000Z',
    price_open: 0.002268,
    price_high: 0.002354,
    price_low: 0.002086,
    price_close: 0.002168,
    volume_traded: 1014918.68,
    trades_count: 51379,
  },
  {
    time_period_start: '2019-01-11T00:00:00.0000000Z',
    time_period_end: '2019-01-12T00:00:00.0000000Z',
    time_open: '2019-01-11T00:00:00.7560000Z',
    time_close: '2019-01-11T23:59:52.2890000Z',
    price_open: 0.002168,
    price_high: 0.002195,
    price_low: 0.002115,
    price_close: 0.002151,
    volume_traded: 403559.66,
    trades_count: 23474,
  },
  {
    time_period_start: '2019-01-12T00:00:00.0000000Z',
    time_period_end: '2019-01-13T00:00:00.0000000Z',
    time_open: '2019-01-12T00:00:09.0820000Z',
    time_close: '2019-01-12T23:59:49.0100000Z',
    price_open: 0.00215,
    price_high: 0.00217,
    price_low: 0.002088,
    price_close: 0.002112,
    volume_traded: 230261.99,
    trades_count: 15012,
  },
  {
    time_period_start: '2019-01-13T00:00:00.0000000Z',
    time_period_end: '2019-01-14T00:00:00.0000000Z',
    time_open: '2019-01-13T00:00:01.2060000Z',
    time_close: '2019-01-13T23:59:59.7790000Z',
    price_open: 0.002111,
    price_high: 0.002134,
    price_low: 0.001981,
    price_close: 0.002009,
    volume_traded: 427621.66,
    trades_count: 22423,
  },
  {
    time_period_start: '2019-01-14T00:00:00.0000000Z',
    time_period_end: '2019-01-15T00:00:00.0000000Z',
    time_open: '2019-01-14T00:00:03.1240000Z',
    time_close: '2019-01-14T23:59:54.0970000Z',
    price_open: 0.00201,
    price_high: 0.002166,
    price_low: 0.002009,
    price_close: 0.002155,
    volume_traded: 447550,
    trades_count: 24917,
  },
  {
    time_period_start: '2019-01-15T00:00:00.0000000Z',
    time_period_end: '2019-01-16T00:00:00.0000000Z',
    time_open: '2019-01-15T00:00:03.0490000Z',
    time_close: '2019-01-15T23:59:32.3400000Z',
    price_open: 0.002155,
    price_high: 0.002163,
    price_low: 0.002054,
    price_close: 0.002086,
    volume_traded: 364880.58,
    trades_count: 20688,
  },
  {
    time_period_start: '2019-01-16T00:00:00.0000000Z',
    time_period_end: '2019-01-17T00:00:00.0000000Z',
    time_open: '2019-01-16T00:00:03.5610000Z',
    time_close: '2019-01-16T23:59:58.1100000Z',
    price_open: 0.002085,
    price_high: 0.002149,
    price_low: 0.002068,
    price_close: 0.002104,
    volume_traded: 329935.96,
    trades_count: 18745,
  },
  {
    time_period_start: '2019-01-17T00:00:00.0000000Z',
    time_period_end: '2019-01-18T00:00:00.0000000Z',
    time_open: '2019-01-17T00:00:00.1380000Z',
    time_close: '2019-01-17T23:59:45.1300000Z',
    price_open: 0.002104,
    price_high: 0.002139,
    price_low: 0.002063,
    price_close: 0.00212,
    volume_traded: 263916.82,
    trades_count: 16474,
  },
  {
    time_period_start: '2019-01-18T00:00:00.0000000Z',
    time_period_end: '2019-01-19T00:00:00.0000000Z',
    time_open: '2019-01-18T00:00:04.8570000Z',
    time_close: '2019-01-18T23:59:57.6820000Z',
    price_open: 0.002122,
    price_high: 0.002132,
    price_low: 0.002064,
    price_close: 0.002086,
    volume_traded: 225207.18,
    trades_count: 13256,
  },
  {
    time_period_start: '2019-01-19T00:00:00.0000000Z',
    time_period_end: '2019-01-20T00:00:00.0000000Z',
    time_open: '2019-01-19T00:00:07.7240000Z',
    time_close: '2019-01-19T23:59:50.0630000Z',
    price_open: 0.002086,
    price_high: 0.00228,
    price_low: 0.002082,
    price_close: 0.002152,
    volume_traded: 436458.74,
    trades_count: 26013,
  },
  {
    time_period_start: '2019-01-20T00:00:00.0000000Z',
    time_period_end: '2019-01-21T00:00:00.0000000Z',
    time_open: '2019-01-20T00:00:02.9310000Z',
    time_close: '2019-01-20T23:59:48.7860000Z',
    price_open: 0.002155,
    price_high: 0.002189,
    price_low: 0.002074,
    price_close: 0.002105,
    volume_traded: 358919.45,
    trades_count: 21606,
  },
  {
    time_period_start: '2019-01-21T00:00:00.0000000Z',
    time_period_end: '2019-01-22T00:00:00.0000000Z',
    time_open: '2019-01-21T00:00:02.3000000Z',
    time_close: '2019-01-21T23:59:54.9560000Z',
    price_open: 0.002108,
    price_high: 0.002127,
    price_low: 0.00207,
    price_close: 0.002102,
    volume_traded: 220993.02,
    trades_count: 12120,
  },
  {
    time_period_start: '2019-01-22T00:00:00.0000000Z',
    time_period_end: '2019-01-23T00:00:00.0000000Z',
    time_open: '2019-01-22T00:00:07.6220000Z',
    time_close: '2019-01-22T23:59:10.5810000Z',
    price_open: 0.002102,
    price_high: 0.002155,
    price_low: 0.002055,
    price_close: 0.002126,
    volume_traded: 308019.83,
    trades_count: 16993,
  },
  {
    time_period_start: '2019-01-23T00:00:00.0000000Z',
    time_period_end: '2019-01-24T00:00:00.0000000Z',
    time_open: '2019-01-23T00:00:01.3310000Z',
    time_close: '2019-01-23T23:59:51.4320000Z',
    price_open: 0.002126,
    price_high: 0.002131,
    price_low: 0.002088,
    price_close: 0.0021,
    volume_traded: 232971.03,
    trades_count: 13337,
  },
  {
    time_period_start: '2019-01-24T00:00:00.0000000Z',
    time_period_end: '2019-01-25T00:00:00.0000000Z',
    time_open: '2019-01-24T00:00:02.3790000Z',
    time_close: '2019-01-24T23:59:57.2050000Z',
    price_open: 0.002098,
    price_high: 0.002145,
    price_low: 0.002086,
    price_close: 0.002139,
    volume_traded: 211155.55,
    trades_count: 12026,
  },
  {
    time_period_start: '2019-01-25T00:00:00.0000000Z',
    time_period_end: '2019-01-26T00:00:00.0000000Z',
    time_open: '2019-01-25T00:00:02.3160000Z',
    time_close: '2019-01-25T23:58:24.9050000Z',
    price_open: 0.00214,
    price_high: 0.002144,
    price_low: 0.00208,
    price_close: 0.002101,
    volume_traded: 197244.06,
    trades_count: 10694,
  },
  {
    time_period_start: '2019-01-26T00:00:00.0000000Z',
    time_period_end: '2019-01-27T00:00:00.0000000Z',
    time_open: '2019-01-26T00:00:02.8640000Z',
    time_close: '2019-01-26T23:59:53.5990000Z',
    price_open: 0.002101,
    price_high: 0.002124,
    price_low: 0.002075,
    price_close: 0.002085,
    volume_traded: 154925.77,
    trades_count: 8408,
  },
  {
    time_period_start: '2019-01-27T00:00:00.0000000Z',
    time_period_end: '2019-01-28T00:00:00.0000000Z',
    time_open: '2019-01-27T00:00:10.4600000Z',
    time_close: '2019-01-27T23:59:52.3590000Z',
    price_open: 0.002084,
    price_high: 0.002113,
    price_low: 0.002039,
    price_close: 0.002065,
    volume_traded: 349444.45,
    trades_count: 15769,
  },
  {
    time_period_start: '2019-01-28T00:00:00.0000000Z',
    time_period_end: '2019-01-29T00:00:00.0000000Z',
    time_open: '2019-01-28T00:00:06.8290000Z',
    time_close: '2019-01-28T23:59:46.9830000Z',
    price_open: 0.002064,
    price_high: 0.002078,
    price_low: 0.001972,
    price_close: 0.002015,
    volume_traded: 436901.78,
    trades_count: 20758,
  },
  {
    time_period_start: '2019-01-29T00:00:00.0000000Z',
    time_period_end: '2019-01-30T00:00:00.0000000Z',
    time_open: '2019-01-29T00:00:02.5550000Z',
    time_close: '2019-01-29T23:59:48.6140000Z',
    price_open: 0.002015,
    price_high: 0.002086,
    price_low: 0.001985,
    price_close: 0.002047,
    volume_traded: 357799.41,
    trades_count: 15698,
  },
  {
    time_period_start: '2019-01-30T00:00:00.0000000Z',
    time_period_end: '2019-01-31T00:00:00.0000000Z',
    time_open: '2019-01-30T00:00:04.4730000Z',
    time_close: '2019-01-30T23:59:43.9450000Z',
    price_open: 0.002047,
    price_high: 0.002053,
    price_low: 0.001999,
    price_close: 0.002039,
    volume_traded: 257300.63,
    trades_count: 13671,
  },
  {
    time_period_start: '2019-01-31T00:00:00.0000000Z',
    time_period_end: '2019-02-01T00:00:00.0000000Z',
    time_open: '2019-01-31T00:00:04.6930000Z',
    time_close: '2019-01-31T23:59:47.7630000Z',
    price_open: 0.002038,
    price_high: 0.00206,
    price_low: 0.001975,
    price_close: 0.001998,
    volume_traded: 303518.44,
    trades_count: 12217,
  },
  {
    time_period_start: '2019-02-01T00:00:00.0000000Z',
    time_period_end: '2019-02-02T00:00:00.0000000Z',
    time_open: '2019-02-01T00:00:09.0640000Z',
    time_close: '2019-02-01T23:59:59.4570000Z',
    price_open: 0.001998,
    price_high: 0.002018,
    price_low: 0.001973,
    price_close: 0.002013,
    volume_traded: 140207.48,
    trades_count: 8306,
  },
  {
    time_period_start: '2019-02-02T00:00:00.0000000Z',
    time_period_end: '2019-02-03T00:00:00.0000000Z',
    time_open: '2019-02-02T00:00:08.8950000Z',
    time_close: '2019-02-02T23:59:59.5110000Z',
    price_open: 0.002012,
    price_high: 0.002086,
    price_low: 0.001988,
    price_close: 0.002067,
    volume_traded: 280952.93,
    trades_count: 12737,
  },
  {
    time_period_start: '2019-02-03T00:00:00.0000000Z',
    time_period_end: '2019-02-04T00:00:00.0000000Z',
    time_open: '2019-02-03T00:00:03.2310000Z',
    time_close: '2019-02-03T23:59:48.8890000Z',
    price_open: 0.002068,
    price_high: 0.00207,
    price_low: 0.002014,
    price_close: 0.002027,
    volume_traded: 182836.97,
    trades_count: 8549,
  },
  {
    time_period_start: '2019-02-04T00:00:00.0000000Z',
    time_period_end: '2019-02-05T00:00:00.0000000Z',
    time_open: '2019-02-04T00:00:03.1620000Z',
    time_close: '2019-02-04T23:59:59.2670000Z',
    price_open: 0.002027,
    price_high: 0.002073,
    price_low: 0.002016,
    price_close: 0.002037,
    volume_traded: 238905.96,
    trades_count: 10324,
  },
  {
    time_period_start: '2019-02-05T00:00:00.0000000Z',
    time_period_end: '2019-02-06T00:00:00.0000000Z',
    time_open: '2019-02-05T00:00:20.5030000Z',
    time_close: '2019-02-05T23:59:54.5890000Z',
    price_open: 0.002038,
    price_high: 0.002058,
    price_low: 0.002001,
    price_close: 0.002015,
    volume_traded: 178091.91,
    trades_count: 9430,
  },
  {
    time_period_start: '2019-02-06T00:00:00.0000000Z',
    time_period_end: '2019-02-07T00:00:00.0000000Z',
    time_open: '2019-02-06T00:00:12.9760000Z',
    time_close: '2019-02-06T23:58:37.6910000Z',
    price_open: 0.002016,
    price_high: 0.002027,
    price_low: 0.001979,
    price_close: 0.002016,
    volume_traded: 233813.25,
    trades_count: 12234,
  },
  {
    time_period_start: '2019-02-07T00:00:00.0000000Z',
    time_period_end: '2019-02-08T00:00:00.0000000Z',
    time_open: '2019-02-07T00:00:08.8830000Z',
    time_close: '2019-02-07T23:59:58.8140000Z',
    price_open: 0.002015,
    price_high: 0.002046,
    price_low: 0.002001,
    price_close: 0.002037,
    volume_traded: 158145.36,
    trades_count: 8889,
  },
  {
    time_period_start: '2019-02-08T00:00:00.0000000Z',
    time_period_end: '2019-02-09T00:00:00.0000000Z',
    time_open: '2019-02-08T00:00:09.4960000Z',
    time_close: '2019-02-08T23:59:51.0690000Z',
    price_open: 0.002038,
    price_high: 0.00213,
    price_low: 0.002007,
    price_close: 0.002061,
    volume_traded: 507467.87,
    trades_count: 25115,
  },
  {
    time_period_start: '2019-02-09T00:00:00.0000000Z',
    time_period_end: '2019-02-10T00:00:00.0000000Z',
    time_open: '2019-02-09T00:00:01.6430000Z',
    time_close: '2019-02-09T23:59:58.2020000Z',
    price_open: 0.002063,
    price_high: 0.002122,
    price_low: 0.002042,
    price_close: 0.00209,
    volume_traded: 272301.65,
    trades_count: 15288,
  },
  {
    time_period_start: '2019-02-10T00:00:00.0000000Z',
    time_period_end: '2019-02-11T00:00:00.0000000Z',
    time_open: '2019-02-10T00:00:13.7050000Z',
    time_close: '2019-02-10T23:59:56.8080000Z',
    price_open: 0.00209,
    price_high: 0.00223,
    price_low: 0.002065,
    price_close: 0.002165,
    volume_traded: 510916.14,
    trades_count: 28176,
  },
  {
    time_period_start: '2019-02-11T00:00:00.0000000Z',
    time_period_end: '2019-02-12T00:00:00.0000000Z',
    time_open: '2019-02-11T00:00:16.3730000Z',
    time_close: '2019-02-11T23:59:59.4340000Z',
    price_open: 0.002164,
    price_high: 0.002291,
    price_low: 0.002109,
    price_close: 0.002237,
    volume_traded: 629111.48,
    trades_count: 29821,
  },
  {
    time_period_start: '2019-02-12T00:00:00.0000000Z',
    time_period_end: '2019-02-13T00:00:00.0000000Z',
    time_open: '2019-02-12T00:00:01.4030000Z',
    time_close: '2019-02-12T23:59:55.9380000Z',
    price_open: 0.00224,
    price_high: 0.002336,
    price_low: 0.002195,
    price_close: 0.002256,
    volume_traded: 812026.76,
    trades_count: 40383,
  },
  {
    time_period_start: '2019-02-13T00:00:00.0000000Z',
    time_period_end: '2019-02-14T00:00:00.0000000Z',
    time_open: '2019-02-13T00:00:03.9070000Z',
    time_close: '2019-02-13T23:59:50.8770000Z',
    price_open: 0.002257,
    price_high: 0.002317,
    price_low: 0.002241,
    price_close: 0.002276,
    volume_traded: 394182.32,
    trades_count: 20496,
  },
  {
    time_period_start: '2019-02-14T00:00:00.0000000Z',
    time_period_end: '2019-02-15T00:00:00.0000000Z',
    time_open: '2019-02-14T00:00:08.7380000Z',
    time_close: '2019-02-14T23:59:35.9270000Z',
    price_open: 0.002277,
    price_high: 0.00228,
    price_low: 0.002153,
    price_close: 0.002196,
    volume_traded: 404936.9,
    trades_count: 21133,
  },
  {
    time_period_start: '2019-02-15T00:00:00.0000000Z',
    time_period_end: '2019-02-16T00:00:00.0000000Z',
    time_open: '2019-02-15T00:00:21.2090000Z',
    time_close: '2019-02-15T23:59:58.6260000Z',
    price_open: 0.002196,
    price_high: 0.002322,
    price_low: 0.002166,
    price_close: 0.002242,
    volume_traded: 385102.29,
    trades_count: 22156,
  },
  {
    time_period_start: '2019-02-16T00:00:00.0000000Z',
    time_period_end: '2019-02-17T00:00:00.0000000Z',
    time_open: '2019-02-16T00:00:10.3550000Z',
    time_close: '2019-02-16T23:59:58.9220000Z',
    price_open: 0.002241,
    price_high: 0.0023,
    price_low: 0.002162,
    price_close: 0.002181,
    volume_traded: 460724.69,
    trades_count: 24726,
  },
  {
    time_period_start: '2019-02-17T00:00:00.0000000Z',
    time_period_end: '2019-02-18T00:00:00.0000000Z',
    time_open: '2019-02-17T00:00:02.3940000Z',
    time_close: '2019-02-17T23:59:55.7340000Z',
    price_open: 0.002182,
    price_high: 0.0024,
    price_low: 0.002173,
    price_close: 0.002285,
    volume_traded: 1172180,
    trades_count: 62299,
  },
  {
    time_period_start: '2019-02-18T00:00:00.0000000Z',
    time_period_end: '2019-02-19T00:00:00.0000000Z',
    time_open: '2019-02-18T00:00:15.6570000Z',
    time_close: '2019-02-18T23:59:58.7820000Z',
    price_open: 0.002283,
    price_high: 0.0023,
    price_low: 0.002214,
    price_close: 0.002247,
    volume_traded: 667553.4,
    trades_count: 33552,
  },
  {
    time_period_start: '2019-02-19T00:00:00.0000000Z',
    time_period_end: '2019-02-20T00:00:00.0000000Z',
    time_open: '2019-02-19T00:00:01.6140000Z',
    time_close: '2019-02-19T23:59:56.4360000Z',
    price_open: 0.002248,
    price_high: 0.002338,
    price_low: 0.002223,
    price_close: 0.002272,
    volume_traded: 597416.27,
    trades_count: 35457,
  },
  {
    time_period_start: '2019-02-20T00:00:00.0000000Z',
    time_period_end: '2019-02-21T00:00:00.0000000Z',
    time_open: '2019-02-20T00:00:08.7800000Z',
    time_close: '2019-02-20T23:59:55.6030000Z',
    price_open: 0.002271,
    price_high: 0.002315,
    price_low: 0.002232,
    price_close: 0.002297,
    volume_traded: 442473.07,
    trades_count: 25317,
  },
  {
    time_period_start: '2019-02-21T00:00:00.0000000Z',
    time_period_end: '2019-02-22T00:00:00.0000000Z',
    time_open: '2019-02-21T00:00:07.2720000Z',
    time_close: '2019-02-21T23:59:54.7220000Z',
    price_open: 0.002297,
    price_high: 0.002303,
    price_low: 0.002152,
    price_close: 0.002183,
    volume_traded: 460898.69,
    trades_count: 24318,
  },
  {
    time_period_start: '2019-02-22T00:00:00.0000000Z',
    time_period_end: '2019-02-23T00:00:00.0000000Z',
    time_open: '2019-02-22T00:00:02.1200000Z',
    time_close: '2019-02-22T23:59:54.4290000Z',
    price_open: 0.002182,
    price_high: 0.002223,
    price_low: 0.002172,
    price_close: 0.002189,
    volume_traded: 303914.53,
    trades_count: 13998,
  },
  {
    time_period_start: '2019-02-23T00:00:00.0000000Z',
    time_period_end: '2019-02-24T00:00:00.0000000Z',
    time_open: '2019-02-23T00:00:08.6630000Z',
    time_close: '2019-02-23T23:59:56.4980000Z',
    price_open: 0.00219,
    price_high: 0.002495,
    price_low: 0.002146,
    price_close: 0.002464,
    volume_traded: 1147244.74,
    trades_count: 55612,
  },
  {
    time_period_start: '2019-02-24T00:00:00.0000000Z',
    time_period_end: '2019-02-25T00:00:00.0000000Z',
    time_open: '2019-02-24T00:00:00.5610000Z',
    time_close: '2019-02-24T23:59:59.9550000Z',
    price_open: 0.002467,
    price_high: 0.002598,
    price_low: 0.002281,
    price_close: 0.002381,
    volume_traded: 2034545.83,
    trades_count: 106228,
  },
  {
    time_period_start: '2019-02-25T00:00:00.0000000Z',
    time_period_end: '2019-02-26T00:00:00.0000000Z',
    time_open: '2019-02-25T00:00:02.9140000Z',
    time_close: '2019-02-25T23:59:56.4690000Z',
    price_open: 0.002383,
    price_high: 0.00245,
    price_low: 0.00231,
    price_close: 0.002404,
    volume_traded: 835024.18,
    trades_count: 47640,
  },
  {
    time_period_start: '2019-02-26T00:00:00.0000000Z',
    time_period_end: '2019-02-27T00:00:00.0000000Z',
    time_open: '2019-02-26T00:00:02.2970000Z',
    time_close: '2019-02-26T23:59:48.3760000Z',
    price_open: 0.002404,
    price_high: 0.00241,
    price_low: 0.00232,
    price_close: 0.002377,
    volume_traded: 486564.49,
    trades_count: 22745,
  },
  {
    time_period_start: '2019-02-27T00:00:00.0000000Z',
    time_period_end: '2019-02-28T00:00:00.0000000Z',
    time_open: '2019-02-27T00:00:01.8390000Z',
    time_close: '2019-02-27T23:59:52.0340000Z',
    price_open: 0.002376,
    price_high: 0.0024,
    price_low: 0.002291,
    price_close: 0.002322,
    volume_traded: 442794.02,
    trades_count: 21497,
  },
  {
    time_period_start: '2019-02-28T00:00:00.0000000Z',
    time_period_end: '2019-03-01T00:00:00.0000000Z',
    time_open: '2019-02-28T00:00:02.4510000Z',
    time_close: '2019-02-28T23:59:58.5610000Z',
    price_open: 0.002323,
    price_high: 0.002358,
    price_low: 0.002291,
    price_close: 0.002311,
    volume_traded: 282783.94,
    trades_count: 13629,
  },
  {
    time_period_start: '2019-03-01T00:00:00.0000000Z',
    time_period_end: '2019-03-02T00:00:00.0000000Z',
    time_open: '2019-03-01T00:00:00.6910000Z',
    time_close: '2019-03-01T23:59:45.8900000Z',
    price_open: 0.00231,
    price_high: 0.00241,
    price_low: 0.002284,
    price_close: 0.002339,
    volume_traded: 375216.52,
    trades_count: 19421,
  },
];
