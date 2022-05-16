export const search = (videosList, searchQuery) =>
  searchQuery !== ""
    ? videosList.filter((video) =>
        video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : videosList;
