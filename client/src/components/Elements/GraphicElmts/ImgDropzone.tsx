import { WithStyles, RootRef, Paper, Fab, Theme, createStyles, withStyles, fade } from "@material-ui/core";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import MaterialIconAsync from "./MaterialIconAsync";
import React from "react";

const styles = (theme: Theme) => createStyles({
    imgInput: {
        minHeight: 200,
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
})
interface Props extends WithStyles<typeof styles> {
    classes: any,

}
const ImgDropzone: React.FC<Props> = ({ classes }) => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('acceptedFiles :', acceptedFiles);
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    const { ref, ...rootProps } = getRootProps()
    return (
        <RootRef rootRef={ref} >
            <Paper
                className={classes.imgInput}
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

export default withStyles(styles)(ImgDropzone)