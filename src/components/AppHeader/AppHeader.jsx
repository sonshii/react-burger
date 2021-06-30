import React from "react";

import AppHeaderStyles from "./AppHeader.module.css";
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <div className={AppHeaderStyles.headerWrap}>
            <nav className={AppHeaderStyles.headerContent}>
                <ul className={AppHeaderStyles.navigation}>
                    <li
                        className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                    >
                        <BurgerIcon type="secondary" />
                        <a href="/" className={AppHeaderStyles.name}>
                            Конструктор
                        </a>
                    </li>
                    <li
                        className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                    >
                        <ListIcon type="secondary" />
                        <a href="/" className={AppHeaderStyles.name}>
                            Лента заказов
                        </a>
                    </li>
                </ul>
                <span className="mr-30">
                    <Logo />
                </span>
                <div
                    className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                >
                    <ProfileIcon type="secondary" />
                    <a href="/" className={AppHeaderStyles.name}>
                        Личный кабинет
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default AppHeader;
