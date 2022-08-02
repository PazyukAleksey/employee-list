import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.development";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter: props.currentFilter
        }
    }

    onFilterClick = (e) => {
        const currentFilter = e.target.getAttribute('data-filter');
        this.setState({
            filter: currentFilter
        })
        this.props.onFilterClick(currentFilter)
    }

    showButton = (item, count) => {
        const activeClass="btn btn-light";
        const defaultClass = "btn btn-outline-light";
        const {filter} = this.state;
        const {currentFiter} = this.props;
        return (
            <button type="button"
                    key={count}
                    className={item.type === filter ? activeClass : defaultClass}
                    onClick={this.onFilterClick}
                    data-filter={item.type}>
                    {item.title}
                    </button>
        )
    }

    render() {
        return (
            <div className="btn-group">
                {this.props.filters.map((item, count) => this.showButton(item, count))}
            </div>
        )
    }
}

export default AppFilter;