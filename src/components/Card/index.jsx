import styled from 'styled-components'
import PropTypes from 'prop-types'


const CardImage = styled.img`
    height: 60%;
    width: 20%;
    margin-left: 10px;
`

function Card({ image }) {
    return (
        <CardImage src={image} />
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Card