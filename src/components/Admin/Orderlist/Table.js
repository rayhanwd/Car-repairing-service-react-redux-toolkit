import React,{useState} from 'react';

const Table = (props) => {
    const{id,planningType,email,monthOrYear} =props.TableData;
    const [StatusList, SetStatus] = useState({});
    const handleBlur =(e)=>{
        const newData = {...StatusList};
        newData[e.target.name] = e.target.value;
        SetStatus(newData);
      }
      
      const handleChange = ()=>{
        const eventData = {
          id,
          email,
          status:StatusList.status,
         
      }
      console.log(eventData);
        const url = 'http://localhost:5200/AddStatus';
    
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