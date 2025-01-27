import { Link, useNavigate, useParams } from "react-router-dom";
import useProdutosMutation, {
  useGetProdutos,
} from "../../../hooks/useProdutosMutation";
import Input from "../../../components/Input";
import Spinner from "../../../components/Spinner";
import { useEffect, useMemo, useState } from "react";
import { IProdutos } from "../../../types/IProdutos";
import { useProdutosCategorias } from "../../../hooks/useProdutos";
import Select from "../../../components/Select";

const UpsertForm = () => {
  const { id } = useParams();
  const navegar = useNavigate();
  const { data, isLoading, isFetching } = useGetProdutos(id ?? "");
  const { mutate: upsertProduto } = useProdutosMutation();
  const produto: IProdutos = useMemo(() => data?.data?.[0] ?? {}, [data]);
  const isUpdate = Object.keys(produto).length ? true : false;
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImg] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQtd] = useState(0);
  const categorias = useProdutosCategorias();
  useEffect(() => {
    if (isUpdate) {
      setNome(produto.nome || "");
      setCategoria(produto.categoria || "");
      setDescricao(produto.descricao || "");
      setImg(produto.imagem || "");
      setPreco(produto.preco || 0);
      setQtd(produto.quantidade || 0);
    }
    if (id && Object.keys(produto).length <= 0 && !isFetching) {
      alert("Produto não encontrado!");
      navegar("/admin/dashboard");
    }
  }, [produto, isUpdate, id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdate) {
      return upsertProduto({
        action: "edit",
        value: {
          nome,
          categoria,
          descricao,
          imagem,
          preco,
          quantidade,
          id,
          slug: produto.slug,
        },
        id: produto.id,
      });
    }
    return upsertProduto({
      action: "new",
      value: {
        nome,
        categoria,
        descricao,
        imagem,
        preco,
        quantidade,
        slug: nome.toLowerCase().replaceAll(" ", "-"),
      },
    });
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <form
        className="h-screen flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[700px] max-md:w-full bg-white p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <h2>
              {isUpdate
                ? `Atualize produto ${produto.nome}`
                : "Crie um produto"}
            </h2>
            <Link to={"/admin/dashboard"}>dashboard</Link>
          </div>
          <div className="flex justify-between gap-4">
            <Input
              id="nome"
              placeholder="nome do produto"
              setValue={(e) => setNome(e)}
              value={nome}
              TxtContentLabel="Nome do produto"
              required
              isLabel
            />
            <Select
              arry={categorias}
              label="Categoria"
              selecionado={categoria}
              setSelecionado={(e) => setCategoria(e)}
            />
          </div>
          <Input
            id="produto"
            placeholder="descrição do produto"
            setValue={(e) => setDescricao(e)}
            value={descricao}
            TxtContentLabel="Descrição do produto"
            required
            isLabel
          />
          <Input
            id="imagem"
            placeholder="src da imagem do produto"
            setValue={(e) => setImg(e)}
            value={imagem}
            TxtContentLabel="Imagem do produto"
            required
            isLabel
          />
          <Input
            id="preco"
            placeholder="preço do produto"
            setValue={(e) => setPreco(e)}
            value={Number(preco)}
            TxtContentLabel="Preço do produto"
            required
            isLabel
            type="number"
          />
          <Input
            id="qtd"
            placeholder="quantidade do produto"
            setValue={(e) => setQtd(e)}
            value={quantidade}
            TxtContentLabel="Quantidade do produto"
            required
            isLabel
            type="number"
          />
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="rounded border text-white font-bold bg-[#98D8EF] px-6 py-2"
            >
              {isUpdate ? "Atualizar" : "Criar"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpsertForm;
