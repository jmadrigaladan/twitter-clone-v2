import LogInModal from "./modals/LogInModal";
import SignUpModal from "./modals/SignUpModal";

export default function BottomBaner() {
  return (
    <div className="flex fixed xl:space-x-[200px] justify-center items-center w-full h-[80px] bg-[#1d9bf0] bottom-0">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold ">Don't miss what's happening</h1>
        <span className="text-[18px] font-normal">
          People on Twitter are the first to know.
        </span>
      </div>

      <div className="space-x-3">
        {/* <button className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]">
          Log In
        </button> */}
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  );
}
