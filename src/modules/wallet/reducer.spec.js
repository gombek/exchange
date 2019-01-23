import { setBalance, exchange } from './reducer'

describe('wallet reducers', () => {
  describe('setBalance', () => {
    const initial = new Map([
      ['USD', { balance: 0 }],
      ['EUR', { balance: 100 }],
    ]);

    it('should update balance', () => {
      expect(
        setBalance(initial, {
          type: 'test.1',
          data: { currency: 'USD', balance: 100 }
        })
      ).toEqual(new Map([
        ['USD', { balance: 100 }],
        ['EUR', { balance: 100 }],
      ]));
    });

    it("should not change state if it doesn't exist", () => {
      expect(
        setBalance(initial, {
          type: 'test.2',
          data: { currency: 'PLN', balance: 100 }
        })
      ).toEqual(initial);
    })
  });

  describe('exchange', () => {
    const initial = new Map([
      ['USD', { balance: 0 }],
      ['EUR', { balance: 100 }],
    ]);

    it('should update balances', () => {
      expect(
        exchange(initial, {
          type: 'test.1',
          data: { from: 'EUR', to: 'USD', rate: '2', amount: 100 }
        })
      ).toEqual(new Map([
        ['USD', { balance: 200 }],
        ['EUR', { balance: 0 }],
      ]));
    });

    it('should not produce negative balances', () => {
      expect(
        exchange(initial, {
          type: 'test.2',
          data: { from: 'EUR', to: 'USD', rate: '2', amount: 150 }
        })
      ).toEqual(new Map([
        ['USD', { balance: 200 }],
        ['EUR', { balance: 0 }],
      ]));
    });

    it("should not change state if from-currency doesn't exist", () => {
      expect(
        exchange(initial, {
          type: 'test.3',
          data: { from: 'PLN', to: 'USD', rate: '2', amount: 100 }
        })
      ).toEqual(initial);
    });

    it("should not change state if to-currency doesn't exist", () => {
      expect(
        exchange(initial, {
          type: 'test.4',
          data: { from: 'EUR', to: 'PLN', rate: '2', amount: 100 }
        })
      ).toEqual(initial);
    });

    it("should not allow negative amount", () => {
      expect(
        exchange(initial, {
          type: 'test.5',
          data: { from: 'EUR', to: 'PLN', rate: '2', amount: -100 }
        })
      ).toEqual(initial);
    })
  })
});