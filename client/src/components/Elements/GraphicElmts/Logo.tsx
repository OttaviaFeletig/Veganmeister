import React from 'react'
import dataSite from '../../../assets/data/siteData.json'
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
        // <svg height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.36 84.48">
        //     <defs>

        //     </defs>
        //     <title>veganmeister</title>
        //     <g id="Layer_1_Image" data-name="Layer 1 Image">
        //         <image id="Layer_1_Image-2" data-name="Layer 1 Image" width="314" height="320" transform="scale(0.24)"
        //             href="data:image/png;base64,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" />
        //     </g>
        //     <g id="V"><text className="cls-1" transform="translate(31.1 68.32) scale(0.92 1)">V</text></g>
        //     <g id="Polygon_1" data-name="Polygon 1" className="cls-2">
        //         <g id="Polygon_1-2" data-name="Polygon 1">
        //             <polygon className="cls-3" points="38.04 44.88 36 46.34 36.78 48.72 39.3 48.72 40.08 46.34 38.04 44.88" />
        //         </g>
        //     </g>
        //     <g id="Layer_3_Image" data-name="Layer 3 Image">
        //         <image id="Layer_3_Image-2" data-name="Layer 3 Image" width="144" height="150"
        //             transform="translate(20.64 48.48) scale(0.24)"
        //             href="data:image/png;base64,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" />
        //     </g>
        //     <g id="Ellipse_1" data-name="Ellipse 1" className="cls-2">
        //         <g id="Ellipse_1-2" data-name="Ellipse 1">
        //             <path style={{ fill: props.color }} d="M43.56,73.2a2.52,2.52,0,1,0,2.52,2.52,2.52,2.52,0,0,0-2.52-2.52Z"
        //                 transform="translate(-5.76 -0.48)" />
        //         </g>
        //     </g>
        // </svg>
    )
}

export default Logo
