//---------------------- Medium Plugin ------------------

new Medium({
                element: document.getElementById('title'),
			    mode: Medium.inlineMode,
			    maxLength: 25,
			    placeholder: 'Your Title'
            });

new Medium({
    element: document.getElementById('text'),
    mode: Medium.partialMode,
    placeholder: 'Your Text'
});

//-------------------End of Medium Plugin ----------------




//-------------------TEMPLATES and page nav-----------------------------
//Functions

//Delete
var confirmDelete = function(){

	var listItem = $(this).parent().parent();

	if(listItem.hasClass('confirmDelete')){
		alert("has confirmDelete");
		var index = listItem.index();
		listItem.remove();
		$(".page-nav li:eq("+index+")").remove();
	}
	else{
		listItem.addClass('confirmDelete');
	}
};
$(".page .delete").on('click', confirmDelete);


//Adds
$(".addPageForm .add").on('click', function(){
	//Get Text from textfield
	var text = $(".addPageForm input").val();
	
	//Add to Template
	if (text != ''){
		var pageItem = $('<li> <span>' + text  + '</span>' 
			+'<div class="buttonWrapper"><button class="edit"></button>' 
			+'<button class="delete"></button></div></li>');
		
		$(".addPageForm").before(pageItem);

		//Add to page nav
		var pageNavItem = $('<li>'+ text +'</li>');
		$('.page-nav ul').append(pageNavItem);

		//Add Handlers
		$(".page .delete").on('click', confirmDelete);//Bad programming right here >.>
		$(".page-nav li").on('click', currentFunc);
		$(".page .edit").on('click', editFunc); 

		//Reset input
		$(".addPageForm input").val("");

	}

});


//Edit

var unfocusEdit = function(){
	$(this).attr('contenteditable','false');
}

var editFunc = function(){
	var spanElement = $(this).parent().parent().children('span');
	spanElement.attr('contenteditable','true');
	spanElement.focus();
	//Add Unfocus event handler

	spanElement.on('focusout',unfocusEdit);

};

$(".page .edit").on('click', editFunc); 



//Current
var currentFunc = function(){
	if(!$(this).hasClass('current'))
	{
		var index = $(this).index();

		//Page-Nav
		$('.page-nav li').removeClass('current');
		$(this).addClass('current');

		//Templates
		$('.page li').removeClass('current');
		$(".page li:eq("+index+")").addClass('current');
	}

};
$(".page-nav li").on('click', currentFunc);



//-------------------End of TEMPLATES and page nav------------------------
