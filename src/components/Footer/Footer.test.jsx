import { render, screen } from "@testing-library/react";
import Footer from ".";
describe("Teste do componente Footer", () => {
  it("Deve renderizar o texto 'SIGA-ME'", () => {
    render(<Footer />);
    const title = screen.getByText("SIGA-ME");
    expect(title).toBeInTheDocument();
  });

  it("Deve renderizar três ancoras", () => {
    const mocksAnchors = [
      "https://www.instagram.com/gacastropereira/",
      "https://www.linkedin.com/in/gabriel-castro-pereira21/",
      "https://github.com/OnlySig",
    ];
    render(<Footer />);
    const anchors = screen.getAllByRole("link");
    const renderAnchorsHref = anchors.map((a) => a.href);
    expect(renderAnchorsHref).toEqual(mocksAnchors);
  });
});
