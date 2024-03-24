class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return this.renderTemplate('tr', {}, this.props.children);
    }
}