class TableHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return this.renderTemplate('thead', {}, this.props.children);
    }
}