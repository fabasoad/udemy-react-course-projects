const app = {
    title: 'Visibility Toggle',
    buttonText() {
        return this.visibility ? 'Hide details' : 'Show details';
    },
    details: 'This is some details',
    visibility: false
};

const toggleVisibility = () => {
    app.visibility = !app.visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{app.buttonText()}</button>
            <p style={{ display: app.visibility ? 'block' : 'none'}}>{app.details}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();