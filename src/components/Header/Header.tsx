import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header: FC = () => {
    return (
        <header>
            <Link className="logo" to="/">
                Image Gallery
            </Link>
        </header>
    );
};
