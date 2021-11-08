import './PeopleCard.css';

interface PeopleProps {
    image: string;
    motto: string;
    name: string;
    jobTitle: string;
}

export const PeopleCard: React.FC<PeopleProps> = ({
    image,
    motto,
    name,
    jobTitle,
}) => {
    return (
        <div className="People">
            <div className="profileImg">
                <img src={image} alt="" />
            </div>
            <p>{motto}</p>
            <div className="name">{name}</div>
            <div className="job">{jobTitle}</div>
        </div>
    );
};
