import styled from "styled-components";
import PieChart from "./Charts/PieChart";

import { useGlobalContext } from "../Context/Context";
import DoughnutChart from "./Charts/Doughnut";
import ColumnChart from "./Charts/Column";
import BarChart from "./Charts/Bar";

const Repos = () => {
  const { repos } = useGlobalContext();

  const Languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else if (total[language]) {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const { forks, stars } = repos.reduce(
    (total, item) => {
      let { stargazers_count, forks_count, name } = item;

      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      total.forks[forks_count] = { label: name, value: forks_count };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  // most popular
  const mostPopular = Object.values(stars).slice(-5).reverse();

  // most forked
  const mostForked = Object.values(forks).slice(-5).reverse();

  // most used languages
  const mostUsedLanguages = Object.values(Languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // most stars per lang
  const mostStars = Object.values(Languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  return (
    <section className="section">
      <Wrapper className="section-center">
        <PieChart data={mostUsedLanguages} />
        <ColumnChart data={mostPopular} />
        <DoughnutChart data={mostStars} />
        <BarChart data={mostForked} />
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
