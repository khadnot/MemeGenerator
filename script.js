const memeContainer = document.getElementById("memeLand");
const create = document.getElementById("submit");
const input = document.getElementById("input");

create.addEventListener("click", function() {
    console.log("You clicked submit!");
    let text1 = document.getElementById("text1").value;
    let text2 = document.getElementById("text2").value;
    let url = document.getElementById("url").value;

	const newMemeDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const topTextDiv = document.createElement("div");
    const bottomTextDiv = document.createElement("div");
    const topText = document.createElement("h2");
    const bottomText = document.createElement("h2");
    const deleteMemeDiv = document.createElement("div");
    const deleteMeme = document.createElement("img");
	newMemeDiv.classList.add("newMeme");
    newImg.classList.add("img");
    topTextDiv.classList.add("text1");
    bottomTextDiv.classList.add("text2");
    deleteMeme.classList.add("deleteMeme");
    deleteMemeDiv.classList.add("testMeme");
    newImg.src = url;
    deleteMeme.src = "trash-can.png";
    topText.innerHTML = text1;
    bottomText.innerHTML = text2;

    newMemeDiv.addEventListener("click", function() {
        newMemeDiv.remove();
    });
	/*newMemeDiv.addEventListener("mouseover", function() {
		deleteMeme.style.visibility = "visible";
	});
	newMemeDiv.addEventListener("mouseout", function() {
		deleteMeme.style.visibility = "hidden";
	})*/

    memeContainer.append(newMemeDiv);
    newMemeDiv.append(newImg);
	newMemeDiv.append(deleteMemeDiv);
    deleteMemeDiv.append(deleteMeme);
    newMemeDiv.append(topTextDiv);
    topTextDiv.appendChild(topText);
    newMemeDiv.append(bottomTextDiv);
    bottomTextDiv.appendChild(bottomText);
    input.reset();
    console.log(text1);
    console.log(text2);
});