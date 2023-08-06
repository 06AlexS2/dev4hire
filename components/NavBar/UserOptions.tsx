import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useRef } from "react";

interface Props {
  isUserCardOpen: boolean;
  onClose: () => void;
}
export const UserOptions: React.FC<Props> = ({ isUserCardOpen, onClose }) => {
  const userOptionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userOptionsRef.current &&
        !userOptionsRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={userOptionsRef}
      className={`hidden md:block fixed md:right-[90px] lg:right-[50px] xl:right-[120px] top-[100px] z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-4 rounded-md transition-all ${
        isUserCardOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col items-start justify-center text-[18px] text-white">
        <li className="hover:text-blue-500 transition-colors cursor-pointer">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="hover:text-blue-500 transition-colors cursor-pointer">
          <button onClick={(): Promise<any> => signOut({callbackUrl: '/auth/login'})}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
