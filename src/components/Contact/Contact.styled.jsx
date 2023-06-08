import styled from '@emotion/styled';

export const Text = styled.span`
  display: block;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  max-width: 100px;
  padding: 4px 12px;
  background-color: #ffffff;
  border: 1px solid #959595;

  border-radius: 4px;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    background-color: #007bff;
    color: white;
  }
`;
