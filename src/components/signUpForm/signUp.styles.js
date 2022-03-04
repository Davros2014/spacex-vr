import styled from "styled-components";

const StyledSignUpForm = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    padding: 3rem;
  }
  & input {
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    background: rgba(255, 255, 255, 0.1);
    width: 80vw;
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      width: 30vw;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
    }
  }
`;

export default StyledSignUpForm;
