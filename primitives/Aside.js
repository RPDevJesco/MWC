class Aside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return `<aside>${children}</aside>`;
    }
}