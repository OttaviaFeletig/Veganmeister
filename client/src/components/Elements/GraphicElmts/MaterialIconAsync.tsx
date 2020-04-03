import React from 'react';
import { asyncComponent } from 'react-async-component'

interface PropsIcon {
    icon: string;
}

const MaterialIconAsync: React.FC<PropsIcon> = ({ icon }) => {
    let iconName = icon.replace(/Icon$/, '')
    return React.createElement(asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `@material-ui/icons/${iconName}`)
    }))
}
export default MaterialIconAsync