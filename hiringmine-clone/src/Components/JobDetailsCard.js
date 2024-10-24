import Navbar from "./navbar/Navbar";
import jobcardlogo from '../Assests/jobcardlogo.png';
import '../Components/JobDetailsCard.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobDetailsCard = () => {
    const  {jobId}  = useParams();
    const [job, setJob] = useState([])
    console.log(jobId, "===>>>>")

    const singleJobDetail = (jobId) => {
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/${jobId}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setJob(response.data);
            })
    }
    useEffect(() => {
        if (jobId)
            singleJobDetail(jobId);
    }, [jobId])
    console.log(job, '====>>>>')

    return (
        <div className="jobDetailsCard">
            <Navbar />
            <div className="Main">
                <div className="First">
                    <img src={jobcardlogo} alt="logo" />
                    <h1>Freelancer Marketing for English Novels</h1>
                    <p>Anonymous</p>
                    <p>1 views</p>
                </div>
                <div className="Second">
                    <h1>Job Details</h1>
                    <h4>Salary</h4>
                    <p>No Salary Mentioned</p>
                    <h4>Job Type</h4>
                    <p>Full-Time</p>
                </div>
                <div className="Third">
                    <h1>Skills</h1>
                </div>
                <div className="Fourth">
                    <h1>Full Job Description</h1>
                    <p>Job Title:</p>
                    <p>Freelancer for English Novels Marketing</p>
                    <p>Description:</p>
                    <p>We are seeking a passionate and skilled freelancer to handle the marketing of English novels.
                        The ideal candidate will be responsible for promoting novels,
                        increasing visibility across different platforms, and engaging potential readers.
                        A creative approach and strong communication skills are essential for success in this role.</p>
                    <p>Responsibilities:</p>
                    <p>Develop and implement effective marketing strategies for English novels
                        Promote novels across various social media platforms and literary communities
                        Create engaging content to drive reader interest and sales
                        Track and analyze marketing performance and adjust strategies as necessary
                        Engage with potential readers to boost interaction</p>
                    <p>Requirements:</p>
                    <p>Proven experience in marketing or sales, particularly in the literary or publishing industry
                        Excellent English communication skills
                        Strong understanding of digital marketing tools and platforms
                        Ability to work independently and meet deadlines
                        Creativity in content creation and campaign management</p>
                    <p>Contact Info</p>
                    <p>Email: burhanpaperwala@gmail.com
                        Phone: 0333-3085553</p>
                </div>
            </div>
        </div>
    )
}
export default JobDetailsCard