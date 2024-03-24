class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return `<table>${children}</table>`;
    }
}