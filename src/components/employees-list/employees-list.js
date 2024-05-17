import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elem = data.map(item => {

        const {id, ...itemProps} = item;

        return (
            < EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    );
}

export default EmployeesList;