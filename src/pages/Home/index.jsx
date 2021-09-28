import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const HomeContainer = styled.div`
    background: linear-gradient(to right bottom, #ff3d00, #ff6e00, #ff9500, #ffb900, #ffda00);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const RulesContainer = styled.div`
    background-color: transparent;
    padding: 30px;
    width: 70%;
`

const RulesText = styled.h2`
    color: ${colors.primary};
    font-size: 20px;
    font-family: 'Bree Serif', serif;
`

const StartButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StartButton = styled.button`
    width: 200px;
    height: 50px;
    padding: 10px;
    border: 1px solid;
    cursor: pointer;
    border-radius: 5px;
    background: linear-gradient(to right bottom, #ff3d00, #ff6e00, #ff9500, #ffb900, #ffda00);
    background-size: 200% 200%;
    box-shadow: 5px 5px 15px -5px #000000;
    font-family: 'Bree Serif', serif;
    font-size: 15px;
    :hover{

    }
`

function Home() {
    return (
        <HomeContainer>
            <RulesContainer>
                <RulesText>
                    La partie oppose individuellement chaque joueur contre la banque. le but est de battre le croupier sans dépasser
                    le score de 21. Dès qu'un joueur fait plus que 21, on dit qu'il "brûle" et il perd sa mise initiale.<br/>
                    La valeur des cartes sont les suivantes :
                    <ul>
                        <li>de 2 à 9 : valeur nominale de la carte ;</li>
                        <li>de 10 au roi : 10 points (surnommées "bûche") ;</li>
                        <li>As : 1 ou 11 points (au choix du joueur) ;</li>
                    </ul>
                    Un blackjack est la situation ou le joueur reçoit, dès le début du jeu, un As et une buche.<br/>
                    Si le joueur atteint 21 points avec plus de deux cartes,
                    on compte 21 points et non Blackjack.
                </RulesText>
            </RulesContainer>
            <StartButtonContainer>
                <Link to="/game">
                    <StartButton>Commencer une partie</StartButton>
                </Link>
            </StartButtonContainer>
        </HomeContainer>
    )
}

export default Home