import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import { useState } from 'react';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchText, setSearchText] = useState('');

    let cards = useLoaderData();
    cards = cards.filter(item =>
        item.category.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSearchButton = () => {
        setSearchText(searchQuery);
    }

    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/7N80HjQ/background.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="text-center py-48">
                    <div className="container mx-auto">
                        <div>
                            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl px-5 font-bold text-black">I Grow By Helping People In Need</h1>
                        </div>

                        <div className="form-control mt-10">
                            <label className="input-group  flex justify-center">

                                <input
                                    type="text"
                                    value={searchQuery}
                                    placeholder="Search here..."
                                    onChange={handleSearchChange}
                                    className="input input-bordered w-1/2" />

                                <span className="bg-red-500 text-white"><button onClick={handleSearchButton}>Search</button></span>

                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16 px-5 container mx-auto'>
                {
                    cards.map(card => <HomeCard key={card.id} card={card}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;