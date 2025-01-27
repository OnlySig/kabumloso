import { render, screen } from "@testing-library/react";
import Departamentos from ".";
describe("Testes do componente Departamentos", () => {
  it("Deve ser renderizado e com o respectivo nome", () => {
    render(<Departamentos />);
    const title = screen.getByTestId("departamentoTitle");
    expect(title).toHaveTextContent("VER DEPARTAMENTOS");
  });
});
