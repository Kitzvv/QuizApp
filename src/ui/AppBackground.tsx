import styled from "styled-components";

const StyledAppBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50vh;
  width: 100%;
  background-color: #c7d2fe;
`;

const StyledWaveTop = styled.div`
  height: 20rem;
  width: 100%;
  top: 30%;
  position: absolute;
  background-image: url("/public/wave-1.svg");
`;

const StyledWaveMiddle = styled.div`
  height: 20rem;
  width: 100%;
  top: 50%;
  position: absolute;
  background-image: url("/public/wave-2.svg");
`;

const StyledMiddleBox = styled.div`
  height: 40rem;
  width: 100%;
  top: 74%;
  position: absolute;
  background-color: #a5b4fc;
`;

const StyledWaveBottom = styled.div`
  height: 20rem;
  width: 100%;
  top: 76%;
  position: absolute;
  background-image: url("/public/wave-3.svg");
`;

function AppBackground() {
  return (
    <>
      <StyledAppBackground />
      <StyledWaveTop />
      <StyledWaveMiddle />
      <StyledMiddleBox />
      <StyledWaveBottom />
    </>
  );
}

export default AppBackground;
