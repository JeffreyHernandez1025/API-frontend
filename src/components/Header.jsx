import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
background-color: black;
display: flex;
flex: 1;
justify-content: center;

`
const Title = styled.h1`
color: white;
`
const ButtonContainer = styled.div`
display: flex;
flex: 1;
justify-content: center;
`

export default function Header() {

    return (
        <div>
            <Container>
                <Title> Pokedex </Title>
            </Container>
            <ButtonContainer>
                <Link  style={{margin: 10, backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: 10, borderRadius: 10, width: 100, textAlign: 'center'}} to='/'> Home </Link>
                <Link style={{margin: 10, backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: 10, borderRadius: 10, width: 100, textAlign: 'center'}} to='/pokemon'> Pokemon </Link>
            </ButtonContainer>
        </div>
    )
}