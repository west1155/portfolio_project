import React from 'react';
import {BlogDesktop} from "./BlogDesktop";
import {BlogMobile} from "./BlogMobile";



/*blogs = [
    {
        title: string;
        date: Date;
        location: string
        blog: string

    },{},{},{}
]*/
const Blog = () => {
    return (
        <>
            <BlogDesktop />
            <BlogMobile />


        </>
    );
};

