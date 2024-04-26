import { IconContext } from "react-icons";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { device } from "../breakpoints";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  border: 1px solid #71717a;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  font-weight: 300;

  position: absolute;
  top: 3rem;
  left: 3rem;

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media ${device.sm} {
    position: fixed;
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    top: 2rem;
    left: 2rem;
  }
`;

function Button() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== "/")
    return (
      <StyledButton onClick={() => navigate(-1)}>
        <IconContext.Provider value={{ color: "#71717a", size: "2rem" }}>
          <FaLongArrowAltLeft />
        </IconContext.Provider>
        <span>Back</span>
      </StyledButton>
    );
}

export default Button;
