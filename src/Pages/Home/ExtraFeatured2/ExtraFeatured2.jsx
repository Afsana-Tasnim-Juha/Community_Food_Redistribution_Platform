

const ExtraFeatured2 = () => {
    return (
        <div className="bg-teal-50  rounded-lg mt-8">
            <h2 className="text-center font-bold text-teal-500 text-3xl pt-12">
                It's fast, simple, and hassle-free!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 ">
                <p className=" ml-60">Your community needs you! Interested? Get <br /> involved! FoodSHare platform is an initiative <br /> under project PLOUTOS and will be active in <br /> two Blakan countries, Serbia and North <br /> Macedonia.</p>
                <p className="mr-60">
                    On FoodShare, feel free to share any <br /> perishable or frozen items like dairy, fish, <br /> meat, and fresh juice as long as they are <br /> within or before their 'use by date' and still <br /> suitable for human consumption. <br /> Additionally, non-perishable food items are <br /> welcome as long as they are within their <br /> 'best before date'.</p>
            </div>
            <div className="text-center mt-6 ">
                <button className="btn btn-outline btn-accent rounded-2xl mb-6  ">Join Us</button>
            </div>
        </div>
    );
};

export default ExtraFeatured2;