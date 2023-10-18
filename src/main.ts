console.log("Built by The Nafi");

const chunksize = () => Number(document.querySelector<HTMLInputElement>("#chunksize")?.value ?? 300);

const inputText = document.querySelector<HTMLTextAreaElement>("#InputText");

const chunkTheText = function (inputText: string, chunksize: number) {
    const finalArray = [];
    const splittedArray = inputText.split(" ");

    for (let i = 0; i < splittedArray.length; i++) {
        const singleWord = splittedArray[i];
        if (singleWord.length > chunksize) {
            window.alert("There is a word bigger than chunk Size")
            return null
        }

        // to add the first chunk 
        if (finalArray.length === 0) {
            finalArray.push(singleWord);
        }
        //
        else if (finalArray.length !== 0 && finalArray[finalArray.length - 1].length < chunksize - 10) {
            finalArray[finalArray.length - 1] += ` ${singleWord}`;
            finalArray[finalArray.length - 1].trim()
        } else {
            finalArray.push(singleWord);
        }
    }
    finalArray.forEach(element => {
        console.log(element.length)
    });
    return finalArray;
};

const outputChunks = function (chunkArray: string[]) {

    let outputArea = document.getElementById('mainOutputArea')
    if (outputArea) outputArea.innerHTML = ""

    for (let i = 0; i < chunkArray.length; i++) {
        const singleChunk = chunkArray[i];
        const childDiv = document.createElement("p")

        childDiv.innerHTML = singleChunk
        outputArea?.appendChild(childDiv)

    }



}

const copyTheText = () => {
    document.querySelectorAll('p').forEach((element) => {
        element.addEventListener("click", () => {
            navigator.clipboard.writeText(element.innerText)
        })
    })
}

copyTheText()


inputText?.addEventListener("input", () => {
    const result = chunkTheText(inputText?.value ?? "", chunksize())
    outputChunks(result || ["Error"])
    copyTheText()


});



navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
        console.log("Write access granted!");
    }
});


