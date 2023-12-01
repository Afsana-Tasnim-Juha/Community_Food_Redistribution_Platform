import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { useNavigate } from "react-router-dom";


const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    const [dataLength, setDataLength] = useState(6);
    const navigate = useNavigate();

    const GoToAvailableFoods = () => {
        navigate("/AvailableFoods", { state: { featuredFoods: featuredFoods } })
    }


    useEffect(() => {
        fetch('http://localhost:5000/featuredFoods')
            .then(res => res.json())
            .then(data => {
                setFeaturedFoods(data);
            })
    }, [])

    return (
        <div>
            <div className="text-center mt-6">
                <h3 className="text-3xl text-teal-500 font-bold mt-6 mb-6 ">Featured Foods</h3>
                <p className="w-1/2 ml-80">
                    Explore our Community Food Sharing and Surplus Reduction Platform's Featured Foods section—a curated showcase of delightful offerings that embody our commitment to sustainability and community well-being. From local gems to community favorites, these selections capture the essence of shared resources, promoting a more sustainable and nourished future for all.</p>
            </div>
            <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                        featuredFoods.slice(0, dataLength).map(featuredFood => <FeaturedFoodsCard
                            key={featuredFood._id}
                            featuredFood={featuredFood}

                        ></FeaturedFoodsCard>)
                    }
                </div>
            </div>

            <div className="text-center dataLength === featuredFoods.length ? 'hidden' : '' ">
                <button
                    onClick={GoToAvailableFoods} className="btn btn-accent mt-4 ">Show All
                </button>
            </div>

        </div>
    );
};

export default FeaturedFoods;