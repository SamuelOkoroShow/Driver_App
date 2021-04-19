import styled from "styled-components/native";
import { bdazzled, forgra, oxford, platinum } from "./colors";

export const Container = styled.View`
    flex:1;
    padding-top:5px;
    background-color: ${oxford}
`
export const H1 = styled.Text`
    color: ${platinum};
    font-weight: bold;
    font-size: 26px;
    
`
export const H2 = styled.Text`
    color: ${platinum};
    font-weight: bold;
    font-size: 20px;
`
export const Body = styled.Text`
    color: ${platinum};
    font-size: 16px;
`
export const Add = styled.TouchableOpacity`
    background-color: ${oxford};
    justify-content: center;
    align-items: center;
    border-top-width: 2px;
    width:60px;
    height: 55px;
    background-color:${forgra};
    margin-left: 10px;
    border-color: ${bdazzled};
    border-radius: 10px;
`