import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const { category_name, availability, logo } = category;
    return (
        <div className=''>
            <div className='bg-gray-200 p-4'>
                <img className='w-12 h-12' src={logo} alt="" />
                <h2>{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
};

export default Category;