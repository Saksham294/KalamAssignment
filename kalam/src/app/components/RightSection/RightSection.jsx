import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import rightSectionStyles from './RightSection.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const RightSection = () => {
    return (
        <div className={rightSectionStyles.rightSection}>
            <div className={rightSectionStyles.header} >
            <div className={rightSectionStyles.profile}>
                    <AccountCircleIcon />
                </div>
                <div className={rightSectionStyles.notification}>
                    <NotificationsIcon />
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className="recentlyPlayed">

            </div>
            <div className="myPlaylist">

            </div>
        </div>
    )
}

export default RightSection

/*

recently played playlist
my playlist
Account


*/