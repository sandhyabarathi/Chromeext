chrome.tabs.onActivated.addListener((tab)=>{
    console.log(tab)
    chrome.tabs.get(tab.tabId, (CurrentTabData)=>{
        console.log(CurrentTabData)
        var url = CurrentTabData.url
        document.body.getElementsByClassName("hello") = url

    })
}
)
