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