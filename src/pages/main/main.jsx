import React, { useState } from 'react';
import s from '../../style/App.module.css';
import Search from '../../scripts/search/search';
import Filter from '../../scripts/filter/filter';
import CenterblockContent from '../../scripts/centerblock/centerblockContent';
import Personal from '../../scripts/personal/personal';
import SidebarBlock from '../../scripts/sidebar/sidebarBlock';
import Menu from '../../scripts/burgerMenu/menu';
import BarPlayer from '../../scripts/barPlayer/barPlayer';


export const Main = () => {
  const [menuActive, setMenuActive] = useState(false)
    
    return (  
      <div className={s.container}>
        <main className={s.main}>
          <nav className={s.nav}>
            <div className={s.logo}></div>
            <div className={s.burger_btn} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={""} />
          </nav>    
          <div className={s.centerblock}>
            <Search/>
            <Filter/>        
            <CenterblockContent/>
          </div>
          <div className={s.sidebar}>
            <Personal/>
            <SidebarBlock/>
          </div>
        </main>
        <BarPlayer/>
      </div>
    )
}