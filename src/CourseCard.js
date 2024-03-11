import React,{useState} from 'react';

const CourseCard = ({name, hour, key}) => {
    const [hourValue, updateHourValue] = useState(hour);
    let timeValue = parseInt(hourValue);

    return (
      <div className='childCard' style={{display: 'flex', gap:'20px', alignItems:'center'}} key={key}>
        <p>{name}</p>
        <p>-</p>
        <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
        <button style={{cursor:'pointer', width: '30px', height:'30px', border: 'none', borderRadius: '100%', backgroundColor: 'red', color: 'white' }} onClick={() => {
            if(hourValue > 0 ){
                updateHourValue(timeValue - 1)
            }
        }}>-</button>
        <p style={{cursor:'pointer', color:'white'}}>{hourValue} <span style={{color:'black'}}>hrs</span></p>
        <button style={{width: '30px', height:'30px', border: 'none', borderRadius: '100%', backgroundColor: 'green', color: 'white' }} onClick={() => {updateHourValue(timeValue + 1)}}>+</button>
        </div>
        
      </div>
    )
}

export default CourseCard