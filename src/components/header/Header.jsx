import { useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/Movie-Club-Logo.png";
import { useReducer, useEffect } from "react";
import LazyImage from "../lazyLoadImage/LazyImage";
const initialData = {
  searchBar: false,
  sideBar: false,
  query: "",
  show: "top",
  lastScrollY: 0,
  logOutPop: false,
  sideBarLogOutPop: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "searchBar":
      return {
        ...state,
        searchBar: action.payload,
      };
    case "sideBar":
      return {
        ...state,
        sideBar: action.payload,
      };
    case "query":
      return {
        ...state,
        query: action.payload,
      };
    case "show":
      return {
        ...state,
        show: action.payload,
      };
    case "lastScrollY":
      return {
        ...state,
        lastScrollY: action.payload,
      };
    case "logOutPop":
      return {
        ...state,
        logOutPop: action.payload,
      };
    case "sideBarLogOutPop":
      return {
        ...state,
        sideBarLogOutPop: action.payload,
      };

    default:
      return state;
  }
};

const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("guest_id");
    localStorage.removeItem("ratingList");
    navigate("/");
  };

  useEffect(() => {
    if (state.sideBar) {
      dispatch({ type: "sideBar", payload: false });
    }
    window.scrollTo(0, 0);
    if (localStorage.getItem("guest_id")) {
      const utcDate = new Date(
        JSON.parse(localStorage.getItem("guest_id")).expires_at
      ); // UTC date and time from your source
      const oneHourBefore = new Date(utcDate.getTime() - 60 * 60 * 1000); // Calculate 1 hour before
      const currentTime = new Date(); // Get the current time
      // Check if it's time to remove data
      if (currentTime >= oneHourBefore) {
        localStorage.removeItem("guest_id");
        localStorage.removeItem("ratingList");
      }
    }
  }, [location]);

  const controlNavbar = (event) => {
    if (window.scrollY > 200) {
      if (window.scrollY > state.lastScrollY && !state.sideBar) {
        dispatch({ type: "show", payload: "hide" });
      } else {
        dispatch({ type: "show", payload: "show" });
      }
    } else {
      dispatch({ type: "show", payload: "top" });
    }
    dispatch({ type: "lastScrollY", payload: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [state.lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && state.query.length > 0) {
      navigate(`/all/search?query=${state.query}`);
      dispatch({ type: "query", payload: "" });
      dispatch({ type: "searchBar", payload: false });
    }
  };

  return (
    <header
      className={`fixed w-full h-14 z-40 flex items-center transition-[transform] max-w-[1400px] mx-auto top-0 right-0 left-0 duration-700 ease-out      
    ${
      (state.show === "top" && "bg-black/25 backdrop-blur-sm translate-y-0") ||
      (state.show === "show" && "bg-[#020c1b] translate-y-0") ||
      (state.show === "hide" && "-translate-y-14")
    }`}
    >
      <div className="flex items-center justify-between w-full mx-3 sm:px-5 lg:px-10">
        <div className="flex items-center gap-5">
          {/* logo */}
          <span className="cursor-pointer" onClick={() => navigate(`/`)}>
            <LazyImage
              src={logo}
              className="object-cover object-center h-9 mt-2 "
            />
            {/* <img src={logo} alt="Logo" className="" /> */}
          </span>

          {/* menu */}
          <ul className="sm:flex items-center gap-7 hidden">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-medium hover:text-pink-500 cursor-pointer"
                    : "text-white font-medium hover:text-pink-500 cursor-pointer"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore/movie"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-medium hover:text-pink-500 cursor-pointer"
                    : "text-white font-medium hover:text-pink-500 cursor-pointer"
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore/tv"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-medium hover:text-pink-500 cursor-pointer"
                    : "text-white font-medium hover:text-pink-500 cursor-pointer"
                }
              >
                TV Shows
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {/* search */}

          <div className="flex items-center gap-2 w-36 md:w-44 text-white rounded-md p-1 mx-2 my-3 border-[1px] border-[#99c0e5]">
            <input
              value={state.query}
              onChange={(e) =>
                dispatch({ type: "query", payload: e.target.value })
              }
              onKeyUp={searchQueryHandler}
              type="search"
              placeholder="Search for Movies and TV Shows"
              className="focus:outline-none text-sm pl-1 tracking-wider bg-transparent w-full"
            />
            <span
              onClick={() => {
                if (state.query.length > 0) {
                  navigate(`/all/search?query=${state.query}`);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          {/* humburger */}

          <span
            className="text-white md:hidden cursor-pointer"
            onClick={() => dispatch({ type: "sideBar", payload: true })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>

          <div
            onClick={() => dispatch({ type: "sideBar", payload: false })}
            className={`h-screen w-full fixed top-0 left-0 bg-gray-500/10 ${
              state.sideBar ? "block" : "hidden"
            }`}
          ></div>

          {/* side bar*/}

          <div
            className={`bg-black/60 h-screen w-48 z-50 md:hidden absolute top-0 right-0 transition-[transform] ease-out duration-1000 ${
              state.sideBar ? "translate-x-0" : "translate-x-72"
            }`}
          >
            <div className=" mt-5">
              <span
                className="text-white font-medium ml-4 flex items-center  cursor-pointer hover:text-pink-500"
                onClick={() => dispatch({ type: "sideBar", payload: false })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                <span>Close</span>
              </span>
            </div>
            <ul className="flex flex-col justify-center items-center mt-7 gap-5">
              <li
                className="text-white font-medium hover:text-pink-500 cursor-pointer sm:hidden"
                onClick={() => {
                  navigate("/");
                  dispatch({ type: "sideBar", payload: false });
                }}
              >
                Home
              </li>
              <li
                className="text-white font-medium hover:text-pink-500 cursor-pointer sm:hidden"
                onClick={() => {
                  navigate("/explore/movie");
                  dispatch({ type: "sideBar", payload: false });
                }}
              >
                Movies
              </li>
              <li
                className="text-white font-medium hover:text-pink-500 cursor-pointer sm:hidden"
                onClick={() => {
                  navigate("/explore/tv");
                  dispatch({ type: "sideBar", payload: false });
                }}
              >
                TV Shows
              </li>

              <li className="flex items-center">
                <select
                  name="language"
                  id=""
                  className="bg-transparent ml-1 mt-1 text-white focus:outline-none text-xs font-bold md:mr-2 border-2 border-gray-500/90 py-1 px-2 appearance-none"
                >
                  <option className="text-black" value="en">
                    EN
                  </option>
                  <option className="text-black" value="hi">
                    HI
                  </option>
                </select>
              </li>

              {/* sign in button */}
              {localStorage.getItem("guest_id") ? (
                <div
                  className="bg-[#66b5ff] w-10 cursor-pointer select-none h-10 rounded-3xl relative grid place-items-center font-bold text-white text-xl pb-1"
                  onClick={() =>
                    dispatch({
                      type: "sideBarLogOutPop",
                      payload: !state.sideBarLogOutPop,
                    })
                  }
                >
                  {JSON.parse(localStorage.getItem("guest_id"))?.userName[0]}
                  {state.sideBarLogOutPop && (
                    <div className="absolute w-32 top-14 -right-10">
                      <div className="relative mx-2">
                        <div className="bg-white text-black text-sm font-semibold rounded py-2 px-4 right-0 bottom-full">
                          <svg
                            className="absolute text-white h-5 right-1/4 mr-3 bottom-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                            xmlSpace="preserve"
                          >
                            <polygon
                              className="fill-current"
                              points="0,255 127.5,127.5 255,255"
                            />
                          </svg>
                          <button
                            className="text-start"
                            onClick={() => navigate("/user/rated")}
                          >
                            Rated and Liked Videos
                          </button>
                          <hr className="my-3 border border-gray-700/50" />
                          <button onClick={handleLogOut}>LogOut</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className=" font-semibold tracking-widest font-poppins text-xs py-1 px-4 border-2 border-[#99c0e5] hover:bg-[#99c0e5] hover:text-black text-white rounded-3xl"
                >
                  SIGN IN
                </button>
              )}
            </ul>
          </div>

          {/* select language */}
          <div className="hidden md:flex items-center">
            <select
              name="language"
              id=""
              className="bg-transparent ml-1 mt-1 text-white focus:outline-none text-xs font-bold md:mr-2 border-2 border-gray-500/90 py-1 px-2 appearance-none"
            >
              <option className="text-black" value="en">
                EN
              </option>
              <option className="text-black" value="hi">
                HI
              </option>
            </select>
          </div>

          {/* sign in button */}

          {localStorage.getItem("guest_id") ? (
            <div
              className="bg-[#66b5ff] hidden w-8 h-8 relative cursor-pointer select-none rounded-3xl md:grid place-items-center font-bold text-white text-xl pb-1"
              onClick={() =>
                dispatch({ type: "logOutPop", payload: !state.logOutPop })
              }
            >
              {JSON.parse(localStorage.getItem("guest_id"))?.userName[0]}
              {state.logOutPop && (
                <div className="absolute w-32 top-12 -right-3">
                  <div className="relative mx-2">
                    <div className="bg-white text-black text-sm font-semibold rounded py-2 px-4 right-0 bottom-full">
                      <svg
                        className="absolute text-white h-5 right-0 mr-3 bottom-full"
                        x="0px"
                        y="0px"
                        viewBox="0 0 255 255"
                        xmlSpace="preserve"
                      >
                        <polygon
                          className="fill-current"
                          points="0,255 127.5,127.5 255,255"
                        />
                      </svg>
                      <button
                        className="text-start"
                        onClick={() => navigate("/user/rated")}
                      >
                        Rated and Liked Videos
                      </button>
                      <hr className="my-3 border border-gray-700/50" />
                      <button onClick={handleLogOut}>LogOut</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              className="hidden md:block font-semibold tracking-widest font-poppins text-xs py-1 px-4 border-2 border-[#99c0e5] text-white rounded-3xl"
              onClick={() => navigate("/login")}
            >
              SIGN IN
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
