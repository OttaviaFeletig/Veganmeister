import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostItem from './PostItem';
import { PostsContext } from '../../context/PostsContext';
import { PostN } from '../../@types';
import Grow from '@material-ui/core/Grow';
import SelectGMap from '../Elements/Search/SelectGMap'
import { Toolbar, IconButton, Badge } from '@material-ui/core';
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import Filters from '../Elements/Search/Filters';



const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),

    },
    container: {
        padding: 0
    },
    toolbar: {
        color: theme.palette.secondary.main
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
        toolbar: string,
    },
}

const Posts: React.FC<Props> = ({ classes }) => {
    const { posts, sort, handleSort } = useContext(PostsContext)
    const [grow, setGrow] = useState(true)
    useEffect(() => {
        setGrow((prev) => !prev)
    }, [posts])
    return (
        <div className={classes.root}>
            <Filters sort={sort} handleSort={handleSort} />
            <Grid container className={classes.container} spacing={2}>
                {posts && posts.map((post: PostN.PostI, i: number) =>
                    <Grow in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(grow ? { timeout: 1000 } : {})}
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