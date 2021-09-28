import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
    background-color: ${colors.secondary};
    height: 500px;
`

const RulesContainer = styled.div`
    background-color: transparent;
    padding: 30px;
`

const RulesText = styled.h2`
    color: ${colors.primary};
    font-size: 20px;
`

const StartButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StartButton = styled.button`
    border: 1px;
    cursor: pointer;
`

function Home() {
    return (
        <HomeContainer>
            <RulesContainer>
                <RulesText>
                    La partie oppose individuellement chaque joueur contre la banque. le but est de battre le croupier sans dépasser
                    le score de 21. Dès qu'un joueur fait plus que 21, on dit qu'il "brûle" et il perd sa mise initiale. La valeur des cartes sont les suivantes :
                    <ul>
                        <li>de 2 à 9 : valeur nominale de la carte ;</li>
                        <li>de 10 au roi : 10 points (surnommées "bûche") ;</li>
                        <li>As : 1 ou 11 points (au choix du joueur) ;</li>
                    </ul>
                    Un blackjack est la situation ou le joueur reçoit, dès le début du jeu, un As et une buche. Si le joueur atteint 21 points avec plus de deux cartes,
                    on compte 21 points et non Blackjack.
                </RulesText>
            </RulesContainer>
            <StartButtonContainer>
                <StartButton>Commencer une partie</StartButton>
            </StartButtonContainer>
        </HomeContainer>
    )
}

export default Home