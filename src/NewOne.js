import { useState } from "react"
import { connectToCreate } from "./API"

export const NewONe=()=>{

    const[pro,setPro]=useState({
        "name":"",
        "skills":[],
        "contact":0,
    })

    const track=(eve)=>{
        const{name,value}=eve.target

        setPro((old)=>{
            return{
                ...old,
                [name]:value,
            }
        })
    }

    const sub=async()=>{
        pro.skills=pro.skills.split(",")
        const t = await connectToCreate(pro)
        alert(JSON.stringify(t.data))
        window.location.assign("/home")
    }

    const res=()=>{
        setPro(()=>{
            return{
                "person":"",
                "skills":[],
                "contact":0,
            }
        })
    }

    return(<>
        <div className="container-fluid mt-3">
            <h1 className="display-6 text-center text-primary">Recruite New Resource</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow rounded p-3">
                    <div className="form-group">
                        <label>Resource person name</label>
                        <input type="text" value={pro.name} onChange={track} name="name" className="form-control" placeholder="Person Name"/>
                    </div>
                    <div className="form-group">
                        <label>Resource person skills</label>
                        <input type="text" value={pro.skills} onChange={track} name="skills" className="form-control" placeholder="Person Skills by ,"/>
                    </div>
                    <div className="form-group">
                        <label>Resource person contact</label>
                        <input type="text" value={pro.contact} onChange={track} name="contact" className="form-control" placeholder="Person Contact"/>
                    </div>
                    <div className="mt-2 row justify-content-around">
                        <button className="btn btn-primary col-1" onClick={sub}>
                            <i class="bi bi-person-plus-fill"></i>
                        </button>
                        <button className="btn btn-dark col-1" onClick={res}>
                            <i class="bi bi-slash-square-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}