import React from 'react';
import classes from './Rating.module.css';

function Rating(props) {
  const star = (empty) => {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4421 2.92495L12.9087 5.85828C13.1087 6.26662 13.6421 6.65828 14.0921 6.73328L16.7504 7.17495C18.4504 7.45828 18.8504 8.69162 17.6254 9.90828L15.5587 11.975C15.2087 12.325 15.0171 13 15.1254 13.4833L15.7171 16.0416C16.1837 18.0666 15.1087 18.85 13.3171 17.7916L10.8254 16.3166C10.3754 16.05 9.63375 16.05 9.17541 16.3166L6.68375 17.7916C4.90041 18.85 3.81708 18.0583 4.28375 16.0416L4.87541 13.4833C4.98375 13 4.79208 12.325 4.44208 11.975L2.37541 9.90828C1.15875 8.69162 1.55041 7.45828 3.25041 7.17495L5.90875 6.73328C6.35041 6.65828 6.88375 6.26662 7.08375 5.85828L8.55041 2.92495C9.35041 1.33328 10.6504 1.33328 11.4421 2.92495Z" fill={empty ? "" : "url(#paint0_linear_271_816)"} stroke="url(#paint1_linear_271_816)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_271_816" x1="10.0022" y1="1.7312" x2="10.0022" y2="18.2631" gradientUnits="userSpaceOnUse">
      <stop stop-color={"#DAE500"}/>
      <stop offset="1" stop-color="#B99A00"/>
      </linearGradient>
      <linearGradient id="paint1_linear_271_816" x1="10.0022" y1="1.7312" x2="10.0022" y2="18.2631" gradientUnits="userSpaceOnUse">
      <stop stop-color={"#DAE500"}/>
      <stop offset="1" stop-color="#B99A00"/>
      </linearGradient>
      </defs>
      </svg>
    )
  }
  return (
    <p className={classes.rating}>
      {[...Array(5)].map((_, index) => star(index >= props.rating))}
    </p>
  )
}

export default Rating;