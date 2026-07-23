import Card from "./components/card";

const App=(()=>{
  const data = [
  {
    logo: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    companyName: "Google",
    postedTime: "1 hour ago",
    jobDesignation: "Senior UI/UX Designer",
    jobType: "Full Time",
    tag: "Remote",
    salary: "$140k - $170k",
    location: "Bengaluru, India"
   },
  {
    logo: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
    companyName: "Microsoft",
    postedTime: "4 days ago",
    jobDesignation: "UX Designer",
    jobType: "Full Time",
    tag: "Hybrid",
    salary: "$100k - $135k",
    location: "Hyderabad, India"
  },
  {
    logo: "https://images.seeklogo.com/logo-png/40/1/amazon-icon-logo-png_seeklogo-405254.png",
    companyName: "Amazon",
    postedTime: "2 days ago",
    jobDesignation: "Junior UI/UX Designer",
    jobType: "Full Time",
    tag: "Onsite",
    salary: "$80k - $100k",
    location: "Delhi, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000",
    companyName: "Meta",
    postedTime: "5 hours ago",
    jobDesignation: "Graphic Designer",
    jobType: "Part Time",
    tag: "Remote",
    salary: "$80/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=86009&format=png&color=000000",
    companyName: "Apple",
    postedTime: "3 days ago",
    jobDesignation: "Data Scientist",
    jobType: "Full Time",
    tag: "Hybrid",
    salary: "$150k - $190k",
    location: "Pune, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=62YmgvjaywD2&format=png&color=000000",
    companyName: "Netflix",
    postedTime: "8 hours ago",
    jobDesignation: "Data Analyst",
    jobType: "Full Time",
    tag: "Remote",
    salary: "$95k - $120k",
    location: "Noida, India"
  },
  {
    logo: "https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1720244491",
    companyName: "Cognizant",
    postedTime: "6 days ago",
    jobDesignation: "UI/UX Designer Intern",
    jobType: "Part Time",
    tag: "Onsite",
    salary: "$25/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://images.seeklogo.com/logo-png/45/2/exl-logo-png_seeklogo-452218.png",
    companyName: "EXL",
    postedTime: "1 day ago",
    jobDesignation: "Data Analyst",
    jobType: "Full Time",
    tag: "Hybrid",
    salary: "$85k - $105k",
    location: "Gurugram, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WrrkBzFPEbf0zN_MvM9u1lGQpw8md8k0kPTIBJLlQw&s=10",
    companyName: "Accenture",
    postedTime: "10 hours ago",
    jobDesignation: "Senior UI/UX Designer",
    jobType: "Full Time",
    tag: "Hybrid",
    salary: "$120k - $150k",
    location: "Mumbai, India"
  },
  {
    logo: "https://img.icons8.com/?size=100&id=118571&format=png&color=000000",
    companyName: "Adobe",
    postedTime: "2 hours ago",
    jobDesignation: "Graphic Designer",
    jobType: "Full Time",
    tag: "Remote",
    salary: "$110k - $145k",
    location: "Noida, India"
  },
  {
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaqBimiU40nIz5pLpegfCPkoQTp9_70-fLQS4PQa1sA&s=10",
  companyName: "Tata Consultancy Services (TCS)",
  postedTime: "12 hours ago",
  jobDesignation: "Junior UI/UX Designer",
  jobType: "Full Time",
  tag: "Hybrid",
  salary: "$85k - $105k",
  location: "Noida, India"
},
{
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdHGfmj8Idh8so0RaUGKmXeRSiq9wg-QMpZFoQP84110moZH5ZcIgEPc&s=10",
  companyName: "Genpact",
  postedTime: "3 days ago",
  jobDesignation: "UX Designer",
  jobType: "Full Time",
  tag: "Remote",
  salary: "$90k - $120k",
  location: "Gurugram, India"
}
];
  return(<>
  <div className="heading">
    <h1>Job Opportunities</h1>
  </div>
  <div className="card-div">
    {data.map((val,i)=>{
      return <div key={i}> 
      <Card name={val.companyName} post={val.postedTime} jobtitle={val.jobDesignation} jobtype={val.jobType} level={val.tag} salary={val.salary} location={val.location} logo={val.logo}/>
      </div>
    })}
  </div>
    </>)
})
export default App;