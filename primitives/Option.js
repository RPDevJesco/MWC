class Option extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, text } = this.props;
        return this.renderTemplate('option', { value }, text);
    }
}