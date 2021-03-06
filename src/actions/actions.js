// Action Suite
// 1. action types
// 2. action creators
// 3. actions (action objects)

export const REMOVE_FEATURE = "REMOVE_FEATURE";
// action creators are just functions that "create" (aka return) actions
export const removeFeature = (id) => {
  console.log("action creator called");
  return { type: REMOVE_FEATURE, 
    payload: {
        removePrice: id.price,
        removeF: id
    }
  }
};

export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = newFeature => {
  return { type: ADD_FEATURE, 
    payload: {
        additionalPrice: newFeature.price,
        newFeature: newFeature
    }
  };
};

