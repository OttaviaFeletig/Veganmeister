import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input, FormControlLabel, Switch, CardMedia, Grid, LinearProgress, Tooltip, Fab } from '@material-ui/core';
import MUIRichTextEditor from 'mui-rte'
import { AuthContext } from '../../context/AuthContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';
import { PostN } from '../../@types';



const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    responsiveField: {
        width: '70vw',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
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

    responsiveImg: {
        width: '70vw',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    sideImg: {
        maxBlockSize: '50vh',


    },
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
    buttonDel: {
        color: "white",
        backgroundColor: red[500],
    },
    absoluteL: {
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
})

interface Props extends WithStyles<typeof styles> {
    classes: any,
    postSection: PostN.PostSectionI
}

const PostSectionAddEdit: React.FC<Props> = ({ classes, postSection }) => {


    // const { article, setArticle } = useContext(ContentContext)
    const { user } = useContext(AuthContext)
    const [imgLoading, setImgLoading] = useState(0)

    const handleChange = (name: keyof PostN.PostSectionI) => (event: React.ChangeEvent<HTMLInputElement>) => {
        // setArticle({ ...article, [name]: event.target.value });
    };
    const toggleLayout = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        // setArticle({ ...article, sideImg: event.target.checked });
    };
    const { sideImg, text, img } = postSection

    // firebaseUpload = async () => {
    const firebaseStorageUpload = (file: File) => {
        // const storageService = firebase.storage();
        // const storageRef = storageService.ref();


        // setImgLoading(0)
        // const uploadTask = storageRef.child(`${user.uid}/articles/${file.name}`).put(file); //create a child directory called images, and place the file inside this directory

        // uploadTask.on('state_changed', (snapshot) => {
        //     console.log(snapshot)
        //     let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
        //     setImgLoading(prog)

        // }, (error) => {

        //     console.log(error);
        // }, () => {
        //     console.log('success');
        //     setImgLoading(100)
        //     firebase
        //         .storage()
        //         .ref(`${user.uid}/articles/`)
        //         .child(`${file.name}`)
        //         .getDownloadURL()
        //         .then(url => setArticle({
        //             ...article,
        //             img: url

        //         }));

        // });

    }
    // }
    const handleUpload = (files: FileList | null) => {
        const file = files![0]

        console.log(file.name)

        firebaseStorageUpload(file)
        // const storageService = firebase.storage();
        // const storageRef = storageService.ref();


        // // this.setState({ isUploading: true, progress: 0 })

        // const uploadTask = storageRef.child(`artcle/${file.name}`).put(file); //create a child directory called images, and place the file inside this directory

        // uploadTask.on('state_changed', (snapshot) => {
        //     console.log(snapshot)
        //     let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
        //     // this.setState({ progress: prog });

        // }, (error) => {

        //     console.log(error);
        // }, () => {
        //     console.log('success');
        //     // this.setState({ isUploading: false, progress: 100 })
        //     firebase
        //         .storage()
        //         .ref("itinerary")
        //         .child(`${file.name}`)
        //         .getDownloadURL()
        //         .then(url => console.log('url', url));

        // });


    }


    return (
        <form className={classes.container} color="secondary" autoComplete="off">
            <Grid className={classes.gridImg} item xs={12} >
                <FormControlLabel
                    control={
                        <Switch checked={sideImg} value={sideImg} onChange={toggleLayout()} />
                    }
                    label="image and text side by side"
                />
            </Grid>
            {sideImg ?
                <Grid container spacing={1} className={classes.article} >

                    <Grid className={classes.gridImg} item xs={12} md={6}>
                        {img ?
                            <React.Fragment>
                                <div className={classes.absoluteL} >
                                    <Tooltip
                                        // onClick={() => setArticle({ ...article, img: '' })}
                                        title="delete" aria-label="delete">
                                        <Fab size="small" color="primary"
                                            className={classes.buttonDel}
                                        >
                                            <DeleteIcon />
                                        </Fab>
                                    </Tooltip>
                                </div>
                                <CardMedia
                                    component="img"
                                    alt="img"
                                    className={classes.sideImg}
                                    image={img}
                                    title="img"
                                />
                            </React.Fragment> :
                            <React.Fragment>
                                <LinearProgress variant="buffer" value={imgLoading} valueBuffer={imgLoading} color="secondary" />
                                <input required accept="image/*" type="file"
                                    // {...input}
                                    onChange={(e) => {
                                        if (e.target.files!) {
                                            handleUpload(e.target.files)
                                        }

                                    }


                                    }
                                />
                            </React.Fragment>


                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <TextField
                            InputLabelProps={
                                classes.formLabelFocused
                            }
                            onChange={handleChange('title')}
                            required
                            id="filled-required"
                            label="Title"
                            defaultValue={title}
                            className={classes.responsiveFieldSide}

                            margin="normal"
                            variant="filled"
                        /> */}

                        <MUIRichTextEditor
                            label="Type something here..."
                            onSave={(data: string) => console.log('data :', data)}
                            value={postSection.text}
                            // controls={[""]}
                            // value={section.text}
                            inlineToolbar={false}
                        />
                    </Grid>
                </Grid> :
                <Grid container spacing={3} className={classes.article}>
                    <Grid item xs={12}>
                        <MUIRichTextEditor
                            label="Type something here..."
                            onSave={(data: string) => console.log('data :', data)}
                            value={postSection.text}
                            // controls={[""]}
                            // value={section.text}
                            inlineToolbar={false}
                        />
                        <Grid className={classes.gridImg} item xs={12}>
                            {img ?
                                <React.Fragment>
                                    <Tooltip
                                        // onClick={() => setArticle({ ...article, img: '' })}
                                        title="delete" aria-label="delete">
                                        <Fab size="small" color="primary"
                                            className={classes.buttonDel}
                                        >
                                            <DeleteIcon />
                                        </Fab>
                                    </Tooltip>
                                    <CardMedia
                                        component="img"
                                        alt="img"
                                        className={classes.sideImg}
                                        image={img}
                                        title="img"
                                    />
                                </React.Fragment> :
                                <React.Fragment>
                                    <LinearProgress variant="buffer" value={imgLoading} valueBuffer={imgLoading} color="secondary" />
                                    <input required accept="image/*" type="file"
                                        onChange={(e) => {
                                            if (e.target.files!) {
                                                handleUpload(e.target.files)
                                            }

                                        }


                                        }
                                    />
                                </React.Fragment>


                            }
                        </Grid>
                        <Grid item xs={12}>
                            <MUIRichTextEditor
                                label="Type something here..."
                                onSave={(data: string) => console.log('data :', data)}
                                value={postSection.text}
                                // controls={[""]}
                                // value={section.text}
                                inlineToolbar={false}
                            />
                            {/* <TextField
                                color="secondary"
                                onChange={handleChange('text')}
                                id="filled-multiline-static"
                                label="Article"
                                multiline
                                rows="20"
                                defaultValue={text}
                                className={clsx(classes.responsiveField, classes.textField)}
                                margin="normal"
                                variant="filled"
                            /> */}
                        </Grid>
                    </Grid>

                </Grid>
            }
        </form >
    );
}
export default withStyles(styles)(PostSectionAddEdit)
