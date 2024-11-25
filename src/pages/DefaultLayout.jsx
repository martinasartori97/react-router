import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";

export default function DefaultLayout() {
    return (
        <>
            <MainMenu />

            <header />

            <main>
                <Outlet />
            </main>

            <footer />

        </>
    )
}