import React from 'react';

const ManageOrderTable = (props) => {
const {id,planningType,price,monthOrYear, savingAmount}= props.TableData;

    const delService = (id) => {
        fetch(`https://whispering-falls-52253.herokuapp.com/delete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(result => {
            if (result) {
             
              alert('Product Delete Successfully!')
            }
          })
      }
    return (
        <tr>
                          <td>{planningType}</td>
                          <td>{price}</td>
                          <td>{monthOrYear}</td>
                          <td>{savingAmount}</td>
                          <td><button onClick={()=>delService(`${id}`)} class="custom-btn">Delete</button></td>
                        </tr>
    );
};

export default ManageOrderTable;