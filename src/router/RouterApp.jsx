import { LoginPage } from "../auth/Pages/LoginPage";
import { ErrorPage, MarvelPage, DcPage, HomePage, SearchPage, HeroPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { PrivateRuoter } from './PrivateRuoter'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { PublicRouter } from "./PublicRouter";

export const RouterApp = () => {

    const router = createBrowserRouter([
        {
            path: 'login',
            element: <PublicRouter>  <LoginPage /> </PublicRouter>,
            errorElement: <ErrorPage />,

        },
        {
            path: "/",
            element: <PrivateRuoter> <HeroesApp />  </PrivateRuoter>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: 'marvel',
                    element: <MarvelPage />,
                },
                {
                    path: 'dc',
                    element: <DcPage />
                },
                {
                    path: 'search',
                    element: <SearchPage />
                },
                {
                    path: 'hero/:id',
                    element: <HeroPage />
                },
            ]
        }

    ]);

    return (
        <RouterProvider router={router} />
    )
}
