import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostItemCard from './PostItemCard';
import PostItemLine from './PostItemLine';
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
    const [cardDisplay, setCardDisplay] = useState(true)

    const toggleDisplay = () => {
        setCardDisplay((prev) => !prev)
    }

    useEffect(() => {
        setGrow((prev) => !prev)
        console.log('foo :');
    }, [sort])
    return (
        <div className={classes.root}>
            <Filters sort={sort} handleSort={handleSort} toggleDisplay={toggleDisplay} />
            <Grid container className={classes.container} spacing={2}>
                {posts && posts.map((post: PostN.PostI, i: number) =>
                    <Grow in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(grow ? { timeout: 1000 } : {})}
                        timeout={1500 + (1000 * i)}
                        key={post._id}
                    >
                        {cardDisplay ? <Grid item xs={12} md={6}>
                            <PostItemCard post={post} loading={false} />
                        </Grid> :
                            <React.Fragment>
                                <Grid item xs={12} >
                                    <PostItemLine post={post} loading={false} />
                                </Grid>
                                {/* <Grid item xs={12} >
                                    <PostItemLine post={post} loading={false} />
                                </Grid> */}
                            </React.Fragment>
                        }
                    </Grow>
                )}
            </Grid>
        </div>
    );
}
export default withStyles(styles)(Posts)