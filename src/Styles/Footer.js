import styled from "styled-components";
import {Parent} from './Common'

export const Foot = styled(Parent)`
background: #FDFBF7;
display:grid;
margin:auto;
padding-left:300px;
padding-right:200px;
padding-top:100px;
padding-bottom:100px
grid-template-columns: 1fr 1fr ;
grid-gap:20px;
column-gap:200px;
text-align:left;
h1{
    
}
td{
    text-align:left;

    &:nth-child(2){
        grid-row:2;
        grid-column:1;
        width:600px
    }
    &:nth-child(4){
        grid-row:1;
        grid-column:2;
    }
    &:nth-child(5){
        grid-row:2;
        grid-column:2;
        list-style-type:none;
    }
}
`