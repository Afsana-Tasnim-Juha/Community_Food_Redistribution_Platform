import slider1 from '../../../assets/Resources/home page slider/slider1.jpg';
import slider2 from '../../../assets/Resources/home page slider/slider2.jpg';
import slider3 from '../../../assets/Resources/home page slider/slider3.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-lg" />
                <div className="absolute  h-full flex items-center justify-center   bottom-0  top-0 bg-gradient-to-r from-[#15151515] to-[#151515]">
                    <div className='text-white space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'><span className='text-teal-500'>HarvestHub:</span> Uniting hearts, Reducing waste</h2>
                        <p>

                            At HarvestHub, our mission is simple yet impactful: connecting those with surplus food to those in need. This not only reduces food waste but also addresses hunger directly. In just a year, we've made significant strides in fostering these essential connections, making a positive impact on both our communities and the environment. Here's to uniting hearts and reducing waste together!</p>
                        <button className='btn btn-outline btn-accent'>Learn More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-lg" />
                <div className="absolute  h-full flex items-center justify-center   bottom-0  top-0 bg-gradient-to-r from-[#15151515] to-[#151515]">
                    <div className='text-white space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'><span className='text-teal-500'>HarvestHub:</span> Uniting hearts, Reducing waste</h2>
                        <p>Our community-driven platform is on a mission to bring hearts together and minimize food waste. Join us in creating a future where abundance is shared, and waste becomes a thing of the past. Together, let's harvest a sustainable and connected world.</p>
                        <button className='btn btn-outline btn-accent'>Learn More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-lg" />
                <div className="absolute  h-full flex items-center justify-center   bottom-0  top-0 bg-gradient-to-r from-[#15151515] to-[#151515]">
                    <div className='text-white space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'><span className='text-teal-500'>HarvestHub:</span> Uniting hearts, Reducing waste</h2>
                        <p>Our community-driven platform is on a mission to bring hearts together and minimize food waste. Join us in creating a future where abundance is shared, and waste becomes a thing of the past. Together, let's harvest a sustainable and connected world.</p>
                        <button className='btn btn-outline btn-accent'>Learn More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;