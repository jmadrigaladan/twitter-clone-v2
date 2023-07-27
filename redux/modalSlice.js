import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupModalOpen: false,
  loginModalOpen: false,
  commentModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signupModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signupModalOpen = false;
    },
    openLogInModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.loginModalOpen = false;
    },
    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openLogInModal,
  closeLogInModal,
  openCommentModal,
  closeCommentModal,
} = modalSlice.actions;

export default modalSlice.reducer;
