"use client";
import styles from './Sidebar.module.css';
import SidebarButton from "@/app/yeongjin/SidebarButton";

const Sidebar: React.FC = () => {

    const buttons = [
        {
            text: "홈",
            onClick: () => console.log("click")
        },
        {
            text: "둘러보기",
            onClick: () => console.log("click")
        },
        {
            text: "보관함",
            onClick: () => console.log("click")
        }
    ]

    return (
        <aside className={styles.sidebar}>
            <ul>
                {buttons.map((button, index) => (
                    <li key={index}>
                        <SidebarButton text={button.text} onClick={button.onClick}/>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;