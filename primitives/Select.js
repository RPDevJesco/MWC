class Select extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { options, onChange } = this.props;
        const optionElements = options.map(option => `<option value="${option.value}">${option.text}</option>`).join('');
        // Assuming `onChange` is a string that represents the function name
        return `<select onchange="${onChange}">${optionElements}</select>`;
    }
}