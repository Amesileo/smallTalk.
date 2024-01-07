let warning = document.getElementById("warning");
const warningOG = warning.innerText;
let textArea = document.getElementById("composeTalk");
let i = 0;
let typing = false;
    
function remainingChars() {

    let charCount = textArea.value.length;
    document.getElementById("charCount").innerText=(99 - charCount);
        
    if (charCount > 99) {
        document.getElementById("charCount").style.color="red";
        document.getElementById("charCount").innerText="-" + (charCount - 99);
        warning.style.display="block";
        warning.style.backgroundColor="";
        warning.style.color="";
        warning.textContent=warningOG;
        if (charCount >= 118) {
            textArea.value = textArea.value.substr(0, 118);
            warning.style.backgroundColor="#ff3f3f";
            warning.style.color="whitesmoke";
            warning.textContent="Let me stop you there. You're really missing the point of this 🙄"
        }

    } else {
        document.getElementById("charCount").style.color="cornflowerblue";
        warning.style.display="";
    }
}

function spinIcon(id) {
    if (id === "img" || "gif" || "video" || "location") {
        document.getElementById(id).classList.add("fa-flip");
    }
}

function stopIcon(id) {
    if (id === "img" || "gif" || "location") {
        document.getElementById(id).classList.remove("fa-flip");
    }
}

function composing() {
    if (textArea.value.length > 0) {
        
        typing = true;
        if (textArea.value.length < 99) {
            document.getElementById("post").style.backgroundColor="cornflowerblue";
        } else {
            document.getElementById("post").style.backgroundColor="rgb(164, 164, 164)";
        }

        for (let i = 0; i < document.getElementById("compositionDots").children.length; i++){
            
            setTimeout(function() { 
                //document.getElementById("compositionDots").style.display="flex";
                document.getElementById("compositionDots").style.transition="all 1s ease";
                document.getElementById("compositionDots").style.opacity=1;
                document.getElementById("compositionDots").children[i].classList.add("composingAnim");
                if (typing === false) {
                    removeDots();
                    return;
                }
            }, 200 * i);
        }
        
    } else {
        removeDots();        
    }
}

function removeDots() {

    document.getElementById("post").style.backgroundColor="rgb(164, 164, 164)";
    document.getElementById("compositionDots").style.transition="all 0s ease";
    typing = false;
    let i = 0;
    for (let i = 0; i < document.getElementById("compositionDots").children.length; i++){
        document.getElementById("compositionDots").children[i].classList.remove("composingAnim");
        document.getElementById("compositionDots").style.opacity=0;
        //document.getElementById("compositionDots").style.display="none";
    }
}