import { renderWithQueryClient, screen } from "../../test-utils";
import Card from ".";
describe("Teste do componente Card", () => {
  it("Deve renderizar um Card com parâmetros atualizados", () => {
    const produto = {
      imagem: "imagemDahora",
      nome: "corsa",
      preco: 5000,
      slug: "testLegal",
      categoria: "Carro de luxo",
      descricao: "carro dahora po",
      quantidade: 1337,
      id: "idDiferenciado",
      inCard: false,
    };
    renderWithQueryClient(<Card {...produto} />);

    const nome = screen.getByText("Corsa");
    const preco = screen.getByText("R$ 5.000,00");
    const typeCategoria = screen.getByTestId("typeCategoria");
    const typeNome = screen.getByTestId("typeNome");

    expect(typeCategoria).toHaveTextContent("Carro de luxo"); //*Testa se de fato a categoria do Card é Carro de luxo
    expect(typeNome).toHaveTextContent(/corsa/i); //* se de fato o nome é Corsa porem agr com regex
    expect(nome).toBeInTheDocument(); //*testa se o elemento está no documento
    expect(preco).toBeInTheDocument();
  });
});
