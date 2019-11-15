import React from 'react';
import { elementType, func, node } from 'prop-types';

class Boundary extends React.Component {
  static defaultProps = {
    fallback: 'todo',
    onError: null
  };

  static propTypes = {
    children: node.isRequired,
    fallback: elementType,
    onError: func
  };

  state = { error: null };

  constructor(props) {
    props.Fallback = props.fallback;
    delete props.fallback;

    super(props);
  }

  static getDerivedStateFromError = error => ({ error });

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;
    // onError?.(error, errorInfo);
    if (onError) onError(error, errorInfo);
  }

  render() {
    const { Fallback, children } = this.props;
    const { error } = this.state;

    return error ? <Fallback error={error} /> : children;
  }
}

export default Boundary;
