import React from 'react';
import { makeStyles, withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import MaterialIconAsync from '../GraphicElmts/MaterialIconAsync';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


const styles = (theme: Theme) => createStyles({
    paper: {
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
    },
    divider: {
        alignSelf: 'stretch',
        height: 'auto',
        margin: theme.spacing(1, 0.5),
    },
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        padding: theme.spacing(0, 1),
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
})


interface Props extends WithStyles<typeof styles> {
    classes: any;
    to: string;
    text: string;
}



const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        padding: theme.spacing(0, 1),
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

const BackButton: React.FC<Props> = ({ classes, to, text }) => {

    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };


    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton component={Link} to={to} value="SortByAlphaDown" aria-label="left aligned">
                        <MaterialIconAsync icon="ArrowBackIos" />
                        <Typography variant="body2"> {text} </Typography>
                    </ToggleButton>

                </StyledToggleButtonGroup>
                {/* <Divider orientation="vertical" className={classes.divider} />
                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="List" aria-label="left aligned">
                        <MaterialIconAsync icon="List" />
                    </ToggleButton>
                    <ToggleButton value="ViewModule" aria-label="centered">
                        <MaterialIconAsync icon="ViewModule" />
                    </ToggleButton>

                </StyledToggleButtonGroup> */}
            </Paper>
        </div>
    );
}

export default withStyles(styles)(BackButton)
