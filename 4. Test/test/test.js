import { beforeEach, expect, test } from '@jest/globals';
import { describe } from 'yargs';
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
