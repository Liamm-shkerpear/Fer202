import React from "react";

class MySection extends React.Component {
    render () {
        return (
            <section>
                <h2>This is my section</h2>
                {this.props.children}
            </section>
        );
    }
}
export default MySection;