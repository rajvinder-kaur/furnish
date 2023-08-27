import styled from 'styled-components'
import {Parent,Img} from './Common.js'

export const Td1 = styled.div`
color: #212121;
font-size: 3.75rem;
font-style: normal;
font-weight: 400;
line-height: 3.75rem; 
text-align:left;
`;

export const Main = styled(Parent)`
    display:flex;
    padding-top:6.25rem ;
    padding-bottom:3.13rem;
    padding-left: 19rem;
    background: #FDFBF7;
`;

export const Td2 = styled.div`
color: #4D4D4D;
font-size: 0.9675rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; 
text-align:left;
padding-top:10px;
`;

export const Col_1 = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    gap:1.25rem;
`;
export const Button = styled.button`
border-radius: 0.375rem;
background: #D8AE5F;
width:20%;
color:white;
border:none;
display: flex;
padding: 0.9375rem 1.53438rem 1.0625rem 1.5625rem;
justify-content: center;
align-items: flex-start;
`
export const Col_2 = styled.div`
display: flex;
width: 33.08125rem;
padding: 1.32813rem 4.30688rem 1.32813rem 8.68063rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex-shrink: 0;
`
export const Image = styled(Img)`
width: 20.09375rem;
height: 20.09375rem;
max-width: 28.70625rem;
border-radius: 0.375rem;
background: url(<path-to-image>), lightgray 0px 0px / 100% 100% no-repeat;
`
