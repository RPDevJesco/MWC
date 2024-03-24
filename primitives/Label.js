class Label extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { text, htmlFor } = this.props;
        return `<label for="${htmlFor}">${text}</label>`;
    }
}