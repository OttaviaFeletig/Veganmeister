import { WithStyles, CardContent, CardHeader, Avatar, Typography, IconButton, withStyles, Theme, createStyles, fade } from "@material-ui/core"
import { PostN } from "../../../@types"
import React from "react"
import moment from "moment"
import MaterialIconAsync from "../GraphicElmts/MaterialIconAsync"


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
    expandOpen: {
        // transform: 'rotate(180deg)',
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
    commentsContainer: {
        display: 'flex',
        alignItems: 'center',
        // marginTop: theme.spacing(1)

    },
    commentBody: {
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.common.black, 0.05),
        borderRadius: theme.shape.borderRadius,


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
    iconButton: {
        // padding: 10,
    },
    divider: {
        // height: 28,
        // margin: 4,
    },
})
interface PropsRenderComments extends WithStyles<typeof styles> {
    classes: any,
    comments: PostN.CommentsT,
}



const Comments: React.FC<PropsRenderComments> = ({ comments, classes }) => {
    return (<CardContent>
        {comments.map((comment: PostN.CommentI) => (
            <div key={comment._id} className={classes.commentsContainer}>

                <CardHeader
                    avatar={
                        <Avatar
                            classes={{ img: classes.avatarIMG }}
                            className={classes.avatar}
                            alt={"user avatar"}
                            src={comment.user.avatar}
                        />
                    }

                    title={<React.Fragment > {comment.user.username}</React.Fragment>}
                    subheader={moment(comment.date).fromNow()}
                />
                <div className={classes.commentBody}>
                    <Typography variant="body2">
                        {comment.body}
                    </Typography>
                </div>
                <IconButton aria-label="add to favorites">
                    <MaterialIconAsync icon="ThumbUpIcon" />
                    <Typography variant="body2"> {comment.likes} likes</Typography>
                </IconButton>

                {/* <Divider variant="middle" /> */}
            </div>
        )
        )}

    </CardContent>)
}

export default withStyles(styles)(Comments)