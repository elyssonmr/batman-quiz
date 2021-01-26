import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  margin-bottom: 10px;
  font-size: 14px;
`;

// eslint-disable-next-line react/prop-types
function QuizInput({ placeholder, type, onChange }) {
  const inputType = type || 'text';

  return (
    <Input
      placeholder={placeholder}
      type={inputType}
      onChange={onChange}
    />
  );
}

export default QuizInput;
