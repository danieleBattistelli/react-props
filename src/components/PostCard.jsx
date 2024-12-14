import './PostCard.css';

const PostCard = ({ title, image, content, tags }) => {
    const defaultImage = 'https://placehold.co/600x400';
    const imagepath = image ? `/img/${image}` : defaultImage;

    return (
        <div className="post-card">
            <img src={imagepath} alt={title} className="post-card-image" />
            <div className="post-card-content">
                <h2 className='post-card-title'>{title}</h2>
                <p className='post-card-text'>{content}</p>
                <div className="post-card-tags">
                    {tags.map(tag => <span key={tag} className={`post-card-tag ${tag}`}>{tag}</span>)}
                </div>
                <button className="post-card-button">LEGGI DI PIU`</button>
            </div>
        </div>
    );
};

export default PostCard;