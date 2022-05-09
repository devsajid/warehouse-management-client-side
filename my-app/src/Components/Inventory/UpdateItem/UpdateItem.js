import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

function UpdateItem() {
    const { id } = useParams();
    const [Itemes, setItemes] = useState([]);
    useEffect(() => {
        const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItemes(data));

    }, []);

    // inventory item update form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;
        const url = `http://localhost:5000/Items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        console.log(data)
    };


    return (
        <div>
            <h2>Inventory Item Details</h2>
            <p>Name : {Itemes.name}</p>
            <p>Price : {Itemes.price}</p>
            <p>Quantity : {Itemes.quantity}</p>
            <p>Description : {Itemes.description}</p>
            <p>Supplier : {Itemes.supplier}</p>

            {/* item update form */}

            <div className='w-50 mx-auto'>
                <h2>Add Iteme Form</h2>

                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='name'{...register("name")} />
                    <input className='mb-2' placeholder='description'{...register("description")} />
                    <input className='mb-2' placeholder='price' type="number"{...register("price")} />
                    {/* <input className='mb-2' placeholder='pic' type="text"{...register("pic", { required: true })} /> */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='mb-2' type="submit" />
                </form>
            </div>

        </div>
    )
}

export default UpdateItem