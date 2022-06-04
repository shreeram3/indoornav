
const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.style.display = "none";
}
list = [{
	"name":"Princple Office"
},{
	"name":"HOD Office"
}]
const searchlistlogic = ()=>{
	const exist = !!document.getElementById("searchlistexist");
	if (exist === false){
		searchlist()
	}else(console.log("already exist"))
}
const searchlist=()=>{
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const searchlist = document.getElementById("search_bar")
	const classname= "search_bar "+"fullpage"
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = objconverter(list);
	console.log(objconverter(list))
	searchlist.appendChild(newhave);
}


const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div>${item.name}</div>
		`
	}).join('');
	return flist;
}