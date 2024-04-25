import styled from "styled-components";
import { device } from "../breakpoints";

const StyledAppBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50vh;
  width: 100%;
  background-color: #c7d2fe;
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledWaveTop = styled.div`
  height: 20rem;
  width: 100%;
  top: 30%;
  position: absolute;
  background-image: url("/wave-1.svg");
  /* background-size: cover; */

  @media ${device.xxl} {
    height: 30rem;
    top: 25%;
    background-size: cover;
  }

  @media ${device.lg} {
    background-size: contain;
    height: 30rem;
    top: 37%;
  }

  @media ${device.md} {
    height: 25rem;
    top: 35%;
  }

  @media ${device.sm} {
    height: 20rem;
    top: 30%;
  }

  @media ${device.xs} {
    height: 15rem;
    top: 20%;
  }

  @media ${device.lgPhones} {
    height: 25rem;
    top: 25%;
  }
`;

const StyledWaveMiddle = styled.div`
  height: 20rem;
  width: 100%;
  top: 50%;
  position: absolute;
  background-image: url("/wave-2.svg");

  @media ${device.xxl} {
    top: 52%;
  }

  @media ${device.lg} {
    height: 20rem;
    top: 57%;
  }

  @media ${device.md} {
    height: 15rem;
    top: 45%;
  }

  @media ${device.sm} {
    height: 10rem;
    top: 40%;
  }

  @media ${device.xs} {
    height: 8rem;
    top: 35%;
  }

  @media ${device.lgPhones} {
    height: 15rem;
    top: 45%;
  }
`;

const StyledMiddleBox = styled.div`
  height: 40rem;
  width: 100%;
  top: 74%;
  position: absolute;
  background-color: #a5b4fc;

  @media ${device.xxl} {
    height: 50rem;
    top: 70%;
  }

  @media ${device.lg} {
    height: 60rem;
    top: 70%;
  }

  @media ${device.md} {
    height: 35rem;
    top: 60%;
  }

  @media ${device.sm} {
    height: 30rem;
    top: 60%;
  }

  @media ${device.xs} {
    height: 25rem;
    top: 55%;
  }

  @media ${device.lgPhones} {
    height: 30rem;
    top: 65%;
  }
`;

const StyledWaveBottom = styled.div`
  height: 20rem;
  width: 100%;
  top: 76%;
  position: absolute;
  background-image: url("/wave-3.svg");

  @media ${device.xxl} {
    height: 30rem;
    top: 75%;
  }

  @media ${device.lg} {
    top: 87%;
    height: 20rem;
  }

  @media ${device.md} {
    height: 25rem;
    top: 80%;
  }

  @media ${device.sm} {
    height: 15rem;
    top: 70%;
  }

  @media ${device.xs} {
    height: 10rem;
    top: 65%;
  }

  @media ${device.lgPhones} {
    height: 20rem;
    top: 75%;
  }
`;

function AppBackground() {
  return (
    <>
      <BackgroundContainer>
        <StyledAppBackground />
        <StyledWaveTop />
        <StyledWaveMiddle />
        <StyledMiddleBox />
        <StyledWaveBottom />
      </BackgroundContainer>
    </>
  );
}

export default AppBackground;
