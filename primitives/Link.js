class Link extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { href, text } = this.props;
        return `<a href="${href}">${text}</a>`;
    }
}