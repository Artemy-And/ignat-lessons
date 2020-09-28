import React from "react";
import ToggleIsFetching from "../components/common/ToggleIsFetching";


export const withSuspence = (Component: any) => {

    return (props: any) => {

    return <React.Suspense fallback={<ToggleIsFetching/>}>
        <div>
            <Component {...props}/>
        </div>
    </React.Suspense>
}
}