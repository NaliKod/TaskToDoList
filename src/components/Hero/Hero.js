import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


class Hero extends React.Component {
  render() {
    const hero = this.props.titleText
    //src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
    const url = this.props.image
    //const { hero, url } = this.props;
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{hero}</h2>
        <img className={styles.image} src={url} />
        <div className={styles.description}>
          {this.props.children}
        </div>
      </header>
    )
  }
}

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};
export default Hero;
