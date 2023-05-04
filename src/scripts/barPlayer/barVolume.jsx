import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../assets/icon/sprite.svg';

function BarVolume() {
    return (
        <div className={s.content}>
        <div className={s.player_progress}></div>
        <div className={s.player_block}></div>
        <div className={s.player}>
        <div className={s.bar__volume_block}>
            <div className={s.volume__content}>
                <div className={s.volume__image}>
                    <svg className={s.volume__svg} alt="volume">
                        <use xlinkHref={`${sprite}#icon-volume`}></use>
                    </svg>
                </div>
                <div className={s.volume__progress}>
                    <input className={s.volume__progress_line} type="range" name="range"/>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default  BarVolume;
    