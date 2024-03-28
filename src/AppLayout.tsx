import styled from "styled-components";
import Header from "./Header";

import AppContainer from "./AppContainer";

const StyledAppLayout = styled.div`
  height: 100vh;
  background-color: #eef2ff;
`;

const StyledBlueBackground = styled.div`
  background-color: #c7d2fe;
  position: absolute;
  bottom: 0;
  height: 20rem;
  width: 100%;
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
      <StyledBlueBackground />
    </StyledAppLayout>
  );
}
