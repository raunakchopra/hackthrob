import React from 'react'
import { useForm } from "react-hook-form";

const ProfileGenForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="h-screen w-full bg-red-200">
            <h1>Some Information for us to help you.</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div>
                    <label>First Name: </label>
                    <input type="text" ref={register({ required: true })}></input>
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" ref={register({ required: true })}></input>
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" name="lastName" ref={register({ required: true })}></input>
                </div>
                <div>
                    <label>Gender: </label>
                    <input type="text" ref={register({ required: true })}></input>
                </div>
                <div>
                    <label>Interested In: </label>
                    <input type="text" ref={register({ required: true })}></input>
                </div>
                <input type="submit"></input>
                {/* <input type="text"></input> */}
                {/* form logic */}
            </form>
            
            
        </div>
    )
}

export default ProfileGenForm