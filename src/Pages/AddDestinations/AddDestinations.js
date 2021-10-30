import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const axios = require('axios').default;

const AddDestinations = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/destinations', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Data Added Successfully !');
                reset();
            }
        })
    }
    return (
        <div className="adddestination">
            <h1>Add Destinations</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("destinationName", { required: true })} placeholder="Enter Destination Name"/>
            {errors.destinationName && <span>This field is required</span>}

            <input type="number" {...register("tourCost", { required: true })} placeholder="Enter Cost of Tour"/>
            {errors.tourCost && <span>This field is required</span>}

            <input {...register("description", { required: true })} placeholder="Enter Description"/>
            {errors.description && <span>This field is required</span>}

            <input {...register("imageUrl", { required: true })} placeholder="Enter image url"/>
            {errors.imageUrl && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddDestinations;