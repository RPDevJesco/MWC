class Style extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { css } = this.props;
        return `<style>${css}</style>`;
    }
}