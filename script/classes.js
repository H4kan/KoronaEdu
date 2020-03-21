class lista{
	constructor()
	{
		this.number="1A";
		this.lin="uzyskaj link";
		this.students="uczniowie";
		this.notes="notatki";
		this.homework="prace domowe";
		this.start="rozpocznij lekcję";
	}
}
function addKlass(){
	let liEl=document.createElement("li");
	let spanEL = []
	let note = new lista();
	for(let i=0;i<6;i++)
	{
		spanEL[i]=document.createElement("span");
		switch(i){
			case 0: spanEL[i].textContent=note.number; break;
			case 1: spanEL[i].textContent=note.lin; break;
			case 2: spanEL[i].textContent=note.students; break;
			case 3: spanEL[i].textContent=note.notes; break;
			case 4: spanEL[i].textContent=note.homework; break;
			case 5: spanEL[i].textContent=note.start; break;
		}
		liEl.appendChild(spanEL[i]);
	}
	document.querySelector(".list ul").appendChild(liEl);
	}
function load() { 
     let el = document.querySelector("button.addClass"); 
     el.addEventListener("click", addKlass,false); 
	}