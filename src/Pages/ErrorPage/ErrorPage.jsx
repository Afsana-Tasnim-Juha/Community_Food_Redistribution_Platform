import { Helmet } from 'react-helmet-async';
import error from '../../assets/Resources/error/error.jpg';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>HarvestHub | ErrorPage</title>
            </Helmet>
            <img className='w-[600px] h-[400px] mt-40 ml-80' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;