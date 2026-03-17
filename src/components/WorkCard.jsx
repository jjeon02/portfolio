import { useNavigate } from 'react-router-dom';

function WorkCard({ title, from, tags, description, image, link }) {
  const navigate = useNavigate();

  return (
    <div className="work-card">
      {/* IMG */}
      <div className="work-card-image">
        {tags.map(tag => (
          <caption key={tag} className="badge work-card-tag">{tag}</caption>
        ))}
        {image && <img src={image} alt={title} />}
      </div>
      {/* DESC */}
      <div className="work-card-info">
        <h5>{title}</h5>
        <p className="work-card-from">{from}</p>
        <p className="work-card-desc">{description}</p>
        <button className="btn-default" onClick={() => navigate(link)}>
          See Works →
        </button>
      </div>
    </div>
  );
}

export default WorkCard;
