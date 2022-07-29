import "./app-info.css";

const AppInfo = ({info}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {info().count}</h2>
            <h2>Премию получат: {info().countIncrease}</h2>
        </div>
    )
}

export default AppInfo;