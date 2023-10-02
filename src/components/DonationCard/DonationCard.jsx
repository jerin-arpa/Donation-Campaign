import PropTypes from 'prop-types';

const DonationCard = ({ donate }) => {
    const { image, category, title, price, category_bg, card_bg, text_color, button_bg } = donate;
    return (
        <div>
            <div className='rounded-xl flex flex-col md:flex-row gap-2' style={{ backgroundColor: `${card_bg}` }}>
                <img className='md:rounded-l-xl md:w-72 lg:w-72' src={image} alt="" />
                <div className='p-3 py-6'>
                    <p className='w-36 text-center py-1 font-bold rounded-md mb-2' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>
                        {category}
                    </p>

                    <div>
                        <h2 className='text-2xl font-bold mt-3 h-14 flex items-center'>
                            {title}
                        </h2>
                    </div>

                    <p className='text-xl font-bold my-2' style={{ color: `${text_color}` }}>${price}.00</p>

                    <button className='btn text-white mt-2 border-none' style={{ backgroundColor: `${button_bg}` }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donate: PropTypes.object,
};

export default DonationCard;