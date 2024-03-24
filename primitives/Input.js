class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, value, onChange } = this.props;
        // Assuming `onChange` is a string that represents the function name
        return `<input type="${type}" value="${value}" onchange="${onChange}" />`;
    }
}