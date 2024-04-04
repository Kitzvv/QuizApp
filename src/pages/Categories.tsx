import styled from "styled-components";
import { PiFilmSlateThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { LuBook } from "react-icons/lu";
import { IconContext } from "react-icons";
import { IoGameControllerOutline, IoLeafOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  border-radius: 2rem;

  height: 50rem;
  width: 90%;

  display: grid;

  padding: 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CategoryContainer = styled.div`
  border: 2px solid #d4d4d4;

  height: 20rem;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
`;

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/difficulty/${category}`);
  };

  return (
    <>
      <StyledH1>Categories</StyledH1>
      <FlexContainer>
        <StyledContainer>
          <CategoryContainer onClick={() => handleCategoryClick("movies")}>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <PiFilmSlateThin />
            </IconContext.Provider>
            <StyledCategoryName>Movies</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer onClick={() => handleCategoryClick("music")}>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <CiMusicNote1 />
            </IconContext.Provider>
            <StyledCategoryName>Music</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer onClick={() => handleCategoryClick("books")}>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <LuBook />
            </IconContext.Provider>
            <StyledCategoryName>Books</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer onClick={() => handleCategoryClick("games")}>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <IoGameControllerOutline />
            </IconContext.Provider>
            <StyledCategoryName>Games</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer onClick={() => handleCategoryClick("geography")}>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <IoIosGlobe />
            </IconContext.Provider>
            <StyledCategoryName>Geography</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer
            onClick={() => handleCategoryClick("science-and-nature")}
          >
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <IoLeafOutline />
            </IconContext.Provider>
            <StyledCategoryName>Science and Nature</StyledCategoryName>
          </CategoryContainer>
        </StyledContainer>
      </FlexContainer>
    </>
  );
}

export default Categories;
