import { useNavigate ,useLocation, Link } from 'react-router-dom'
import styles from './finishpage.module.css'



const FinshPage = () => {
  
  const navigate = useNavigate()
  const time = useLocation().state
  console.log(time)
  const QuestionIds = JSON.parse(localStorage.getItem('QuestionIds'))
  console.log(QuestionIds)
  const TotalTimeTaken = time.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <div className={styles.container}>
        <div className={styles.form} >
            <div style={{marginLeft:'20px'}}>
                <div className={styles.text}>Review</div>
                <div className={styles.email}>
                    Name : <span style={{color:"red"}}> {sessionStorage.getItem('name')}</span>
                </div>

                <div className={styles.password}>
                  <div style={{fontSize:'20px'}}>QuestionIds :</div>
                    {
                      QuestionIds.map((id,i) => {
                        const TimeForEachQuestion = time[i];
                        return (
                          <div key={id} className={styles.ids}>
                            <div> {i+1}) {id} :  {TimeForEachQuestion} seconds
                            </div>
                          </div>
                        );
                      })
                    }
                </div>
                <div className={styles.end}>Total time taken to complete the test : {TotalTimeTaken} Seconds </div>
                <div className={styles.end}>Total time given to complete the test : {QuestionIds.length*5} Minutes </div>
                <div className={styles.link}>
                  <Link to='/'>want to retake the test?</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinshPage;