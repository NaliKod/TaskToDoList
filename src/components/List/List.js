import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <selector className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}  />
        <div className={styles.columns}>
          <Column title="Animals"/>
          <Column title="Planets" />
          <Column title="Minerals" />
        </div>
      </selector>
    )
  }
}

export default List;
