import styled from "styled-components";
import Header from "./Header";
import AppContainer from "./AppContainer";

import AppBackground from "./AppBackground";

const StyledAppLayout = styled.div`
  height: 100vh;
  background-color: #eef2ff;
`;

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledAppContainer>
        <AppContainer />
      </StyledAppContainer>
      <AppBackground />
    </StyledAppLayout>
  );
}
