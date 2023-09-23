import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function MathQuestion( {question, index} ) {
   
    const mathjaxContext = {
    
    input: 'tex',
    output: 'html',
<<<<<<< HEAD
    display: true, 
    
=======
    display: false, 
>>>>>>> 149f30baf33736e2c4874b2645195d592ffa516a
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
