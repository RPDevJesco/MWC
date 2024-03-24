class TableCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return `<td>${children}</td>`;
    }
}