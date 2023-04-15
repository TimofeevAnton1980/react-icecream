import { RootState } from "../store";

type BlogProps = {
  state: RootState;
  blogId: string | undefined;
};

export const selectBlogState = (state: RootState) => state.blog;
export const selectBlogIds = (state: RootState) =>
    selectBlogState(state).ids;

export const selectBlogById = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || ""];
export const selectBlogName = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || '']?.title;
export const selectBlogImg = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || '']?.img;
export const selectBlogText = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || '']?.text;
export const selectBlogDate = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || '']?.date;
export const selectBlogPage = ({ state, blogId }: BlogProps) =>
    selectBlogState(state).entities[blogId || '']?.page;

export const selectBlogsByIds = (state: RootState, ids: (string | undefined)[]) => {
  const blogById = selectBlogState(state).entities;

  return ids.map((id) => blogById[id || ""]);
};

export const selectIsBlogLoading = (state: RootState) =>
    selectBlogState(state).status === "loading";
export const selectIsBlogFailed = (state: RootState) =>
    selectBlogState(state).status === "failed";
