import useProfileImage from '../Hooks/useProfileImage';
import './Card.css';
import { color } from '../Constants/colors';
import DisplayId from './DisplayId';

function getColor(types) {
    const typeColors = types.map(t => color[t.type.name.toUpperCase()]).filter(t => !!t);

    return typeColors.length === 0 ? color.NORMAL : typeColors[0];
}

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
    const { sprites, types, name, id } = pokemon;
    const color = getColor(types);
    return (
        <div className="pokemon" style={{ backgroundColor: color }}>
            <div className="top">
                <div className='left'>
                    <Name name={name} />
                    <TypeGroup types={types} />
                </div>
                <div className="right">
                    <ProfileImage sprites={sprites} />
                    <DisplayId id={id} />
                </div>
            </div>
        </div>
    );
}

export default Card;