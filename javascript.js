
	const droparrowimg = document.querySelector("#droparrowimg")
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const searchlist = document.getElementById("search_bar");
	const img = "src/PANO_20220424_122029.jpg"
const searchinput = document.getElementById("searchinput")
searchinput.addEventListener('keyup',(e)=>{
	const searchString = e.target.value.toLowerCase()
	const filteredlist = list.filter((item)=>{
		return(
			item.name.toLowerCase().includes(searchString)
			||item.room.toLowerCase().includes(searchString)

			);
	});
	objconverter(filteredlist);
});

const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.setAttribute("style","opacity :0; visiblity:hidden");
	setTimeout(()=>{homepage.style.display = "none"; },200)
	panorama(img)
}

const searchback=()=>{
	
	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
	const classname= "search_bar";
	searchbar.className = classname;
	droparrowimg.setAttribute("class","")
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
	document.getElementById("searchlistexist").remove();

	}else{
		searchlistrooms()
	}
}
// making list of rooms 
const searchlistrooms=()=>{

	const classname= "search_bar "+"fullpage"
	droparrowimg.setAttribute("class","droparrowimg")
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	objconverter(list)
}


const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div onclick = "moveforward(${item.id})">
		<div id = "${item.id}">${item.room}</div>
		<div class = "teachname">${item.name}</div>
		</div>
		`
	}).join('');

	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
		document.getElementById("searchlistexist").innerHTML = flist;
	}else {
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = flist;
	searchlist.appendChild(newhave);}
}
const moveforward = (id) =>{
	const ida=id.getAttribute("id");
	const url = urllist[ida];
	console.log(url)
	panorama(url);
	searchlist.style.display="none";
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
}

const panorama=(url)=>{
	exisit_file = !!document.getElementsByClassName("psv-canvas-container")
	if (exisit_file == true){
		document.getElementById("panorama").innerHTML=""
	}
new PhotoSphereViewer.Viewer({
  navbar:[
  {"visible":false}
  ],
  panorama: url,
  container: 'panorama',
  caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
  loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
  defaultLat: 0.3,
  touchmoveTwoFingers: false,
  mousewheelCtrlKey: true,
});

document.querySelector(".psv-navbar").style.display="none";
}

const back=()=>{
	panorama(img);
	searchbar.style.display="";
	searchbar.className = "search_bar";
	document.getElementById("searchlistexist").innerHTML = "";
	droparrowimg.setAttribute("class","");
}

urllist = {
	"a1":"src/PANO_20220424_122029.jpg",
	"a2":"src/PANO_20220424_122029.jpg",
	"a3":"src/PANO_20220424_122029.jpg",
}
