import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  gap: 10px;
  color: ${p => p.theme.colors.secondaryText};
`;

export const InputFilter = styled.input`
  width: 200px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: ${p => p.theme.borderInput};
  background: ${p => p.theme.colors.backgroundInput};
  border-radius: 8px;
`;
