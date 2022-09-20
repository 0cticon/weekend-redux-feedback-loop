import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartThree = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }
    return (
        <>
            <h1>How well are you being supported?</h1>
            <div>
                <input value={support} onChange={handleChange} className="input" type="number" />
                <button onClick={() => history.push('/step/four')} className="button">Next</button>
            </div>
        </>
    )
}

export default PartThree;