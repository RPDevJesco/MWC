class Heading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { level, text } = this.props;
        return `<h${level}>${text}</h${level}>`;
    }
}