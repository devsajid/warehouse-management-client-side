import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useForm } from "react-hook-form";




function ItemDetails() {
    // LOAD ITEM BY ID FROM SERVER 
    const { id } = useParams();
    const [Item, setItem] = useState({});
    useEffect(() => {
        const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);

    // handle button function 
    const handleUpdateItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const updateItems = { name, price, description };

        // SEND DATA IN SERVER TO UPDATE
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log('sucsecc', data)
                event.target.reset();
            })
        // console.log(data)

    }

    // DATA UPDATE FORM
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     const url = `http://localhost:5000/product/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('sucsecc', data)

    //         })
    //     console.log(data)

    // };

    return (
        <div className='w-50 mx-auto'>
            <div>ItemDetails page</div>
            <h2>item : {id}</h2>
            <h2>item name : {Item.name}</h2>

            <form onSubmit={handleUpdateItem}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="number" name='price' placeholder='price' />
                <br />
                <input type="text" name='description' placeholder='description' />
                <br />
                <input type="submit" value="update button" />

            </form>

            {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name'{...register("name")} />
                <input className='mb-2' placeholder='description'{...register("description")} />
                <input className='mb-2' placeholder='price' type="number"{...register("price")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='mb-2' type="submit" />
            </form> */}


        </div>
    )
}

export default ItemDetails