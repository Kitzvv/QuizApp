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
import "../ui/IconsStyling.css";

const StyledCategoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.lgPhones} {
    gap: 0.1rem;

    justify-content: start;
  }

  @media ${device.md} {
    gap: 12rem;
  }

  @media ${device.md} and (orientation: landscape) {
    gap: 0rem;
  }

  @media ${device.sm} {
    gap: 0rem;
    justify-content: start;
  }

  @media ${device.xs} {
    justify-content: start;
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

  @media ${device.lgPhones} {
    font-size: 2.5rem;
    margin-top: 0rem;
  }

  @media ${device.md} and (orientation: landscape) {
    font-size: 2.3rem;
  }

  @media ${device.sm} {
    margin-top: 1rem;
    gap: 1rem;
    font-size: 3rem;
  }

  @media ${device.xs} {
    margin-top: 0rem;
    gap: 1rem;
    font-size: 2.5rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  border-radius: 2rem;

  height: 50rem;
  width: 100%;

  display: grid;
  justify-items: center;
  align-items: center;

  padding: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.lgPhones} {
    width: 100%;
    padding: 1rem;
    height: 25rem;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-row: repeat(2, 1fr);
  }

  @media ${device.lg} and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.md} and (orientation: landscape) {
    height: 20rem;
    gap: 0.5rem;
  }

  @media ${device.sm} {
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

const CategoryContainer = styled.div`
  border: 2px solid #d4d4d4;
  height: 20rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media ${device.lgPhones} {
    height: 10rem;
    width: 100%;
    justify-content: center;
  }

  @media ${device.md} and (orientation: landscape) {
    height: 8rem;
    width: 100%;
  }

  @media ${device.xs} {
    height: 13rem;
  }
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
  text-align: center;

  @media ${device.lgPhones} {
    font-size: 1.3rem;
  }

  @media ${device.sm} {
    font-size: 2rem;
  }
  @media ${device.xs} {
    font-size: 1.5rem;
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
              <IconContext.Provider value={{ className: "Icon" }}>
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
