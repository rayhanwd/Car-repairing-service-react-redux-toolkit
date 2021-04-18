import React,{useState, useEffect, useContext} from 'react';
import DashboardSidebar from '../Shared/DashboardSidebar/DashboardSidebar';
import DashboardTopBar from './../Shared/DashboardTopBar/DashboardTopBar';
import OrderedCard from './OrderedCard';
import { UserContext } from './../../App';
import StatusCard from './StatusCard';
//statusList
const YourOrderedList = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [OrderedList, setOrderedList] = useState([]);
    const [statusList, setStatusList] = useState([]);

  
    useEffect(() => {
        fetch('http://localhost:5200/orderedList/?email='+loggedUser.email)
            .then(res => res.json())
            .then(data => setOrderedList(data))
            
    }, [])

    useEffect(() => {
        fetch('http://localhost:5200/statusList')
            .then(res => res.json())
            .then(data =>setStatusList(data))
            
    }, [])

    return (
        <div className="container-fluid vh-100 overflow-hidden p-0">
        <DashboardTopBar></DashboardTopBar>
        <div class="card mb-3">
            <div class="row g-0">
                <DashboardSidebar></DashboardSidebar>
                <div class="col-md-9">
                    <div class="card-body">
                    <h5 class="card-title">Your ordered list</h5>
                    {
                        OrderedList.map(Order=><OrderedCard OrderInfo={Order}></OrderedCard> )
                    }  
                    {
                        statusList.map(currentStatus=><StatusCard Get={currentStatus}></StatusCard>)
                    }    
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default YourOrderedList;