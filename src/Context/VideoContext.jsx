import { createContext,useState,useContext } from "react";
import { useReducer } from "react";
import { categoryReducer } from "../Utils/categoryReducer";


const VideoContext=createContext();


export function VideoProvider({children}) {
    const [videoData,setVideoData]=useState({
        title:"",
        thumbnail:"",
        duration:"",
        channelName:"",
        views:0,
        date:""
    });
    const [categories,categoryDispatch]=useReducer(categoryReducer,{category:[]});
    const [videos,setVideos]=useState([]);
    return (
      <VideoContext.Provider
        value={{
          categories,
          categoryDispatch,
          videoData,
          setVideoData,
          videos,
          setVideos,
        }}
      >
        {children}
      </VideoContext.Provider>
    );
}

const useVideo=()=>useContext(VideoContext)

export {useVideo}