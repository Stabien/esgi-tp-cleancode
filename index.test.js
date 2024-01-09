const getBillFromData = require('./index.js');

describe('test getBillFromData', () => { 

    it('should return 100 £', () => {
        const input = {
            prices: [ 5, 7 ],
            quantities: [3, 5],
            reduction: "STANDARD",
            country: "UK"
          }
        expect(getBillFromData(input)).toBe('100 £');
    });

    it('should return 351 $', () => {
        const input = {
            prices: [ 9, 3, 11, 15 ],
            quantities: [3, 7, 2, 4],
            reduction: "TENTH",
            country: "US"
          }
        expect(getBillFromData(input)).toBe('351 $');
    });

    it('should return 18 €', () => {
        const input = {
            prices: [ 2, 4 ],
            quantities: [2, 4],
            reduction: "HALF_FIRST",
            country: "FR"
          }
        expect(getBillFromData(input)).toBe('18 €');
    });

    it('should return 12 €', () => {
      const input = {
          prices: [ 2, 4 ],
          quantities: [2, 4],
          reduction: "HALF_LAST",
          country: "FR"
        }
      expect(getBillFromData(input)).toBe('12 €');
  });

it('should return 165 €', () => {
    const input = {
        prices: [ 10,10,10,10,10,10],
        quantities: [2,3,4,5,6,7],
        reduction: "SPECIAL",
        country: "UK"
      }
    expect(getBillFromData(input)).toBe('165 €');
});
});