import React, { useContext, useState } from 'react'
import { Theme, createStyles, Typography, CardMedia, Grid, Tooltip, Fab, Button, Menu, MenuItem, FormControlLabel, Switch, TextField, Divider, Slide } from '@material-ui/core';
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



// import { Post } from '../context/ContentContext';


const styles = (theme: Theme) => createStyles({
    article: {
        position: 'relative',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0
        },
    },
    text: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
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
        marginBottom: theme.spacing(2),
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
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    responsiveField: {
        height: '100%',
        width: '100%',
        margin: 0,

        // [theme.breakpoints.down('xs')]: {
        //     width: '100%',
        //     marginLeft: 0,
        //     marginRight: 0
        // }
    },
    responsiveFieldSide: {
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },

});

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
    const [editMode, toggleEditMode] = React.useState(true);
    const [open, setOpen] = React.useState(false);

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
    const isMenuOpen = Boolean(anchorEl);
    const { isAuthenticated } = useContext(AuthContext)
    const [postSection, setPostSection] = useState(emptySection)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onEditClick = (postSection: PostN.PostSectionI) => {
        setPostSection(postSection)
        setOpen(true)
        toggleAddMode(true)
    }
    const onAddClick = () => {
        setPostSection(emptySection)
        setOpen(true)
        toggleAddMode(true)
    }
    const onEditCancel = () => {
        // setArticle(emptyArticle)
        toggleAddMode(false)
    }
    const onClickDelete = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        // addEditDeleteArticle(tab, article, 'delete')
        setPostSection(emptySection)

        toggleAddMode(false)
    }
    const onClickSave = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        // addEditDeleteArticle(tab, article, 'edit')
        onEditCancel()
    }

    const handleMoveUp = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        setAnchorEl(null);
        // console.log('article', art.index)
        // changeArticleOrder(tb, art, 'moveUp')
    };
    const handleMoveDown = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
        // console.log('article', art.index)
        setAnchorEl(null);
        // changeArticleOrder(tb, art, 'moveDown')
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const renderEditMenu = (post: PostN.PostI, postSection: PostN.PostSectionI) => (<React.Fragment>
        <div className={classes.absoluteL} >
            <Tooltip
                onClick={() => handleMoveUp(post, postSection)} title="moveUp" aria-label="moveDown">
                <Fab size="small" color="primary"
                // className={classes.absoluteL} 
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Tooltip>
            <Tooltip
                onClick={() => handleMoveDown(post, postSection)} title="moveDown" aria-label="move down">
                <Fab size="small" color="primary"
                // className={classes.absoluteL}
                >
                    <KeyboardArrowDownIcon />
                </Fab>
            </Tooltip>
        </div>
        <div className={classes.absoluteR} >
            {/* <Tooltip
                onClick={() => onEditClick(postSection)}
                title="edit" aria-label="edit">
                <Fab size="small" color="primary" >
                    <EditIcon />
                </Fab>
            </Tooltip> */}
            <Tooltip
                onClick={() => onClickDelete(post, postSection)}
                title="delete" aria-label="delete">
                <Fab size="small" color="primary"
                    className={classes.buttonDel}
                >
                    <DeleteIcon />
                </Fab>
            </Tooltip>
        </div>
    </React.Fragment>)
    // const renderMenu = (post: PostN.PostI, postSection: PostN.PostSectionI) => {
    //     let menuId = 'moveMenu' + postSection.index;
    //     return (
    //         <Menu
    //             anchorEl={anchorEl}
    //             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //             id={menuId}
    //             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //             open={isMenuOpen}
    //             onClose={handleMenuClose}
    //         >
    //             <MenuItem onClick={() => handleMoveUp(post, postSection)}>Move up</MenuItem>
    //             <MenuItem onClick={() => handleMoveDown(post, postSection)}>Move down</MenuItem>
    //         </Menu>
    //     );
    // }
    // if (addMode) return (
    //     <React.Fragment>
    //         {/* <Dialog
    //             fullScreen={true}
    //             open={open}
    //             onClose={handleClose}
    //             aria-labelledby="responsive-dialog-title"
    //         > */}
    //         <PostSectionAddEdit postSection={postSection} />
    //         <Grid container>
    //             <Grid item xs={6}>
    //                 <Button
    //                     onClick={() => onEditCancel()}
    //                     variant="contained"
    //                     color="secondary"
    //                     size="small"
    //                     className={classes.button}
    //                     startIcon={<CancelIcon />}
    //                 >Cancel</Button>
    //             </Grid>

    //             <Grid item xs={6}>
    //                 <Button
    //                     // onClick={() =>
    //                     //     onClickSave(post, postSection)}
    //                     variant="contained"
    //                     color="primary"
    //                     size="small"
    //                     className={classes.button}
    //                     startIcon={<SaveIcon />}
    //                 >Save</Button>
    //             </Grid>
    //         </Grid>
    //         {/* </Dialog> */}
    //     </React.Fragment>)

    // else
    return (
        <Grid container spacing={2}
            className={classes.article}
        >
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
                    (
                        <Slide in
                            direction="left"
                            // style={{ transformOrigin: '8 0 0' }}
                            timeout={1000 + (500 * i)}
                            key={section.index}>
                            {section.sideImg ?
                                <Grid
                                    container
                                    spacing={2}
                                    className={classes.article} >
                                    <Grid className={classes.gridImg} item xs={12} md={6}>
                                        {editMode && renderEditMenu(post, section)}
                                        <CardMedia
                                            component="img"
                                            alt="img"
                                            className={classes.sideImg}
                                            image={section.img}
                                            title="img"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {editMode ?
                                            <React.Fragment>
                                                <TextField
                                                    // InputLabelProps={
                                                    //     classes.formLabelFocused
                                                    // }
                                                    // onChange={handleChange('title')}
                                                    color="secondary"
                                                    id="filled-required"
                                                    label={`Section ${section.index} Header`}
                                                    defaultValue={section.header}
                                                    className={classes.responsiveFieldSide}

                                                    margin="normal"
                                                    variant="filled"
                                                />
                                                <TextField
                                                    color="secondary"
                                                    // onChange={handleChange('text')}
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
                                            <React.Fragment>
                                                <Typography className={classes.text} component="h3" variant="h5">
                                                    {section.header}
                                                </Typography>
                                                <Typography className={classes.text} variant="body1" color="textSecondary">
                                                    {section.body}
                                                </Typography>
                                            </React.Fragment>}
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={2} className={classes.article}>
                                    {editMode &&
                                        renderEditMenu(post, section)
                                    }
                                    <Grid item xs={12}>
                                        {/* <Typography className={classes.title} component="h3" variant="h5">
                                            {section.}
                                        </Typography> */}
                                        {section.img && <CardMedia
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
                                                    // InputLabelProps={
                                                    //     classes.formLabelFocused
                                                    // }
                                                    // onChange={handleChange('title')}
                                                    color="secondary"
                                                    id="filled-required"
                                                    label={`Section ${section.index} Header`}
                                                    defaultValue={section.header}
                                                    className={classes.responsiveFieldSide}

                                                    margin="normal"
                                                    variant="filled"
                                                />
                                                <TextField
                                                    color="secondary"
                                                    // onChange={handleChange('text')}
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
                                            <React.Fragment>
                                                <Typography className={classes.text} component="h3" variant="h5">
                                                    {section.header}
                                                </Typography>
                                                <Typography className={classes.text} variant="body1" color="textSecondary">
                                                    {section.body}
                                                </Typography>
                                            </React.Fragment>}
                                    </Grid>
                                </Grid>}
                            {/* {renderMenu(tab, article)} */}

                        </Slide>
                    ))
            }
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
