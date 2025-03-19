import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isCheking, isAuthenticated, LoginWithEmailPassword, user, Logout } = useAuthContext();

  if (isCheking) {
    return <span>Checking...</span>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
          <button 
            onClick={() => Logout()}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2">
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Login</h3>

          <button 
            onClick={() => LoginWithEmailPassword("santiago@gmail.com", "123456")}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2">
            Ingresar
          </button>
        </>
      )}
    </>
  );
};

export default LoginPage;
