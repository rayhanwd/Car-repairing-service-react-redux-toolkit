import React, { useState } from 'react';

const Table = (props) => {
  const { id, planningType, email, monthOrYear } = props.TableData;
  const [StatusList, SetStatus] = useState({});
  const handleBlur = (e) => {
    const newData = { ...StatusList };
    newData[e.target.name] = e.target.value;
    SetStatus(newData);
  }
  const handleChange=()=>{
     const status = StatusList
    fetch(`https://whispering-falls-52253.herokuapp.com/update/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data,'updated');
      })

  }
  return (
    <tr>
      <td>{planningType}</td>
      <td>{email}</td>
      <td>{monthOrYear}</td>
      <td>Credit card</td>
      <td><select onBlur={handleChange} onChange={handleBlur} name="status" class="form-select" aria-label="Default select example">
        <option selected>Pending</option>
        <option>Ongoing</option>
        <option>Success</option>
      </select></td>
    </tr>
  );
};

export default Table;