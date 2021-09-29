import styled from 'styled-components'
import PropTypes from 'prop-types'


const CardImage = styled.img`
    height: 200px;
    width: 150px;
    padding: 10px;
`

function Card({ image, value }) {
    return (
        <CardImage src={image} value={value} />
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Card