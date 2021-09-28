import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
// import { useEffect, useState } from 'react'
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

    // useEffect(() => {
    //     fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
    //         .then((response) => response.json()
    //         .then(({ cards }) => console.log(cards))
    //         .catch((error) => console.log(error))
    //     )
    // }, [])
    const { data } = useFetch(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    )
    const cards = data?.cards

    return (
        <GameContainer>
            <CasinoDeck>
            {cards?.map((cards) => (
                <Card
                    image={cards.image}
                />
            ))}
            </CasinoDeck>
            <PlayerDeck>

            </PlayerDeck>
        </GameContainer>
    )
}

export default Game