import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../breakpoints";

const StyledAppContainer = styled.div`
  background-color: #f5f5f5;
  height: 65rem;
  width: 95rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 50;
  position: relative;

  @media ${device.lg} {
    height: 100vh;
    width: 100vh;
  }
`;

export default function AppContainer() {
  const location = useLocation();

  return (
    <StyledAppContainer>
      {!location.pathname.includes("quiz") &&
        !location.pathname.includes("finish") &&
        !location.pathname.includes("404") && <Button />}
      <Outlet />
    </StyledAppContainer>
  );
}
