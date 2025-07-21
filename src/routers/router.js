import { lazy } from "react"

const routers = [
    {
        path:'/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path:'/OurShop',
        component: lazy(()=> import('@pages/OurShop/OurShop'))
    },
    {
        path:'/Cart',
        component: lazy(()=> import('@pages/Cart/Cart'))
    }
];

export default routers;