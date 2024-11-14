import { useState } from "react";
import { fetchLogin } from "../utils/accountService";
import { useAppDispatch } from "../store/store";
import { fetchGetAccount } from "../store/slices/accountSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch()
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          try {
            if (!username || !password)
              throw new Error("all of the fields are required!");
            const [s, e] = await fetchLogin({ username, password });
            if (!s) throw new Error(e);
            alert("succeeded")

            dispatch(fetchGetAccount())
            // navigation
          } catch (err) {
            alert((err as Error).message);
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
