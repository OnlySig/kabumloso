import { render, screen } from "@testing-library/react";
import Title from ".";
describe("Deve renderizar o componente TitleWithIcon", () => {
  it("com os props necessários", () => {
    render(<Title title="Teste legal">"teste legal"</Title>);
    const title = screen.getByText("Teste legal");
    expect(title).toHaveTextContent("Teste legal");
  });
});
