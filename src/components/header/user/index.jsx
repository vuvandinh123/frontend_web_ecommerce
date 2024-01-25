import { useAuth } from "../../../hooks";
import {  useState } from "react";
import LoginUser from "./User.jsx";
import NoUser from "./NoUser.jsx";

const User = () => {
  const tok = JSON.parse(sessionStorage.getItem("token"));
  const [token, setToken] = useState(tok);

  
  const { user } = useAuth(token?.access_token);
  if (!token) {
    return <NoUser />;
  }
  return (
    <>
      <LoginUser user={user} />
    </>
  );
};

export default User;
