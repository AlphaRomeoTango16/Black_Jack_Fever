import styled from 'styled-components'
import colors from '../../utils/style/colors'


const HeaderContainer = styled.div`
    background-color: ${colors.primary};
    height: 100px;
`

const Title = styled.h1`
    color: ${colors.secondary};
    padding: 20px 0px 0px 20px;
    margin: 0;
`

function Header() {
    return (
        <HeaderContainer>
            <Title>Black Jack Fever</Title>
        </HeaderContainer>
    )
}

export default Header