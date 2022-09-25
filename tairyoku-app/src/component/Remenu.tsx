import React from 'react'
import classes from './Remenu.module.css'
import PropTypes from 'prop-types';

const Remenu = ({display,pageaction}) => {
  return(
    <div>
      {(display==true)?<button className={classes.btn} onClick={()=>pageaction()}>メニューに戻る</button>:<p></p>}
    </div>
  )
}

Remenu.propTypes = {
  display: PropTypes.bool,
  pageaction: PropTypes.func,
};

export default Remenu