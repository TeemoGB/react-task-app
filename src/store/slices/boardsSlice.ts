import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TAddBoardAction = {
  board: IBoard;
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
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },
  },
});

export const {addBoard} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
