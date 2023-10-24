import React from "react";

export const FullName=({empid,email,comp})=>{
    return(
        <div className="sub">
            <h1>Empolyee Details</h1>
            <h3>Empid:{`${empid}` }</h3>
            <h3>Email:{`${email}`}</h3>
            <h3>Company Name:{`${comp}`}</h3>
        </div>
    )
}