import React from 'react';
import {Metadata} from "next";

export  const metadata: Metadata = {
    title: 'Users layout'
};

const Layout = ({children} : React.ReactNode) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;