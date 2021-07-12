import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:d02afe22-f859-40bb-aedb-0c5dead2f8d1',
  }),
});

// ACTION
const UPLOADING = 'UPLOADING';
const UPLOAD_IMAGE = 'IMAGE';
const SET_PREVIEW = 'SET_PREVIEW';

// ACTION CREATER
const uploading = (uploading) => ({ type: UPLOADING, uploading });
const uploadImage = (imgUrl) => ({ type: UPLOAD_IMAGE, imgUrl });
const setPreview = (preview) => ({ type: SET_PREVIEW, preview });

// INITIAL STATE
const initialState = {
  imageUrl: null,
  preview: null,
  uploading: false,
};

// MIDDLEWARE
const uploadImageDB = (image, callNext) => {
  return function (dispatch) {
    console.log(111);
    dispatch(uploading(true));

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'bohemian-image',
        Key: image.name,
        Body: image,
      },
    });

    const promise = upload.promise();

    promise
      .then((data) => {
        dispatch(uploadImage(data.Location));
        dispatch(uploading(false));
      })
      .then(callNext())
      .catch((error) => {
        console.error(error);
        dispatch(uploading(false));
        return alert('오류가 발생했습니다: ', error.message);
      });
  };
};

// REDUCER
function image(state = initialState, action) {
  switch (action.type) {
    case UPLOADING:
      return { ...state, uploading: action.uploading };

    case UPLOAD_IMAGE:
      return { ...state, imageUrl: action.imgUrl };

    case SET_PREVIEW:
      return { ...state, preview: action.preview };

    default:
      return state;
  }
}

export default image;

export const imgActions = {
  uploadImage,
  setPreview,
  uploadImageDB,
};
