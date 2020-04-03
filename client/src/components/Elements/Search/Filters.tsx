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


const styles = (theme: Theme) => createStyles({
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
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
    classes: any,
    sort: string,
    handleSort(sort: string): void;
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

const Filters: React.FC<Props> = ({ classes, sort, handleSort }) => {
    const [alignment, setAlignment] = React.useState(sort);
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
        handleSort(newAlignment)
        console.log('newAlignment :', newAlignment);
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
                    <ToggleButton value="alphaDown" aria-label="left aligned">
                        <MaterialIconAsync icon="SortByAlpha" />
                        <MaterialIconAsync icon="ArrowDropDown" />
                    </ToggleButton>
                    <ToggleButton value="alphaUp" aria-label="centered">
                        <MaterialIconAsync icon="SortByAlpha" />
                        <MaterialIconAsync icon="ArrowDropUp" />
                    </ToggleButton>
                    <ToggleButton value="starDown" aria-label="left aligned">
                        <MaterialIconAsync icon="Star" />
                        <MaterialIconAsync icon="ArrowDropDown" />
                    </ToggleButton>
                    <ToggleButton value="starUp" aria-label="centered">
                        <MaterialIconAsync icon="Star" />
                        <MaterialIconAsync icon="ArrowDropUp" />
                    </ToggleButton>
                    <ToggleButton value="dateDown" aria-label="left aligned">
                        <MaterialIconAsync icon="DateRange" />
                        <MaterialIconAsync icon="ArrowDropDown" />
                    </ToggleButton>
                    <ToggleButton value="dateUp" aria-label="centered">
                        <MaterialIconAsync icon="DateRange" />
                        <MaterialIconAsync icon="ArrowDropUp" />
                    </ToggleButton>

                </StyledToggleButtonGroup>
                {/* <Divider orientation="vertical" className={classes.divider} /> */}
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

                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Filters)
