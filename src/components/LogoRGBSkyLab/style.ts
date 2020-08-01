import styled from 'styled-components/native';

export const Container = styled.View`
margin:5px;
display:flex;
flex-direction:row;
`;

const LogoBase = styled.Text`

font-size: 30px;
font-weight:bold;

`;

export const LogoParte1 = styled(LogoBase)`
color:#7159c1;
`;
export const LogoParte2 = styled(LogoBase)`
color:#fff;
`;