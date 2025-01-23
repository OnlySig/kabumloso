import { useState } from "react";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-start w-[300px] mx-auto bg-white p-4 rounded shadow-lg">
      <form className="w-full">
        <Input
          placeholder="Digite seu login"
          id="Login"
          value={username}
          setValue={(e) => setUsername(e)}
          TxtContentLabel="Login"
          required
          isLabel
        />
        <Input
          placeholder="Digite sua senha"
          id="Senha"
          value={password}
          setValue={(e) => setPassword(e)}
          TxtContentLabel="Senha"
          type="password"
          required
          isLabel
        />
        <div className="flex justify-between items-center w-full">
          <Link to={"/account/create-account"} className="text-sm">
            Não tem uma conta?
          </Link>
          <button className="text-sm bg-blue-600 px-3 py-2 text-white font-bold rounded">
            Fazer login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
