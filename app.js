let warning = document.getElementById("warning");
const warningOG = warning.innerText;
const textArea = document.getElementById("composeTalk");
const charCounter = document.getElementById("charCount");
const postBtn = document.getElementById("post");
let i = 0;
let typing = false;
let public = true;
    
function remainingChars() {

    let charCount = textArea.value.length;
    charCounter.innerText=(99 - charCount);
        
    if (charCount > 99) {
        charCounter.style.color="red";
        charCounter.innerText="-" + (charCount - 99);
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
        charCounter.style.color="cornflowerblue";
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
        if (textArea.value.length < 100) {
            postBtn.style.backgroundColor="cornflowerblue";
        } else {
            postBtn.style.backgroundColor="rgb(164, 164, 164)";
        }

        for (let i = 0; i < document.getElementById("compositionDots").children.length; i++){
            
            setTimeout(function() { 
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

    postBtn.style.backgroundColor="rgb(164, 164, 164)";
    document.getElementById("compositionDots").style.transition="all 0s ease";
    typing = false;
    let i = 0;
    for (let i = 0; i < document.getElementById("compositionDots").children.length; i++){
        document.getElementById("compositionDots").children[i].classList.remove("composingAnim");
        document.getElementById("compositionDots").style.opacity=0;
    }
}

function postTalk() {
    
    const blogPost = document.createElement("div");
    const blogPostContent = document.createTextNode(textArea.value);
    blogPost.appendChild(blogPostContent);
    const feed = document.getElementById("feed");
    feed.parentNode.insertBefore(blogPost, feed);
    textArea.value="";
    composing();
    remainingChars();
}

function setPrivacy(id) {

    public = !public;

    if (public === true) {
        document.getElementById(id).parentElement.style.backgroundColor="cornflowerblue"
        document.getElementById(id).lastChild.innerText=" public"
    } else {
        document.getElementById(id).parentElement.style.backgroundColor="rgb(83, 200, 163)"
        document.getElementById(id).lastChild.innerText=" friends"
    }
}