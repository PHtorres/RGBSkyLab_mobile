import styled, { css } from 'styled-components/native';

interface ContainerProps {
    habilitado: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`

margin: 10px 0 10px 0;
background:#413568;
border: 0;
padding: 10px 0 10px 0;
border-radius: 8px;
justify-content:center;
align-items:center;
width:100%;
  

${(props) =>
        props.habilitado &&
        css`background:#7159c1;`
    }

`;

export const TextoBotao = styled.Text`

color: #fff;
font-size: 20px;
`;
