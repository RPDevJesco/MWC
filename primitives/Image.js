class Image extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { src, alt } = this.props;
        return `<img src="${src}" alt="${alt}" />`;
    }
}