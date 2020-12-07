import styles from "../css/poster.module.scss";
import imageCompression from "browser-image-compression";
import { connect } from "react-redux";

const PosterInput = (props) => {
  const compressImage = async (event) => {
    //compresses image to below 1MB
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      //save compressed image to state
      const img = await URL.createObjectURL(compressedFile);
      props.updatePhoto(img);
      // setProductImageConverted(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label>Select your photo</label>
      <label htmlFor="file-upload" className={styles.customFileUpload}>
        Upload Image
      </label>
      <input
        accept="image/*"
        id="file-upload"
        type="file"
        onChange={(event) => compressImage(event)}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhoto: (image) => {
      dispatch({ type: "UPDATE_IMAGE", image });
    },
  };
};

export default connect(null, mapDispatchToProps)(PosterInput);
