class TextArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { rows, cols, value, onChange } = this.props;
        // Assuming `onChange` is a string that represents the function name
        return `<textarea rows="${rows}" cols="${cols}" onchange="${onChange}">${value}</textarea>`;
    }
}