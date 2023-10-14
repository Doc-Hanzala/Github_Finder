import styled from "styled-components";

import Followers from "./Followers";
import Intro from "./Intro";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Intro />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
