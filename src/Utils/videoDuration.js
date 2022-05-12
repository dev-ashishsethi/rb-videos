export function videoDuration(duration){
    const minute=duration.split("PT")[1].split('M')[0]
    const seconds=duration.split("PT")[1].split('M')[1].split('S')[0]

    return minute+":"+seconds
}