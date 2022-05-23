import { createContext, useState, useContext } from "react";
import { useReducer } from "react";
import { categoryReducer } from "../Utils/categoryReducer";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [categories, categoryDispatch] = useReducer(categoryReducer, {
    category: [],
  });
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <VideoContext.Provider
      value={{
        categories,
        categoryDispatch,
        videos,
        setVideos,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

const useVideo = () => useContext(VideoContext);

export { useVideo };
