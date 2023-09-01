import { styled } from "styled-components";

import LoginHeader from "../components/Headers/LoginHeader";
import StockOrderSection from "../components/StockOrderSection/Index";

const MainPage = () => {
  return (
    <Container>
      <LoginHeader />
      <Main>
        <LeftSection></LeftSection>
        <CentralSection></CentralSection>
        <StockOrderSection />
        <RightSection></RightSection>
      </Main>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.section`
  min-width: 248px;
  height: 100%;
  border: 1px solid black;
`;

export const RightSection = styled.section`
  width: 26%;
  min-width: 400px;
  height: 100%;
  border: 1px solid black;
`;

const CentralSection = styled.section`
  flex: 6.7 0 0;
  min-width: 630px;
  height: 100%;
`;
