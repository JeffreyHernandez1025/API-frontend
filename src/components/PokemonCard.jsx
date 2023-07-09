import { styled } from "styled-components";

const Container = styled.div`
background-color: black;
width: 200px;
margin: 10px;
text-align: center;
`
const Name = styled.h1`
color: white;
`

export default function PokemonCard(props){
    console.log(props.pokemon)

    return(
        <Container>
            <Name> {props.pokemon} </Name>
        </Container>
    )
}