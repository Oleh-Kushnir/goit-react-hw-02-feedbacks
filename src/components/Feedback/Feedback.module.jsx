import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e90ff;
`;

export const FeedbackMain = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #ccc;
  padding: 20px;
  color: white;
  font-family: 'Raleway';
  background-color: #7b68ee;
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
  /* Add border type */
  border: 3px solid transparent;
  background: #1d1f20;
  position: relative;
  border-radius: 3px; /* Set your preferred border radius */

  &:after {
    content: '';
    position: absolute;
    top: -3px; /* Use the border value as a negative offset */
    left: -3px; /* Use the border value as a negative offset */
    height: calc(100% + 6px); /* Adjust height based on border value */
    width: calc(100% + 6px); /* Adjust width based on border value */
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
    border-radius: 6px; /* Use double the border width for border-radius */
    z-index: -1;
    animation: ${gradientAnimation} 3s ease infinite alternate; /* removed alternate */
    background-size: 300% 300%;
  }
`;

// // Использование компонента GradientBorder:
// const YourComponent = () => {
//   return (
//     <GradientBorder>
//       {/* Ваш контент здесь */}
//     </GradientBorder>
//   );
// };
