import React from 'react';
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import './SwipeButtons.css';
  

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className="swipeButtons__repeat">
              <ReplayIcon fontsize="swipeButtons" />
            </IconButton>
            <IconButton className="swipeButtons__left">
             <CloseIcon fontsize="swipeButtons" />
            </IconButton>
            <IconButton className="swipeButtons__star">
             <StarRateIcon fontsize="swipeButtons" />
            </IconButton>
            <IconButton className="swipeButtons__right">
             <FavoriteIcon fontsize="swipeButtons" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
             <FlashOnIcon fontsize="swipeButtons" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
 