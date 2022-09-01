import styled from 'styled-components';

const Button = styled.button
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

export default Button