class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return `<article>${children}</article>`;
    }
}