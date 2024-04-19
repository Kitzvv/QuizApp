import styled from "styled-components";
import { PiFilmSlateThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { LuBook } from "react-icons/lu";
import { IconContext } from "react-icons";
import { IoGameControllerOutline, IoLeafOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { StyledLine } from "./Homepage";
import { device } from "../breakpoints";

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

  @media ${device.md} {
    height: 70vh;

    display: flex;
    flex-direction: column;

    overflow: auto;
  }
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

  const categories = [
    { name: "Movies", icon: <PiFilmSlateThin />, id: "movies" },
    { name: "Music", icon: <CiMusicNote1 />, id: "music" },
    { name: "Books", icon: <LuBook />, id: "books" },
    { name: "Games", icon: <IoGameControllerOutline />, id: "games" },
    { name: "Geography", icon: <IoIosGlobe />, id: "geography" },
    {
      name: "Science and Nature",
      icon: <IoLeafOutline />,
      id: "science-and-nature",
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/choose-difficulty/${categoryId}`);
  };

  return (
    <>
      <StyledH1>
        Categories
        <StyledLine />
      </StyledH1>
      <FlexContainer>
        <StyledContainer>
          {categories.map((category) => (
            <CategoryContainer
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <IconContext.Provider value={{ color: "#71717a", size: "6rem" }}>
                {category.icon}
              </IconContext.Provider>
              <StyledCategoryName>{category.name}</StyledCategoryName>
            </CategoryContainer>
          ))}
        </StyledContainer>
      </FlexContainer>
    </>
  );
}

export default Categories;
