import React from "react";

class First extends React.Component {
    render () {
        return (
            <p>This is first...</p>
        );
    }
}

class Second extends React.Component {
    render () {
        return (
            <p>This is second...</p>
        );
    }
}

class MyComponent extends React.Component {
    render () {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}
MyComponent.First = First;
MyComponent.Second = Second;
export default MyComponent;
export {First, Second};