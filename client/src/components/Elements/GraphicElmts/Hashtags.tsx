import React from 'react';
import { createStyles, makeStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';



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
    classes: any,
    hashtags: string[]
}

const Hashtags: React.FC<Props> = ({ classes, hashtags }) => {


    const handleDelete = (tag: string) => () => {
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        // <Paper className={classes.root}>
        <React.Fragment>
            {hashtags.map((tag) => {
                // let icon;

                // if (data.label === 'React') {
                //     icon = <TagFacesIcon />;
                // }

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
