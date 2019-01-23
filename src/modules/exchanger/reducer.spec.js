import { setAmount, setOutcome } from './reducer'

describe('exchanger reducers', () => {
  describe('setAmount', () => {
    const initial = {
      from: 'USD',
      to: 'EUR',
      amount: '',
      outcome: '',
    };

    it('should set amount without any transformation ', () => {
      expect(
        setAmount(initial, {
          type: 'test',
          data: { value: '100,00', rate: 0.5 }
        }).amount
      ).toBe('100,00');
    });

    it('should update amount and outcome adequately ', () => {
      expect(
        setAmount(initial, {
          type: 'test',
          data: { value: '100', rate: 0.5 }
        })
      ).toEqual({
        from: 'USD',
        to: 'EUR',
        amount: '100',
        outcome: 50,
      });
    });

    it("should fallback outcome to 0 if amount is incorrect number", () => {
      expect(
        setAmount(initial, {
          type: 'test',
          data: { value: 'notANumber', rate: 0.5 }
        }).outcome
      ).toBe(0);
    });

    it("should fallback outcome to 0 if amount is negative", () => {
      expect(
        setAmount(initial, {
          type: 'test',
          data: { value: '-100', rate: 0.5 }
        }).outcome
      ).toBe(0);
    })
  });

  describe('setOutcome', () => {
    const initial = {
      from: 'USD',
      to: 'EUR',
      amount: '',
      outcome: '',
    };

    it('should set outcome without any transformation ', () => {
      expect(
        setOutcome(initial, {
          type: 'test',
          data: { value: '100,00', rate: 0.5 }
        }).outcome
      ).toBe('100,00');
    });

    it('should update outcome and amount adequately ', () => {
      expect(
        setOutcome(initial, {
          type: 'test',
          data: { value: '100', rate: 0.5 }
        })
      ).toEqual({
        from: 'USD',
        to: 'EUR',
        amount: 200,
        outcome: '100',
      });
    });

    it("should fallback amount to 0 if outcome is incorrect number", () => {
      expect(
        setOutcome(initial, {
          type: 'test',
          data: { value: 'notANumber', rate: 0.5 }
        }).amount
      ).toBe(0);
    });

    it("should fallback amount to 0 if outcome is negative", () => {
      expect(
        setOutcome(initial, {
          type: 'test',
          data: { value: '-100', rate: 0.5 }
        }).amount
      ).toBe(0);
    })
  })
});