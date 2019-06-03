(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"teste_HTML5 Canvas_atlas_", frames: [[416,0,218,218],[0,0,414,414],[0,416,414,414]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["teste_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["teste_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["teste_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6085,0.6085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.7,132.7);


(lib.botao1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.bola("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.45,54.45,0.8216,0.8216,0,0,0,66.3,66.3);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.5,-45.05,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.5,-45.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-45,207,207);


// stage content:
(lib.teste_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Camada_2
	this.instance = new lib.bola("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-233,454.75,0.1147,0.1147,0,0,0,66.3,66.3);

	this.instance_1 = new lib.botao1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(684.85,833.9,1,1,0,0,0,54.4,54.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.botao1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1165,scaleY:0.1165,x:-229,y:451.9},0).wait(1).to({scaleX:0.1184,scaleY:0.1184,x:-224.5,y:448.85},0).wait(1).to({scaleX:0.1205,scaleY:0.1205,x:-219.9,y:445.85},0).wait(1).to({scaleX:0.1226,scaleY:0.1226,x:-214.75,y:442.55},0).wait(1).to({scaleX:0.1249,scaleY:0.1249,x:-209.15,y:439.1},0).wait(1).to({scaleX:0.1273,scaleY:0.1273,x:-203.2,y:435.6},0).wait(1).to({scaleX:0.1298,scaleY:0.1298,x:-196.9,y:432.05},0).wait(1).to({scaleX:0.1325,scaleY:0.1325,x:-190.2,y:428.5},0).wait(1).to({scaleX:0.1353,scaleY:0.1353,x:-183.15,y:424.85},0).wait(1).to({scaleX:0.1382,scaleY:0.1382,x:-175.7,y:421.2},0).wait(1).to({scaleX:0.1413,scaleY:0.1413,x:-167.85,y:417.55},0).wait(1).to({scaleX:0.1445,scaleY:0.1445,x:-159.6,y:414},0).wait(1).to({scaleX:0.1479,scaleY:0.1479,x:-151,y:410.4},0).wait(1).to({scaleX:0.1514,scaleY:0.1514,x:-141.95,y:406.85},0).wait(1).to({scaleX:0.1551,scaleY:0.1551,x:-132.55,y:403.35},0).wait(1).to({scaleX:0.159,scaleY:0.159,x:-122.75,y:399.95},0).wait(1).to({scaleX:0.163,scaleY:0.163,x:-112.1,y:396.45},0).wait(1).to({scaleX:0.1672,scaleY:0.1672,x:-100.65,y:393.05},0).wait(1).to({scaleX:0.1715,scaleY:0.1715,x:-88.8,y:389.65},0).wait(1).to({scaleX:0.1761,scaleY:0.1761,x:-76.35,y:386.5},0).wait(1).to({scaleX:0.1808,scaleY:0.1808,x:-63.3,y:383.5},0).wait(1).to({scaleX:0.1857,scaleY:0.1857,x:-49.85,y:380.7},0).wait(1).to({scaleX:0.1908,scaleY:0.1908,x:-35.8,y:378.1},0).wait(1).to({scaleX:0.1961,scaleY:0.1961,x:-21.25,y:375.75},0).wait(1).to({scaleX:0.2016,scaleY:0.2016,x:-6.2,y:373.7},0).wait(1).to({scaleX:0.2074,scaleY:0.2074,x:9.4,y:371.9},0).wait(1).to({scaleX:0.2133,scaleY:0.2133,x:25.5,y:370.4},0).wait(1).to({scaleX:0.2194,scaleY:0.2194,x:42.05,y:369.25},0).wait(1).to({scaleX:0.2258,scaleY:0.2258,x:59.6,y:368.35},0).wait(1).to({scaleX:0.2324,scaleY:0.2324,x:78.75,y:367.9},0).wait(1).to({scaleX:0.2393,scaleY:0.2393,x:98.55,y:367.85},0).wait(1).to({scaleX:0.2464,scaleY:0.2464,x:118.95,y:368.35},0).wait(1).to({scaleX:0.2537,scaleY:0.2537,x:139.85,y:369.25},0).wait(1).to({scaleX:0.2613,scaleY:0.2613,x:161.3,y:370.7},0).wait(1).to({scaleX:0.2691,scaleY:0.2691,x:183.35,y:372.7},0).wait(1).to({scaleX:0.2773,scaleY:0.2773,x:205.9,y:375.25},0).wait(1).to({scaleX:0.2857,scaleY:0.2857,x:228.95,y:378.35},0).wait(1).to({scaleX:0.2943,scaleY:0.2943,x:252.5,y:382},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,x:276.55,y:386.25},0).wait(1).to({scaleX:0.3126,scaleY:0.3126,x:300.85,y:390.95},0).wait(1).to({scaleX:0.3221,scaleY:0.3221,x:323.8,y:395.6},0).wait(1).to({scaleX:0.332,scaleY:0.332,x:347.2,y:400.55},0).wait(1).to({scaleX:0.3422,scaleY:0.3422,x:371.5,y:405.95},0).wait(1).to({scaleX:0.3526,scaleY:0.3526,x:396.7,y:411.75},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,x:422.85,y:418.1},0).wait(1).to({scaleX:0.3746,scaleY:0.3746,x:449.95,y:425.05},0).wait(1).to({scaleX:0.3861,scaleY:0.3861,x:478.1,y:432.65},0).wait(1).to({scaleX:0.3979,scaleY:0.3979,x:507.35,y:441.1},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:537.7,y:450.45},0).wait(1).to({scaleX:0.4225,scaleY:0.4225,x:568.7,y:460.75},0).wait(1).to({scaleX:0.4354,scaleY:0.4354,x:594.5,y:470.05},0).wait(1).to({scaleX:0.4485,scaleY:0.4485,x:622.3,y:481},0).wait(1).to({scaleX:0.4621,scaleY:0.4621,x:650.75,y:493.45},0).wait(1).to({scaleX:0.4759,scaleY:0.4759,x:680,y:508.05},0).wait(1).to({scaleX:0.4901,scaleY:0.4901,x:709.85,y:526.05},0).wait(1).to({scaleX:0.5047,scaleY:0.5047,x:737.45,y:548.25},0).wait(1).to({scaleX:0.5196,scaleY:0.5196,x:754.7,y:570.85},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,x:758.5,y:605.55},0).wait(1).to({scaleX:0.5503,scaleY:0.5503,x:728.55,y:642.7},0).wait(1).to({scaleX:0.5662,scaleY:0.5662,x:672.85,y:672.8},0).wait(1).to({scaleX:0.5824,scaleY:0.5824,x:628,y:689.8},0).wait(1).to({scaleX:0.5988,scaleY:0.5988,x:572.35,y:709.25},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:517.15,y:727.65},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,x:467.95,y:743.6},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,x:423.95,y:757.65},0).wait(1).to({scaleX:0.6674,scaleY:0.6674,x:393.3,y:767.4},0).wait(1).to({scaleX:0.6851,scaleY:0.6851,x:364.9,y:776.45},0).wait(1).to({scaleX:0.703,scaleY:0.703,x:340,y:784.4},0).wait(1).to({scaleX:0.7211,scaleY:0.7211,x:296.6,y:798.65},0).wait(1).to({scaleX:0.7394,scaleY:0.7394,x:257.3,y:812},0).wait(1).to({scaleX:0.7578,scaleY:0.7578,x:213.9,y:828},0).wait(1).to({scaleX:0.7763,scaleY:0.7763,x:181.95,y:841.2},0).wait(1).to({scaleX:0.7949,scaleY:0.7949,x:149.9,y:857.7},0).wait(1).to({scaleX:0.8136,scaleY:0.8136,x:141.1,y:888.65},0).wait(1).to({scaleX:0.8323,scaleY:0.8323,x:217.6,y:903.7},0).wait(1).to({scaleX:0.8511,scaleY:0.8511,x:276.1,y:904.15},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,x:328.3,y:901},0).wait(1).to({scaleX:0.8887,scaleY:0.8887,x:383.1,y:895.25},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,x:434.9,y:888.05},0).wait(1).to({scaleX:0.9261,scaleY:0.9261,x:485.5,y:879.55},0).wait(1).to({scaleX:0.9447,scaleY:0.9447,x:536.9,y:869.65},0).wait(1).to({scaleX:0.9632,scaleY:0.9632,x:587.25,y:858.6},0).wait(1).to({scaleX:0.9817,scaleY:0.9817,x:636.6,y:846.7},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.4,891.6,495.5,68.19999999999993);
// library properties:
lib.properties = {
	id: '81E5F7C701E0624EBD9A8726E3C4AFEC',
	width: 1080,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/teste_HTML5 Canvas_atlas_.png?1559572052169", id:"teste_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['81E5F7C701E0624EBD9A8726E3C4AFEC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;