import styled from 'styled-components';

interface Prop {
  readonly enable: boolean;
}

export const Filter = styled.section`
  width: 200px;
  padding: 20px;
`;

export const Container = styled.section`
  width: 240px;
  background: #fff;
  border-radius: 40px;
  border: 1px solid #48b8a5;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`;

export const Input = styled.input`
  width: 170px;
  border: none;
  padding: 30px;
  border-radius: 40px;
  font-size: 18px;
  margin: 5px;
  :focus-visible {
    outline: none;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  overflow: scroll;
  min-height: 60px;
`;

export const Word = styled.div`
  padding: 10px;
  background: #e0e0e0;
  margin: 10px;
  border-radius: 10px;
`;

export const Row = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ClearBtn = styled.div<Prop>`
  ${props => {
    if (props.enable)
      return `
          cursor: pointer;
        `;
  }}
`;

export const KeyPadContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;