import React,{useState} from 'react';
import axios from 'axios';
import AnswerDisplay from '../AnswerDisplay/AnswerDisplay';

import "./QAComponent.css"
const QAComponent = () => {
    const[question,setQuestion]= useState('');
    const[answer,setAnswer]= useState('');
    const[loading,setLoading]= useState(false); // New loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  //set loading to ture when request starts
        try{
            const response = await axios.post('http://127.0.0.1:8000/generate-answer/',{
                question:question,
            });
            setAnswer(response.data.answer); 
        }catch (error){
            console.error("Error fetching answer:", error);
        }finally{
            setLoading(false); //set Loading to false when request completes
        }
    };
    
    const handleReset = () =>{
        setQuestion('');
        setAnswer('');
        setLoading(false); //Reset loarding state if necessary
    };

  return (
    <div className='form-container'>
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your Question here"
                required
            />
            <button type ="submit">Proceed</button>
            <button type="button" onClick={handleReset}>New Question</button>
        </form>
        {loading ?(
            <p className='loading'>Loading...</p>):
            (
                <AnswerDisplay answer={answer}/>
            )
        
        }
    </div>
  );
};

export default QAComponent