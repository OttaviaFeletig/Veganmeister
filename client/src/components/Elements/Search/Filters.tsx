import React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
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


interface Props extends WithStyles<typeof styles> {
    classes: any,
    sort: string,
    handleSort(sort: string): void;
    toggleDisplay(): void;
}


const Filters: React.FC<Props> = ({ classes, sort, handleSort, toggleDisplay }) => {

    const onDisplayClick = (event: React.MouseEvent<HTMLElement>, newDisplay: string) => {
        toggleDisplay()
    };

    const onSortClick = (event: React.MouseEvent<HTMLElement>, newSort: string) => {
        handleSort(newSort)
    };


    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <StyledToggleButtonGroup
                    size="small"
                    value={sort}
                    exclusive
                    onChange={onSortClick}
                    aria-label="sort"
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
                    value={toggleDisplay}
                    exclusive
                    onChange={onDisplayClick}
                    aria-label="display"
                >
                    <ToggleButton value="list" aria-label="left aligned">
                        <MaterialIconAsync icon="List" />
                    </ToggleButton>
                    <ToggleButton value="card" aria-label="centered">
                        <MaterialIconAsync icon="ViewModule" />
                    </ToggleButton>

                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Filters)
