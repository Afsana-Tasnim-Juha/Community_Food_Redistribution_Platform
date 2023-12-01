

const ExtraFeatured1 = () => {
    return (
        <div className="">
            <h1 className="text-center font-bold text-teal-500 text-3xl mt-12">Why FoodSHare?</h1>
            <p className=" text-center mt-6 mb-6">
                Food waste is a pervasive issue throughout the entire food system, from farming to consumer  <br />actions. Recent media attention has heightened public awareness of the environmental <br /> and economic costs associated with food waste. This has spurred increased efforts, <br /> both public and private, to salvage safe and nutritious food that would otherwise be discarded. <br /> The focus is on optimizing available food supplies to address concerns about hunger, <br /> resource conservation, and the environmental impact of wastage.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  ">
                <div className="card w-96 bg-base-100 shadow-xl image-full">

                    <div className="card-body bg-teal-500 rounded-xl">
                        <h4 className="card-title text-sm">DIVERTING SURPLUS FOOD TO PROVIDE MEALS FOR PEOPLE IN NEED</h4>
                        <p>Preventing food from being thrown away is socially important when the rescued food is redirected to those who are food insecure.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">

                    <div className="card-body bg-teal-500 rounded-xl">
                        <h4 className="card-title text-sm">SIMPLER, MORE EFFICIENT, LESS WASTEFUL BUSINESS</h4>
                        <p>Redistributing surplus food has great economic impact as it substantially reduces food disposal costs and increases efficiency.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">

                    <div className="card-body bg-teal-500 rounded-xl">
                        <h4 className="card-title text-sm">FIGHTING FOOD WASTE MEANS FIGHTING CLIMATE CHANGE</h4>
                        <p>Reducing food waste is environmentally important as it keeps food out of landfills and mitigates greenhouse gas emissions.</p>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default ExtraFeatured1;