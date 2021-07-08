import React from "react";

import AppHeaderStyles from "./app-header.module.css";
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
                        <p className={`text text_type_main-default text_color_inactive ml-2`}>
                            Конструктор
                        </p>
                    </li>
                    <li
                        className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                    >
                        <ListIcon type="secondary" />
                        <p className={`text text_type_main-default text_color_inactive ml-2`}>
                            Лента заказов
                        </p>
                    </li>
                </ul>
                <span className="mr-30">
                    <Logo />
                </span>
                <div
                    className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                >
                    <ProfileIcon type="secondary" />
                    <p className={`text text_type_main-default text_color_inactive ml-2`}>
                        Личный кабинет
                    </p>
                </div>
            </nav>
        </div>
    );
}

export default AppHeader;
