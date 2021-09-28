import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
    background-color: ${colors.primary};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CopyrightLine = styled.a`
    color: ${colors.secondary}
`

function Footer() {
    return (
        <FooterContainer>
            <CopyrightLine>Copyright Arthur della Faille. All rights reserved.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer