import { useEffect, useState } from "react";
import Job from "../Components/Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // not better way data loading 
    const [dataLoad, setDataLoad] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center">Featured Jobs:  {jobs.length}</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLoad).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLoad === jobs.length ? 'hidden' : '' }>
                <button
                    onClick={() => setDataLoad(jobs.length)}
                    className="btn text-center bg-purple-400">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;