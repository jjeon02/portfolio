import { IconArrowRight} from '../components/icons';
import { useNavigate } from 'react-router-dom';

function Card({ imageOne, titleOne, descOne, linkOne, imageTwo, titleTwo, descTwo, linkTwo }) {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      {/* CARD 1 */}
      <div className="card">
        <div
          className="card-image"
          style={imageOne ? { backgroundImage: `url(${imageOne})` } : {}}
        />
        <div className="text-wrapper-xs">
          <h6 className="work-card-from">{titleOne}</h6>
          <p className="work-card-desc">{descOne}</p>
        </div>
        <button className="btn-txt" onClick={() => navigate(linkOne)}>
              See Works <IconArrowRight />
        </button>
      </div>
      {/* CARD BORDER */}
      <div className="card-border"></div>
      {/* CARD 2 */}
      <div className="card">
        <div
          className="card-image"
          style={imageTwo ? { backgroundImage: `url(${imageTwo})` } : {}}
        />
        <div className="text-wrapper-xs">
          <h6 className="work-card-from">{titleTwo}</h6>
          <p className="work-card-desc">{descTwo}</p>
        </div>
        <button className="btn-txt" onClick={() => navigate(linkTwo)}>
              See Works <IconArrowRight />
          </button>
      </div>
    </div>
  );
}

export default Card;
