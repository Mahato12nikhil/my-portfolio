import { GetProjects } from "@/services/backend";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IProject {
  name: string;
  description: string;
  link: string;
  tools: string[];
}

const initialState: IProject[] = [];

export const fetchProject = createAsyncThunk<IProject[]>("/project/fetch", async () => {
  const { data } = await GetProjects();

  if (data && data.success && Array.isArray(data.data)) {
    return data.data; 
  }

  throw new Error("Failed to fetch project details");
});

const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProject.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default ProjectSlice;
