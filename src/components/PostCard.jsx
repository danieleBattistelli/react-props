import './PostCard.css';

const PostCard = ({ title, image, content, tag }) => {
    return (
        <div className="post-card">
            {image && <img src={image} alt={title} className='Post-Card-image' />};
            <div className="post-card-content">
                <h2 className='post-card-title'>{title}</h2>
                <p className='post-card-text'>{content}</p>
                <button className="post-card-button">LEGGI DI PIU`</button>
            </div>
        </div>
    );
};

export default PostCard;