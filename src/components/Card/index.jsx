import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardWrapper = styled.div`
    margin: 20px;
    width: 20%;
    height: 80%;
    border: 2px solid black;
    border-radius: 10px;
    background-color: black;
`

const CardImage = styled.img`
    height: 100%
    width: 100%;
`

function Card({ image }) {
    return (
        <CardWrapper>
            <CardImage src={image} />
        </CardWrapper>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Card