import { PicoPlaca } from './pico-placa';

describe('PicoPlaca', () => {
  it('should create an instance', () => {
    expect(new PicoPlaca("PBX-0211", new Date("06-13-2022"), "16:15")).toBeTruthy();
  });
});
