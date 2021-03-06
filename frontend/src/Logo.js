import React from 'react';
import styles from './css/Logo.css';

export class Logo extends React.Component {
  render() {
      return (
        <div>
          <link rel="stylesheet" type="text/css" href={this.props.stylePath} />
          <div className={styles.main_container}>
            <div className={styles.container}>              
              <div className={[styles.bar, styles.main, styles.north].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.nw, styles.cw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.ne, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.sw, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.se, styles.cw].join(' ')}></div>
            </div>
            <div className={[styles.container, styles.rotate_cw].join(' ')}>
              <div className={[styles.bar, styles.main, styles.north].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.nw, styles.cw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.ne, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.sw, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.se, styles.cw].join(' ')}></div>
            </div>
            <div className={[styles.container, styles.rotate_ccw].join(' ')}>
              <div className={[styles.bar, styles.main, styles.north].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.nw, styles.cw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.ne, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.sw, styles.ccw].join(' ')}></div>
              <div className={[styles.bar, styles.diag, styles.se, styles.cw].join(' ')}></div>
            </div>
          </div>
        </div>
      );
  }
}