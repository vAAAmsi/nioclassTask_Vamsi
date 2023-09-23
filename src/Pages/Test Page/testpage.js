import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate, } from 'react-router-dom';
import { FetchApi } from '../../Hooks/apicall';
import MathQuestion from '../../Hooks/questionToMathjax';
import { Button } from '@mui/material';
import styles from './testpage.module.css'
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import Swal from 'sweetalert2';

const Testpage = () => {
    const location = useLocation()
    const array = location.state.selectedQuestionIDs
    const [timer, setTimer] = useState(0);
    const [timings, setTimings] = useState(Array(array.length).fill(0));
    
    const [index, setIndex] = useState(0)
    const [question, setQuestion] = useState('');
    const navigate = useNavigate()
    
    useEffect(() => {
      const call = async() => {
        const response = await FetchApi(location.state.selectedQuestionIDs[index])
        setQuestion(response[0].Question)
      }
      call()
    },[index])
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
  
      return () => {
        clearInterval(interval); 
      };
    }, [index]);

 


 const PreviousQuestionHandler = () => {
    if(index > 0){
      setTimings((prevTimings) => {
        const newTimings = [...prevTimings];
        newTimings[index] = timer;
        return newTimings;
      });
      setTimer(0);
  
      setIndex(index - 1)
    }
 }

 const NextQuestionHandler = () => {
    
    if(index+1 !== array.length){
      setTimings((prevTimings) => {
        const newTimings = [...prevTimings];
        newTimings[index] = timer;
        return newTimings;
      });
      setTimer(0);
      setIndex(index + 1)
    } 
 }
 
 const SubmitHandler = () => {
 
  Swal.fire({
    title: 'Total Time for the Test',
    text: 'Are you sure you want to submit ?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'End Test',
    cancelButtonText: 'Cancel',
  }).then((result) => {

    if (result.isConfirmed) {
      setTimings((prevTimings) => {
        const newTimings = [...prevTimings];
        newTimings[index] = timer;
        return newTimings;
      });
      navigate('/finishpage',{
        state: timings })
    }
    

  });
 }

  return (
    <>
      <div className={styles.timer_container}>
        <div></div>
        <div >
          Total time {array.length*5} minutes
        </div>
        <div>
        <AccessAlarmRoundedIcon style={{paddingTop:'2px'}} /> : {timer} seconds
        </div>
        {/* Total time {array.length*5} minutes <AccessAlarmRoundedIcon /> */}
      </div>
      <div className={styles.question}>
        <MathQuestion
         question = {question}
         index={index}
        />
      </div>
      <div className={styles.btns_container}>
        <Button 
         disabled={index === 0}
         onClick={() => PreviousQuestionHandler()}
         style={{color : 'white',backgroundColor:'green'}} 
        >previous</Button>

        {
          index+1 !== array.length ? <Button 
          onClick={() => NextQuestionHandler()}
          style={{color : 'white',backgroundColor:'green'}}
         >Next</Button> : ''
        }

        {
          index+1 === array.length ? <Button 
          onClick={SubmitHandler}
          style={{color : 'white',backgroundColor:'red'}}
          >Submit</Button> : ''
        }
      </div>
      

    </>
  )
}

export default Testpage;