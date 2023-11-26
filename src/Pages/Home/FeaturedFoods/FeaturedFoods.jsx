import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";




const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);


    useEffect(() => {
        fetch('featuredFoods.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedFoods(data);
            })
    }, [])
    return (
        <div>
            <div className="text-center mt-6">
                <h3 className="text-3xl text-teal-500 font-bold ">Featured Foods</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis sequi aut perspiciatis dolor deleniti nostrum consectetur voluptate laboriosam, molestiae aliquam eveniet minus sunt fuga? Ad iste adipisci explicabo! Magni!</p>
            </div>
            <div>
                <p>feature foods: {featuredFoods.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                        featuredFoods.map(featuredFood => <FeaturedFoodsCard
                            key={featuredFood._id}
                            featuredFood={featuredFood}
                        ></FeaturedFoodsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoods;