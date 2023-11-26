

const FeaturedFoodsCard = ({ featuredFood }) => {
    const { foodName, foodImage, viewDetailButton, additionalNotes } = featuredFood;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={foodImage} alt="Shoes" className="rounded-xl w-60 h-60 " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{foodName}</h2>
                <p>{additionalNotes}</p>
                <div className="card-actions">
                    <button className="btn btn-accent">View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodsCard;