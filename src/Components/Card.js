import useProfileImage from '../Hooks/useProfileImage';
import './Card.css';

const ProfileImage = ({ sprites }) => {
    const { url, onImageClick } = useProfileImage(sprites);

    return (
        <div className="profile-image">
            <img src={url} loading="lazy" onClick={onImageClick} />
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