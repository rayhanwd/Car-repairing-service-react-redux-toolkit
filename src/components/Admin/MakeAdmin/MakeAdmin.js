import React,{useState} from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import SideBarAdmin from '../../Shared/SideBarAdmin/SideBarAdmin';
const MakeAdmin = () => {
  const[newEmail,setEmail] = useState({});
  const handleBlur =(e)=>{
      const newData = {...newEmail};
      newData[e.target.name] = e.target.value;
      setEmail(newData);
  }
  const handleSubmitted = () => {
      const eventData = {
          email: newEmail.emailId
      }
    
  const url = 'https://whispering-falls-52253.herokuapp.com/addNewAdmin';

  fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
  })
      .then(res => res.json())
      .then(data => {
          if (data) {

          }
      })
  }
  return (
    <div className="container-fluid vh-100 overflow-hidden p-0">
      <AdminBar></AdminBar>
      <div class="card mb-3">
        <div class="row g-0">
          <SideBarAdmin></SideBarAdmin>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">MakeAdmin</h5>
              <form onSubmit={handleSubmitted} class="row">
                <div class="col-md-7">
                  <label for="inputPassword2" class="visually-hidden">Enter email</label>
                  <input onBlur={handleBlur} name="emailId" type="email" class="form-control" placeholder="Email address" />
                </div>
                <div style={{ marginTop: '27px' }} class="col-md-2">
                  <button type="submit" class="custom-btn">Add to admin</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;