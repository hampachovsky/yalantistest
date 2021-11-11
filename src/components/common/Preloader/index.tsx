import React from 'react';
import style from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={style.preloaderWrapper}>
      <div className={style.preloader}>
        <i></i>
      </div>
    </div>
  );
};
