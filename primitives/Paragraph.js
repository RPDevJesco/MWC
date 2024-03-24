class Paragraph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;
        //return `<p>${text}</p>`;
        return this.renderTemplate('p', { class: 'app-description' }, this.props.text);
    }
}