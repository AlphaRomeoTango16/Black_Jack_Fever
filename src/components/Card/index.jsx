import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTemplate = styled.div`
    display: flex;
`

const CardImage = styled.img`
    height: 200px;
    width: 150px;
    padding: 10px;
`

function Card({ image, value }) {
    return (
        <CardTemplate>
            <CardImage src={image} value={value} />
        </CardTemplate>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
}

export default Card