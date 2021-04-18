import React, { useState, useEffect } from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import SideBarAdmin from '../../Shared/SideBarAdmin/SideBarAdmin';
const ManageServices = () => {
  const [Services, setServices] = useState([]);
  const id = Services.id;
  useEffect(() => {

    fetch(`https://whispering-falls-52253.herokuapp.com/services`)
      .then(res => res.json())
      .then(GetManageData => setServices(GetManageData))
  }, [])

  const delProduct = (event, id) => {
    fetch(`https://whispering-falls-52253.herokuapp.com/delete/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          event.target.parentNode.style.display = 'none';
          alert('Product Delete Successfully!')
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
              <h5 class="card-title">ManageServices</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Vpn year planning</th>
                    <th scope="col">Vpn price $
</th>
                    <th scope="col">Set month
</th>
                    <th scope="col">Saving amount %
</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Services.map(service =>
                      <tr>
                        <td>{service.planningType}</td>
                        <td>{service.price}</td>
                        <td>{service.monthOrYear}</td>
                        <td>{service.savingAmount}</td>
                        <td><select onBlur={() => delProduct(`${id}`)} class="form-select" aria-label="Default select example">
                          <option value="1">Delete</option>
                        </select></td>
                      </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;