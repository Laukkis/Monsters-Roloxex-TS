import { Monster } from '../../App'

import './card-container.styles.css'

type CardProps = {
    monster: Monster;
}

const CardContainer = ({ monster }: CardProps) => {

    const { name, email, id } = monster
    return (
        <div className='card-container' key={id}>
            <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

}

export default CardContainer;