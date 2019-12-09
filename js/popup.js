window.onload = () => {
    var notes = document.getElementById("Notes");
    chrome.storage.sync.get(['color'],(obj)=>{
        document.body.style.backgroundColor = obj.color;
        document.getElementById("Notes").style.backgroundColor = obj.color;
    })
    chrome.storage.sync.get(['notes'],(details)=>{
        notes.value = details.notes;
    })
    notes.onchange = ()=>{
        chrome.storage.sync.set({'notes': notes.value},(notess)=>{
            chrome.storage.sync.get(['notes'],(store)=>{
                console.log(store.notes);
            })
        })
    }

    var buttons = document.getElementsByClassName("colors");
    // for changing background color
    for(var x=0; x<buttons.length; x++){
        document.getElementById(buttons[x].id).addEventListener("click", (e)=>{
                chrome.storage.sync.set({'color': e.target.value},(obj)=>{
                    chrome.storage.sync.get(['color'],(store)=>{
                        document.body.style.backgroundColor = store.color;
                        document.getElementById("Notes").style.backgroundColor = store.color;
                    })
                })
            }); 
    }

    
}