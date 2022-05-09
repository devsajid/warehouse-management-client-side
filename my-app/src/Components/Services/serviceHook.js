import React, { useEffect, useState } from 'react'
import Services from './Services';

function serviceHook() {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h3>serice : {service.length}</h3>
            {/* console.log{service} */}
            {
                service.map(service => <Services service={service}></Services>)
            }

        </div>
    )
}

export default serviceHook








