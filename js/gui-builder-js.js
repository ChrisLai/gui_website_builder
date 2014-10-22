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
		$(".page .delete").on('click', confirmDelete);//Is there a better way?
		
		//Add to page nav
		var pageNavItem = $('<li>'+ text +'</li>');
		$('.page-nav ul').append(pageNavItem);

		//Reset input
		$(".addPageForm input").val("");

	}

});


//Edit


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
