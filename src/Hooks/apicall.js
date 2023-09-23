import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const FetchApi = async (questionID) => {
    // console.log(questionID)
    try{
        // const response = await fetch(
        //     'https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2')
        const response = await axios.get(
            `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID}`
          );
          
        return response.data;
       } 
       catch(error){
        console.log(error.message)
        if(error.message === 'Network Error'){
          return Swal.fire({
            icon : 'error',
            text : 'Network error'
          })
        }
       }
}