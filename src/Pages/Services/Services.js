import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://nur-alom.github.io/jsonapi/mydata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container">
            <h1 className="my-5 text-success">Our Top Services</h1>
            <hr />
            <div className="row ms-3 my-5 g-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;