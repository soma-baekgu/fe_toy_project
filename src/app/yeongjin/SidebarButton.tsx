"use client";
import React from "react";
import styles from "./SidebarButton.module.css";

type ButtonProps = {
    text: string;
    onClick: () => void;
};

const SidebarButton: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={styles.sidebarButton}>
            <div className={styles.logo}>
                {"로고"}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </button>
    );
};

export default SidebarButton;