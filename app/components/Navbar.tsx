import Image from "next/image";
import Link from "next/link";
import { navItems } from "../utils/dataItems";

const Navbar = () => {
  return (
    <div className="mt-2 navbar text-xs bg-white text-[#383838] border-x-blue-600 rounded shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-linear-to-r from-white via-white/90 to-white/80  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  {item.children!.length > 0 ? (
                    <details>
                      <summary>{item.title}</summary>
                      <ul className="p-2">
                        {item.children!.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              <Link href={subItem.href!}>{subItem.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.href!}>{item.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:text-[#ca6c6c] ">Shopify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                {item.children!.length > 0 ? (
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button">
                      {item.title}
                    </div>
                    <ul
                      tabIndex={-1}
                      className="p-2 dropdown-content menu bg-linear-to-r from-white via-white/90 to-white/80 text-[#383838] rounded-box z-1 w-52 shadow-sm "
                    >
                      {item.img ? (
                        <div className="flex justify-between items-center gap-2">
                          <div>
                            {item.children!.map((subItem) => {
                              return (
                                <li
                                  className="hover:text-[#ca6c6c] text-[15px]"
                                  key={subItem.id}
                                >
                                  <Link href={subItem.href!}>
                                    {subItem.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </div>
                          <Link href={item.children![0].href}>
                            <Image
                              src={item.img}
                              alt="img"
                              width={150}
                              height={150}
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      ) : (
                        <div className="">
                          <p className="">{item.title} Layout</p>
                          <hr className="my-2" />
                          <div className="grid grid-cols-4 gap-4 text-[10px]">
                            {item.children!.map((subItem) => {
                              return (
                                <p
                                  key={subItem.id}
                                  className="hover:text-[#ca6c6c]"
                                >
                                  <Link href={subItem.href!}>
                                    <span className="">{subItem.title}</span>
                                  </Link>
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                ) : (
                  <Link className="hover:text-[#ca6c6c]" href={item.href!}>
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end me-2">
        <div className="flex justify-center items-center gap-3">
          {/* <SearchComponent />
          <UserComponent />
          <FavouriteComponent />
          <CartComponent /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
