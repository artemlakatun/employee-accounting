import './app-info.css';

const AppInfo = ({employess, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Alfa</h1>
            <h2>Общее число сотрудников: {employess}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;