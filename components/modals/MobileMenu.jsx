"use client";

import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileMenu() {
  const pathname = usePathname();

  const isMenuActive = (menu) => {
    if (!menu) return false;

    if (menu.href && pathname.split("/")[1] === menu.href.split("/")[1]) {
      return true;
    }

    if (menu.subItems) {
      return menu.subItems.some((subItem) => {
        if (subItem.href && pathname.split("/")[1] === subItem.href.split("/")[1]) {
          return true;
        }

        if (subItem.subItems) {
          return subItem.subItems.some(
            (child) =>
              child.href && pathname.split("/")[1] === child.href.split("/")[1]
          );
        }

        return false;
      });
    }

    return false;
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-start mobile-menu"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <ul className="list-group">
            {menuItems.map((item, index) => {
              const hasDropdown = item.subItems && item.subItems.length > 0;

              return (
                <li className="list-group-item" key={index}>
                  {hasDropdown ? (
                    <>
                      <a
                        href="#!"
                        className={`submenu-toggle collapsed ${
                          isMenuActive(item) ? "activeMenu" : ""
                        }`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#menu${index}`}
                      >
                        {item.title}
                      </a>

                      <ul id={`menu${index}`} className="list-group collapse">
                        {item.subItems.map((subItem, subIndex) => {
                          const hasSubDropdown =
                            subItem.subItems && subItem.subItems.length > 0;

                          return (
                            <li className="list-group-item" key={subIndex}>
                              {hasSubDropdown ? (
                                <>
                                  <a
                                    href="#!"
                                    className={`submenu-toggle collapsed ${
                                      isMenuActive(subItem) ? "activeMenu" : ""
                                    }`}
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#submenu${index}-${subIndex}`}
                                  >
                                    {subItem.title}
                                  </a>

                                  <ul
                                    id={`submenu${index}-${subIndex}`}
                                    className="list-group collapse"
                                  >
                                    {subItem.subItems.map(
                                      (subSubItem, subSubIndex) => (
                                        <li
                                          className="list-group-item"
                                          key={subSubIndex}
                                        >
                                          <Link
                                            className={`nav-link-mobile ${
                                              isMenuActive(subSubItem)
                                                ? "activeMenu"
                                                : ""
                                            }`}
                                            href={subSubItem.href || "/"}
                                          >
                                            {subSubItem.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </>
                              ) : (
                                <Link
                                  className={`nav-link-mobile ${
                                    isMenuActive(subItem) ? "activeMenu" : ""
                                  }`}
                                  href={subItem.href || "/"}
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className={`nav-link-mobile ${
                        isMenuActive(item) ? "activeMenu" : ""
                      }`}
                      href={item.href || "/"}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
