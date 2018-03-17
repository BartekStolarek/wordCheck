import axios from 'axios';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            word: '',
            definition: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    handleChange(event) {
        this.setState({word: event.target.value});

        setTimeout(this.fetchData, 300);
    }

    fetchData() {
        if (this.state.word.length != 0) {
            axios.get("http://api.wordnik.com:80/v4/word.json/" + this.state.word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
            .then((response) => {
                if (this.state.word.length == 0) {
                    this.setState({ definition: '' })
                }
                else {
                    if (response.data[0] && response.data[0].text) {
                        this.setState({ definition: response.data[0].text })
                    } else {
                        this.setState({ definition: "There is no matching." })
                    }
                }
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Type your word</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input className="form-control form-control-lg"
                                type="text" placeholder="Word..." id="inputLarge"
                                value={this.state.word}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Word definition</div>
                        <div className="card-body">
                            <h4 className="card-title"> {this.state.word} </h4>
                            <p className="card-text"> {this.state.definition} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;