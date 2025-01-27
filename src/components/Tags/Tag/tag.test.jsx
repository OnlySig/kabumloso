import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithQueryClient } from "../../../test-utils";
import Tag from ".";
describe("Deve renderizar o componente tag", () => {
  it("e mockar os eventos de mouse", async () => {
    const user = userEvent.setup();
    const mockMouse = jest.fn();
    renderWithQueryClient(
      <Tag categoria="test" setToggleDepartamento={mockMouse} />
    );
    const tag = screen.getByRole("link");
    expect(tag).toBeInTheDocument();

    await user.hover(tag);
    expect(mockMouse).toHaveBeenCalledWith(true);

    await user.unhover(tag);
    expect(mockMouse).toHaveBeenCalledWith(false);

    expect(mockMouse).toHaveBeenCalledTimes(2);
  });

  it("e ter o href na sua ancora", () => {
    renderWithQueryClient(<Tag categoria="Tecnologia" />);
    const tag = screen.getByRole("link", { name: "Tecnologia" });
    expect(tag).toHaveAttribute("href", "/search/tag/Tecnologia");
  });
});
