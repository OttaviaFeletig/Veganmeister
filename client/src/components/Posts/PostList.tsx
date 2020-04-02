import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostItem from './PostItem';
import { PostsContext } from '../../context/PostsContext';
import { PostN } from '../../@types';
import Grow from '@material-ui/core/Grow';
import SelectGMap from '../Elements/Search/SelectGMap'



const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),

    },
    container: {
        padding: 0
    },
    paper: {
        padding: theme.spacing(2),

        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

interface Props extends WithStyles<typeof styles> {
    classes: {
        root: string,
        paper: string,
        container: string,
    },
}


const Posts: React.FC<Props> = ({ classes }) => {
    const { posts } = useContext(PostsContext)
    return (
        <div className={classes.root}>
            <Grid container className={classes.container} spacing={2}>

                {posts && posts.map((post: PostN.PostI, i: number) =>
                    <Grow in
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={1500 + (1000 * i)}
                        key={post._id}
                    >
                        <Grid item xs={12} md={6}>
                            <PostItem post={post} loading={false} />
                        </Grid>
                    </Grow>
                )}
            </Grid>
        </div>
    );
}
export default withStyles(styles)(Posts)