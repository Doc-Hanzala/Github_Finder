import loading from "../assets/images/preloader.gif";

import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  console.log(isLoading,error);

  if (isLoading) {
    return (
      <Wrapper>
        <img src={loading} alt="spinner" />;
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h2>{error.message}</h2>
      </Wrapper>
    );
  }
  
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
