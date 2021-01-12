let processing = false
const analyser = () => {
    if (!processing){
        processing =  true
        showProgress()
    }
}

const showProgress = () => {
    document.getElementById("analyze-result").style.display="none"
    document.getElementById("analyze-icon").style.display="block"
    setTimeout(showResult,2000)
}

const showResult = () => {
    processing = false
    document.getElementById("analyze-icon").style.display="none"
    document.getElementById("analyze-result").style.display="block"
}
