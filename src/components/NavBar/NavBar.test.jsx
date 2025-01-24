import { screen } from "@testing-library/react";
import NavBar from ".";
import { renderWithQueryClient } from "../../test-utils";
import userEvent from "@testing-library/user-event"; //? Simula a ação de um usuário
import React from "react";

describe("Testes do componente NavBar", () => {
  it("Deve renderizar o titulo do projeto", () => {
    renderWithQueryClient(<NavBar />);
    const navbar = screen.getByText("Kabumloso");
    expect(navbar).toBeInTheDocument();
  });

  describe("Campo texto", () => {
    it("Deve renderizar o campo input", () => {
      renderWithQueryClient(<NavBar />);
      const input = screen.getByPlaceholderText("Buscar produto");
      expect(input).toBeInTheDocument();
    });

    it("deve ter o type text", () => {
      renderWithQueryClient(<NavBar />);
      const input = screen.getByPlaceholderText("Buscar produto");
      expect(input).toHaveAttribute("type", "text");
    });

    it("Deve ser preenchido", async () => {
      renderWithQueryClient(<NavBar />);
      const input = screen.getByPlaceholderText("Buscar produto");
      await userEvent.type(input, "Notebook Ultra");
      expect(input).toHaveValue("Notebook Ultra");
    });
  });
});
