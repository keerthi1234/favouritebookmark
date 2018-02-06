document.getElementById('js').addEventListener('submit',savebookmark);

function savebookmark(e){
	var sn=document.getElementById('js1').value;
	var su=document.getElementById('js2').value;
	
	if(!validateform(sn,su)){
		return false;
	}

	var bookmark={
			name:sn,
	        Url:su
	}
	
	
	if(localStorage.getItem('bookmarks')===null){
		var bookmarks=[];
		bookmarks.push(bookmark);
	    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))	;
	
	}
	else{
		var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks))	;
	
	}
	document.getElementById('js').reset();
getBookmarks();	

e.preventDefault();
}
function getBookmarks(){
	
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	
	var bookmarkResults=document.getElementById('br');
	bookmarkResults.innerHTML='';
	
for(var i=0;i<bookmarks.length;i++){
	var ks=bookmarks[i].name;
	var sk=bookmarks[i].Url;
	bookmarkResults.innerHTML +='<div class="well">'+
	                            
	                               '<h3> '+ks+
	                             
	                            
	                             ' <a href="'+sk+'" class="btn btn-primary">visit</a> ' +
	                            
	                             '<a href="#" onclick="deleteBookmarks(\''+sk+'\')" class="btn btn-danger">Delete</a>'+
	                             '</h3>'+
	                             '</div>';
}
}

function deleteBookmarks(bks){
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	for(var i=0;i<bookmarks.length;i++){
	if(bookmarks[i].Url==bks){
		bookmarks.splice(i,1);
	}
	}
	getBookmarks();
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks))	;

}

function validateform(sn,su){
	if (sn=="" || su==""){
		alert("please fill in the field");
		return false;
	}	
return true;
}
