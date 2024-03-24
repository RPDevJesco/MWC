class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { items } = this.props;
        const listItems = items.map(item => `<li>${item}</li>`).join('');
        return `<ul>${listItems}</ul>`;
    }
}