"use client";

import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();

  const isMenuActive = (menu) => {
    if (!menu) return false;

    if (menu.href && pathname === menu.href) {
      return true;
    }

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
              child.href &&
              pathname.split("/")[1] === child.href.split("/")[1]
          );
        }

        return false;
      });
    }

    return false;
  };

return (
  <>
    {menuItems.map((item, index) => {
      const hasDropdown = item.subItems && item.subItems.length > 0;

      return (
        <li
          key={index}
          className={`${hasDropdown ? "has-children" : ""} ${
            isMenuActive(item) ? "current" : ""
          }`}
        >
          {hasDropdown ? (
            <a
              href="#"
              className={isMenuActive(item) ? "parent-active activeMenu" : ""}
            >
              {item.title}
            </a>
          ) : (
            <Link
              href={item.href || "/"}
              className={isMenuActive(item) ? "parent-active activeMenu" : ""}
            >
              {item.title}
            </Link>
          )}

          {hasDropdown && (
            <ul className={item.hasMega ? "mega-menu" : ""}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.subItems ? "has-item-children" : ""}
                >
                  {subItem.title && !subItem.href && (
                    <span
                      className={`title ${
                        isMenuActive(subItem) ? "activeMenu" : ""
                      }`}
                    >
                      {subItem.title}
                    </span>
                  )}

                  {subItem.href ? (
                    <Link
                      href={subItem.href || "/"}
                      className={isMenuActive(subItem) ? "activeMenu" : ""}
                    >
                      {subItem.title}
                    </Link>
                  ) : (
                    subItem.subItems && (
                      <ul>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              href={subSubItem.href || "/"}
                              className={
                                isMenuActive(subSubItem) ? "activeMenu" : ""
                              }
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    })}
  </>
);
}