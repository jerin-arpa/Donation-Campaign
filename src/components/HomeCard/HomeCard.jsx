import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({ card }) => {
    const { id, image, category, title, category_bg, card_bg, text_color } = card;

    return (
        <Link to={`/card/${id}`}>
            <div className='rounded-xl' style={{ backgroundColor: `${card_bg}` }}>
                <img className='rounded-t-xl w-full' src={image} alt="" />
                <div className='p-3 pt-6'>
                    <p className='w-36 text-center py-1 font-bold rounded-md mb-2' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>
                        {category}
                    </p>

                    <h2 className='text-xl font-bold h-14' style={{ color: `${text_color}` }}>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

HomeCard.propTypes = {
    card: PropTypes.object,
};

export default HomeCard;