import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import Card from '../Card'

const Casino = styled.div`
height: 50%;
display: flex;
flex-direction: column;
border: 1px solid white;
`

const CasinoCards = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
`

const CasinoCount = styled.div`
background-color: white;
width: 10%;
font-family: 'Bree Serif', serif;
margin-left: auto;
margin-right: auto;
padding: 1px;
`

function CasinoDeck() {

    const { data } = useFetch(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
    )
    const cards = data?.cards
    const deckId = data?.deck_id
    console.log(deckId)

    function editCardsValue()  {
        return cards?.map(cards => {
            const temp = Object.assign({}, cards);
            if (temp.value === "KING") {
                temp.value = 10
            }
            if (temp.value === "QUEEN") {
                temp.value = 10
            }
            if (temp.value === "JACK") {
                temp.value = 10
            }
            if (temp.value === "ACE") {
                temp.value = 11
            }
            return temp;
        })
    }

    const updatedValue = editCardsValue();

    function convertNominalValue() {
        return updatedValue?.map(updatedValue => {
            const mod = Object.assign({}, updatedValue);
            const normalValue = mod.value;
            if (typeof normalValue === "string") {
                mod.value = parseInt(normalValue, 10)
            }
            return mod
        })
    }
    const nominalValue = convertNominalValue();

    const casinoScore = nominalValue?.reduce((sum, { value }) => sum + value, 0)

    return (
        <Casino>
            <CasinoCount>Casino score : {casinoScore}</CasinoCount>
                <CasinoCards>
                    {cards?.map((cards) => (
                        <Card
                            key={`cards-${cards.code}`}
                            image={cards.image}
                        />
                    ))}
                </CasinoCards>   
        </Casino>
    )
}

export default CasinoDeck