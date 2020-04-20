import { WithStyles, RootRef, Paper, Fab, Theme, createStyles, withStyles, fade } from "@material-ui/core";
import { useCallback, ChangeEvent, useState } from "react";
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
    // classes: any,

}
const ImgDropzone: React.FC<Props> = ({ classes }) => {
    const [selectedImage, setSelectedImage] = useState<any>();
    // handleImageUpload could be inside a context so you don't have to repeat it here and in the sign up component
    const handleImageUpload = async () => {
        // if (!selectedImage) {
        //     alert("Select an image to upload");
        // } else {
        //     const formData = new FormData();
        //     formData.append("image", selectedImage, selectedImage.name);
        //     try {
        //         const res = await axios.post(
        //             `${process.env.BackendUrl}upload/`,
        //             formData
        //         );
        //         console.log(res.data.file.location);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
    };

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        if (acceptedFiles.length === 0) {
            return;
        }
        if (acceptedFiles[0].name.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
            setSelectedImage(acceptedFiles[0]);
            // setFiletypeAlertDone(false);
        } else {
            alert("The image must be a JPG/JPEG/PNG/GIF");
            // setFiletypeAlertDone(true);
            setSelectedImage("");
            return;
        }
        console.log('acceptedFiles :', acceptedFiles);
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    const { ref, ...rootProps } = getRootProps()
    return (
        <RootRef rootRef={ref} >
            {/* <LinearProgress variant="buffer" value={imgLoading} valueBuffer={imgLoading} color="secondary" /> */}
            <Paper
                className={classes.imgInput}
                {...rootProps}>
                <Fab color="primary" size="large" aria-label="image input">
                    <MaterialIconAsync icon="AddPhotoAlternate" />
                </Fab>
                <React.Fragment>
                    <input accept="image/*" {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </React.Fragment>
            </Paper>
        </RootRef >)
}

export default withStyles(styles)(ImgDropzone)