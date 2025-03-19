import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "not-authenticated" = "not-authenticated",
}

interface User {
  name: string;
  email: string;
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isCheking: boolean;
  isAuthenticated: boolean;

  //Methods
  LoginWithEmailPassword: (email: string, password: string) => void;
  Logout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus["not-authenticated"]);
    }, 2000);
  }, []);

  const LoginWithEmailPassword = (email: string, password: string) => {
    console.log("password", password)
    setUser({
      name: "Santiago",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const Logout = () => {
    setUser(undefined);
    setStatus(AuthStatus["not-authenticated"]);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,
        //Getter
        isCheking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        //MEthods
        LoginWithEmailPassword,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
