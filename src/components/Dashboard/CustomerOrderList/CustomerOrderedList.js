import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import CustomerOrderedListCard from './CustomerOrderedListCard';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
//statusList
const CustomerOrderedList = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [OrderedList, setOrderedList] = useState([]);



    useEffect(() => {
        fetch('https://whispering-falls-52253.herokuapp.com/orderedList/?email=' + loggedUser.email)
            .then(res => res.json())
            .then(data => setOrderedList(data))

    }, [])

    useEffect(() => {
        fetch('https://whispering-falls-52253.herokuapp.com/statusList')
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])

    return (
        <>
            <TopBar></TopBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div class="col-md-9">
                        <div class="card-body shadow-sm m-5">
                            <h5 class="card-title">Your ordered list</h5>
                            {
                                OrderedList.map(Order => <CustomerOrderedListCard OrderInfo={Order}></CustomerOrderedListCard>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CustomerOrderedList;