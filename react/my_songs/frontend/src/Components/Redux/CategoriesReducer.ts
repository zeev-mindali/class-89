import { Category } from "../modal/Category";

//reducer state
export class CategoriesState {
  public categories: Category[] = [];
}

//action types
export enum CategoriesActionType {
  addCategory = "addCategory",
  updateCategory = "updateCategory",
  deleteCategory = "deleteCategory",
  downloadCategory = "downloadCategory",
}

//action data structure
export interface CategoryAction {
  type: CategoriesActionType;
  payload?: any;
}

//functions
export const addCategoryAction = (newCategory: Category): CategoryAction => {
  return { type: CategoriesActionType.addCategory, payload: newCategory };
};

export const updateCategoryAction = (
  updatedCategory: Category
): CategoryAction => {
  return {
    type: CategoriesActionType.updateCategory,
    payload: updatedCategory,
  };
};

export const deleteCategoryAction = (id: number): CategoryAction => {
  return { type: CategoriesActionType.deleteCategory, payload: id };
};

export const downloadCategoryAction = (
  categories: Category[]
): CategoryAction => {
  return { type: CategoriesActionType.downloadCategory, payload: categories };
};

//THE REDUCER
export const CategoriesReducer = (
  currentState: CategoriesState = new CategoriesState(),
  action: CategoryAction
): CategoriesState => {
  const newState = { ...currentState };
  switch (action.type) {
    case CategoriesActionType.addCategory:
      newState.categories = [...newState.categories, action.payload];
      break;
    case CategoriesActionType.deleteCategory:
      break;
    case CategoriesActionType.downloadCategory:
      newState.categories = action.payload;
      break;
    case CategoriesActionType.updateCategory:
      newState.categories = [...newState.categories].filter(
        (item) => item.id !== action.payload
      );
      newState.categories = [...newState.categories, action.payload];
      break;
  }
  return newState;
};
