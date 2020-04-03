import React, { useContext, useRef, useState } from 'react';
import { fade, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { PostN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { InputBase, Divider } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { PostsContext } from '../../context/PostsContext';
import JoditEditor from "jodit-react";
import MUIRichTextEditor from 'mui-rte'
import DoneIcon from '@material-ui/icons/Done'
import { EditorState } from 'draft-js'
import Grow from '@material-ui/core/Grow';
import dataSite from '../../assets/data/siteData.json'
import Comments from '../Elements/Comments/Comments';


moment().format();

const styles = (theme: Theme) => createStyles({

    root: {
        // maxWidth: 345,
    },
    commentsCard: {
        marginTop: theme.spacing(2)
    },
    media: {
        height: 200,
        objectFit: 'cover',
        textAlign: 'center'
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 0
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
    },
    avatarIMG: {
        opacity: 0.6
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginRight: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },

    rating: {
        display: 'flex',
        // flexDirection: 'column',
        // '& > * + *': {
        //     marginTop: theme.spacing(1),
        // },
    },
    comments: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        // marginRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        // marginLeft: 0,
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        //     // width: 'auto',
        // },
    },
    commentIcon: {
        color: fade(theme.palette.common.black, 0.5),
        // padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputRoot: {
        color: 'inherit',
        width: '100%',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     width: '20ch',
        // },
    },

})



interface PropsComments extends WithStyles<typeof styles> {
    classes: any,
    post: PostN.PostI,
}

const PostComments: React.FC<PropsComments> = ({ post, classes }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grow in
            style={{ transformOrigin: '0 0 0' }}
            timeout={2500}

        >
            <Card className={classes.commentsCard}>
                <CardHeader
                    title="Comments"
                />
                <CardContent>


                    <div className={classes.comments}>
                        <CommentIcon className={classes.commentIcon} />
                        <InputBase
                            placeholder="Comment"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'comment' }}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="secondary" className={classes.iconButton} aria-label="directions">
                            <SendIcon />
                        </IconButton>
                    </div>


                    <Comments comments={post.comments.sort((a, b) => b.likes - a.likes).filter((el, i) => i < dataSite.comments.topComments)} classes={classes} />


                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >

                        {!expanded ?
                            <React.Fragment >
                                <ExpandMoreIcon />
                                <Typography >show more comments</Typography>
                            </React.Fragment> :
                            <React.Fragment >
                                <ExpandLessIcon />
                                <Typography >show less comments</Typography>
                            </React.Fragment>
                        }
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Comments comments={post.comments.sort((a, b) => b.likes - a.likes).filter((el, i) => i >= dataSite.comments.topComments)} classes={classes} />

                    </CardContent>
                </Collapse>
            </Card >
        </Grow>
    );
}


export default withStyles(styles)(PostComments)
