import React, {FC, ReactNode} from 'react';
import classes from "./LayoutMain.module.scss"
import {Header} from "@/widgets/layouts/LayoutMain/Header";
import {Main} from "@/widgets/layouts/LayoutMain/Main";
import {Footer} from "@/widgets/layouts/LayoutMain/Footer";

interface LayoutMainProps {
    children: ReactNode
}

export const LayoutMain:FC<LayoutMainProps> = ({children}) => {
    return (
        <div className={classes.Wrapper}>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    );
};
