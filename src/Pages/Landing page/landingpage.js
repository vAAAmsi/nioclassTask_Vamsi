import React, { useState } from 'react';
import styles from './landingpage.module.css'
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function LandingPage() {

  const [selectedQuestionIDs, setSelectedQuestionIDs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const userName = sessionStorage.getItem('name')
  const navigate = useNavigate()
  const questionIDs = ['AreaUnderTheCurve_21',
    'BinomialTheorem_13',
    'BinomialTheorem_24',
    'AreaUnderTheCurve_15',
    'AreaUnderTheCurve_2',
    'BinomialTheorem_3',
    'BinomialTheorem_4',
    'AreaUnderTheCurve_5']

  

  const handleQuestionCheckboxChange = (e,index) => {
    const questionID = e.target.value;
    console.log(index)
    if (e.target.checked) {
      setSelectedQuestionIDs((prevSelected) => [...prevSelected, questionID]);
    } else {
      setSelectedQuestionIDs((prevSelected) =>
        prevSelected.filter((id) => id !== questionID)
      );
    }
  };

  const textpageHandler = () => {
    localStorage.setItem('QuestionIds',JSON.stringify(selectedQuestionIDs))
    navigate('/testpage',{
        state : {selectedQuestionIDs
        }
    })
    
  }
  const calculateTotalTime = () => {
    console.log(selectedQuestionIDs)
    const totalTime = selectedQuestionIDs.length * 5;
    setTotalTime(totalTime);
    if(selectedQuestionIDs.length > 0) {
        Swal.fire({
            title: 'Total Time for the Test',
            text: `You have selected ${selectedQuestionIDs.length} questions and The total time for the test is ${totalTime} minutes.`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Take Test',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon : 'success',
                title : 'successfully Into the test !',
                showCancelButton: true,
                confirmButtonText: 'Ok',
              }).then((result) => {
                if(result.isConfirmed){
                  textpageHandler();
                }

              })
              
            }
          });
    }
    else{
        Swal.fire({
            icon : 'warning',
            text : 'Select atleast a question to continue..!!'

        })
    }
  };

  return (
    < >
     <center style={{marginTop : '20px'}}>
        <h1>Welcome to the Test <span className={styles.userName}>{userName}</span></h1>
     </center>
      
      <center>
      <h3>Select Questions To Continue.. :</h3>
      </center>
      
     <div className={styles.questionIds_main} >
        <div className={styles.questionIds_main_inner} >
            <ul>
                {questionIDs.map((questionID,index) => (
                <li key={questionID}>
                    <label className={styles.label} >
                    <input
                        type="checkbox"
                        value={questionID}
                        onChange={(e) => handleQuestionCheckboxChange(e,index)}
                        className={styles.input_box}
                    />
                    Question {questionID}
                    </label>
                </li>
                ))}
            </ul>
        </div>
      
     </div>
     <div className={styles.LandingPage_btn_main}>
        <Button
         onClick={calculateTotalTime}
         style={{color:'white',backgroundColor:'green'}}
        >Calculate Total Time</Button>
     </div>
      
    </>
  );
}

export default LandingPage;