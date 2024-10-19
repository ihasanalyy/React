import { JobList } from "./ContentBody/ContentBody"
import { useEffect, useState } from "react"
import Navbar from "./navbar/Navbar"


const GetJobs = () => {
    useEffect(() => {
        getJobList()
    }, [])
    const getJobList = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?&keyWord=&category=`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.data)
                GetjobList(res.data)
            })
    }
    const [joblist, GetjobList] = useState([])

    return (
        <>
        <Navbar />

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
export default GetJobs

