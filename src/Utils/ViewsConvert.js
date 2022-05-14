export function viewsConvert(views){
    if (views>=1.0e+9) {
        return Math.round(Number(views)/1.0e+9) +" B"
    } else if(views>=1.0e+6) {
        return  Math.round(Number(views)/1.0e+6) +" M"
    }else if(views>=1.0e+3){
        return  Math.round(Number(views)/1.0e+3) +" K"
    }else{
        return Number(views)
    }
}