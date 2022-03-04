import styled from "styled-components";

const gridGap = "30px";

export const StyledAppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
`;
export const StyledGridContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  // margin-top: 14vh;
  width: 100vw;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    margin-top: 20vh;
  }
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    display: grid;
    position: relative;
    margin: 0 auto;
    width: 80vw;
    height: 100%;
    padding-top: 14rem;
    grid-gap: ${gridGap};
    grid-template-columns: repeat(12, 1fr);
  }
`;
export const StyledInnerContainer = styled.section``;
