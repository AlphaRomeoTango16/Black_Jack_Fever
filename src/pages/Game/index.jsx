import styled from 'styled-components'
// import { useFetch } from '../../utils/hooks'
// import Card from '../../components/Card'
import Casino from '../../components/CasinoDeck'
import Player from '../../components/PlayerDeck'

const GameContainer = styled.div`
    background-color:#32992b;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

// const CasinoDeck = styled.div`
//     height: 50%;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid white;
// `

// const CasinoCards = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
// `

// const CasinoCount = styled.div`
//     background-color: white;
//     width: 10%;
//     font-family: 'Bree Serif', serif;
//     margin-left: auto;
//     margin-right: auto;
//     padding: 1px;
// `

// const PlayerDeck = styled.div`
//     margin-top: 20px;
//     height: 50%;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid white;    
// `

// const PlayerCards = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: end;
// `

// const PlayerCount = styled.div`
//     background-color: white;
//     width: 10%;
//     font-family: 'Bree Serif', serif;
//     margin-left: auto;
//     margin-right: auto;
//     padding: 1px;
// `
function Game() {
    
    // const { data } = useFetch(
    //     `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    // )
    // const cards = data?.cards
    // const deckId = data?.deck_id
    // console.log(deckId)

    // function editCardsValue()  {
    //     return cards?.map(cards => {
    //         const temp = Object.assign({}, cards);
    //         if (temp.value === "KING") {
    //             temp.value = 10
    //         }
    //         if (temp.value === "QUEEN") {
    //             temp.value = 10
    //         }
    //         if (temp.value === "JACK") {
    //             temp.value = 10
    //         }
    //         if (temp.value === "ACE") {
    //             temp.value = 11
    //         }
    //         return temp;
    //     })
    // }

    // const updatedValue = editCardsValue();
    // console.log(updatedValue)

    // function convertNominalValue() {
    //     return updatedValue?.map(updatedValue => {
    //         const mod = Object.assign({}, updatedValue);
    //         const normalValue = mod.value;
    //         if (typeof normalValue === "string") {
    //             mod.value = parseInt(normalValue, 10)
    //         }
    //         return mod
    //     })
    // }
    // const nominalValue = convertNominalValue();
    // console.log(nominalValue)

    // const convertValue = updatedValue?.[0].value;
    // const newValue = parseInt(convertValue, 10)
    // console.log(newValue)

    // const casinoScore = nominalValue?.reduce((sum, { value }) => sum + value, 0)
    // console.log(casinoScore)
    
    return (
        <GameContainer>
            <Casino />
            <Player />

            {/* <CasinoDeck>
                <CasinoCount>Casino score : {casinoScore}</CasinoCount>
                    <CasinoCards>
                        {cards?.map((cards) => (
                            <Card
                                image={cards.image}
                            />
                        ))}
                    </CasinoCards>    
            </CasinoDeck>
            <PlayerDeck>
                <PlayerCount>Player score : {}</PlayerCount>
                    <PlayerCards>

                    </PlayerCards>  
            </PlayerDeck> */}
        </GameContainer>
    )
}

export default Game