import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task 1",
              taskDescription: "description",
              taskOwner: "John",
            },
            {
              taskId: "task-1",
              taskName: "task 2",
              taskDescription: "description",
              taskOwner: "Young",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task 1",
              taskDescription: "description",
              taskOwner: "John",
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
