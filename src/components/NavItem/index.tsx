import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import type * as Type from "@/types";
import * as Styled from "./navItem.styles";

export const NavItem: React.FC<Type.INavItemProps> = ({
  label,
  to,
  subMenu,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("no-submenu");
  const [width, setWidth] = useState(0);
  const [isSubActive, setIsSubActive] = useState("no-submenu");
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSubActive("no-submenu");
        setIsActive("no-submenu");
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleNavClick = () => {
    if (subMenu) {
      setIsActive((prev) => {
        setIsSubActive("no-submenu");
        return prev === label ? "no-submenu" : label;
      });
    } else {
      setIsActive("no-submenu");
      setIsSubActive("no-submenu");
      router.push(to);
    }
  };

  return (
    <Styled.NavItemWrapper ref={wrapperRef}>
      <Styled.NavLabel onClick={handleNavClick}>
        <span>{label}</span>
        {subMenu && <BsChevronDown size={11} />}
      </Styled.NavLabel>
      <Styled.SubMenuWrapper active={isActive === label ? "true" : undefined}>
        {subMenu?.map((item, key) => (
          <Styled.SubMenuItemWrapper
            key={key}
            onMouseEnter={() =>
              width > 1024
                ? item.subMenu
                  ? setIsSubActive(item.label)
                  : null
                : null
            }
            onMouseLeave={() => setIsSubActive("no-submenu")}
            onClick={() =>
              item.subMenu
                ? width > 1024
                  ? {}
                  : setIsSubActive((prev) =>
                      prev === item.label ? "no-submenu" : item.label
                    )
                : router.push(item.to)
            }
          >
            <span>{item.label}</span>
            {item.subMenu ? <BsChevronRight size={11} /> : null}
            <Styled.SubMenuWrapper
              active={isSubActive === item.label ? "true" : undefined}
              className="sub-menu"
            >
              {item?.subMenu?.map((item1: any, key1: number) => (
                <Styled.SubMenuItemWrapper
                  key={key1}
                  onClick={() => (item1.subMenu ? {} : router.push(item1.to))}
                >
                  {item1.label}
                </Styled.SubMenuItemWrapper>
              ))}
            </Styled.SubMenuWrapper>
          </Styled.SubMenuItemWrapper>
        ))}
      </Styled.SubMenuWrapper>
    </Styled.NavItemWrapper>
  );
};
