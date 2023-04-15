import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { normalizedBlogs } from '../../components/constants/normalized-fixtures';

export type BlogState = {
  entities: Record<string, Blog>;
  ids: string[];
  status: string;
};

export interface Blog {
  id: string;
  title: string;
  text: string;
  rating: number;
  img: string;
  date: string;
  page: string
}

// const initialState: BlogState = {
//   entities: {},
//   ids: [],
//   status: "notStarted",
// };
type Acc = Record<string, Blog>;

const initialState: BlogState = {
  entities: normalizedBlogs.reduce((acc: Acc, blog) => {
    acc[blog.id] = blog;
    return acc;
  }, {}),
  ids: normalizedBlogs.map(({ id }) => id),
  status: 'notStarted',
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    startLoading: (state: BlogState, action: PayloadAction<null>) => {
      state.status = "loading";
    },
    failLoading: (state: BlogState, action: PayloadAction<{}>) => {
      state.status = "failed";
    },
    successLoading: (state: BlogState, action: PayloadAction<Blog[]>) => {
      state.entities = (action.payload || []).reduce(
        (acc: Acc, review) => {
          acc[review.id] = review;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(action.payload || []).map(({ id }) => id)];

      state.status = "success";
    },
    addBlog: (state: BlogState, action: PayloadAction<Blog>) => {
      const s: Acc = {};
      const blogNew = action.payload;
      s[blogNew.id] = blogNew;
          console.log(s);
      // if (!reviewNew) {
      //   return state;
      // }
      state.entities = { ...state.entities, ...s};
      state.ids = [...state.ids, action.payload.id];
      state.status = "success";
      return state;
    },
  },
});

export default blogSlice;
