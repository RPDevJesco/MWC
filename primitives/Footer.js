class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return `<footer>${children}</footer>`;
    }
}