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
      <div style={{display: 'flex', gap:'10px', justifyContent:'center'}} className='inputs'>
        <input style={{height:'30px', width:'200px', padding:'0 10px', border:'2px solid gray', borderRadius:'8px'}} id='course-name' type='text' />
        <input style={{height:'30px', width:'30px', textAlign:'center', border:'2px solid gray',borderRadius:'8px'}} id='duration' type='number' />
        <button style={{ width:'60px', textAlign:'center', border:'none',borderRadius:'8px', backgroundColor:'#3B82F6', cursor:'pointer', color:'white'}} className='btn' id='addBtn' onClick={() => {clickHandler()}}>Add</button>
      </div>
      <div style={{display: 'flex', gap: '20px' ,flexDirection: 'column', flexWrap:'wrap', justifyContent: 'center', padding:'50px', alignItems:'center', color:'white'  }}>
      {courseData.map((course, index) => {
        return (
          <div className='parentCard' style={{display: 'flex', gap: '10px' , flexWrap:'wrap', backgroundColor:'gray', padding:'10px', width: '40%', justifyContent: 'center', fontSize: '1.2rem', borderRadius: '8px', alignItems:'center' }}>
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
