import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

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

  cursor: pointer;
`;

const StyledH1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => navigate(-1)}>
        <IconContext.Provider value={{ color: "#71717a", size: "2rem" }}>
          <FaLongArrowAltLeft />
        </IconContext.Provider>
        <span>Back</span>
      </StyledButton>
      <StyledH1>Quizzies</StyledH1>
      <StyledButton>
        <span>Forward</span>
        <IconContext.Provider value={{ color: "#71717a", size: "2rem" }}>
          <FaLongArrowAltRight />
        </IconContext.Provider>
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
