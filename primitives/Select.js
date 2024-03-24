class Select extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { options, onChange } = this.props;
        const optionElements = options.map(option => this.renderTemplate('option', { value: option.value }, option.text)).join('');
        return this.renderTemplate('select', { onchange: onChange }, optionElements);
    }
}