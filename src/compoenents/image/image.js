import React,{useState} from "react"
import Unsplash,{toJson} from "unsplash-js";

const Image=()=>{
    const [search,setsearch]=useState("")
    const [photo,setphoto]=useState([])
    const unsplash=new Unsplash({
        accessKey:"LXdW22C5xDKnpBEgMliDoS9ZsO5svIT_SV4E-6TFOHA"
    })
    const searchphoto=async(e)=>{
        e.preventDefault()
        unsplash.search.photos(search,1,30)
        .then(toJson).then((json)=>{
            console.log(json.results)
        })
    }
    return (
        <>
<div className="main">
<div className="second-container">
    <h1 className="photo">Photo Search</h1>
    <form className="form" onSubmit={searchphoto}>
        <label className="label" htmlFor="search"></label>
        {" "}
        P
        <input type="text" name="query" className="input-1" placeholder={"search"} value={search} 
            onChange={(e)=>setsearch(e.target.value)}
        />
        <button type="submit" className="button">Search</button>
    </form>
    <div className="display">
        {photo.map((photos)=><div className="display-slate" key={photos.id}>
            <img className="image" alt={photos.alt_description} src={photos.urls.full} width="50%" height="50%"></img>
        </div>)}
    </div>
</div>
</div>
        </>
    )
}
export default Image