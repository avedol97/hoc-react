import React from 'react';

const withCollapse = WrappedComponent => {
    return class WithCollapse extends React.Component {
        state = {
            isAuthorised: false,
        }

        toggleAuth = () => {
            this.setState(prevstate => ({
                isAuthorised: !prevstate.isAuthorised
            }));
        };

        render() {
            const {isAuthorised} = this.state;
            return <WrappedComponent isAuthorised={isAuthorised} toggleAuth={this.toggleAuth}
                                     {...this.props}
            />
        }
    }
}

export default withCollapse;
