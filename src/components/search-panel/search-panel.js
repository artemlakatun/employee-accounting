import {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch1 = (event) => {
        const term = event.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника..."
                value={this.state.term}
                onChange={this.onUpdateSearch1}
            />
        );
    }
}

export default SearchPanel;