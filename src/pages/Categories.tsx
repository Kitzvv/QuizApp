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

const StyledCategoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media ${device.xs} {
    overflow: scroll;
  }
`;

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
  justify-items: center;
  align-items: center;

  padding: 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media ${device.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    height: 100%;
  }

  @media ${device.md} and (orientation: landscape) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media ${device.xs} {
    gap: 1rem;
  }

  @media ${device.lgPhones} {
    overflow-y: scroll;
    height: 20rem;
  }
`;

const CategoryContainer = styled.div`
  border: 2px solid #d4d4d4;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media ${device.md} and (orientation: landscape) {
    max-height: 5rem;
  }

  @media ${device.xs} {
    overflow-y: auto;
    align-content: center;
    justify-content: center;
    max-height: 15rem;
    width: 15rem;
  }

  @media not ${device.xs} {
    height: 20rem;
  }
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
  text-align: center;

  @media ${device.xs} {
    font-size: 1.6rem;
  }

  @media ${device.md} and (orientation: landscape) {
    font-size: 1.6rem;
  }
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
    <StyledCategoriesContainer>
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
    </StyledCategoriesContainer>
  );
}

export default Categories;
