import React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';



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
const styles = () => createStyles({
    rating: {
        // flexDirection: 'row-reverse',
        alignItems: 'center',
        // '&:hover': {
        //     flexDirection: 'row-reverse',
        // }
    },
})
interface Props extends WithStyles<typeof styles> {
    rating: number,
}
const Ratings: React.FC<Props> = ({ classes }) => {
    return (
        // <Box borderColor="transparent">
        <Rating
            className={classes.rating}
            name="customized-icons"
            defaultValue={1}
            // onChangeActive={(event, newHover) => {
            //     console.log(newHover);
            // }}
            emptyIcon={<Logo height={40} color="#585858" />}
            icon={<Logo height={50} color="secondary" />}
        />
        // </Box>
    )
}

export default withStyles(styles)(Ratings)