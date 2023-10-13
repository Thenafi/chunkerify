console.log("Built by The Nafi");

const chunksize = Number(document.querySelector<HTMLInputElement>("#chunksize")?.value ?? 300);

const inputText = document.querySelector<HTMLTextAreaElement>("#InputText");

const chunkTheText = function (inputText: string, chunksize: number) {
    const finalArray = [];
    const splittedArray = inputText.split(" ");

    for (let i = 0; i < splittedArray.length; i++) {
        const singleWord = splittedArray[i];

        if (finalArray.length === 0) {
            finalArray.push(singleWord);
        } else if (finalArray.length !== 0 && finalArray[finalArray.length - 1].length < chunksize) {
            finalArray[finalArray.length - 1] += ` ${singleWord}`;
        } else {
            finalArray.push(singleWord);
        }
    }

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


inputText?.addEventListener("input", () => {
    const result = chunkTheText(inputText?.value ?? "", chunksize)
    console.log(result);
    outputChunks(result)
});


