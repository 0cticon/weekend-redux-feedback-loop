import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartFour = () => {
    const history = useHistory();
    const type = useSelector(store => store.type);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENT', payload: event.target.value });
    }
    return (
        <>
            <h1>Any comments you would like to leave?</h1>
            <div>
                <input value={type} onChange={handleChange} className="input" type="text" />
                <button onClick={() => history.push('/step/five')} className="button">Next</button>
            </div>
        </>
    )
}

export default PartFour;