import React,{useState} from 'react';
import './App.css';
import CourseCard from './CourseCard';

function App() {

  const [courseData, setCourseData] = useState([]);

  const clickHandler = () => {
    const courseName = document.getElementById('course-name').value;
    const courseDuration = document.getElementById('duration').value;

    const data = {
      name : courseName,
      time : courseDuration
    }

    setCourseData([...courseData, data])
  } 

  return (
    <div className="App">
      <h1>Study Planner</h1>
      <div className='inputs'>
        <input id='course-name' type='text' />
        <input id='duration' type='number' />
        <button className='btn' id='addBtn' onClick={() => {clickHandler()}}>Add</button>
      </div>
      <div style={{display: 'flex', gap: '50px' , flexWrap:'wrap', justifyContent: 'center', padding:'20px'  }}>
      {courseData.map((course, index) => {
        return (
          <div className='parentCard' style={{display: 'flex', gap: '10px' , flexWrap:'wrap'}}>
          <p>{index + 1}. </p>
          <CourseCard name={course.name} hour={course.time} key={index} />
          </ div>
          
        )
      })}
      </div>
      
    </div>
  );
}

export default App;
