import { useEffect, useState } from 'react';
import './Card.css';

const ProfileImage = ({ sprites }) => {
    const { front_default, front_shiny } = sprites;

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setImageIndex(1 - imageIndex);
        }, 300);

        return () => {
            clearInterval(id);
        }
    }, [imageIndex])

    return (
        <div className="profile-image">
            <img src={[front_default, front_shiny][imageIndex]} loading="lazy" />
        </div>
    );
}

const Name = ({ name }) => {
    return (<h4 className='name'>
        {name}
    </h4>)
};

const TypeGroup = ({ types }) => {
    return (
        <div className='types'>
            {types.map(({ slot, type }) => <span key={slot}>{type.name}</span>)}
        </div>
    );
}

const Card = ({ pokemon }) => {
    const { sprites, types, name } = pokemon;
    return (
        <div className="pokemon">
            <div className="top">
                <div class='left'>
                    <Name name={name} />
                    <TypeGroup types={types} />
                </div>
                <div class="right">
                    <ProfileImage sprites={sprites} />
                </div>
            </div>
        </div>
    );
}

export default Card;