import React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';



const styles = (theme: Theme) => createStyles({

    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
})

interface Props extends WithStyles<typeof styles> {
    hashtags: string[]
}

const Hashtags: React.FC<Props> = ({ classes, hashtags }) => {



    return (
        // <Paper className={classes.root}>
        <React.Fragment>
            {hashtags.map((tag) => {


                return (
                    <Chip
                        key={tag}
                        color="secondary"
                        // icon={icon}
                        label={tag}
                        // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        className={classes.chip}
                    />
                );
            })}
            {/* </Paper> */}
        </React.Fragment >
    );
}
export default withStyles(styles)(Hashtags)
