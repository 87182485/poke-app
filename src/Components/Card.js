import './Card.css';

const ProfileImage = ({ sprites }) => {
    const { front_shiny } = sprites;

    return (
        <div className="profile-image">
            <img src={front_shiny} loading="lazy" />
        </div>
    );
}

const TypeGroup = ({ types }) => {
    return (
        <div className='types'>
            {types.map(({ slot, type }) => <span key={slot}>{type.name}</span>)}
        </div>
    );
}

const Card = ({ pokemon }) => {
    const { sprites, types } = pokemon;
    return (
        <div className="pokemon">
            <div className="top">
                <TypeGroup types={types} />
                <ProfileImage sprites={sprites} />
            </div>
        </div>
    );
}

export default Card;