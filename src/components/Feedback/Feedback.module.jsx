import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  background: ;
`;

export const FeedbackMain = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;
  color: white;
  font-family: 'Raleway';
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientBorder = styled.div`
  background: #1d1f20;
  position: relative;
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    height: calc(100% + 6px);
    width: calc(100% + 6px);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: 6px;
    z-index: -1;
    animation: ${gradientAnimation} 3s ease infinite alternate;
    background-size: 300% 300%;
  }
`;

export const ButtonListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Button = styled.button`
  flex: 1;
  margin: 0 15px;
  box-shadow: 0 5px 15px 0 #ffffff;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.5s;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 #ffffff;
  }
`;

export const FeedbackStatisticsItem = styled.span`
  font-size: 20px;
`;

export const FeedbackTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const SectionStyled = styled.div``;

export const StateList = styled.div``;

export const StateItem = styled.p`
  font-size: 20px;
  margin: 10px;
`;
//You need to enable JavaScript to run this app.
