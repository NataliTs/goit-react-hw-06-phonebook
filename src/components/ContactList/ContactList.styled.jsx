import styled from 'styled-components';

export const Contact = styled.li`    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 8px;
    width: 300px;
}`;

export const Number = styled.span`
  font-weight: 600;
`;

export const DeleteBtn = styled.button`
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: ${p => p.theme.colors.backgroundBtn};
  box-shadow: ${p => p.theme.boxShadowBtn};
  :hover {
    background: ${p => p.theme.colors.backgroundBtnHover};
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;
