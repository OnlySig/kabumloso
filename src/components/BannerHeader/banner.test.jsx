const { render, screen } = require("@testing-library/react");
import Banner from ".";

describe("testes do componente banner", () => {
  it("Deve renderizar no documento", () => {
    render(<Banner />);
    const banner = screen.getByRole("img");
    console.log(banner.className);
    expect(banner).toBeInTheDocument();
  });

  test("Deve renderizar seu style", () => {
    render(<Banner />);
    const banner = screen.getByRole("img");
    expect(banner.className).toBe(
      "w-full lg:h-[400px] xl:h-[440px] 2xl:h-[500px]"
    );
  });
});
