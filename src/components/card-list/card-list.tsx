import { Monster } from '../../App';

import CardContainer from '../card-container/card-container';
import './card-list.styles.css'

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return <CardContainer monster={monster} />
        })}
    </div>
)

export default CardList