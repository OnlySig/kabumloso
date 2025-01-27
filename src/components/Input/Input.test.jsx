import { render, screen } from "@testing-library/react";
import Input from ".";
import userEvent from "@testing-library/user-event";
describe("Deve renderizar input", () => {
  it("E ter o devido comportamento de um input controlado", async () => {
    const user = userEvent.setup();
    const mockSetType = jest.fn();
    render(
      <Input
        placeholder="testando componente de 80 linhas kkkkkkkkk"
        setValue={mockSetType}
        value=""
        required
      />
    );
    const input = screen.getByPlaceholderText(
      "testando componente de 80 linhas kkkkkkkkk"
    );
    await user.type(input, "Teste");
    expect(mockSetType).toHaveBeenCalledTimes(5);
    expect(mockSetType).toHaveBeenCalledWith("t");
    expect(mockSetType).toHaveBeenCalledWith("e");
    expect(mockSetType).toHaveBeenCalledWith("s");
    expect(mockSetType).toHaveBeenCalledWith("t");
    expect(mockSetType).toHaveBeenCalledWith("e");
  });

  it("Com os props label e isLabel", () => {
    render(<Input isLabel TxtContentLabel="testando essa label dahora" />);
    const isLabel = screen.getByText("testando essa label dahora");
    expect(isLabel).toBeInTheDocument();
    expect(isLabel).toHaveTextContent("testando essa label dahora");
  });

  it("Com os props addBtn e children, e botão deve ser clicado uma vez", async () => {
    const user = userEvent.setup();
    const mockClick = jest.fn();
    render(
      <Input placeholder="testando botão" addBtn onClick={mockClick}>
        Botão legal
      </Input>
    );
    const btnInput = screen.getByRole("button", { name: "Botão legal" });
    await user.click(btnInput);
    expect(btnInput).toBeInTheDocument();
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("Com os props type e valores numéricos", async () => {
    const user = userEvent.setup();
    const mockSetValue = jest.fn();
    render(
      <Input
        placeholder="testando type"
        type="number"
        value={0}
        setValue={mockSetValue}
        required
      />
    );
    const input = screen.getByPlaceholderText("testando type");
    await user.type(input, "123abc");
    expect(input).toHaveAttribute("type", "number");
    expect(mockSetValue).toHaveBeenCalledWith(1);
    expect(mockSetValue).toHaveBeenCalledWith(2);
    expect(mockSetValue).toHaveBeenCalledWith(3);
    expect(mockSetValue).not.toHaveBeenCalledWith("a");
    expect(mockSetValue).not.toHaveBeenCalledWith("b");
    expect(mockSetValue).not.toHaveBeenCalledWith("c");
  });

  it("Com associação entre o id do input e o htmlfor do label", () => {
    render(
      <Input
        id="testLabel"
        placeholder="inputAqui"
        isLabel
        TxtContentLabel="Label"
      />
    );
    const label = screen.getByText("Label");
    const input = screen.getByPlaceholderText("inputAqui");
    expect(input).toHaveAttribute("id", "testLabel");
    expect(label).toHaveAttribute("for", "testLabel");
  });

  it("Com diferença entre componentes com a prop isSearch e sem", () => {
    render(<Input placeholder="comp01" required />);
    render(<Input placeholder="comp02" required isSearch />);

    const search1 = screen.getByPlaceholderText("comp01");
    const search2 = screen.getByPlaceholderText("comp02");

    expect(search1).toHaveClass(
      "outline-none border-[2px] hover:border-[#98D8EF] focus:border-[#98D8EF] rounded-sm mb-2 p-1 text-[#535252]"
    );
    expect(search2).toHaveClass(
      "bg-white w-full p-2 rounded-l-lg outline-none"
    );
  });
});
