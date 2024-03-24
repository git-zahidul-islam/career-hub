import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([]);

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
            setAppliedJobs(appliedJobs)
        }
    }, [])

    return (
        <div>
            <h1>this applied jobs: {appliedJobs.length}</h1>
            <div className="mt-4 mb-4">
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} appliedJob={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;