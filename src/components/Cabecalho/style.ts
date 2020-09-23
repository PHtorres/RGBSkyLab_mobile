import styled from 'styled-components/native';

export const Container = styled.View`

flex-direction:row;
justify-content:space-between;
align-items:flex-start;
margin: 10px 5px 10px 0px;

`;


export const UsuarioInfo = styled.View`

flex-direction:row;
justify-content:space-between;
align-items:center;

`;

export const AvatarUsuario = styled.View`

width:50px;
height:50px;
border-radius:25px;
background: #2f363d;
justify-content:center;
align-items:center;
margin-right:10px;

`;


const Texto = styled.Text`

font-size: 20px;

`;

export const TextoUsuarioInfo = styled(Texto)`

color:#fff;

`;

export const TextoAvatarUsuario = styled(Texto)`

color:#7159c1;

`;

