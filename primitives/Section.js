class Section extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return this.renderTemplate('section', {}, this.props.children);
    }
}