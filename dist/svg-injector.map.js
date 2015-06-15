{"version":3,"file":"./svg-injector.min.js","sources":["./svg-injector.js"],"names":["window","document","SVGInjector","options","instanceCounter","this","init","svgCache","injections","requestQueue","ranScripts","config","env","SVG_NS","XLINK_NS","DEFAULT_SPRITE_CLASS_NAME","DEFAULT_SPRITE_CLASS_ID_NAME","DEFAULT_FALLBACK_CLASS_NAMES","DEFAULT_REMOVESTYLES_CLASS_NAME","prototype","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","count","elements","evalScripts","pngFallback","onlyInjectVisiblePart","keepStylesClass","spriteClassName","spriteClassIdName","removeStylesClass","removeAllStyles","fallbackClassName","prefixStyleTags","spritesheetURL","prefixFragIdClass","forceFallbacks","replaceNoSVGClass","querySelector","writeDefaultClass","inject","onDoneCallback","eachCallback","undefined","length","elementsLoaded","ctx","forEach","call","element","injectElement","svg","el","onElementInjectedCallback","imgUrl","getAttribute","getSpriteIdFromClass","setAttribute","fallbackUrl","imgUrlSplitByFId","split","test","perElementFallback","pop","replace","isArray","setFallbackClassNames","isFunction","svgElemSetClassName","removeFallbackClassNames","indexOf","push","loadSvg","getEnv","symbolId","classNames","className","slice","curClassName","idx","fallbackClassNames","idxOfCurClass","curClassNames","curFallbackClassName","uniqueClasses","join","prefixIdReferences","suffix","def","attribute","newName","defs","attr","elem","definitions","querySelectorAll","g","defLen","id","usingElements","h","usingElementsLen","copyAttributes","svgElemSource","svgElemTarget","attributesToIgnore","curAttr","i","attributes","item","name","value","cloneSymbolAsSVG","svgSymbol","createElementNS","childNodes","child","appendChild","cloneNode","doPrefixStyleTags","styleTag","injectCount","srcArr","origPrefixClassName","regex","RegExp","newPrefixClassName","textContent","getClassList","svgToCheck","curClassAttr","classes","curClass","cloneSvg","sourceSvg","fragId","svgElem","newSVG","viewBox","viewBoxAttr","symbolAttributesToFind","curClassList","setViewboxOnNewSVG","symbolElem","getElementById","SVGSymbolElement","SVGViewElement","selector","Math","abs","parseInt","x","y","SVGSVGElement","prop","removeAttribute","SVGUseElement","referencedSymbol","getAttributeNS","substr","fragIdClassName","queueRequest","fileName","callback","fragmentId","processRequestQueue","url","requestQueueElem","len","index","setTimeout","onLoadSVG","urlArr","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","css","head","style","createElement","type","styleSheet","cssText","createTextNode","noSVGClassName","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","at","dataAttr","presARAttr","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","removeChild","l","scriptsToEvalLen","styleTags","svgClassList","parentNode","replaceChild","list","hash","out","hasOwnProperty","unshift","obj","constructor","apply","Object","toString","newClassNames","curClasses","Array","fn","scope","TypeError","angular","module","factory","injectorOptions","directive","svgInjectorFactory","restrict","link","exports","define","amd"],"mappings":"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"}