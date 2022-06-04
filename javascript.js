
list = [{
	"name":"Princple Office"
},{
	"name":"HOD Office"
}]

const searchinput = document.getElementById("searchinput")
searchinput.addEventListener('keyup',(e)=>{
	const searchString = e.target.value.toLowerCase()
	const filteredlist = list.filter((item)=>{
		return(
			item.name.toLowerCase().includes(searchString)
			);
	});
	objconverter(filteredlist);
});

const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.style.display = "none";
}
	
const searchlist=()=>{
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const classname= "search_bar "+"fullpage"
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	objconverter(list)
}


const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div>${item.name}</div>
		`
	}).join('');

	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
		document.getElementById("searchlistexist").innerHTML = flist;
	}else {
	const searchlist = document.getElementById("search_bar");
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = flist;
	searchlist.appendChild(newhave);}
}