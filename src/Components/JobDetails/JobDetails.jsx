import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id);

    const job = jobs.find(jobID => jobID.id === idInt);
    console.log(job)
    const { job_responsibility, job_description } = job;

    const handleApply = () => {
        toast('You applyed')
    }

    return (
        <div className="grid md:grid-cols-4 gap-4 mt-4 mb-4">
            <div className="md:col-span-3">
                <p className="font-bold">Job Description: <span className="font-normal">{job_description}</span></p>
                <p className="font-bold">Job Responsibility: <span className="font-normal">{job_responsibility}</span></p>
            </div>
            <div className="bg-orange-300 p-6 rounded-md">
                <div>
                    <h1 className="text-xl font-bold">Job Details</h1>
                    <hr />
                    <p className="font-bold">Salary: <span className="font-normal">{job.salary}</span></p>
                    <p className="font-bold">Location: <span className="font-normal">{job.location}</span></p>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Job Details</h1>
                    <hr />
                    <p className="font-bold">Salary: <span className="font-normal">{job.salary}</span></p>
                    <p className="font-bold">Location: <span className="font-normal">{job.location}</span></p>
                </div>
                <button onClick={handleApply} className="w-full bg-primary btn border-0 text-white">Apply Now</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;