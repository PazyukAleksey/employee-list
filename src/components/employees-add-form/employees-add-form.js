import './employees-add-form.css';
import {Component} from 'react'

class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name    : '',
            salary  : ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        const {name, salary} = this.state;
        const {addItem} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(event) => {event.preventDefault(); addItem({name: this.state.name, salary: this.state.salary})}}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        placeholder="Как его зовут?"
                        onChange={ this.onInputChange }
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        onChange={this.onInputChange}
                        value={salary} 
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;