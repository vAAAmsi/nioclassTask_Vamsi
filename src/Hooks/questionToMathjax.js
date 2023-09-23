import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function MathQuestion( {question, index} ) {
   
    const mathjaxContext = {
    input: 'tex',
    output: 'html',
    display: false, 
  };

  
  const processedQuestionText = question.replace(/\$(.*?)\$/g, '\\($1\\)');

  return (
    <MathJaxContext {...mathjaxContext} >
      <div style={{color : 'black'}}> <span style={{color : 'red'}}>Question no {index+1} : </span>
        <MathJax>{processedQuestionText}</MathJax>
      </div>
    </MathJaxContext>
  );
}

export default MathQuestion;
