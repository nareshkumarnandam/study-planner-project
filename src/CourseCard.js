import React,{useState} from 'react';

const CourseCard = ({name, hour, key}) => {
    const [hourValue, updateHourValue] = useState(hour);
    let timeValue = parseInt(hourValue);

    return (
      <div className='childCard' style={{display: 'flex', gap:'20px'}} key={key}>
        <p>Subject: {name}</p>
        <p>Duration: {hourValue} hrs</p>
        <button onClick={() => {updateHourValue(timeValue + 1)}}>+</button>
        <button onClick={() => {
            if(hourValue > 0 ){
                updateHourValue(timeValue - 1)
            }
        }}>-</button>
      </div>
    )
}

export default CourseCard