import React from 'react'
// import dataSite from '../../../assets/data/siteData.json'
import { useTheme } from '@material-ui/core/styles'

interface Props {
    height: number;
    color: string;
}

const Logo = (props: Props) => {
    const theme = useTheme();
    let color = ''
    if (props.color === 'secondary') color = theme.palette.secondary.main
    else if (props.color === 'prinmary') color = theme.palette.secondary.main
    else color = props.color
    return (
        <svg style={{ fill: color }} height={props.height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 90 112.5" >
            <path d="M75.1,7.7V2h-3v21.2l-5.6-5.3l-2.4,2.3l6.8,6.9l-7.6,7.6l-4-4L57,33l3.8,4l-6.8,6.6V39h-3v7h-6.3h-6.7v-7h-3v4.6l-6.6-6.7
	l3.9-3.8l-2.3-2.3l-3.8,3.8L18.8,27l6.9-6.9l-2.3-2.3l-5.3,5.3V2h-3v5.7L9.6,2.4L7.4,4.7l7.7,7.6v15.3L33.2,46H21.3c0,7,8.6,7,8.6,7
	h5l-6.7,25.6l17,9.6l17.2-9.7L55.3,52h4.6c0,0,9.4,1,9.4-6H56.5l18.6-18.4V12.3l7.5-7.6l-2.2-2.3L75.1,7.7z M58.6,77.3l-13.4,7.5
	l-13.6-7.5l4.6-17.9L40.5,74c0,0,0.7,2.3,4.6,2.3s4.5-2.3,4.5-2.3l4.2-14.6L58.6,77.3z"/>
            <polygon style={{ fill: '#FFFFFF' }} points="45.8,51.6 44.2,51.6 43.5,50.3 44.2,49 45.8,49 46.5,50.3 " />
            <circle style={{ fill: '#FFFFFF', stroke: color, strokeMiterlimit: 10 }} cx="45" cy="76.8" r="1.8" />
            <polygon style={{ fill: '#FFFFFF' }} points="49,54.9 45,68.4 41,54.9 39.2,54.9 44.1,70.2 45.9,70.2 50.8,54.9 " />
        </svg>
    )
}

export default Logo
