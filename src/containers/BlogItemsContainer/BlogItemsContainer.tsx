import React from 'react';
import { useAppSelector } from '../../hooks/hook_ts';
import { RootState } from '../../store/store';
import {
    selectBlogById,
    selectBlogDate,
    selectBlogImg,
    selectBlogName, selectBlogPage,
    selectBlogText,
} from '../../store/blog/selectors';
import { BlogItem } from '../../components/BlogItem/BlogItem';

interface BlogItemsInterface {
    blogId: string;
    style: {};
}

export const BlogItemsContainer = ({
                                       blogId,
                                       style,
                                   }: BlogItemsInterface) => {

    // const blog = useAppSelector((state: RootState) =>
    //     selectBlogById({ state, blogId }),
    // );
    const blogName = useAppSelector((state: RootState) => selectBlogName({ state, blogId }));
    const blogImg = useAppSelector((state: RootState) => selectBlogImg({ state, blogId }));
    const blogText = useAppSelector((state: RootState) => selectBlogText({ state, blogId }));
    const blogDate = useAppSelector((state: RootState) => selectBlogDate({ state, blogId }));
    const blogPage = useAppSelector((state: RootState) => selectBlogPage({ state, blogId }));

    return(
        <>
            <BlogItem
                style={style}
                blogName={blogName}
                blogImg={blogImg}
                blogText={blogText}
                blogDate={blogDate}
                blogPage={blogPage}
            />
        </>
    )
}