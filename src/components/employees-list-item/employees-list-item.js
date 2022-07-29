import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, increase, rise, id, onDelete, toggleIncrease, toggleRise} = props;
    let classList = "list-group-item d-flex justify-content-between";

    classList = `${increase ? classList + ' increase' : classList }`
    classList = `${rise ? classList + ' like' : classList }`


    return (
        <li className={classList}>
            <span className="list-group-item-label"  onClick={() => toggleIncrease(id)} >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" onClick={() => toggleRise(id)}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    onClick={() => onDelete(id)}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;