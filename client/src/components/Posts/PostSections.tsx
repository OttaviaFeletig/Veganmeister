import React, { useContext, useState, useCallback } from 'react'
import { Theme, createStyles, Typography, CardMedia, Grid, Tooltip, Fab, Button, Menu, MenuItem, FormControlLabel, Switch, TextField, Divider, Slide, Paper, fade, Box, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleSharp';
import { AuthContext } from '../../context/AuthContext';
import PostSectionAddEdit from './PostSectionAddEdit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import red from '@material-ui/core/colors/red';
import { PostN } from '../../@types';
import MUIRichTextEditor from 'mui-rte'
import Dialog from '@material-ui/core/Dialog';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone'
import RootRef from '@material-ui/core/RootRef'
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import { PostsContext } from '../../context/PostsContext';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';



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

const styles = (theme: Theme) => createStyles({
    article: {
        position: 'relative',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0
        },
    },
    text: {
        justifyContent: 'center',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(2),
        },
    },
    sideImg: {
        maxBlockSize: '50vh',
    },
    gridImg: {
        // marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0,
            marginBottom: 0
        },
    },
    absoluteR: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    absoluteTop: {
        position: 'absolute',
        top: theme.spacing(2),
        right: '50%',
        marginRight: - theme.spacing(6),
        zIndex: 999
    },
    absoluteRTitle: {
        color: 'white',
        position: 'absolute',
        top: theme.spacing(0),
        right: theme.spacing(0),

    },
    absoluteL: {
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    addIcon: {
        fontSize: 80,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    tabTitle: {
        padding: 0,
        margin: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(2),
        },
        width: '100%',
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing(1),
        color: "white"
    },
    buttonDel: {
        color: "white",
        backgroundColor: red[500],
        zIndex: 9999
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textAlign: 'center',
    },

    responsiveField: {
        height: '100%',
        width: '100%',
        margin: 0,
        textAlign: 'center',
        // [theme.breakpoints.down('xs')]: {
        //     width: '100%',
        //     marginLeft: 0,
        //     marginRight: 0
        // }
    },
    input: {
        textAlign: 'center',
    },
    responsiveFieldSide: {
        textAlign: 'center',
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    imgInput: {
        minHeight: '400px',
        height: '100%',
        width: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: fade(theme.palette.common.black, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.3),
        },
    }

});
const ImgDropzone = ({ styleClass }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('acceptedFiles :', acceptedFiles);
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    const { ref, ...rootProps } = getRootProps()
    return (
        <RootRef rootRef={ref} >
            <Paper
                className={styleClass}
                {...rootProps}>
                <Fab color="primary" size="large" aria-label="image input">
                    <MaterialIconAsync icon="AddPhotoAlternate" />
                </Fab>
                <React.Fragment>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </React.Fragment>
            </Paper>
        </RootRef >)
}
interface Props extends WithStyles<typeof styles> {
    classes: any,
    // {
    //     article: string,
    //     text: string,
    //     title: string,
    //     sideImg: string,
    //     gridImg: string,
    //     absoluteL: string,
    //     absoluteR: string,
    //     addIcon: string,
    //     tabTitle: string,
    //     button: string,
    //     buttonDel: string,
    //     absoluteRTitle: string,
    // },
    post: PostN.PostI,
}

const PostSections: React.FC<Props> = ({ classes, post }) => {
    const [addMode, toggleAddMode] = React.useState(false);
    const [editMode, toggleEditMode] = React.useState(false);
    console.log('post.postSections', post.postSections)
    // const { addEditDeleteArticle,
    //     article,
    //     setArticle,
    //     changeArticleOrder,
    //     editMode,
    //     toggleEditMode,

    // } = useContext(ContentContext)

    const emptySection: PostN.PostSectionI = {
        index: post.postSections.length + 1,
        body: '',
        header: '',
        img: '',
        sideImg: false
    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const { isAuthenticated } = useContext(AuthContext)
    const { changeSectionOrder, changeSplit, textChange } = useContext(PostsContext)

    const [postSection, setPostSection] = useState(emptySection)
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const onEditClick = (postSection: PostN.PostSectionI) => {
        setPostSection(postSection)
        toggleAddMode(true)
    }
    const onAddClick = () => {
        setPostSection(emptySection)
        toggleAddMode(true)
    }
    const onEditCancel = () => {
        // setArticle(emptyArticle)
        toggleAddMode(false)
    }
    const onClickDelete = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        // addEditDeleteArticle(tab, article, 'delete')
        console.log('post :', post);
        // setPostSection()
        setOpenDialog(true);

        setPostSection(emptySection)

        toggleAddMode(false)
    }
    const handleTextChange = (postSection: PostN.PostSectionI, action: string) => {
        // addEditDeleteArticle(tab, article, 'edit')

    }

    const handleMoveUp = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        setAnchorEl(null);

        changeSectionOrder(post, postSection, 'moveUp')
    };
    const handleMoveDown = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        console.log('postSection', postSection)
        setAnchorEl(null);
        changeSectionOrder(post, postSection, 'moveDown')
    };
    const handleSplitToggle = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        changeSplit(postSection);
    };
    const renderEditMenu = (post: PostN.PostI, postSection: PostN.PostSectionI, i: number, length: number) => (<React.Fragment>
        <div className={classes.absoluteL} >
            {i > 0 && <Tooltip
                onClick={() => handleMoveUp(post, postSection)} title="moveUp" aria-label="moveDown">
                <Fab size="small" color="primary"
                // className={classes.absoluteL} 
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Tooltip>}

            {i < length - 1 && <Tooltip
                onClick={() => handleMoveDown(post, postSection)} title="moveDown" aria-label="move down">
                <Fab size="small" color="primary"
                // className={classes.absoluteL}
                >
                    <KeyboardArrowDownIcon />
                </Fab>
            </Tooltip>}
        </div>
        <div className={classes.absoluteTop} >
            <StyledToggleButtonGroup
                size="small"
                value={postSection.sideImg ? 'splitV' : 'splitH'}
                exclusive
                onChange={() => handleSplitToggle(post, postSection)}
                aria-label="sort"
            >
                <ToggleButton style={{ transform: 'rotate(180deg)' }} value="splitV" aria-label="centered">
                    <MaterialIconAsync icon="VerticalSplit" />
                </ToggleButton>
                <ToggleButton value="splitH" aria-label="centered">
                    <MaterialIconAsync icon="HorizontalSplit" />
                </ToggleButton>
            </StyledToggleButtonGroup>
        </div>
        <div className={classes.absoluteR} >
            <Tooltip
                onClick={() => onClickDelete(post, postSection)}
                title="delete" aria-label="delete">
                <Fab size="small" color="primary"
                    className={classes.buttonDel}
                >
                    <MaterialIconAsync icon='DeleteIcon' />

                </Fab>
            </Tooltip>
        </div>
    </React.Fragment>)

    const RenderDialog = () => (
        <Dialog
            open={openDialog}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Danger Zone"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this section?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="secondary">
                    Cancel
          </Button>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<MaterialIconAsync icon='DeleteIcon' />}
                >
                    Delete
      </Button>
            </DialogActions>
        </Dialog>
    )

    return (
        <Grid container spacing={2}
            className={classes.article}
        >
            <RenderDialog />
            <Grid container className={classes.tabTitle} spacing={2} >
                {isAuthenticated && <FormControlLabel
                    control={
                        <Switch checked={editMode} value={editMode} onChange={() => toggleEditMode(!editMode)} />
                    }
                    label="Edit Mode"
                />}
                <EditIcon />
            </Grid>
            {post.postSections
                .map((section: PostN.PostSectionI, i: number) =>
                    (<React.Fragment>
                        {
                            section.sideImg ?
                                <Slide in
                                    direction="left"
                                    // style={{ transformOrigin: '8 0 0' }}
                                    timeout={1000 + (500 * i)}
                                    key={section.index}>
                                    <Grid
                                        container
                                        spacing={2}
                                        className={classes.article} >
                                        <Grid className={classes.gridImg} item xs={12} md={6}>
                                            {editMode && renderEditMenu(post, section, i, post.postSections.length)}
                                            {editMode && !section.img ?
                                                <ImgDropzone styleClass={classes.imgInput} /> :
                                                <CardMedia
                                                    component="img"
                                                    alt="img"
                                                    className={classes.sideImg}
                                                    image={section.img}
                                                    title="img"
                                                />
                                            }
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            {editMode ?
                                                <React.Fragment>
                                                    <TextField

                                                        inputProps={{ style: { textAlign: 'center' } }}
                                                        InputLabelProps={{ style: { marginLeft: '50px' } }}
                                                        onChange={(e) => textChange(post, section, e.target.value, true)}
                                                        color="secondary"
                                                        id="filled-required"
                                                        label={`Section ${section.index} Header`}
                                                        defaultValue={section.header}
                                                        className={classes.responsiveFieldSide}

                                                        margin="normal"
                                                        variant="filled"
                                                    />
                                                    <TextField
                                                        inputProps={{ style: { textAlign: 'center' } }}
                                                        InputLabelProps={{ style: { marginLeft: '50px' } }}
                                                        color="secondary"
                                                        onChange={(e) => textChange(post, section, e.target.value, false)}
                                                        id="filled-multiline-static"
                                                        label={`Section ${section.index} Text`}
                                                        multiline
                                                        rows="20"
                                                        defaultValue={section.body}
                                                        className={clsx(classes.responsiveField, classes.textField)}
                                                        margin="normal"
                                                        variant="filled"
                                                    />
                                                </React.Fragment> :
                                                <Box className={classes.textBox}>
                                                    <Typography className={classes.text} component="h3" variant="h5">
                                                        {section.header}
                                                    </Typography>
                                                    <Typography className={classes.text} variant="body1" color="textSecondary">
                                                        {section.body}
                                                    </Typography>
                                                </Box>}
                                        </Grid>
                                    </Grid>
                                </Slide>
                                :
                                <Slide
                                    in
                                    direction="left"
                                    // style={{ transformOrigin: '8 0 0' }}
                                    timeout={1000 + (500 * i)}
                                    key={section.index}>
                                    <Grid container spacing={2} className={classes.article}>
                                        {editMode &&
                                            renderEditMenu(post, section, i, post.postSections.length)
                                        }
                                        <Grid item xs={12}>
                                            {editMode && !section.img ?
                                                <ImgDropzone styleClass={classes.imgInput} /> :
                                                <CardMedia
                                                    component="img"
                                                    alt="img"
                                                    height="500"

                                                    image={section.img}
                                                    title="img"
                                                />}

                                        </Grid>
                                        <Grid item xs={12}>
                                            {editMode ?
                                                <React.Fragment>
                                                    <TextField
                                                        inputProps={{ style: { textAlign: 'center' } }}
                                                        InputLabelProps={{ style: { marginLeft: '50px' } }}
                                                        color="secondary"
                                                        id="filled-required"
                                                        label={`Section ${section.index} Header`}
                                                        defaultValue={section.header}
                                                        className={classes.responsiveFieldSide}
                                                        onChange={(e) => textChange(post, section, e.target.value, true)}
                                                        margin="normal"
                                                        variant="filled"
                                                    />
                                                    <TextField
                                                        inputProps={{ style: { textAlign: 'center' } }}
                                                        InputLabelProps={{ style: { marginLeft: '50px' } }}
                                                        color="secondary"
                                                        onChange={(e) => textChange(post, section, e.target.value, false)}
                                                        id="filled-multiline-static"
                                                        label={`Section ${section.index} Text`}
                                                        multiline
                                                        rows="20"
                                                        defaultValue={section.body}
                                                        className={clsx(classes.responsiveField, classes.textField)}
                                                        margin="normal"
                                                        variant="filled"
                                                    />
                                                </React.Fragment> :
                                                <Box className={classes.textBox}>
                                                    <Typography className={classes.text} component="h3" variant="h5">
                                                        {section.header}
                                                    </Typography>
                                                    <Typography className={classes.text} variant="body1" color="textSecondary">
                                                        {section.body}
                                                    </Typography>
                                                </Box>}
                                        </Grid>
                                    </Grid>
                                </Slide>
                        }
                    </React.Fragment>)
                )}
            <Grid container spacing={2} >
                {editMode &&
                    <Grid style={{ justifyItems: 'flex-start' }} item xs={2}>
                        <AddCircleOutlineIcon
                            onClick={() => onAddClick()}
                            className={classes.addIcon}
                            fontSize="large"
                            color="secondary" />
                    </Grid>}
            </Grid>
        </Grid>
    )

}

export default withStyles(styles)(PostSections)
