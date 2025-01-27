import { ConvertedCurrent } from "./ConvertedCurrent";

describe("Testando funções utilitárias", () => {
  it("ConvertedCurrent deve formatar números para valores monetários", () => {
    const valor = 1000;
    const mockConverdedCurrent = ConvertedCurrent(valor);

    expect(mockConverdedCurrent.replace(/\s/g, "")).toBe(
      "R$1.000,00".replace(/\s/g, "")
    );
    expect(mockConverdedCurrent.includes("R$")).toBe(true);
    expect(mockConverdedCurrent.endsWith(",00")).toBe(true);
  });
});
