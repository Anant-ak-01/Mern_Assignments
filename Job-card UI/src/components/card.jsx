import { Bookmark } from "lucide-react";
const Card=((props)=>{
    return(
    <div className="card">
      <div className="card-header">
        <img src={props.logo} alt="" />
        <button>Save  <Bookmark size={12} /></button>
      </div>
      <div className="card-body">
      <h3>{props.name} <span>{props.post}</span></h3>
      <h2>{props.jobtitle}</h2>
      <div className="status">
      <h4>{props.jobtype}</h4>
      <h4>{props.level}</h4>
      </div>
      </div>
      <div className="card-footer">
      <div>
        <h3>{props.salary}</h3>
        <p>{props.location}</p>
      </div>
      <button>Apply now</button>
      </div>
    </div>
    )
})
export default Card;