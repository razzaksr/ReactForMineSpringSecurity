import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connectToOne, read } from "./API";

export const Read=()=>{

    const{id}=useParams()

    const[employee,setEmployee]=useState({})

    useEffect(()=>{
        callReading()
    })

    const callReading=async()=>{
        const t = await connectToOne(id)
        setEmployee(t.data)
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-dark text-light">
                        <h1 className="card-title text-center">{employee.name}</h1>
                        <div className="card-body">
                            <p className="float-start">{employee.contact}</p>
                            <p className="text-center">{employee.skills}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}