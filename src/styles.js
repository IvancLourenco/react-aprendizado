import styled from 'styled-components';

export const Container = styled.div
`
background-color: #3936C0;
width: 414px;
height: 896px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

img{
    margin-top: 50px;
}

textarea {
    width: 342px;
    height: 138px;
    margin-top: 50px;
    margin-bottom: 25px;
    padding: 5px;
}
`

export const Button = styled.button
`
 background-color: ${ props => props.isOn ? "#000" : "#f5f"} ;
 color: ${ props => props.isOn ? "#F5f5f5" : "#000"} ;;
 width: 342px;
 height: 64px;
 border-radius: 10px;
 border: none;
 font-size: 17px;
 cursor: pointer;
`

export const List = styled.ul
`

    li{
        background-color: rgba(255, 255, 255, 0.14);
        width: 342px;
        height: 68px;
        margin-top: 15px;
        color: #FFFF;
        border-radius: 10px;
        padding-left: 10px;
        padding-top: 5px;
        box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.2);
    }
`
