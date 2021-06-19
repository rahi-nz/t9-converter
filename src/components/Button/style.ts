import styled from 'styled-components';
interface Prop {
  readonly disabled: boolean;
}
export const DialBtn = styled.button<Prop>`
  padding: 10px;
  border: 1px solid #bbbbbb;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 5px;
  background: #fff;
  ${props => {
    if (props.disabled)
      return `
          cursor: default;
        `;
  }}
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Subtitle = styled.div`
  font-size: 12px;
`;
