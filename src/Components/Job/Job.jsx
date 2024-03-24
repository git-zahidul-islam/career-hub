import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, company_name, job_title, job_type, salary, remote_or_onsite, location } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-3 py-2 border-2 rounded-md mr-2">{remote_or_onsite}</button>
                        <button className="px-3 py-2 border-2 rounded-md">{job_type}</button>
                    </div>
                    <div className="flex gap-2">
                        <h1 className="text-xl flex items-center"><IoLocationOutline className="text-2xl" /> {location}</h1>
                        <h1 className="text-xl flex items-center"><RiMoneyDollarCircleLine className="text-2xl" /> {salary}</h1>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;