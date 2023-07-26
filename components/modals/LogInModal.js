import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeLogInModal, openLogInModal } from "@/redux/modalSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useState } from "react";

export default function LogInModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLogInModal())}
      >
        LogIn
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] bg-black md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center text-white">
          <div className="w-[90%] mt-8 flex flex-col ">
            <h1 className="text-center mt-4 font-bold text-4xl">
              Sign In to your account
            </h1>

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
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
