import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        // BEM
        <div className="header">
            <IconButton>
             <PersonIcon className="header__icon" fontsize="large" />
            </IconButton>
            <a href="https://www.freeiconspng.com/img/13250" 
            title="Image from freeiconspng.com">
                <img src="https://www.freeiconspng.com/uploads/orange-letter-f-icon-png-10.png" 
                width="20" 
                alt="orange letter f icon png" />
                </a>
           
           <IconButton>
           <ForumIcon className="header__icon" fontsize="large" />
           </IconButton>
        </div>
    )
}

export default Header