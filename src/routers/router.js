import { lazy } from "react"

const routers = [
    {
        path:'/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path:'/OurShop',
        component: lazy(()=> import('@pages/OurShop/OurShop'))
    }
];

export default routers;