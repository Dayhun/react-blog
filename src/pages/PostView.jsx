import React from "react";
import ViewBanner from "../components/banner/ViewBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import View from "../components/view/View";

export default function PostView() {
    return (
        <>
            <Header />
            <ViewBanner />
            <View />
            <Footer />
        </>
    )
}