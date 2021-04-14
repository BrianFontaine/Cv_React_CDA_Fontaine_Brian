import React from 'react'
import '../Header/headerMobile.css';

function HeaderMobile() {
    const [value,setValue] = React.useState(localStorage.getItem('mode'));
    const [openMenu,setOpenMenu] = React.useState(false);
    const [darkMode, setDarkmode] = React.useState({
        tabBar : localStorage.getItem('tapBar'),
        button :localStorage.getItem('button'),
        buttonMenu :localStorage.getItem('buttonMenu'),
        switchMode : localStorage.getItem('switchMode'),
        theme : localStorage.getItem('theme')
    });
    const [toogleMenuState,setToogleMenuState] = React.useState({
        menu : 'd-none',
        link : 'd-none'
    });

    if (localStorage.length == 0 ) {
        localStorage.setItem('mode','fas fa-moon');
        localStorage.setItem('tapBar','tapBarLight');
        localStorage.setItem('button','buttonLight');
        localStorage.setItem('buttonMenu','buttonMenuLight');
        localStorage.setItem('switchMode','Dark');
        localStorage.setItem('theme','lightTheme');
    }
    document.getElementById('body').className=darkMode.theme;
    
    function OpenMenu(e) {
        e.preventDefault();
        if (openMenu == true) {
            setToogleMenuState({menu : 'MenuCloseTabBar', link: 'd-none'});
            setOpenMenu(false)
        }else{
            setToogleMenuState({menu : 'MenuOpenTabBar',link: 'menu'});
            setOpenMenu(true)
        }
        
    }
    function handleClick(e){
        e.preventDefault();
        if (value == 'fas fa-sun') {
            localStorage.setItem('theme','lightTheme');
            document.getElementById('body').className=darkMode.theme;
            setValue('fas fa-moon');
            localStorage.setItem('mode','fas fa-moon');
            localStorage.setItem('tapBar','tapBarLight');
            localStorage.setItem('button','buttonLight');
            localStorage.setItem('buttonMenu','buttonMenuLight');
            localStorage.setItem('switchMode','Dark');
            setDarkmode({
                tabBar :        "tapBarLight",
                button :        "buttonLight",
                buttonMenu :    "buttonMenuLight",
                switchMode :    "Dark",
                theme :         "lightTheme"
            })
        }else{
            setValue('fas fa-sun');
            localStorage.setItem('theme','darktheme');
            document.getElementById('body').className=darkMode.theme;
            localStorage.setItem('mode','fas fa-sun');
            localStorage.setItem('tapBar','tapBar');
            localStorage.setItem('button','button');
            localStorage.setItem('buttonMenu','buttonMenu');
            localStorage.setItem('switchMode','Light');
            setDarkmode({
                tabBar :        "tapBar",
                button :        "button",
                buttonMenu :    "buttonMenu",
                switchMode :    "Light",
                theme :         "darktheme"
            })
        }
    }

    
    return (
        <div>
            <div className={toogleMenuState.menu}>
                <div className={toogleMenuState.link}>
                    <a href="#" className="" >
                        <i class="fas fa-tools"></i>
                    </a>      
                    <a href="#" className="">
                        <i class="fas fa-briefcase"></i>
                    </a>      
                    <a href="#"className="">
                        <i class="fas fa-user-graduate"></i>
                    </a>      
                    <a href="#" className="" >
                        <i class="fas fa-book-open"></i>
                    </a> 
                </div>
            </div>
            
            <div className={darkMode.tabBar}>
                <a className={darkMode.button} href="mailto:briandeveloppeurweb@gmail.com">
                    <i class="fas fa-envelope"></i>
                </a>
                <a className={darkMode.button} href="tel:0624441335">
                    <i class="fas fa-phone"></i>
                </a>
                <a 
                    href="#" 
                    className={darkMode.buttonMenu}
                    onClick={(e) => OpenMenu(e)}
                >
                    <i class="fas fa-th-large"></i>
                </a>
                <div className={darkMode.button}>
                    <i class="fas fa-home"></i>
                </div>
                <a 
                href="#" 
                onClick={(e)=>handleClick(e)}
                className={darkMode.switchMode}
                >
                    <i class={value}></i>
                </a>       
            </div>
        </div>
    )
}

export default HeaderMobile
