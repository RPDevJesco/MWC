class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { links } = this.props;
        const linkElements = links.map(link => this.renderTemplate('a', { href: link.href }, link.text)).join('');
        return this.renderTemplate('nav', {}, linkElements);
    }
}