import { render, screen } from "@testing-library/react";
import Select from ".";
import userEvent from "@testing-library/user-event";

describe("Deve renderizar o componente Select", () => {
  it("no componente", () => {
    render(<Select label="test" />);
    const select = screen.getByRole("button", { value: "Selecionar" });
    expect(select).toBeInTheDocument();
  });

  it("Deve mockar o prop arry e seu estado", async () => {
    const user = userEvent.setup();
    const mockSelect = ["Tecnologia", "Smartphone", "Periféricos"];
    const mockState = jest.fn();

    render(
      <Select
        arry={mockSelect}
        label="Categorias"
        setSelecionado={mockState}
        selecionado=""
      />
    );
    const select = screen.getByRole("button", { value: "selecionar" });
    await user.click(select);
    const selectList = await screen.findAllByRole("listitem");
    selectList.forEach((list, index) => {
      expect(list).toHaveTextContent(mockSelect[index]);
    });
    await user.click(selectList[0]);
    expect(mockState).toHaveBeenCalledWith("Tecnologia");
  });
});
