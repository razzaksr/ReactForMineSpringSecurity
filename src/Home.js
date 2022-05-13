import React, { useEffect, useState } from "react";
import { connectToAll, connectToDelete } from "./API";

export const Home=()=>{

    const[tmpArray,setTmpArray]=useState([])

    const hello=async()=>{
        const t = await connectToAll();
        setTmpArray(t.data)
    }

    const toErase=async(value)=>{
        const hey=await connectToDelete(value)
        alert(hey.data)
        window.location.assign("/home")
    }

    useEffect(()=>{
        hello()
    },[])

    return(
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='table-responsive-md'>
                        <table className='text-center col-lg-12 col-md-9 col-sm-12 shadow p-5 table table-hover'>
                            <thead>
                                <tr>
                                    <th>Resource name</th>
                                    <th>Resource skills</th>
                                    <th>Resource contact</th>
                                    <th>Resource Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tmpArray.map((ele)=>(
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.skills}</td>
                                        <td>{ele.contact}</td>
                                        <td className="row justify-content-around">
                                            <a href={`/read/${ele.id}`} className="btn btn-outline-info col-3">
                                                <i class="bi bi-envelope-open-fill"></i>
                                            </a>
                                            <a href={`/edit/${ele.id}`} className="btn btn-outline-warning col-3">
                                                <i class="bi bi-arrow-up-square-fill"></i>
                                            </a>
                                            <button className="btn btn-outline-danger col-3" onClick={()=>toErase(ele.id)}>
                                                <i class="bi bi-person-dash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}