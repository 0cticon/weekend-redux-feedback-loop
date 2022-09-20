import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//display summary of inputs before submitting to database
const Submit = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    //axios POST to pass input data to server
    const handleSubmit = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            console.log(response);
            dispatch({ type: 'CLEAR_ALL' });
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }

    return (
        <>
            <h2>Summary Page</h2>
            <div>
                <div style={{
                    margin: '20px 10px',
                    fonSize: '1.4em'
                }}>
                    <div>Feeling: {feeling}</div>
                    <div>Understanding: {understanding}</div>
                    <div>Support Level: {support}</div>
                    <div>Added Comment: {comments}</div>
                </div>
                <button onClick={handleSubmit} className="button">Submit</button>
            </div>
        </>
    )

}

export default Submit;