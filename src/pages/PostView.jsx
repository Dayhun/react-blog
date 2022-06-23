import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import ViewBanner from "../components/banner/ViewBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import View from "../components/view/View";

export default function PostView() {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <ViewBanner />
            <View />
            <Footer />
        </div>
    );
}