import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from './Logo';



const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
    1: {
        icon: <Logo height={40} color="#585858" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <Logo height={40} color="#585858" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <Logo height={50} color="secondary" />,
        label: 'Neutral',
    },
    4: {
        icon: <Logo height={50} color="secondary" />,
        label: 'Satisfied',
    },
    5: {
        icon: <Logo height={50} color="secondary" />,
        label: 'Very Satisfied',
    },
};
const IconContainer = (props: IconContainerProps) => {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}
const styles = (theme: Theme) => createStyles({
    rating: {
        // flexDirection: 'row-reverse',
        alignItems: 'center',
        // '&:hover': {
        //     flexDirection: 'row-reverse',
        // }
    },
})
interface Props {
    classes: any,
    rating: number,
}
const Ratings: React.FC<Props> = ({ classes, rating }) => {
    const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
    }
    return (
        // <Box borderColor="transparent">
        <Rating
            className={classes.rating}
            name="customized-icons"
            defaultValue={1}
            onChangeActive={(event, newHover) => {
                console.log(newHover);
            }}
            emptyIcon={<Logo height={40} color="#585858" />}
            icon={<Logo height={50} color="secondary" />}
        />
        // </Box>
    )
}

export default withStyles(styles)(Ratings)