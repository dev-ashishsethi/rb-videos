export function categoryReducer(state, action) {
  switch (action.type) {
    case "category":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? [...state.category].filter(
              (category) => category !== action.payload
            )
          : [...state.category, action.payload],
      };

    case "category_ALL":
      return { ...state, category: [] };
    default:
      break;
  }
}
