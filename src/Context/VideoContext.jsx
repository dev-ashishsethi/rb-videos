import { createContext, useState, useContext } from "react";
import { useReducer } from "react";
import { categoryReducer } from "../Utils/categoryReducer";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videoData, setVideoData] = useState({
    title: "",
    thumbnail: "",
    duration: "",
    channelName: "",
    views: 0,
    date: "",
  });
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLater, setWatchLaterVideos] = useState([]);
  const [history, setHistoryVideos] = useState([]);
  const [categories, categoryDispatch] = useReducer(categoryReducer, {
    category: [],
  });
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [historyPage, setHistoryPage] = useState(false);
  const [playlistPage, setPlaylistPage] = useState(false);
  const [watchLaterPage, setWatchLaterPage] = useState(false);
  const [playlistObj, setPlayistObj] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <VideoContext.Provider
      value={{
        categories,
        categoryDispatch,
        videoData,
        setVideoData,
        videos,
        setVideos,
        likedVideos,
        setLikedVideos,
        watchLater,
        setWatchLaterVideos,
        history,
        setHistoryVideos,
        historyPage,
        setHistoryPage,
        watchLaterPage,
        setWatchLaterPage,
        playlists,
        setPlaylists,
        playlistObj,
        setPlayistObj,
        playlistPage,
        setPlaylistPage,
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
