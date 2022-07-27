import './App.css';
import Header from './components/header/header' 
import EmployeeList from './components/employee-list/employee-list';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
