import { Component } from 'react/cjs/react.production.min';
import './search-panel.css';

class SearchPanel extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        let term = e.target.value;
        this.setState({term});
        this.props.onSearch(term)
    }
  
    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    onInput={this.onSearch}
                    value={this.state.term}/>
        )
    }
}

export default SearchPanel;