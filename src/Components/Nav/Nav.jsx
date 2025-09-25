import React from "react";

const Nav = () => {
  return (
    <div>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
                </li>
                <li>
                <a>FAQ</a>
                </li>
                <li>
                <a>Changelog</a>
                </li>
                <li>
                <a>Blog</a>
                </li>
                <li>
                <a>Download</a>
                </li>
                <li>
                <a>Contact</a>
                </li>
            </ul>
          </div>
          <a class="btn btn-ghost md:text-xl text-lg">CS — Ticket System</a>
        </div>
        <div class="navbar-end">
            <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                <a>Home</a>
                </li>
                <li>
                <a>FAQ</a>
                </li>
                <li>
                <a>Changelog</a>
                </li>
                <li>
                <a>Blog</a>
                </li>
                <li>
                <a>Download</a>
                </li>
                <li>
                <a>Contact</a>
                </li>
            </ul>
            </div>
          <a class="btn btn-primary">+ New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
