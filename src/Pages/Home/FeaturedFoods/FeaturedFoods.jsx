import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { Link } from "react-router-dom";
//import { useLoaderData } from "react-router-dom";




const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    const [dataLength, setDataLength] = useState(6);
    //const [currentPage, setCurrentPage] = useState(0);
    //const [itemsPerPage, setItemsPerPage] = useState(6);

    //const { count } = useLoaderData();

    //const numberOfPages = Math.ceil(count / itemsPerPage);

    //ONE WAY FOR PAGINATION

    //const pages = [];
    //for (let i = 0; i < numberOfPages; i++) {
    //  pages.push(i);
    //}
    //console.log(pages);

    //ANOTHER WAY

    //const pages = [...Array(numberOfPages).keys()];

    {/*const handleItemsPerPageChange = e => {

        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }

    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }

    } */}

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
                <h3 className="text-3xl text-teal-500 font-bold ">Featured Foods</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis sequi aut perspiciatis dolor deleniti nostrum consectetur voluptate laboriosam, molestiae aliquam eveniet minus sunt fuga? Ad iste adipisci explicabo! Magni!</p>
            </div>
            <div>
                <p>feature foods: {featuredFoods.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                        featuredFoods.slice(0, dataLength).map(featuredFood => <FeaturedFoodsCard
                            key={featuredFood._id}
                            featuredFood={featuredFood}
                        ></FeaturedFoodsCard>)
                    }
                </div>
            </div>
            {/*   <div className="text-center mt-4  ">
                <p>current page: {currentPage}</p>
                <button onClick={handlePrevPage} className="btn mr-2">Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className="btn text-center mr-2 " key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn">Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPageChange} name="" id="">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>

            </div>*/ }
            <div className="text-center dataLength === featuredFoods.length ? 'hidden' : '' ">
                <Link to="/AvailableFoods"
                    onClick={() => { setDataLength(featuredFoods.length) }} className="btn btn-accent mt-4 ">Show All</Link>
            </div>

        </div>
    );
};

export default FeaturedFoods;