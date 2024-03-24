class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { text } = this.props;
        return `<li>${text}</li>`;
    }
}