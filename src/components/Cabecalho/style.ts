import styled from 'styled-components/native';

export const Container = styled.View`

flex-direction:row;
justify-content:space-between;
align-items:flex-start;
margin: 10px 5px 10px 0px;

`;


export const UsuarioInfo = styled.View`

justify-content:space-between;
align-items:flex-end;

`;


const Texto = styled.Text`

font-size: 20px;

`;

export const TextoUsuarioInfo = styled(Texto)`

color:#fff;

`;


export const BotaoSair = styled.TouchableOpacity`

margin: 5px 0 5px 0;

`;


export const TextoBotaoSair = styled(Texto)`

color:#7159c1;

`;

