import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartOne = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling); //getter
    const dispatch = useDispatch();

    //dispatch
    const handleChange = (event) => {
        //pass data to reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <div>
                <input value={feeling} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/two')} className="button">Next</button>
            </div>
        </>
    );
}


export default PartOne;