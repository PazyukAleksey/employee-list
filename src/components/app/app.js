import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data : [
        { name: "Alex Treho", salary: 1000, increase: false, rise: false, id:1 },
        { name: "Jhon Doe", salary: 800, increase: true, rise: false, id:2 },
        { name: "Trevir Berbick", salary: 1200, increase: false, rise: true, id:3 } 
      ]
    }
    this.maxID = this.state.data.length;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (obj) => {
    obj = {
      name: obj.name,
      salary: obj.salary,
      increase: false,
      rise: false,
      id: ++this.maxID
    }
    const newArray = [...this.state.data, obj]
    this.setState(({data}) => {
      return {
        data: newArray
      }
    })
  }

  toggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id == id) {
          return {...item, rise: !item.rise }
        } 
        return item;
      })
    }))
  }

  toggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id == id) {
          return {...item, increase: !item.increase }
        } 
        return item;
      })
    }))
  }
  
  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            toggleIncrease = {this.toggleIncrease}
            toggleRise={this.toggleRise}/>
          <EmployeesAddForm  addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
