import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpModal, openSignUpModal } from "@/redux/modalSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/firebase";

export default function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  return (
    <>
      <button
        className="bg-white border  text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center text-white">
          <div className="w-[90%] mt-8 flex flex-col ">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="text-center mt-4 font-bold text-4xl">
              Create your Account
            </h1>
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md"
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
