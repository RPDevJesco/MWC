class TextArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { rows, cols, value, onChange } = this.props;
        return this.renderTemplate('textarea', { rows, cols, onchange: onChange }, value);
    }
}