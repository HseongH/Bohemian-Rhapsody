// ACTION
const IMAGE = 'IMAGE';

// ACTION CREATER
export const readImage = (image) => ({ type: IMAGE, image });

// INITIAL STATE
const initialState = {
  image: [],
};

// MIDDLEWARE

// REDUCER
function image(state = initialState, action) {
  switch (action.type) {
    case IMAGE:
      return state;

    default:
      return state;
  }
}

export default image;
