import Banner from "../../HomePage/Banner";
import FeaturedJobs from "../../HomePage/FeaturedJobs";
import JobCategory from "../../HomePage/JobCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;