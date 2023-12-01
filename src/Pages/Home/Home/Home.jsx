import Banner from "../Banner/Banner";
import ExtraFeatured1 from "../ExtraFeatured1/ExtraFeatured1";
import ExtraFeatured2 from "../ExtraFeatured2/ExtraFeatured2";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <ExtraFeatured1></ExtraFeatured1>
            <ExtraFeatured2></ExtraFeatured2>
        </div>
    );
};

export default Home;