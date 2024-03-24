
const AppliedJob = ({ appliedJob }) => {
    const { logo, remote_or_onsite, job_type, job_title, company_name, salary, location } = appliedJob
    return (
        <div>
            <div className="bg-gray-300 flex items-center p-4">
                <div className="pe-4">
                    <img className="w-full p-4" src={logo} alt="logo" />
                </div>
                <div className="flex-1 flex justify-between items-center">
                    <div className="space-y-2">
                        <h1>{job_title}</h1>
                        <p>{company_name}</p>
                        <div className="flex gap-2">
                            <button className="p-3 border-2">{job_type}</button>
                            <button className="p-3 border-2">{remote_or_onsite}</button>
                        </div>
                        <div className="flex gap-4">
                            <h1>{location}</h1>
                            <h1>{salary}</h1>
                        </div>
                    </div>
                    <div>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;