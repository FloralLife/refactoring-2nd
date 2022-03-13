import { sampleProvinceData } from '../data.js';
import Producer from '../Producer.js';
import Province from '../Province.js';

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toEqual(5);
  });
});
