class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, onClick } = this.props;
        return `<button onclick="${onClick}">${text}</button>`;
    }
}