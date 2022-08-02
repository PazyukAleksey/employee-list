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
      ],
      term: '',
      currentFilter: "all",
      filters : [
        { title: "Все сотрудники", type: 'all' },
        { title: "На повышение", type: 'increase' },
        { title: "З/П больше 1000$", type: 'salary' },
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

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id == id) {
          return {...item, [prop]: !item[prop] }
        } 
        return item;
      })
    }))
  }

  info = () => {
    let info = {};
    let count = 0
    this.state.data.map(item => item.increase ? count++ : false)
    info.count = this.state.data.length;
    info.countIncrease = count;
    return info;
  }

  onSearch = (term) => {
    this.setState({term})
  }

  serchEmp = (items, term) => {
    const {currentFilter} = this.state;
    if(term.length === 0 && currentFilter === "all") {
      return items;
    }
    return items.filter(item => {
      if(currentFilter === "increase") {
        return item.name.indexOf(term) > -1 && item.increase
      } else if (currentFilter === "salary") {
        return item.name.indexOf(term) > -1 && item.salary > 1000
      } else {
        return item.name.indexOf(term) > -1 
      }
    })
  }

  onFilterClick = (currentFilter) => {
    this.setState({currentFilter})
  }
  
  render() {
    const {data, term, filters, currentFilter} = this.state;
    const visibleData = this.serchEmp(data, term)
    return (
      <div className="app">
          <AppInfo 
          info={this.info}/>
  
          <div className="search-panel">
              <SearchPanel
              onSearch={this.onSearch}/>
              <AppFilter
              onFilterClick={this.onFilterClick}
              filters={filters}
              currentFilter={currentFilter}/>
          </div>
          
          <EmployeesList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp = {this.onToggleProp}/>
          <EmployeesAddForm  addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
