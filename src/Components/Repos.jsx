import styled from "styled-components";
import PieChart from "./Charts/PieChart";

import { useGlobalContext } from "../Context/Context";

const Repos = () => {
  const { repos } = useGlobalContext();

  let Languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else if (total[language]) {
      total[language] = {
        ...total[language],
        value: total[language].value + 2,
      };
    }
    return total;
  }, {});

  Languages = Object.values(Languages).sort((a, b) => b.value - a.value).slice(0,5);
 

  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "25",
  //   },
  //   {
  //     label: "JavaScript",
  //     value: "60",
  //   },
  //   {
  //     label: "CSS",
  //     value: "10",
  //   },
  //   {
  //     label: "React ",
  //     value: "5",
  //   },
  // ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <PieChart data={Languages} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
