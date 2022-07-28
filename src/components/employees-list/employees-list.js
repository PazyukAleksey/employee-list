import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, toggleIncrease, toggleRise}) => {

    const employes = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id}
            {...itemProps}
            onDelete ={() => onDelete(id)}
            toggleRise={() => toggleRise(id)}
            toggleIncrease={() => toggleIncrease(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {employes}
        </ul>
    )
}

export default EmployeesList;