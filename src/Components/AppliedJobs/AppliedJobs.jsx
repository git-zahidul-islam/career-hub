import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleJobFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJob(appliedJobs)
        }
        else if (filter === 'remote') {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remote)
        }
        else if (filter === 'onsite'){
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite' )
            setDisplayJob(onsite)
        }
    }

    useEffect(() => {
        const storeJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const appliedJobs = [];
            for (const id of storeJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    appliedJobs.push(job)
                }
            }
            setAppliedJobs(appliedJobs);
            setDisplayJob(appliedJobs)
        }
    }, [jobs])

    return (
        <div>
            <div className="flex justify-between">
                <h1>this applied jobs: {appliedJobs.length}</h1>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn ">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>Outer</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mb-4 space-y-4">
                {
                    displayJob.map(job => <AppliedJob key={job.id} appliedJob={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;