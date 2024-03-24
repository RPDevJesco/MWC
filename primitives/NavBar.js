class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { links } = this.props;
        const linkElements = links.map(link => `<a href="${link.href}">${link.text}</a>`).join('');
        return `<nav>${linkElements}</nav>`;
    }
}