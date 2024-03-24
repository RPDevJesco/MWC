class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onSubmit, children } = this.props;
        // Assuming `onSubmit` is a string that represents the function name
        return `<form onsubmit="${onSubmit}">${children}</form>`;
    }
}