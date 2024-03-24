class Section extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return `<section>${children}</section>`;
    }
}