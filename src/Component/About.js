import React, { useState } from "react";
import { useForm } from "react-hook-form";

const About = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
     const [ list , setList ] = useState([]);
    //  con
    const onSubmit = () => {
        // console.log("data", data)
        let data = list ? list : []
        let object = {firstName}
        console.log("13213",object);

    };
    return (
        <div className="main-page">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field1">
                    <input {...register("firstName", { required: true, })} 
                        placeholder="firstname"
                        
                    />
                    {errors?.firstName?.type === "required"
                     && <p className="errmsg">required*</p>}
                </div>


                <div className="form-field1">
                    <input {...register("email", { required: true, })} 
                    placeholder="email"
                    
                    />
                    {errors?.firstName?.type === "required" 
                    && <p className="errmsg">required*</p>}
                </div>

                <div className="form-field1">
                    <select {...register("status")}>
                        <option value="none">None</option>
                        <option value="active">Active</option>
                        <option value="unActive">UnActive</option>

                    </select>
                </div>

                <input type="submit" />
            </form>
        </div>
    )
}

export default About;