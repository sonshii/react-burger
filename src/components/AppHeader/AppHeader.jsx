import React from "react";

import AppHeaderStyles from "./AppHeader.module.css";
import {
    Box,
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header>
            <div className={AppHeaderStyles.headerWrap}>
                <div className={AppHeaderStyles.headerContent}>
                    <nav className={AppHeaderStyles.navigation}>
                        <div
                            className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                        >
                            <BurgerIcon type="secondary" />
                            <a href="/" className={AppHeaderStyles.name}>
                                Конструктор
                            </a>
                        </div>
                        <div
                            className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                        >
                            <ListIcon type="secondary" />
                            <a href="/" className={AppHeaderStyles.name}>
                                Лента заказов
                            </a>
                        </div>
                    </nav>
                    <span className="mr-30"><Logo /></span>
                    <div
                        className={`${AppHeaderStyles.navigationLink} pt-4 pr-5 pb-4 pl-5`}
                    >
                        <ProfileIcon type="secondary" />
                        <a href="/" className={AppHeaderStyles.name}>
                            Личный кабинет
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
