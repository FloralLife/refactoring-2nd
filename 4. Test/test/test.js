import { beforeEach, expect, test } from '@jest/globals';
import { sampleProvinceData } from '../data.js';
import Province from '../Province.js';

describe('province', function () {
  let asia;

  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  test('shortfall', function () {
    expect(asia.shortfall).toEqual(5);
  });

  test('profit', function () {
    expect(asia.profit).toEqual(230);
  });

  test('change production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });
});

describe('no producers', function () {
  let noProducers;

  beforeEach(function () {
    const data = {
      name: 'No producers',
      producer: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  });

  test('shortfall', function () {
    expect(noProducers.shortfall).toEqual(30);
  });

  test('profit', function () {
    expect(noProducers.profit).toEqual(0);
  });
});
