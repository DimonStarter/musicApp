import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../assets/icon/sprite.svg';

function BarVolume() {
    return (
        <div className={s.content}>
        <div className={s.player_progress}></div>
        <div className={s.player_block}></div>
        <div className={s.player}>
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                        <use xlinkHref={`${sprite}#icon-volume`}></use>
                    </svg>
                </div>
                <div className="volume__progress _btn">
                    <input className="volume__progress-line _btn" type="range" name="range"/>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default  BarVolume;
    