import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import Card from '../../components/Card'

const GameContainer = styled.div`
    background-color:#32992b;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const CasinoDeck = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
`

const PlayerDeck = styled.div`
    padding-top: 20px;
    height: 50%;
    display: flex;
    flex-direction: row;    
`

function Game() {
    // const { data, isLoading, error } = useFetch(
    //     `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    // )

    // const cardsList = data?.cardsList

    // return (
    //     <GameContainer>
    //     {cardsList?.map((cards) => (
    //         <Card
    //             image={cards.image}
    //         />
    //     ))}
    //     </GameContainer>
    // )
    return (
        <GameContainer>
            <CasinoDeck>
                <Card />
                <Card />
            </CasinoDeck>
            <PlayerDeck>
                <Card />
                <Card />
            </PlayerDeck>
        </GameContainer>
    )
}

export default Game