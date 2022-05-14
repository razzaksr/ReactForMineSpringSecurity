import { useState } from "react"
import { connectLogin } from "./API"

export const Login=()=>{

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const track=(dt)=>{
        const{name,value}=dt.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const sub=async()=>{
        const t = await connectLogin(user)
        alert(t.data)
    }

    const res=()=>{

    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 alert-info shadow rounded p-4">
                        <div className="form-group">
                            <lable>Username</lable>
                            <input type="text" name="username" value={user.username} onChange={track} className="form-control"  placeholder="username here"/>
                        </div>
                        <div className="form-group">
                            <lable>Password</lable>
                            <input type="password" name="password" value={user.password} onChange={track} className="form-control"  placeholder="password here"/>
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="col-1 btn btn-outline-success" onClick={sub}>
                                <i class="bi bi-door-open-fill"></i>
                            </button>
                            <button className="col-1 btn btn-outline-danger" onClick={res}>
                                <i class="bi bi-x-octagon-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}