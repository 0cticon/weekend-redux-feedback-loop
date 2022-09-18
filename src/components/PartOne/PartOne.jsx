import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartOne = () => {
    const history = useHistory();
    const feel = useSelector(store => store.name); //getter
    const dispatch = useDispatch();

    //dispatch
    const handleChange = (event) => {
        //pass data to reducer
        dispatch({ type: 'SET_FEEL', payload: event.target.value });
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <div>
                <input value={feel} onChange={handleChange} className="input" type="number" />
            </div>
        </>
    )
}


export default PartOne;