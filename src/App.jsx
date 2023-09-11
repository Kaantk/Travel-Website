import { useSelector } from "react-redux";
import { Signup } from "./pages/Signup";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.login);
  console.log(isLoggedIn);
  return (
    <>
      <Signup />
    </>
  );
}

export default App;
