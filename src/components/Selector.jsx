
import classes from './Selector.module.css'
const Selector = (props) => {
    const selectChangeHandler = evt => {
        console.log('Changing out State');
        props.selectUnit(evt.target.value);
    }

    // classes["selector center margin-bottom"]
    return (
        <div className={`${classes.selector} ${classes.center} ${classes['margin-bottom']} `}>
            <label>Select Unit for Your BMI Calculation:</label>
            <select defaultValue={"METRIC UNITS"} onChange={selectChangeHandler}>
                <option value="US UNITS">US UNITS</option>
                <option value="METRIC UNITS">METRIC UNITS</option>
            </select>
        </div>
    );
}

export default Selector;
