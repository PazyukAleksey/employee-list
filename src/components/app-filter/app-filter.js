import "./app-filter.css";

const AppFilter = (props) => {

    const showButton = (item, count) => {
        const activeClass="btn btn-light";
        const defaultClass = "btn btn-outline-light";
        const {currentFilter, onFilterClick} = props;
        return (
            <button type="button"
                    key={count}
                    className={item.type === currentFilter ? activeClass : defaultClass}
                    onClick={() => onFilterClick(item.type)}
                    data-filter={item.type}>
                    {item.title}
                    </button>
        )
    }

    return (
        <div className="btn-group">
            {props.filters.map((item, count) => showButton(item, count))}
        </div>
    )
}

export default AppFilter;