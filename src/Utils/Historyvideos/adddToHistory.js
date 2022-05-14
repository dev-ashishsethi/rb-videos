export async function adddToHistory(customAxios,setHistoryVideos, singleVideo) {
    try {
        const res=await customAxios({method:"POST",url:"/api/user/history",data:{video:singleVideo}});
        
        setHistoryVideos(res.response.history);
    } catch (error) {
        console.error(error)
    }
}