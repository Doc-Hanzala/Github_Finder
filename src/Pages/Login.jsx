import LoginImg from "../assets/images/login-img.svg";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={LoginImg} alt="logIn Image" />
        <h1>github user</h1>
        <Link onClick={() => loginWithRedirect()} className="btn">
          log in / sign up
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 32rem;
    text-align: center;
  }
  h1 {
    margin: 1rem 0rem;
  }
`;

export default Login;
