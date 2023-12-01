import { createContext, useReducer } from "react";

export let UserInfo = createContext();

let user = {
  userdata: null,
  GetContact: null,
  ProfileData: null,
  EditMode: false,
  editingContact: null,
  updateValueFn: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setUserdata":
      return { ...state, userdata: action.payload };

    case "setGetContact":
      return { ...state, GetContact: action.payload };
    case "setProfileData":
      return { ...state, ProfileData: action.payload };

    case "setEditMode":
      return { ...state, EditMode: action.payload };

    case "setEditingContact":
      return { ...state, editingContact: action.payload };
    case "setUpdateValue":
      return { ...state, updateValueFn: action.payload };

    default:
      return state;
  }
};

export const UserContexProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, user);
  return (
    <UserInfo.Provider value={{ state, dispatch }}>
      {children}
    </UserInfo.Provider>
  );
};
