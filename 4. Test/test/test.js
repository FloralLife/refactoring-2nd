import { sampleProvinceData } from '../main.js';
import Producer from '../Producer.js';
import Province from '../Province.js';
import assert from 'assert';

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
