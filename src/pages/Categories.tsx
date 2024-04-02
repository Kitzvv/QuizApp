import styled from "styled-components";
import { PiFilmSlateThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { LuBook } from "react-icons/lu";
import { IconContext } from "react-icons";
import { IoGameControllerOutline, IoLeafOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";

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

  background-color: #fafafa;
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
  return (
    <>
      <StyledH1>Categories</StyledH1>
      <FlexContainer>
        <StyledContainer>
          <CategoryContainer>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <PiFilmSlateThin />
            </IconContext.Provider>
            <StyledCategoryName>Movies</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <CiMusicNote1 />
            </IconContext.Provider>
            <StyledCategoryName>Music</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <LuBook />
            </IconContext.Provider>
            <StyledCategoryName>Books</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <IoGameControllerOutline />
            </IconContext.Provider>
            <StyledCategoryName>Games</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer>
            <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
              <IoIosGlobe />
            </IconContext.Provider>
            <StyledCategoryName>Geography</StyledCategoryName>
          </CategoryContainer>

          <CategoryContainer>
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
