import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
    background-color: ${colors.primary};
    height: 100px;
    width: 100%;
`

const CopyrightContainer = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
`

const CopyrightLine = styled.a`
    color: ${colors.secondary};
    font-family: 'Bree Serif', serif;
`

function Footer() {
    return (
        <FooterContainer>
            <CopyrightContainer>
                <CopyrightLine>Copyright Arthur della Faille. All rights reserved.</CopyrightLine>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer