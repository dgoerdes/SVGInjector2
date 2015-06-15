{"version":3,"file":"./dist/ng-svg-injector.js","sources":["./src/svg-injector.js","./src/app/svginjector.js","./src/app/directives/inject.js","./src/app/service/svgInjectorFactory.js"],"names":["SVGInjector","options","instanceCounter","this","init","svgCache","injections","requestQueue","ranScripts","config","env","SVG_NS","XLINK_NS","DEFAULT_SPRITE_CLASS_NAME","DEFAULT_SPRITE_CLASS_ID_NAME","DEFAULT_FALLBACK_CLASS_NAMES","DEFAULT_REMOVESTYLES_CLASS_NAME","prototype","isLocal","window","location","protocol","hasSvgSupport","document","implementation","hasFeature","count","elements","evalScripts","pngFallback","onlyInjectVisiblePart","keepStylesClass","spriteClassName","spriteClassIdName","removeStylesClass","removeAllStyles","fallbackClassName","prefixStyleTags","spritesheetURL","prefixFragIdClass","forceFallbacks","replaceNoSVGClass","querySelector","writeDefaultClass","inject","onDoneCallback","eachCallback","undefined","length","elementsLoaded","ctx","forEach","call","element","injectElement","svg","el","onElementInjectedCallback","imgUrl","console","log","getAttribute","getSpriteIdFromClass","setAttribute","fallbackUrl","imgUrlSplitByFId","split","test","isArray","removeFallbackClassNames","indexOf","push","loadSvg","warn","perElementFallback","pop","replace","setFallbackClassNames","isFunction","info","svgElemSetClassName","getEnv","symbolId","classNames","className","slice","curClassName","idx","fallbackClassNames","idxOfCurClass","curClassNames","curFallbackClassName","uniqueClasses","join","prefixIdReferences","suffix","def","attribute","newName","defs","attr","elem","definitions","querySelectorAll","g","defLen","id","usingElements","h","usingElementsLen","copyAttributes","svgElemSource","svgElemTarget","attributesToIgnore","curAttr","i","attributes","item","name","value","cloneSymbolAsSVG","svgSymbol","createElementNS","childNodes","child","appendChild","cloneNode","doPrefixStyleTags","styleTag","injectCount","srcArr","origPrefixClassName","regex","RegExp","newPrefixClassName","textContent","getClassList","svgToCheck","curClassAttr","classes","curClass","cloneSvg","sourceSvg","fragId","svgElem","newSVG","viewBox","viewBoxAttr","symbolAttributesToFind","curClassList","setViewboxOnNewSVG","symbolElem","getElementById","SVGSymbolElement","SVGViewElement","selector","Math","abs","parseInt","x","y","SVGSVGElement","prop","removeAttribute","SVGUseElement","referencedSymbol","getAttributeNS","substr","fragIdClassName","queueRequest","fileName","callback","fragmentId","processRequestQueue","url","requestQueueElem","len","index","setTimeout","onLoadSVG","urlArr","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","css","head","style","createElement","type","styleSheet","cssText","createTextNode","noSVGClassName","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","at","dataAttr","presARAttr","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","removeChild","l","scriptsToEvalLen","styleTags","svgClassList","parentNode","replaceChild","list","hash","out","hasOwnProperty","unshift","obj","constructor","apply","Object","toString","newClassNames","curClasses","Array","fn","scope","TypeError","angular","module","directive","svgInjectorFactory","restrict","link","factory","injectorOptions"],"mappings":"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"}