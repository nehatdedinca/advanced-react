import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  // 1 way
  // const WithStore = (props, { store }) =>
  //   <Component {...props} store={store} />;
  //
  // WithStore.contextTypes = {
  //   store: PropTypes.object
  // };
  //
  // WithStore.displayName = `${Component.name}Container`;
  //
  // return WithStore;

  // 2nd way
  return class extends React.Component {
    static displayName = `${Component.name}Container`;

    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Component {...this.props} store={this.context.store} />;
    }
  };
};

export default storeProvider;
