import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartFour = () => {
    const history = useHistory();
    const type = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }
    return (
        <>
            <h1>Any comments you would like to leave?</h1>
            <div>
                <input value={type} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/step/submit')} className="button">Next</button>
            </div>
        </>
    )
}

export default PartFour;