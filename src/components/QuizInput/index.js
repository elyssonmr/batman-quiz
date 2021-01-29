import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function QuizInput({
  placeholder, type, onChange, name, ...props
}) {
  const inputType = type || 'text';

  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={inputType}
      onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

QuizInput.defaultProps = {
  type: 'text',
};

QuizInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default QuizInput;
