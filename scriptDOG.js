const button = document.querySelector(".wrapper__button");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random"

let click= true;
const getImg = async () => {
	try {
		const res = await fetch(`${url}`);
		const data = await res.json();
		image.src = data.message;
		console.log(data);
		click=!click;
		button.style.backgroundColor='rgb(7, 49, 188)';
		button.disabled = false;
	} catch (err) {
		console.log(err);
	}
}

button.addEventListener("click",()=>{
	if(click){
		click=!click;
		button.style.backgroundColor='gray';
		button.disabled = true;
		getImg();
	}
});