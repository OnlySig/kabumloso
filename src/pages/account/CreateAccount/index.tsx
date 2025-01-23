import { useState } from "react";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-start w-[300px] mx-auto bg-white p-4 rounded shadow-lg">
      <form className="w-full">
        <h2 className="text-center mb-1">Crie sua conta</h2>
        <Input
          value={username}
          setValue={(e) => setUsername(e)}
          placeholder="Digite seu username"
          TxtContentLabel="Username"
          id="username"
          required
          isLabel
        />
        <Input
          value={email}
          setValue={(e) => setEmail(e)}
          placeholder="Digite seu email"
          TxtContentLabel="Email"
          id="email"
          required
          isLabel
        />
        <Input
          value={password}
          setValue={(e) => setPassword(e)}
          placeholder="Digite sua senha"
          TxtContentLabel="Password"
          id="password"
          required
          isLabel
        />
        <div className="flex justify-between items-center w-full">
          <Link className="text-sm" to={"/account/login"}>
            Ja tem uma conta?
          </Link>
          <button className="text-sm bg-blue-600 px-3 py-2 text-white font-bold rounded">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
