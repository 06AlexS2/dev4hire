"use client";
import { Fragment, useState } from "react";
import { ThreeBars } from "./ThreeBars";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { UserOptions } from "./UserOptions";
import { LogoutModal } from "./LogoutModal";
import { usePathname } from "next/navigation";

interface NavBarLinks {
  label: string;
  route: string;
  liClass: string;
  aClass: string;
}

const normalLinks: NavBarLinks[] = [
  {
    label: "Home",
    route: "/",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
  {
    label: "About",
    route: "/about",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
  {
    label: "Pricing",
    route: "/pricing",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
  {
    label: "Login",
    route: "/auth/login",
    liClass:
      "group border-2 border-[white] hover:border-blue-400 hover:transition-[color] rounded-lg w-auto",
    aClass:
      "text-white mx-2 group-hover:text-blue-400 hover:transition-[color]  text-[24px]",
  },
];

const userLinks: NavBarLinks[] = [
  {
    label: "Home",
    route: "/",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
  {
    label: "About",
    route: "/about",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
  {
    label: "Pricing",
    route: "/pricing",
    liClass: "",
    aClass:
      "text-white hover:text-blue-400 hover:transition-[color] text-[24px]",
  },
];

export default function NavBar(props: any) {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserCardOpen, setIsUserCardOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const pathname = usePathname();
  const regex: RegExp = /\/dashboard/;
  const handleUserCard = (): void => {
    setIsUserCardOpen(!isUserCardOpen);
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  
  if (regex.test(pathname)) {
    return null;
  } else {
    return (
      <Fragment>
        <nav className="fixed top-0 left-0 right-0 z-50 w-[100vw]">
          <div className=" bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between p-6">
              <div className="flex flex-row justify-between items-center">
                <Link
                  href="/"
                  className="group text-white hover:text-blue-500 hover:transition-colors text-[24px]"
                >
                  Dev
                  <span className="font-bold text-blue-500 group-hover:text-white group-hover:transition-colors">
                    4
                  </span>
                  Hire
                </Link>
              </div>
              <div className="md:hidden flex flex-row items-center">
                <button
                  type="button"
                  className="text-white hover:text-gray-300 text-[28px] transition-transform"
                  onClick={toggleMenu}
                >
                  {/**{isOpen ? <FaTimesCircle/> : <FaBars/>}*/}
                  <ThreeBars isClicked={isOpen} />
                </button>
              </div>
              <ul
                className={`hidden md:flex space-x-4 text-white ${
                  isOpen ? "flex flex-col" : ""
                }`}
              >
                {data?.user
                  ? userLinks.map(({ label, route, liClass, aClass }) => (
                      <li key={route} className={liClass}>
                        <Link href={route} className={aClass}>
                          {label}
                        </Link>
                      </li>
                    ))
                  : normalLinks.map(({ label, route, liClass, aClass }) => (
                      <li key={route} className={liClass}>
                        <Link href={route} className={aClass}>
                          {label}
                        </Link>
                      </li>
                    ))}
                {data?.user && (
                  <li>
                    <button
                      id="user-card"
                      onClick={handleUserCard}
                      className="group text-white text-[24px] hover:text-blue-500 transition-colors flex items-center"
                    >
                      {data.user.name}
                      <span className="border-2 border-white group-hover:border-blue-500 rounded-full ml-2">
                        <FaUser className="text-[24px] m-[6px]" />
                      </span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/** mobile navbar */}
          <div
            className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg transition-all duration-500 ${
              isOpen ? "block animate-fade-down animate-duration-500" : "hidden"
            } md:hidden`}
          >
            <div className="container mx-auto p-4">
              {data?.user ? (
                <ul className="flex flex-col space-y-4 text-white">
                  <li className="text-white text-[24px] hover:text-blue-500 transition-colors flex items-center justify-center">
                    {data.user.name}
                    <span className="border-2 border-white rounded-full ml-2">
                      <FaUser className=" text-[20px] m-1" />
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-white hover:text-blue-400 hover:transition-[color] text-[24px]"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {userLinks.map(({ label, route }) => (
                    <li key={route}>
                      <Link
                        href={route}
                        className="text-white hover:text-blue-400 hover:transition-[color] text-[24px]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      className="text-white hover:text-blue-500 transition-colors cursor-pointer text-[24px]"
                      onClick={() => {
                        setLogout(true);
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col space-y-4 text-white">
                  {normalLinks.map(({ label, route }) => (
                    <li key={route}>
                      <Link
                        href={route}
                        className="text-white hover:text-blue-400 hover:transition-[color] text-[24px]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
        <UserOptions
          isUserCardOpen={isUserCardOpen}
          setIsUserCardOpen={setIsUserCardOpen}
          onClose={() => setIsUserCardOpen(false)}
          setLogout={setLogout}
        />
        {logout && <LogoutModal logout={logout} setLogout={setLogout} />}
      </Fragment>
    );
  }
}
