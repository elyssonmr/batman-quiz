import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 0.8;
  }
  display: block;
`;

// eslint-disable-next-line react/prop-types
function QuizButton({ text, type, disabled }) {
  const btnType = type || 'button';

  return (
    <StyledButton type={btnType} disabled={disabled}>
      {text}
    </StyledButton>
  );
}

export default QuizButton;
