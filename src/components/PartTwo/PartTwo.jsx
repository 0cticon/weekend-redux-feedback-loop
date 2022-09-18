import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const PartTwo = () => {
    const history = useHistory();
    const type = useSelector(store => store.type);
    const dispatch = useDispatch();

    const handeChange = (event) => {
        dispatch({ type: 'SET_UNDER', payload: event.target.value });
    }
    return (
        <>
            <h1>How well are you understanding the content?</h1>
        </>
    )
}

export default PartTwo;