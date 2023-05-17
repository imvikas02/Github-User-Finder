import React,{ useState } from 'react'
import './showprofile.css'

function Showprofile() {
    const [userName,setuserName] =  useState("");
    const [data,setData] = useState({});
   
    const onChangeHandler =(e)=>{
        setuserName(e.target.value)
    }
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((result)=>{
            return result.json();
        }).then((value)=>{
            console.log(value)
            setData(value)
        })
    }
  return (
    
    <div className="back">
    <div>
      <form onSubmit={onSubmitHandler} > 
  <div className="form-group">
  <h2> Github User Profile</h2>
    <input type="text" className="form-control" id="exampleInputEmail1" value={userName} placeholder="Enter Username" onChange={onChangeHandler}/>
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="submits btn btn-primary">Search</button>
</form>
    </div>
   

{/* display Data */}

<div className='container'>

<div className="card p-3">
    <div className="d-flex align-items-center">
        <div className="image"> 
        <img src={data.avatar_url} className="rounded" width="155"/> 
        </div>
        <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{data.name}</h4><span>{data.bio}</span>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column"> <span className="articles">Repo</span>
                 <span className="number1">{data.public_repos}</span> </div>
                <div className="d-flex flex-column"> <span className="followers">Followers</span>
                 <span className="number2">{data.followers}</span> </div>
                <div className="d-flex flex-column"> <span className="rating">following</span> 
                <span className="number3">{data.following}</span> </div>

                <div className="d-flex flex-column"> <span className="rating">location</span> 
                <span className="number3">{data.location
}</span> </div>
            </div>
        </div>
    </div>
</div>

</div>
</div>
 
  )
}

export default Showprofile
