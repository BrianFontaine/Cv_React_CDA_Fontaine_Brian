import React from 'react'
import '../Header/headerMobile.css';





function HeaderMobile() {
    const [value,setValue] = React.useState(localStorage.getItem('mode'));
    const [darkMode, setDarkmode] = React.useState({
        tabBar : localStorage.getItem('tapBar'),
        button :localStorage.getItem('button'),
        buttonMenu :localStorage.getItem('buttonMenu'),
        switchMode : localStorage.getItem('switchMode')
    });

    if (localStorage.length == 0 ) {
        localStorage.setItem('mode','fas fa-moon');
        localStorage.setItem('tapBar','tapBarLight');
        localStorage.setItem('button','buttonLight');
        localStorage.setItem('buttonMenu','buttonMenuLight');
        localStorage.setItem('switchMode','Dark');
    }

    function handleClick(e){
        e.preventDefault();
        if (value == 'fas fa-sun') {
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
                switchMode :    "Dark"
            })
        }else{
            setValue('fas fa-sun');
            localStorage.setItem('mode','fas fa-sun');
            localStorage.setItem('tapBar','tapBar');
            localStorage.setItem('button','button');
            localStorage.setItem('buttonMenu','buttonMenu');
            localStorage.setItem('switchMode','Light');
            setDarkmode({
                tabBar :        "tapBar",
                button :        "button",
                buttonMenu :    "buttonMenu",
                switchMode :    "Light"
            })
        }
    }

    
    return (
        <div className={darkMode.tabBar}>
            <div className={darkMode.button}>
                <i class="fas fa-envelope"></i>
            </div>
            <div className={darkMode.button}>
                <i class="fas fa-home"></i>
            </div>
            <div className={darkMode.buttonMenu}>
                <i class="fas fa-th-large"></i>
            </div>
            <div className={darkMode.button}>
                <i class="fas fa-phone"></i>
            </div>
            <a 
            href="#" 
            onClick={(e)=>handleClick(e)}
            className={darkMode.switchMode}
            >
                <i class={value}></i>
            </a>           
        </div>
    )
}

export default HeaderMobile
