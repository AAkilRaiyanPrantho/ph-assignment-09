import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('entertainment.json')
        .then(res => res.json())
        .then(data => setServices(data));
    })

    return (
        <div className="grid grid-cols-1 w-full max-lg:px-5 md:max-lg:px-48 lg:grid-cols-2 px-20 gap-20 my-4">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;