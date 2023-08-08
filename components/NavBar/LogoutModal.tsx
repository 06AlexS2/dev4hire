import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";

interface Props {
  logout: boolean;
  setLogout: (logout: boolean) => void;
}

export const LogoutModal: React.FC<Props> = ({ logout, setLogout }) => {
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);

  const handleCancelClick = (): void => {
    setIsCancelClicked(true);
  };
  const handleCancelRelease = (): void => {
    setIsCancelClicked(false);
  };
  const handleConfirmClick = (): void => {
    setIsConfirmClicked(true);
  };
  const handleConfirmRelease = (): void => {
    setIsConfirmClicked(false);
  };

  return (
    <Fragment>
      <div
        className={`fixed inset-0 bg-black opacity-40 z-50 overflow-hidden ${
          logout ? "block" : "hidden"
        }`}
      ></div>
      <dialog
        open={logout}
        className={`flex flex-col items-center justify-center fixed top-[250px] z-[99] w-[90%] md:w-[400px] h-[200px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-4 rounded-md transition-all animate-fade animate-duration-300`}
      >
        <h3 className="text-white text-2xl text-center">
          Are you sure you want to sign out?
        </h3>
        <div className="flex flex-row items-center justify-evenly">
          <button
            onClick={() => setLogout(false)}
            className={`flex flex-col mx-2 mt-5 items-center justify-center bg-red-500 text-white text-lg font-bold border-b-4 border-gray-800 hover:border-gray-900 transition-all rounded-lg w-[120px] h-[45px] ${
              isCancelClicked ? "transform scale-90 border-b-[1px]" : ""
            }`}
            onMouseDown={handleCancelClick}
            onMouseUp={handleCancelRelease}
            onMouseLeave={handleCancelRelease}
          >
            Cancel
          </button>
          <button
            onClick={(): Promise<any> =>
              signOut({ callbackUrl: "/auth/login" })
            }
            className={`flex flex-col mx-auto mt-5 items-center justify-center bg-blue-500 text-white text-lg font-bold border-b-4 border-gray-800 hover:border-gray-900 transition-all rounded-lg w-[120px] h-[45px] ${
              isConfirmClicked ? "transform scale-90 border-b-[1px]" : ""
            }`}
            onMouseDown={handleConfirmClick}
            onMouseUp={handleConfirmRelease}
            onMouseLeave={handleConfirmRelease}
          >
            Sign Out
          </button>
        </div>
      </dialog>
    </Fragment>
  );
};
