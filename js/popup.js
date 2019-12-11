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


    let iconNames = ["cut", "copy", "paste", "select-all", "delete", "undo", "redo","colorPlate"];
    
    for(let i = 0; i < iconNames.length; i++) {
		let icon = document.createElement("img");
		icon.src = "img/" + iconNames[i] + ".svg";
		icon.id = iconNames[i];
		icon.className = "icon";
        icon.title = iconNames[i].substring(0, 1).toUpperCase() + iconNames[i].substring(1);
        iconDiv.appendChild(icon);
    }
        
    chrome.browserAction.onClicked.addListener(function(tab) {
        alert("You clicked");
    });

    document.getElementById("cut").onclick = ()=> {
		notes.focus();
		document.execCommand("cut");
    }
    
	document.getElementById("copy").onclick = ()=> {
		notes.focus();
		document.execCommand("copy");
    }
    
	document.getElementById("paste").onclick = ()=> {		
		notes.focus();
		document.execCommand("paste");
    }
    
	document.getElementById("select-all").onclick = ()=> {
		notes.focus();
		notes.select();
    }
    
	document.getElementById("delete").onclick = ()=> {
		notes.focus();
		document.execCommand("delete");
		// notes.value = "";
    }
    
	document.getElementById("undo").onclick = ()=> {
		notes.focus();
		document.execCommand("undo");
    }
    
	document.getElementById("redo").onclick = ()=> {
		notes.focus();
		document.execCommand("redo");
	}
      
}
    

