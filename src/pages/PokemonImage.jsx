import { styled } from "styled-components";
import Header from "../components/Header";
import useGetPicture from "../hooks/useGetPicture";

const Form = styled.form`
display: flex;
justify-content: center;
flex: 1;
margin-top: 50px;
`
const ImageContainer = styled.div`
display: flex;
flex: 1;
justify-content: center;
margin-top: 100px;
`
const Image = styled.img`
width: 400px;
`

export default function PokemonImage(){
    // object destructuring
    const { name, setName, picture, passName } = useGetPicture()

    const handleSubmit = event => {
        event.preventDefault()

        passName(name)
    }

    return(
        <div>
            <Header />
            <Form onSubmit={handleSubmit}>
                <input 
                required
                type="text"
                placeholder="Enter Pokemon name"
                onChange={event => setName(event.target.value)}
                />
                <button type="submit"> Submit </button>
            </Form>

            <ImageContainer>
            <Image src={picture} />
            </ImageContainer>
        </div>
    )
}