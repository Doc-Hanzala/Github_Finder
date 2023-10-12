import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>sorry, page is not found</h2>
      </div>
      <Link to="/" className="btn">
        {" "}
        back to home{" "}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
  }
`;
export default Error;
