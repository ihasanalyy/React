// import { JobList } from "./ContentBody/ContentBody"
import { useEffect, useState } from "react";
import logo from '../Assests/jobcardlogo.png';
import Navbar from "./navbar/Navbar";
import MultipleSelectCheckmarks from '../../src/Components/Chips';
import { useNavigate } from "react-router-dom";
import JobDetailsCard from '../Components/JobDetailsCard';
const GetJobs = () => {
    useEffect(() => {
        getJobList()
    }, [])
    const getJobList = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=&pageNo=1&keyWord=&category=`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.data)
                GetjobList(res.data)
            })
    }
    const [joblist, GetjobList] = useState([])
    const [filter, Setfilter] = useState([])

const GetFilteration = () => {
    fetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)
    .then((res) => (res.json()))
    .then((res) => {
        console.log(res.data, "filteration")
        Setfilter(res.data)
       
    }
)}
    useEffect(()=>{
        GetFilteration()
    },[])


    console.log(filter.filteration, "====>>>>>")
    return (
        <>
        <Navbar />
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            flexWrap: "wrap",
            margin: "20px auto",
        }}>
                {filter.filteration?.map((filter,index)=>
                    <MultipleSelectCheckmarks filter={filter} key={index} /> )}
        </div>
        
        <div style={{
            display: "grid",
            width: "70%",
            margin:  "50px auto",
            gridTemplateColumns: "repeat(2, 1fr)", // Two columns with equal width
            gap: "20px" // Add space between the cards (optional)
        }}>
        {
                        joblist.map((j,index) => (<JobList j={j} key={index} />))
                    }
        {/* <h1>JOBS AGAYI hAIn</h1> */}
        </div>
        </>
    )
}
export {GetJobs}

const JobList = ({ j }) => {
    // CALLING HOOK
    const navigate = useNavigate()

    const OpenHandler = () => {
        console.log("===>>>", j._id);
        navigate(`/jobs/jobcards/${j._id}`)
       
    }
    
    return (
        
        <div className='MainBox' onClick={OpenHandler}>
            <div className='FirstDiv'>
                <div className='FirstSub'>
                    <p>{j.companyName ? `${j.companyName}` : <p>No mentioned</p> }</p>
                    <h5>{j.designation}</h5>
                    {/* <h6>{ }</h6> */}
                </div>
                <div className='SecondSub'>
                    <img src={logo} />
                </div>
            </div>
            <div className='SecondDiv'>
                <div className=''>
            <h6>{j.city && j.country ? `${j.city}, ${j.country}` : <p>No mentioned</p>}</h6>
                    <p>just now</p>
                </div>
                <div className=''>
                    <p>{j.views} views</p>
                </div>
            </div>
        </div>
        
    )
}
export {JobDetailsCard}
