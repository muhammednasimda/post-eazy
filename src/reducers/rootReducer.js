import placeholder from "../images/placeholder.png";
const initState = {
  photo: placeholder,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "UPDATE_IMAGE") {
    console.log(action.photo);
    let newImage = action.image;
    return {
      photo: newImage,
    };
  }
  return state;
};

export default rootReducer;
