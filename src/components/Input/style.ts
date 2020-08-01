import styled, {css} from 'styled-components/native';

interface ContainerProps{
    focado:boolean;
}

export const Container = styled.View<ContainerProps>`

background: #2f363d;
border: 2px solid #2f363d;
padding: 5px;
border-radius: 7px;
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin: 10px 0 15px 0;

${(props) =>
        props.focado &&
        css`
           border-color: #7159c1;
`}

`;


export const CaixaTexto = styled.TextInput`

flex: 1;
color: #fff;
font-size: 20px;
margin-left: 5px;

`;