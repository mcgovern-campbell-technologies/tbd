// We will use PropsRoute to replace React Router 4's <Route> component, so that we can pass props through
// as we would a normal component.
//
// See https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202

import React from 'react';
import {Route} from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

export default PropsRoute;
