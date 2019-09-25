(w=>{
	const encode=w.encodeURIComponent,
	doc=w.document,
	anchorLink=doc.getElementById('link'),
	textareaIn=doc.getElementById('in'),
	textareaOut=doc.getElementById('out'),
	buttonClear=doc.getElementById('clear'),
	buttonRun=doc.getElementById('run'),
	buttonGenerate=doc.getElementById('generate');
	//
	anchorLink.onclick=event=>{
		const a=event.currentTarget;
		if(event.ctrlKey){
			const t=a.textContent,s=w.prompt('Rename',t);
			if(t!==s){
				a.textContent=s
			}
		}else{
			const s=a.href;
			if(0!==s.length){
				eval(s)
			}
		}
	};
	//
	buttonClear.onclick=()=>{
		anchorLink.removeAttribute('href');
		textareaIn.value=textareaOut.value='';
	};
	//
	buttonRun.onclick=()=>{
		const s=textareaIn.value;
		if(0!==s.length){
			eval(s)
		}
	};
	//
	buttonGenerate.onclick=()=>{
		const s=textareaIn.value.trim();
		if(0!==s.length){
			const a=anchorLink;
			a.href=['javascript:void(',encode(s),');'].join('');
			textareaOut.value=a.outerHTML
		}
	};
	//...
})(window);