import styled from "styled-components";

import Followers from "./Followers";
import Intro from "./Intro";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center user-center">
        <Intro className="item-1" />
        <Followers className="item-2" />
      </Wrapper>
    </section>
  );
};

// const Wrapper = styled.div`
//   padding-top: 2rem;

//   display: grid;
//   gap: 3rem 1rem;

//   @media (min-width: 992px) {
//     // grid-template-columns: 1fr 1fr;
//   }
//   /* align-items: start; */
// `;

const Wrapper = styled.div`
 margin-top:2rem;
`;

export default User;
