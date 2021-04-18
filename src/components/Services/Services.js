import React,{useState,useEffect} from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [ServicesData, setServicesData] = useState([]);

    useEffect(() => {
     
      fetch(`http://localhost:5200/services`)
          .then(res => res.json())
          .then(GetManageData => setServicesData(GetManageData))
  }, [])
    return (
        <div style={{backgroundImage:'linear-gradient(#C90B72, #001C74)' ,backgroundColor:'#001C74', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div class="container mx-auto">
            <h2 class="text-center text-white pt-5">The final sale is here</h2>
            <h4 class="text-center text-white py-5">Last chance to buy the 2-year plan with 68% off!</h4>
            <div className="row">
            {
                ServicesData.map(service => <ServiceCard getData={service}></ServiceCard>)
            }
        </div>
        </div>
        </div>
    );
};

export default Services;

