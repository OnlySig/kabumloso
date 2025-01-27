import { render, screen } from "@testing-library/react";
import BtnCard from ".";
import userEvent from "@testing-library/user-event";

describe("Testes do componente BtnCard", () => {
  it("Deve renderizar o botão", () => {
    render(<BtnCard text="clique aqui!" />);
    const botao = screen.getByRole("button", { name: "clique aqui!" });
    expect(botao).toBeInTheDocument();
  });
  it("Deve disparar o evento onClick ao ser clicado", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    render(<BtnCard onClick={onClickMock} text="clique aqui!" />);
    const botao = screen.getByRole("button", { name: "clique aqui!" });
    await user.click(botao);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
