class Paragraph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        return `<p>${text}</p>`;
    }
}