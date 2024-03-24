class TableCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return this.renderTemplate('table', {}, this.props.children);
    }
}