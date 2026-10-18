(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Feed = function() {
	this.initialize(img.Feed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1419,445);


(lib.food = function() {
	this.initialize(img.food);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2172,724);


(lib.Home = function() {
	this.initialize(img.Home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1419,445);


(lib.LetsGo = function() {
	this.initialize(img.LetsGo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1419,445);


(lib.OK = function() {
	this.initialize(img.OK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1428,448);


(lib.Play = function() {
	this.initialize(img.Play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1419,445);


(lib.Replay = function() {
	this.initialize(img.Replay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1423,446);


(lib.Wolf01 = function() {
	this.initialize(img.Wolf01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,811,1024);


(lib.Wolf02 = function() {
	this.initialize(img.Wolf02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,811,1024);


(lib.wolf_t1 = function() {
	this.initialize(img.wolf_t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,724);


(lib.wolf_t2 = function() {
	this.initialize(img.wolf_t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,724);


(lib.wolf_t3 = function() {
	this.initialize(img.wolf_t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,724);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wolfSit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Wolf01();
	this.instance.setTransform(-262,-610,0.652,0.652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolfSit, new cjs.Rectangle(-262,-610,528.8,667.7), null);


(lib.wolfEat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Wolf02();
	this.instance.setTransform(-302,-620,0.6576,0.6576);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolfEat, new cjs.Rectangle(-302,-620,533.4,673.4), null);


(lib.Wolfsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wolf_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqlNSQgLgCgQgGQgZgKgDgCIgUgQIAAACIgBACQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgQgQgGgJQgLgNgHgTQgMgaAAghQABgsAMgeIARgkQAIgSAHgIQAQgRAlgSQApgTAegGQBUgSBFAdIAnASQAaANAOAFQAeAMAPgBIAJAAIAAgBQAPiDBih4QAqgzCciOIAlgmQApgrAdgkIAmgnQAqguAegnIA/hUIgLAAQAKgTAigwQAfgrALgaQABgIAGgKIAKgRIAKgTQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgDgDQgBgEAEgEQAJgLAFgIQAKgPABgLIgFAAQgRgDgKgGQgNgJAGgPQAEgLAPgQQALgOARgPQAWgSAMgHIAJgHQAEgQAHgOQAHgNAPgaQANgYAIgKQANgSARgIQAJgEAOgFIAOgEIAOgFQAQgIAQgVIAkgpIAOgQIANgQQAIgSANgEQALgDAIAFQAJAFAAALQANAEAHAPQAGANAAAQQACABAFAGQAEAHAAADQAAABAAABQAAAAgBAAQAAABAAAAQgBgBgBAAIgFgCIgGgBIgGAXQgBAKAFAGQAGAGAJABQAOABAMgEIgEgHQgCgGAEgBQAEgBAEAEIAEAFIAKgFQADgEAGAAQAIgBAFAJIAAgBQAOAdgJAZQgFAMgLAPIgUAYQgYAnABAdIgBACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgEgEQgBAfAEAQIAAABIgCABIgFgBQgFAVAMAfQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgIABIgEAeIgCAdQAAAUACAOIABAKIABAKQADAHAIALIAKARQABABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgTAAQgDAUAEARQAFAPABAQQADAbgIArQAAABAAAAQAAAAgBABQAAAAgBAAQAAgBgBAAIgJgKQgIAOAAATIACAiQADASgCAQQgBAKgFATQAAAQgBAPQgFAtggA6QgSAlgLASIggAyQgNAVgSAjIgFBKIgHBFQgEBNAIA7IAJBBQAFApAFATQAJABAKAHQAFADALAEIARAHQAKAGAGASIAHAVIABAJIADAIQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAGAEgBAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQgGAAgFgCIgDgBQgVAJgRgDQgIAAgHgEQgBADgEACIgOABIgOgBIgPAAQgJAAgGgCQgNgDgRgHQgMgFgIgLQgNgQAEgcQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQgBg5gOguQgOgugCgQQgDgYgEgMQgEgNgBgLQAAgKADgUQADgUgBgLQgBgKgEgUQgFgVgBgJIgBgGQgMAQgVAVQgHALgLAOIgTAYQgWAbgQAhQgHAMgHAQQgHAPgFAGQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgEgGgIALIgIAOIgVAiQgVAggYASQgLAJgbARQgXAPgKAPQAigDAaANQAYAMAIAYIAAACIAAAAQADALAAAKIgBABIgDASIADAEQACACgCADQAAAAAAAAQAAAAgBAAQAAAAgBABQgBAAgBAAQgMgCgFAAIgUAAQgEgBgGgCIgBAAIh5gCIg8ABIg5AFQgbACgigCIg+gFIg6gGIgYgEQgMgDgKgGQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQgJgGgEgGIgXgcIgXgcQgSAEgZAAIgsgCIgBgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIADgCQgcAGgsgOIgZgGQgNgEgLAAQgdABgUAJQgVAIgRAQQgWAWgEAOQgFAPAJAVIARAiQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABIgCAAIgMgEQAHAJAQAJIAaAPIABACIgBACQgSAHgbAAIAFACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(80.7511,85.04);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,161.5,170);


(lib.wolf_t3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wolf_t3();
	this.instance.setTransform(-285,-537,0.7846,0.7964);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolf_t3_1, new cjs.Rectangle(-285,-537,503.7,576.7), null);


(lib.wolf_t2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wolf_t2();
	this.instance.setTransform(-272,-523,0.7792,0.7792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolf_t2_1, new cjs.Rectangle(-272,-523,500.3,564.2), null);


(lib.wolf_t1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wolf_t1();
	this.instance.setTransform(-270,-525,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolf_t1_1, new cjs.Rectangle(-270,-525,498.2,561.9), null);


(lib.Cloud03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Blend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACcHTQhciZjpkeQjMj6iXifIC1hVICOAAQAFBGA2BxQA5B2BbCBQBoCOB7B6QCMCLCYBkg");
	this.shape.setTransform(67.475,52.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080808").s().p("ACaHUQg3hbhtiQQhMhkhWhpIhBhNQitjQh3h9IC3hUICOAAQACAUALAhIAYBAQAsB2BYCEIAqA9QBOBtBiBnIA1A2QCPCNCXBjg");
	this.shape_1.setTransform(67.475,52.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#101010").s().p("ACXHVQgzhXhxiVQhGhahdhyIhAhOQi2jYhwh1IC4hVICPgBQACATANAhIAaA+QAuB9BVCAQAXAiASAbQBSBwBgBmQAfAgAXAWQCSCOCXBjg");
	this.shape_2.setTransform(67.5,52.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191919").s().p("ACUHVQg2hahuiRQhOhnhWhnIhBhNQiqjLh8iDIC5hUICRgBQABAQAQAiQAVAtAGAPQAtB/BVCAQAPAXAbAnQBOBrBlBrIA2A2QCRCNCbBlg");
	this.shape_3.setTransform(67.5,52.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#212121").s().p("ACRHWQgyhWhyiWQhLhihZhsIhChNQiujOh5iAIC7hVICRgBQACAPASAhQAWAoAGATQAsCCBVB/IAqA+QBRBvBlBpIA2A2QCVCQCZBjg");
	this.shape_4.setTransform(67.525,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292929").s().p("ACPHYQgzhXhyiWQhKhghahuIhChNQi2jWhzh5IC9hVIAngDIBrACQABAOAUAhQAYAlAHAUQAsCHBSB8IArA/QBSBuBmBqQAXAZAgAeQCVCPCbBlg");
	this.shape_5.setTransform(67.5,52.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#313131").s().p("ACMHZQg1hahwiTQg/hShmh9IhChNQiii/iHiQIC9hVIAngEIBsACQABANAXAgQAaAkAHAUQAqCJBSB9IArA/QBSBtBoBsIA3A2QCYCRCaBlg");
	this.shape_6.setTransform(67.5,52.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3A3A").s().p("ACJHaQg0hZhxiVQhShphUhlIhChOQiwjOh6iBIC/hVIAngFIBtADQABAMAZAfQAbAiAGATQAtCRBPB4QAWAhAWAeQBPBsBsBuQAeAfAZAYQCYCQCdBng");
	this.shape_7.setTransform(67.525,52.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("ACHHbQg1hbhxiTQhJhfhehwIhChOQisjJh/iHIDBhVIAngFIBtADQABAMAcAeQAdAgAGATQAqCRBQB6IAsBAQBRBsBsBvIA4A3QBPBKBZBGQBNA9BCArg");
	this.shape_8.setTransform(67.525,52.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A4A").s().p("ACEHcQg0hahyiVQhDhXhkh4IhDhOQivjNh9iDIDChVIAogGIBuAEQABAKAeAeQAfAfAFASQAqCVBPB4QAVAhAXAgQBTBuBsBtIA4A4QBQBLBdBIQBLA7BCArg");
	this.shape_9.setTransform(67.525,51.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("ACBHdQgzhYhziYQhPhkhZhrIhChNQiji+iLiTIDDhVIAogHIBvAEQABAKAgAdQAiAdAFASQAoCYBPB4QAWAiAXAeQBOBqBxBzQAgAgAaAYQBSBMBdBJQBOA8A/Apg");
	this.shape_10.setTransform(67.55,51.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A5A5A").s().p("AB+HeQgyhYh1iYQhJhfhehwIhEhOQimjCiIiPIDGhWIAngHIBvAEQACAKAiAbQAkAdAEARQAoCcBOB2QAPAYAeApQBRBtBxBxQAfAfAaAZQBTBNBhBKQBMA7A/Apg");
	this.shape_11.setTransform(67.55,51.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#636363").s().p("AB8HfQg1hbhziWQhIhehghxIhDhOQiyjOh+iEIDHhVIAogIIBwAFQABAJAkAaQAmAcAEAQQAnCeBOB2QARAcAcAmQBRBrBzBzQAhAiAZAWQBVBPBiBLQBNA7A9Aog");
	this.shape_12.setTransform(67.55,51.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B6B6B").s().p("AB5HgQgwhVh4icQhIhdhhhzIhDhOQitjHiEiLIDIhVIAogJIByAFQAAAJAnAZQAoAaADAQQAnCjBNB0QAUAfAZAiQBSBuBzByIA7A4QBXBQBkBMQBMA6A9Aog");
	this.shape_13.setTransform(67.575,51.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AB2HhQgxhYh3iaQhLhghehwIhEhOQiZiwiZijIB2gvIBUgmIAogIIByAEQABAIAoAZQAqAZAEAOQAkCkBOB2QATAdAaAlQBSBtB1B0IA8A4QBYBRBnBOQBLA5A8Ang");
	this.shape_14.setTransform(67.575,51.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B7B7B").s().p("AB0HiQgxhYh4iaQhIhdhih0IhEhOQimi/iNiUIB3guIBVgnIAogJIBzAEQAAAIArAYQAsAXADAPQARBLAVA8QAeBQAsBEIAuBDQBVBwB0BxIA8A5QBaBRBpBQQBKA4A8Ang");
	this.shape_15.setTransform(67.575,51.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#848484").s().p("ABxHjQgxhYh4ibQhThqhYhnIhEhOQiXiticimIB3gvIBVgnIApgKIBzAGQAAAHAuAWQAtAXADANQAQBNAVA8QAdBRAtBEQAbAoAUAbQBSBtB4B2QAhAgAcAYQBcBTBqBQQBMA6A5Alg");
	this.shape_16.setTransform(67.6,51.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C8C8C").s().p("ABuHkQgwhZh5iaQhKhfhhhzIhFhOQiSinijisIB5gvIBWgnIAogLIB0AHQABAGAtAWQAwAWAEALQACB7BsCmQAaAnAVAcQBUBuB4B2IA9A5QBdBTBtBRQBLA4A4Amg");
	this.shape_17.setTransform(67.6,51.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#949494").s().p("ABsHlQgzhch3iYQhEhXhoh6IhEhPQigi2iXidIB6gvIBXgoIAogKIB1AGQABAGAvAVQAyAUAEALQgBB9BtCmQAXAiAYAiQBTBtB7B3IA9A6QBfBVBvBSQBMA4A3Akg");
	this.shape_18.setTransform(67.6,51.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C9C9C").s().p("ABpHmQgzhch3iZQhPhkhehtIhFhPQhwh/jGjVIB6gvIBXgnIApgLIB1AGQAAAGAzATQAzAVAEAJQgDB8BuCpQATAfAcAmQBVBuB7B2QAVAVApAlQBgBWByBUQBJA2A3Alg");
	this.shape_19.setTransform(67.625,50.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A5A5A5").s().p("ABmHnQgyhbh4iaQhGhZhnh5IhFhPQisjCiMiSIB7gvIBXgnIApgNIB3AHQAAAGA0ASQA2ATADAJQgFB9BvCrQAZAmAWAeQBTBtB/B5IA/A6QBiBXBzBWQBJA2A2Ajg");
	this.shape_20.setTransform(67.625,50.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADADAD").s().p("ABkHoQgzhch4iaQhIhchmh1IhFhQQhxh/jIjWIB9guIBXgnIApgOIB3AIQABAEA2ARQA4ASADAIQgHCBBvCpQATAeAdAnQBVBwB+B4IA/A6QChCOC2B5g");
	this.shape_21.setTransform(67.6,50.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("ABhHpQgwhZh7idQhMhghjhyIhFhPQibiwifimIB9guIBZgoIApgOIB4AIQAAAFA5APQA5ARADAIQgKCABxCsQATAeAdAoQBUBuCBB6QAlAjAbAWQBlBaB3BYQBIA1A1Aig");
	this.shape_22.setTransform(67.625,50.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDBDBD").s().p("ABeHqQgxhbh6icQhQhlhfhtIhGhPQiFiWi2jAIB+guIBZgpIAqgNIB4AIQAAAEA7APQA8APADAGQgNCCByCtQAXAlAZAhQBVBvCCB7IBAA5QBoBbB5BZQBDAxA4Alg");
	this.shape_23.setTransform(67.625,50.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C5C5C5").s().p("ABbHrQgyhdh5iaQhJhchnh3IhGhPQivjEiNiSICAguICDg3IB5AIQAAADA9AOQA+AOACAHQgOCCByCvQAXAkAZAhQBWBwCDB7QAWAVArAmQBpBcB7BZQBHAzAzAig");
	this.shape_24.setTransform(67.625,50.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CECECE").s().p("ABYHsQgwhah7ieQhThohehqIhGhPQieizifikICAguICEg5IB6AJQAAADBAANQA/ANACAFQgQCDByCxQAWAhAbAlQBYByCDB5IBBA8QClCPC7B8g");
	this.shape_25.setTransform(67.65,50.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D6D6D6").s().p("ABWHtQgwhch9icQhKhehmh1IhGhPQihi1idijICBguICEg5IB6AJQAAADBCAMQBCAMABAEQgSCFBzCxQAVAgAcAnQBWBvCHB9QAbAaAmAhQCtCVC3B4g");
	this.shape_26.setTransform(67.65,50.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DEDEDE").s().p("ABTHuQgwhbh9ieQhMhfhlh1IhGhOQiji3idihICDguICEg5IB8AJQAAACBEALQBEALABADQgVCGB0CzQAZAmAZAhQBWBvCIB+IBCA7QBvBfCABdQA0AlBCAtg");
	this.shape_27.setTransform(67.65,50.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("ABQHvQgwhbh9ieQhPhjhihxIhHhQQili3ibihICCgtICGg6IB8AKQAAABBGAKQBGAKABACQgXCIB1CyQASAdAgArQBXBxCJB+IBCA7QBxBhCDBeQBOA4AmAYg");
	this.shape_28.setTransform(67.675,50.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("ABOHwQgwhbh+ieQhGhZhsh8IhHhPQini6iaifICEgtICGg8IB9ALQAAABBIAJQBIAIAAACQgZCIB2C1QAUAgAeAoQBYBxCKB+IBDA7QBzBjCEBfQBDAvAwAgg");
	this.shape_29.setTransform(67.675,49.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7F7F7").s().p("ABLHxQgvhah/igQhOhhhlh0IhHhPQioi7iaieICFgtICHg9IB9ALQCUAPABABQgcCKB3C2QAYAlAaAkQBXBvCNCBIBDA7QB1BlCGBfQBEAwAuAeg");
	this.shape_30.setTransform(67.675,49.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABIHyQgvhbh/igQhmh/iVilQiqi9iZicICFgtICIg+IEXAZQgdCLB2C2QBfCTC6CnQCEB5ClB3QBSA7A4Akg");
	this.shape_31.setTransform(67.7,49.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Blend, new cjs.Rectangle(0,0,135.4,99.5), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A5C6").s().p("AIeHrIqGghQiAgGjwALQiZAHkOASQi2ANhLg1Qg+gtAbhHQAdhNCDAUQA0AIAqAWQAqAVAHAXQALAmguAVQgXALgaADQAlAQAkgIQAfgHAVgYQATgXAAgcQAAgegZgVQhJg/AGg/QADgcATgOQAVgQAgAFQA6AIBAAyQA7AvAsAAQA6AAAeglQAOgTADgTQgvAsg0gWQgtgUgZg5Qgag6ARgyQASg6BDgRQBHgRA0AVQAmAPAtAvQBFBHALAJQA0AsA9AQQB2AdBGg+QAjgeALglQg9BKhTAAQhHAAgxgxQgogogLhXQgLhdAehaQAihnBQg8QBehHCPAAQEQAABqCkQA7BaABCEQABA3gjAvQgmAzg9AJQhJAKgngwQgNgOgHgTIgFgQQgTApATAoQAYA0BOAVQAwAMA3gPQANgEBVggQA8gYAsgCQA9gDA+AhQArAXATAyQARAwgKAzQgKA1giAhQglAjg4gDQhEgFgUgwQgGgPgBgSIABgOIgHASQgHAXACAWQAHBEBaAZQAwAOAzgZQAagMBCgvQA7grAngOQA7gVA+ATQBWAbgFBPQgCAhgWAbQgWAcgjAJQgZAHhoAAQiRAAkrgNg");
	this.shape.setTransform(119.5569,50.4196);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,239.2,100.9), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("Ar4EUQgzgLgEgrQgEgsA7gPQBCgRBUAxQAtAbASAHQAjANAggHQA+gPAEglQACgMgFgNIgFgKIgEAaQgOAbguACQgmACgagTQgXgSgHgeQgHgcAMgbQANgcAdgMQBFgeBXAbIBCAUQAmAJAhgHQA1gLAQgdQANgXgNgWQgDAPgOAMQgbAagxgFQgqgFgagcQgYgaABgeQABhLAogxQBIhbC6AAQC6AAA2CCQAUAygIAzQgHAwgbAWQgiAcgxAAQg4AAgqgpIAHAMQAKAPAOAKQAwAjBRgRQAqgIAjgZIA3gsQA+g1BOAQQAuAKANAgQALAbgSAhQgRAfgfALQgjAMgggYIAMAVQAUAVAnAAQAeAAApgaQArgcAogFQAvgFAEAiQAEAkgxAjQgRAMgBAQQAAAPAOANQAhAfA0gSQgSgCgPgGQgggMAIgVQALgdBWgLQBZgMAUArQASAogqAYQgzAeh8gHQmTgWiJAFQkBAMi3AGQjMAIhjAAQhIAAgRgEg");
	this.shape.setTransform(81.6352,27.9634);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,163.3,56), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("Am7DGQgegIgCgfQgCgfAjgLQAmgMAxAjQAxAkAbgIQAjgKADgbIgFgZIgCATQgIATgbACQgtADgKgyQgJgxAlgTQAogWAyAUQA5AWAXgGQAfgIAKgVQAHgQgHgQQgCALgIAIQgQATgdgEQgYgDgPgUQgOgTAAgWQABg1AXgjQAqhBBtAAQBsAAAfBdQALAkgEAlQgFAigPAPQgUAUgcAAQghAAgYgdIASAaQAcAZAvgMQAegHAugwQAkglAuALQAbAHAHAXQAHATgKAXQgKAXgSAIQgVAIgTgRIAHAPQAMAPAXAAQASAAAXgTQAZgUAXgDQAcgEACAZQADAZgdAZQgVATASAWQATAWAfgNQgKgBgJgFQgTgIAFgPQAGgVAygIQA1gIALAeQALAdgZARQgdAVhJgFQjrgPhQADQiVAJhqAEQh3AFg6AAQgpAAgLgCg");
	this.shape.setTransform(47.552,20.0363);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,95.1,40.1), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE9EB").s().p("AnqD/QgbgWAKgnQAKgqA5AJQA2AIAIAcQAGAUgTANQgKAGgLACQAiAQATgfQATgegYgYQggggABgiQABghAeADQAZAEAcAaQAaAYATgBQAZgBAMgVIAGgUQgTAYgWgLQgUgKgMgeQgMgeAFgbQAHgfAcgKQAxgRAoAxIAkAoQAXAXAbAHQAzAOAcgiQAOgRAEgUQgYAogjACQgfABgWgZQgSgVgGgtQgHgyALgwQAch+B0gFQB0gFAxBVQAbAwADBGQACAdgOAaQgPAbgaAGQgfAGgSgYIgLgaQgIAWAKAVQALAbAiAKQAUAGAYgKQAFgCAjgTQA1gbAtAaQAoAYgHBCQgIBDgwgCQgdgBgKgZIgDgaIgEAiQAEAkAnAMQAVAHAVgOQALgHAbgbQAzgxApAOQAmANgBAqQAAAqggAMQgZAJjcgDIkTgGQhbgBj2AgQgVACgSAAQgvAAgZgTg");
	this.shape.setTransform(51.0517,27.4713);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,102.1,54.9), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("AspFHQg3gNgEgzQgEg0A/gSQBGgTBZA6QAwAfATAIQAlAQAjgJQBBgRAFgsQABgOgFgPIgFgNIgEAgQgOAfgyADQgoADgbgYQgZgVgIgjQgHgiANgfQANghAfgPQBKgjBcAgIBHAYQAoAKAjgIQA4gOASgiQAOgagOgbQgDARgPAPQgdAgg1gHQgsgGgcghQgZgfAAgkQAChYAqg7QBOhrDFAAQDGAAA5CaQAWA6gJA+QgHA5gdAaQgkAggzAAQg9ABgsgxIAIAOQAKARAPANQAzApBWgUQAtgKAlgdQAJgGAxguQAhgfAbgKQAmgOA0ALQAxALANAnQAMAggTAmQgSAmghANQglAOgjgcIANAYQAVAZArAAQAfAAAsgfQAughAqgFQAygGAFAoQAEAqg1ApQgSAOAAAUQgBASAPAPQAjAlA3gWQgSgCgRgHQghgOAIgZQAFgPAfgOQAegOAlgFQBggNAVAzQATAvgtAdQg2AjiFgJQjAgMhzgEQiugIheAEQkRAOjEAIQjbAIhqAAQhJAAgSgEg");
	this.shape.setTransform(86.9328,33.1412);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,173.9,66.3), null);


(lib.TicTacToe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5EFF6").ss(25,1,1).p("ARTxSMAimAAAIAAAAMgimAAAMAAAAilIAAAAMgilAAAMAAAgilIAAAAMAAAgimARTxSMAAAgimIAAAAMAAAAimIAAAAARTxSIAAAAIAAAAAx4xRMgiAAAAIAAgBgEgRSAz5MAAAgimAx4RTMgiAAAAARTRTMAAAAimIAAAAMAAAgimMAAAgilMgilAAAAxSxSMAilAAAEAz5ARTMgimAAA");
	this.shape.setTransform(332.075,332.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2F2F2F").ss(25,1,1).p("AAAAAIAAAA");
	this.shape_1.setTransform(442.775,221.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TicTacToe, new cjs.Rectangle(-12.5,-12.5,689.2,689.2), null);


(lib.Snowflakewhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BoIAKgZIgVAEIgEgXIAjgGIAQgoIgrAGIgMAgIgWgJIAIgTIgbAEIgEgYIAcgEIgOgQIATgOIAWAcIApgGIgaghIgjAEIgDgXIAVgDIgQgVIASgPIARAWIAIgUIAWAIIgNAhIAaAiIAPgoIgVgbIARgPIAOARIAKgZIAWAJIgKAYIAVgDIADAYIgiAFIgQAnIAqgFIAOghIAVAJIgIAUIAbgEIADAYIgbADIANAQIgSAPIgWgcIgqAGIAaAhIAjgFIADAYIgVADIAQAVIgSAOIgRgVIgIAUIgWgJIANggIgagiIgOAnIAVAbIgRAPIgOgRIgKAag");
	this.shape.setTransform(11.775,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,22.7);


(lib.SnowflakesBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.snowflake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8D1E5").s().p("AlaKyIBAijIiFAWIgXiZIDcgnIBlkFIkOAnIhRDSIiIg8IAwh/IitAYIgUiaICugaIhUhuIB1hjICOC6IEFgkIiojfIjdAfIgTibICFgRIhqiPIB4hhIBqCOIAziCICLA5IhTDYICmDeIBkkFIiKi0IBzhjIBXBwIA/inICNA6IhACjICFgTIAYCaIjcAkIhmEEIEOglIBXjYICKA/Ig1CAICogXIAWCbIiqAZIBSBwIh2BfIiJi5IkMAoIClDaIDfgeIAVCbIiJATIBrCNIh2BfIhriMIgzCDIiNg8IBVjWIimjcIhiECICOC1Ih2BiIhVhxIhECrg");
	this.shape.setTransform(54.15,57.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snowflake, new cjs.Rectangle(-20.8,-17.8,150,150), null);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92FFFF").s().p("EAjzAALQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLgEgkHgAKQAAgLALAAQALAAAAALQAAAKgLAAQgLAAAAgKg");
	this.shape.setTransform(569.8567,259.0811,0.9319,1.0392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09B9EA").s().p("AUbM+QAAgLAKAAQAKAAAAALQAAAKgKAAQgKAAAAgKgEhCHAKLQAAgKALAAQAKAAABAKQgBAKgKAAQgLAAAAgKgEApNAEeQAAgKAKAAQAKAAAAAKQAAAKgKAAQgKAAAAgKgEBB0gJ2QgBgLAKAAQALAAAAALQAAAKgLAAQgKAAABgKgEAsWgM8QAAgLALAAQAKAAAAALQAAAKgKAAQgLAAAAgKg");
	this.shape_1.setTransform(838.0474,181.0643,0.9319,1.0392);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#095CC0").s().p("AVoSQQAAgLALAAQAKAAAAALQAAAKgKAAQgLAAAAgKgEgyQAR5QAAgKAJAAQALAAAAAKQAAAKgLAAQgJAAAAgKgEA/EAOgQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEhFTANWQAAgJALAAQAKAAAAAJQAAALgKAAQgLAAAAgLgA3dLtQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgEAmeADkQAAgKALAAQAKAAAAAKQAAAKgKAAQgLAAAAgKgEgrLAAxQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLgAcpojQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgEg1AgLVQAAgLAKAAQALAAAAALQAAALgLAAQgKAAAAgLgEA3LgOFQAAgLALAAQAJAAAAALQAAAKgJAAQgLAAAAgKgEBHugPcQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgEhICgP3QAAgLALAAQAKAAAAALQAAAJgKAAQgLAAAAgJgEghygQ4QAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgA2HyOQAAgLALAAQAKAAAAALQAAAKgKAAQgLAAAAgKg");
	this.shape_2.setTransform(537.425,125.6498,0.9319,1.0392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0998E3").s().p("EBTGAW4QAAgLAKAAQALAAAAALQAAAKgLAAQgKAAAAgKgAFUVfQAAgLALAAQAKAAAAALQAAAKgKAAQgLAAAAgKgEhCkASsQAAgKAJAAQALAAAAAKQAAAKgLAAQgJAAAAgKgEhVnAQlQAAgKALAAQAKAAAAAKQAAALgKgBQgLABAAgLgEArZAM6QAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLgEBdcAMEQAAgLALAAQAKAAAAALQAAAKgKAAQgLAAAAgKgEgrJAKHQAAgKALAAQALAAAAAKQAAALgLAAQgLAAAAgLgAe1JOQAAgLAKAAQALAAAAALQAAALgLAAQgKAAAAgLgAN2IjQAAgLAJAAQALAAAAALQAAAKgLAAQgJAAAAgKgEAzpAH1QAAgKALAAQAJAAAAAKQAAALgJAAQgLAAAAgLgAkLHiQAAgLAKAAQALAAAAALQAAAJgLAAQgKAAAAgJgEgy0AGcQAAgLAKAAQAKAAAAALQAAAJgKAAQgKAAAAgJgEhD0AFwQAAgKALAAQAKAAAAAKQAAAKgKAAQgLAAAAgKgEhV0AEuQAAgJALAAQAJAAAAAJQAAALgJAAQgLAAAAgLgEhW1ABOQAAgKAJAAQALAAAAAKQAAAKgLAAQgJAAAAgKgEBo6AAYQAAgLAKAAQAKAAAAALQAAAJgKAAQgKAAAAgJgEhrSAAMQAAgKAJAAQALAAAAAKQAAALgLAAQgJAAAAgLgAFQAEQAAgJAKAAQAKAAAAAJQAAAKgKABQgKgBAAgKgEBq/gB8QAAgKAKAAQAKAAAAAKQAAAKgKAAQgKAAAAgKgEhMZgCuQAAgLAKABQAKgBAAALQAAALgKAAQgKAAAAgLgAVckFQAAgKALAAQAKAAAAAKQAAAKgKAAQgLAAAAgKgEg8NgG5QAAgJAKAAQALAAAAAJQAAALgLAAQgKAAAAgLgEhh3gHQQAAgLALAAQAJAAAAALQAAALgJAAQgLAAAAgLgAP9rbQAAgLALAAQALAAAAALQAAAKgLAAQgLAAAAgKgEBhIgNfQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEhBrgOOQAAgLAKABQAKgBAAALQAAAKgKAAQgKAAAAgKgAgfvhQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgAvOwOQAAgJALAAQAKAAAAAJQAAALgKAAQgLAAAAgLgEhSJgSTQAAgLALAAQALAAAAALQAAAKgLAAQgLAAAAgKgEhUugSxQAAgLALAAQALAAAAALQAAALgLAAQgLAAAAgLgEhnngW2QAAgLALAAQAKAAAAALQAAALgKAAQgLAAAAgLg");
	this.shape_3.setTransform(639.9856,137.3146,0.9319,1.0392);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09FFFF").s().p("AQoT5QAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLgAqiTBQAAgLALAAQALAAAAALQAAAKgLAAQgLAAAAgKgEhn6ATAQAAgKALAAQALAAAAAKQAAAKgLAAQgLAAAAgKgAL5RmQAAgKALAAQALAAAAAKQAAALgLAAQgLAAAAgLgEhScAQOQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgEg14AO4QAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLgEg9PAMsQAAgLALAAQALAAAAALQAAALgLAAQgLAAAAgLgEBnmALGQAAgKALAAQAKAAAAAKQAAALgKAAQgLAAAAgLgEBFyADcQAAgKAJAAQALAAAAAKQAAALgLAAQgJAAAAgLgAVrCiQAAgLAKAAQAKAAAAALQAAAJgKAAQgKAAAAgJgEAq0ABVQAAgLALAAQAKAAAAALQAAALgKAAQgLAAAAgLgAFpBVQAAgLAKAAQALAAAAALQAAALgLAAQgKAAAAgLgEg7+gAQQAAgLAKAAQAKAAAAALQAAAKgKAAQgKAAAAgKgEgrtgBdQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEhMAgBdQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgAoOk3QAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLgEhfCgF/QAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEA3pgH9QAAgLALAAQAKAAAAALQAAALgKAAQgLAAAAgLgEgmMgKwQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLgEBIzgLDQAAgLAKAAQALAAAAALQAAAKgLAAQgKAAAAgKgATMxGQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEBncgTZQAAgKAKAAQALAAAAAKQAAAKgLAAQgKAAAAgKgEg+dgT5QAAgKALAAQAJAAAAAKQAAALgJAAQgLAAAAgLg");
	this.shape_4.setTransform(659.1837,146.7452,0.9319,1.0392);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stars, new cjs.Rectangle(0,-15.8,1280,306.3), null);


(lib.moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F9FA").s().p("AhwB0QgvgwAAhEIAAgCQABA/AtAuQAtAtA/AAQA/AAAtgvQAtguAAhAQAAhBgsguQgrgtg9gCQBCAAAvAwQAvAwAABDQAABEgvAwQgvAwhCAAQhBAAgvgwg");
	this.shape.setTransform(49.0833,143.0144,0.3264,0.3264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CACACA").s().p("Ah4BVQgOgfAAgiQAAhAAtgvQAuguA+AAQAiAAAfAOQAdAOAWAZQgsgog6AAQg/AAguAuQgtAvAABAQAAA7AnAuQgYgWgOgfg");
	this.shape_1.setTransform(48.251,142.1657,0.3264,0.3264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E7E9").s().p("AhsBwQgtgvAAhBQAAhAAtgvQAtguA/AAQBAAAAtAuQAtAuAABBQAABBgtAvQgtAuhAAAQg/AAgtgug");
	this.shape_2.setTransform(48.8875,142.8104,0.3264,0.3264);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F9FA").s().p("AinCsQhFhHAAhlIAAgDQACBeBCBDQBDBDBdAAQBeAABChEQBDhGAAhgQABhfhChFQhBhEhcgCIADAAQBiAABGBIQBFBHAABkQAABlhFBHQhGBHhiAAQhiAAhFhHg");
	this.shape_3.setTransform(62.6214,56.661,0.3264,0.3264);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CACACA").s().p("AiyB/QgVguAAg0QAAhfBDhFQBDhFBeAAQAyAAAtAWQAsAUAgAlQhBg7hXAAQhdAAhDBFQhDBFAABfQAABZA5BDQgkghgUgtg");
	this.shape_4.setTransform(61.3892,55.3962,0.3264,0.3264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E9").s().p("AihCmQhChFAAhhQAAhgBChFQBEhEBdAAQBfAABCBEQBDBFAABgQAABhhDBFQhCBEhfAAQhdAAhEhEg");
	this.shape_5.setTransform(62.3276,56.3591,0.3264,0.3264);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0F9FA").s().p("AjHDNQhThUAAh5IAAgEQACBwBQBQQBPBQBvAAQBwAABQhSQBQhSAAhyQAAhzhOhRQhOhRhugDIAEAAQB1AABUBVQBTBWAAB3QAAB5hTBUQhUBVh1ABQh1gBhShVg");
	this.shape_6.setTransform(42.4163,90.0044,0.3264,0.3264);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CACACA").s().p("AjUCYQgZg4AAg9QAAhzBQhRQBQhSBvAAQA9AAA1AZQA0AZAnAsQgmgigtgSQgwgTgyAAQhxAAhPBSQhQBSAABzQAABpBFBQQgsgngXg1g");
	this.shape_7.setTransform(40.9474,88.4947,0.3264,0.3264);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E9").s().p("AjADFQhQhSAAhzQAAhzBQhSQBQhRBwgBQBxABBQBRQBQBSAABzQAABzhQBSQhQBShxAAQhwAAhQhSg");
	this.shape_8.setTransform(42.0654,89.6454,0.3264,0.3264);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0F9FA").s().p("AiXCcQg/hBAAhbIAAgDQACBVA8A9QA8A9BVAAQBVAAA8g+QA9g+AAhXQAAhXg7g+Qg8g9hTgCIADAAQBZAAA/BAQA/BBAABaQAABbg/BBQg/BAhZAAQhYAAg/hAg");
	this.shape_9.setTransform(167.352,81.3462,0.3264,0.3264);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CACACA").s().p("AihBzQgTgqAAguQAAhXA9g+QA8g+BVAAQAuAAApATQAnATAdAhQg6g1hQAAQhUAAg8A+Qg+A+AABXQABBQA0A8QghgdgSgpg");
	this.shape_10.setTransform(166.2422,80.2038,0.3264,0.3264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E9").s().p("AiRCWQg9g+AAhYQAAhXA9g+QA8g+BVAAQBWAAA8A+QA9A+AABXQAABYg9A+Qg8A+hWAAQhVAAg8g+g");
	this.shape_11.setTransform(167.0909,81.0769,0.3264,0.3264);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0F9FA").s().p("AiGCKQg3g6AAhQIAAgCQABBLA2A1QA1A2BLAAQBLAAA1g3QA2g3AAhNQAAhMg1g2Qg0g3hKgCIADAAQBPAAA3A5QA4A5AABQQAABQg4A6Qg3A5hPAAQhOAAg4g5g");
	this.shape_12.setTransform(87.9921,123.7232,0.3264,0.3264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CACACA").s().p("AiPBmQgQglAAgqQAAhMA1g3QA3g3BKAAQAoAAAkARQAjAQAaAeQg0gvhGAAQhKAAg2A3Qg2A3AABNQABBGAtA2QgdgbgQgjg");
	this.shape_13.setTransform(87.0047,122.7113,0.3264,0.3264);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E9").s().p("AiBCEQg1g3AAhNQAAhNA1g3QA3g2BKAAQBMAAA1A2QA2A3AABNQAABNg2A3Qg1A4hMAAQhKAAg3g4g");
	this.shape_14.setTransform(87.7555,123.4784,0.3264,0.3264);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0F9FA").s().p("AjdDkQhchfAAiFIAAgFQACB9BYBZQBYBYB8AAQB8AABZhaQBYhbAAh/QAAh/hWhaQhXhah6gDIAFAAQCCAABcBeQBcBfAACEQAACFhcBfQhcBeiCAAQiBAAhcheg");
	this.shape_15.setTransform(69.7944,137.8652,0.3264,0.3264);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CACACA").s().p("AjsCoQgbg9AAhEQAAh/BYhbQBZhbB8AAQBCAAA8AdQA6AaAqAxQgpgkgygUQg1gVg4AAQh8AAhZBaQhYBbAACAQAAA5AUA2QAUA0AkAqQgwgsgbg7g");
	this.shape_16.setTransform(68.1623,136.1923,0.3264,0.3264);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E7E9").s().p("AjVDbQhYhbAAiAQAAh/BYhbQBZhbB8AAQB9AABZBbQBYBbAAB/QAACAhYBbQhZBah9AAQh8AAhZhag");
	this.shape_17.setTransform(69.4027,137.4653,0.3264,0.3264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0F9FA").s().p("AmKGUQijinAAjtIAAgKQAEDfCdCeQCdCdDbAAQDeAACdihQCcihAAjjQAAjhiZigQiaigjZgEIAJgBQDnAACkCoQCjCnAADsQAADtijCnQikCojnAAQjmAAikiog");
	this.shape_18.setTransform(104.778,149.0776,0.3264,0.3264);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CACACA").s().p("AmjErQgxhtAAh5QAAjiCdiiQCdihDeAAQB2AABqAyQBmAxBLBXQhIhChagkQhdglhkAAQjeAAidChQidCiAADiQAABnAkBgQAjBcBABKQhVhNgvhpg");
	this.shape_19.setTransform(101.8811,146.1072,0.3264,0.3264);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E7E9").s().p("Al6GFQieihAAjkQAAjiCeiiQCdihDdAAQDfAACdChQCdCiAADiQAADkidChQidChjfAAQjdAAidihg");
	this.shape_20.setTransform(104.0844,148.3676,0.3264,0.3264);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0F9FA").s().p("AmKGUQijinAAjtIAAgKQAFDfCcCeQCdCdDbAAQDeAACdihQCcihAAjjQAAjgiZihQiaigjZgFIAJAAQDnABCkCnQCjCoAADrQAADtijCnQikCnjnAAQjmAAiking");
	this.shape_21.setTransform(151.6024,107.1413,0.3264,0.3264);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CACACA").s().p("AmjEqQgxhsAAh5QAAjjCdihQCdihDeAAQB1AABqAyQBnAwBLBXQhIhBhagkQhdglhlAAQjdAAidChQidChAADjQAABnAkBfQAjBdBABKQhVhOgvhpg");
	this.shape_22.setTransform(148.7055,104.179,0.3264,0.3264);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E7E9").s().p("Al7GFQidihAAjkQAAjjCdihQCeihDdAAQDfAACdChQCdChAADjQAADkidChQidChjfAAQjdAAieihg");
	this.shape_23.setTransform(150.9088,106.4313,0.3264,0.3264);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0F9FA").s().p("AidCiQhChDABhfIAAgEQACBaA+A+QA/A/BXAAQBZAAA+hAQA/hBAAhaQABhag+hAQg8g/hVgDQBdAABBBDQBBBDAABeQAABfhBBDQhBBDhdAAQhcAAhBhDg");
	this.shape_24.setTransform(126.6153,33.7629,0.3264,0.3264);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CACACA").s().p("AioB4QgTgsAAgxQAAhZA/hBQA/hABYAAQAvAAArATQApAUAeAiQg9g3hSAAQhYAAg/BAQg/BCAABZQAABUA2A/QghgggUgpg");
	this.shape_25.setTransform(125.4565,32.5715,0.3264,0.3264);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E7E9").s().p("AiXCcQg/hBAAhbQAAhaA/hBQA/hABYAAQBZAAA/BAQA/BBAABaQAABbg/BBQg+BAhaAAQhYAAg/hAg");
	this.shape_26.setTransform(126.3378,33.4773,0.3264,0.3264);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F0F9FA").s().p("Ak7FEQiDiGAAi+IAAgIQADCzB+B+QB9B+CwAAQCxAAB+iBQB+iBAAi1QAAi0h7iBQh7iAivgEIAIAAQC5AACDCGQCDCHAAC8QAAC+iDCGQiDCGi5AAQi4AAiDiGg");
	this.shape_27.setTransform(33.6275,59.2479,0.3264,0.3264);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CACACA").s().p("AlQDvQgnhXAAhgQAAi2B+iBQB+iBCxAAQBfAABVAoQBSAnA8BFQg6g0hIgdQhKgdhRAAQixAAh+CBQh+CBAAC1QAABTAcBMQAcBKA0A7QhEg9gmhVg");
	this.shape_28.setTransform(31.3018,56.865,0.3264,0.3264);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E7E9").s().p("AkvE4Qh+iBAAi3QAAi1B+iCQB+iBCxAAQCyAAB+CBQB+CCAAC1QAAC3h+CBQh+CBiyAAQixAAh+iBg");
	this.shape_29.setTransform(33.0726,58.6766,0.3264,0.3264);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("EgQnAoUQnqjVl6mDQl7mEjPn3QjXoIAAo5QAAo5DXoIQDPn3F7mDQF6mDHqjVQH8jcIrAAQIsAAH8DcQHqDVF6GDQF7GDDPH3QDXIIAAI5QAAI5jXIIQjPH3l7GEQl6GDnqDVQn8DcosAAQorAAn8jcg");
	this.shape_30.setTransform(89.1998,91.408,0.3264,0.3264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moon, new cjs.Rectangle(0,0,178.4,182.8), null);


(lib.gameGrid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(6,40,97,0.098)").s().p("Av2PSIAA+jIftAAIAAejg");
	this.shape.setTransform(1.225,4.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-92.8,202.9,195.6);


(lib.food_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.food();
	this.instance.setTransform(-67,-23,0.0615,0.0615);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_1, new cjs.Rectangle(-67,-23,133.5,44.5), null);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Replay();
	this.instance.setTransform(-175,-55,0.246,0.246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.267,scaleY:0.267,x:-190,y:-59},0).wait(1).to({scaleX:0.2004,scaleY:0.2003,x:-141,y:-47},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-59,380,119.1);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Play();
	this.instance.setTransform(-175,-54.85,0.2466,0.2467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2845,scaleY:0.2846,x:-202,y:-64},0).wait(1).to({scaleX:0.1978,scaleY:0.1979,x:-140,y:-44},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-64,403.8,126.7);


(lib.ok = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.OK();
	this.instance.setTransform(-175,-54.9,0.2451,0.2451);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-54.9,350,109.8);


(lib.letsGo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LetsGo();
	this.instance.setTransform(-175,-54.85,0.2466,0.2466);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:-204,y:-66},0).wait(1).to({scaleX:0.2066,scaleY:0.2066,x:-146,y:-44},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-66,408.9,128.2);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Home();
	this.instance.setTransform(-175,-54.85,0.2466,0.2466);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2678,scaleY:0.2678,x:-190,y:-59},0).wait(1).to({scaleX:0.2009,scaleY:0.2008,x:-143,y:-44},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-59,380,119.2);


(lib.feed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Feed();
	this.instance.setTransform(-175,-55,0.2466,0.2472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-55,350,110);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.food_1();
	this.instance.setTransform(-238.1,-7.35,1,1,0,0,0,-0.8,0);

	this.instance_1 = new lib.wolf_t3_1();
	this.instance_1.setTransform(-20.1,-22.2,1,1,0,0,0,-24.9,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.3,-537.3,527.8,576.6999999999999);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wolf_t2_1();
	this.instance.setTransform(199.45,319.5,1,1,0,0,0,196.5,320.9);

	this.instance_1 = new lib.food_1();
	this.instance_1.setTransform(-237.1,-8.8,1,1,0,0,0,0.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.3,-524.4,535.5,564.1999999999999);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wolf_t1_1();
	this.instance.setTransform(-247.6,-280.6,1,1,0,0,0,-249.1,-280.9);

	this.instance_1 = new lib.food_1();
	this.instance_1.setTransform(-235.7,-7,1,1,0,0,0,1.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.1,-524.7,533.8,561.9000000000001);


(lib.TreeSnowy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFF8").s().p("AgYAjQACgPAMgRQAHgJACgTQABgQAFgEQARgLADATIAAAsQAAAWgNAKQgJAHgRADIgCABQgKAAACgPg");
	this.shape.setTransform(333.5548,79.0557);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFF8").s().p("Ag1AQQADgMASgMQATgPAQAAIAigCQASgBgBAGQgBAGgeALIgvATQgUAKgFAAIgBAAQgEAAABgKg");
	this.shape_1.setTransform(321.3041,68.0742);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFF8").s().p("AgsAdQgLAAgfgGQgZgEAUgKQAMgFAegJQAFgCApgFQArgFATgEIAhgHQAGgBADAHQACAGgOADIgVAEQg4AYgYAIQgRAGgNAAIgCAAg");
	this.shape_2.setTransform(316.6261,75.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFF8").s().p("AhwAkQAAgHALgJQAKgIAKgEIAWgHQAQgEATgBQAugEAsgYQAXgNANAFQALAFAAALQAAAIgqAQQgdALgWAHQgWAIg5AKIglAGIgEAAQgLAAgBgGg");
	this.shape_3.setTransform(325.324,48.5598);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFF8").s().p("AAsA6QgGgDgUgHQgTgHgLgGQgLgHgGgMIgIgXQgCgFgNgVQgKgRgCgKQgBgHAIADQAHADAMAIIAWAZQAQAUATAIQAWAKAHAKQAEAHAJAVQAIASgIAAQgFAAgMgIg");
	this.shape_4.setTransform(294.2423,46.4248);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFF8").s().p("Ag9AHQAMgOAOgEIAjgHIAGAAIAmAAQAdABgFAOQgGANgUABIgZAAQgPgBgYACIgrAHIgBAAQgFAAAKgMg");
	this.shape_5.setTransform(280.9168,56.4201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFF8").s().p("AhIAVQgXgBAGgRQAGgQAVgGQALgEAmADQArADAVgCIAfgDQADABAEAGQAHAGgYAJIg1APQgXAHgXABIgGAAIgngCg");
	this.shape_6.setTransform(275.7072,66.0264);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFF8").s().p("AggAtQgBgNALgSQADgEAHgZQAFgTARgMQAMgIAGALQAGAJgBAPQAAAJgQAPQgYAZgIAJQgJAMgFAAQgDAAAAgGg");
	this.shape_7.setTransform(317.3981,28.9906);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFF8").s().p("AhEArIAMgcIAKgZQAGgPAJgEQAEgCAegBQAegBAUgNQAXgNgHANIgYAiQgLAPgMAGQgRAHgLAGIgYAPIgaAOQgGADgDAAQgHAAAEgLg");
	this.shape_8.setTransform(305.6275,38.8349);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFF8").s().p("AgPAPQgCgJAEgIQAFgJAMgHQAPgHgCALQgCAJgLANQgJAMgEABIgBAAQgDAAgCgGg");
	this.shape_9.setTransform(285.3387,26.3757);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFF8").s().p("Ag3AdQgDgGAPgNQAWgSAEgFQAHgLAPgEIAVgFQANgFAJACQAIACAAAGQAAAFgbAPQglAVgMAIQgWAQgFABIAAAAQgEAAgEgJg");
	this.shape_10.setTransform(264.25,24.9477);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFF8").s().p("AhAAfQgFgXAdgZQAFgEAJAFQAMAHAMgCQAjgFASgWQAJgMAEAFQAEAGgGAKQgJARgZAUQgOAKgsAYQgKAFgIAAQgMAAgEgQg");
	this.shape_11.setTransform(275.2313,34.6736);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFF8").s().p("AgjA9QgCgIADgMQABgCgQgiQgQghAIgcQAEgQASAOQAKAIAYAUQAMAIALgMQAVgXAFgEQARgKgFAQQgDAIgNAaQgIARgYAcQgWAcgMAKQgFAEgDAAQgEAAgBgFg");
	this.shape_12.setTransform(260.0359,47.6677);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFF8").s().p("AgBAnQgEgSAAgTQABgJgMgXQgJgTAFgCQAJgFALAXQAGAMAMAaQAHAOgEALIgMAUQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgEAAgDgOg");
	this.shape_13.setTransform(213.5083,32.2655);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFF8").s().p("AgPAvIAPgvQAGgXgDgSIgDgQQAAgGABgBIAKACQAHABgBAoQgBAdgDATQgFAhgRAEIgCABQgIAAAEgSg");
	this.shape_14.setTransform(193.4388,8.0592);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFF8").s().p("AAQAnQgLgVgGgIIgQgTQgGgKgFgSQgFgSAiAiQAhAggFAVQgDAMgEAAQgDAAgDgFg");
	this.shape_15.setTransform(164.7762,29.4213);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFF8").s().p("AANAvQgLgSgPgoQgKgagDgFQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgFgVAQAKIAfAXQANAHADAUQABALgCAlQgBAOgFAAQgDAAgHgLg");
	this.shape_16.setTransform(176.5787,17.0009);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFF8").s().p("AgcAyIgDgcQgCgZgFgQQgDgNAIABIASAHQASAHAUgcQAKgMAFAKQAEAJgDAOQgCAJgOARQgRAVgCAEQgEAKgNAKQgIAFgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_17.setTransform(185.2983,28.1721);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFF8").s().p("AAhAoQgLgCgGgQQgFgKgRgIQgYgJgVgWQgPgQASAFIAoALIAlADQATADAEAIQAOAZgOATQgGAJgJAAIgEAAg");
	this.shape_18.setTransform(176.9914,40.0878);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFF8").s().p("AgNA0QgBgNAKgXQAFgOgMgbQgMgaAHgIIAIgCQAIgBAEADQAEADAGAhQAFAeAAAQQAAAUgBADQgDAKgNAFIgGACQgIAAgBgLg");
	this.shape_19.setTransform(168.0711,51.9381);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFF8").s().p("AADBBQgIgDABgIQAEgRgCgLQgCgLgMgWQgLgVgBgQQAAgSANgDQAMgCAFAJQAKAOAEAKQAKAYACAfQACAigHAIQgDADgGAAIgLgBg");
	this.shape_20.setTransform(159.6702,46.8902);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFF8").s().p("AA7AkQgYgFgdgKQgQgGgUgCQgXgCgRgFQgYgHAIgJQAFgHAagSQAKgJAcAPIA6AeQAhAOAKAHQAHAGgDAIQgBADgIAAQgHAAgNgDg");
	this.shape_21.setTransform(175.3413,64.2028);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFF8").s().p("AgfBFQgCgCABgRQAAgDgTgiQgRgcAJgPQAEgIAJACQAFAAAQAHQAKAEAPgKIAqgbQAYgQgEASQgDASgRAMQgNAKgOAVIgcAxQgMAUgEAAIgCgBg");
	this.shape_22.setTransform(192.4114,59.8088);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFF8").s().p("Ag0AqQgCgFAFgiQADgSAIgCQAFgBASAAIAjgTQAlgQgDALQgDAKgaAYIgzArQgPAMgGAAQgEAAgBgFg");
	this.shape_23.setTransform(209.3441,44.5574);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFF8").s().p("AgFA9QgDgDAEgZQACgNgPgYQgMgVAKgTQAKgVALAGQAHADALAMQANAIgZBIQgIAagEAAIgBgBg");
	this.shape_24.setTransform(225.1625,46.4275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFF8").s().p("AgUAwQgBgfgFgJQgJgUAAgQQAAgQAJgFQADgBAQABQAQABAMgGQAOgGAAAKQABAEgGAgQgFAZgHAOQgHAPgRAOQgFADgDAAQgFAAgBgJg");
	this.shape_25.setTransform(236.2019,33.6393);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFF8").s().p("AAAAwQgLgKgNgdQgRgkAJgSQAIgQARATQATAXAGABQAPAAADAIQAEAKgQAZQgRAbgCABIAAAAIgFgFg");
	this.shape_26.setTransform(237.1947,68.1614);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFF8").s().p("AArA5IgegOQgOgDgOgNQgKgKgXgfQgKgNAGgGQAFgFAJADQAJAEAGgCQAKgCALgQQAKgOAGAPQAEAKAHAaQADAJAPAWQAMASABANQAAALgGAAIgHgCg");
	this.shape_27.setTransform(230.8409,70.6999);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFF8").s().p("AhdBvQgNgEAJgVIAXgrQAJgSgKgeQgQgvgCgPQgFgqAsAbIAjAZQATANAFAAQAGgBAbgiQAbgiAWABQAXABgMAhQgaBGgCAIQgIAmgiAaIg0AfQgVAMgQAEQgIACgHAAQgJAAgIgCg");
	this.shape_28.setTransform(222.4401,98.1927);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFF8").s().p("AhvCdQgOgIgEgQQgLgqA6gmQBDguAQgNQAVgRAFgRQASg4AEgJQAUgwAVgEQAmgIAEAQQADAOgZAsQgHAMgUBTQgNA5gkAGQgiAGgfAlQgkApgPAHQgHADgHAAQgIAAgHgEg");
	this.shape_29.setTransform(239.1904,128.0426);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFF8").s().p("AhfBEQAZgdAFgPQAFgRgHgXQgIgbAGggQACgNAQALQAPAKAFALQAGAMATAFQAZAGAmgMQAlgMAGATQADAKgHAaQgEAKgvAQQg0APgOAGQgJAEgVATQgRAPgUABIgBAAQgTAAANgQg");
	this.shape_30.setTransform(270.3208,95.4487);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFF8").s().p("Ag+A2QgGgBgLgKQgKgIAHgiQAGgmAZgOQANgIATAPQAKAJASATQAJAIASgIQAagLAKAAQASgCgGAIIgZAWQgSAQgRAKQgSAKgdALQgUAHgMAAIgHgBg");
	this.shape_31.setTransform(292.0113,87.4513);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFF8").s().p("Ah0BHQANgMAlgMIA8gTQAVgJAZgaQAMgOAHgMIAcgeQAcgbAFANQAFAPgEAOIgMAfQgDAIABAXQAAANgPADQgNACgXAKQgYALgOADIhZASIgoAIIgDAAQgOAAAMgLg");
	this.shape_32.setTransform(319.4788,95.0718);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFF8").s().p("Ag9AqQgOgIAVgQQAMgJAegSQAOgKAdgQQAigSADASQABAIgSAKQgWANgFAFQgHAJgRAKIgPAJQgGAGgJAFQgJAFgJAAQgHAAgGgDg");
	this.shape_33.setTransform(341.5258,88.4903);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFF8").s().p("AhlAaQgcgMAegOQAWgKAwgKQAzgMBCAEQAUABAGAOQAGANgegDQgagEgeAGQgeAGgKACIgoARQgPAGgPAAQgNAAgMgEg");
	this.shape_34.setTransform(346.8549,97.845);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFF8").s().p("AhOAPQgUgHAFgLQAEgKAQABIAqAFQAlACA4gLQAhgGAAAKIgNAVQgFAJgOgCIgNgFQhAAEgZADIgOABQgNAAgMgEg");
	this.shape_35.setTransform(349.6504,104.4257);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFF8").s().p("AhnBHIg8gDQgPgBgMgKQgMgKAAgLQAAgLAqgKQAngJAbABQAcABArgKQA5gOAMgBQAWgDAzgaQAwgYAUAAQAYAAgLAKIgVANQgxAxgWASQgNALg+ASIhLATQgLADghAAIgRAAg");
	this.shape_36.setTransform(351.3469,113.185);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFF8").s().p("AA4AiQgagGgjgFIhagKQgwgGAigLQATgHAygOQAbgKAmgCQAngCAkAFQAcAFgFAMQgLAYABAEQACASgOAHQgGADgKAAQgMAAgRgFg");
	this.shape_37.setTransform(312.3744,113.119);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFF8").s().p("AA+ArQgQgKgHgDQgsgWgYgIQgUgGgNgLQgPgMAGgGQAJgLAOADQAJACAPAIQAJAFA7AWQAQAFAGAGQAHAJAAASQABANgHAAIgFgCg");
	this.shape_38.setTransform(362.6504,135.0354);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFF8").s().p("AixAtQgRgMBOgUIA0gMQAwgKAcABQAeAAAbgLQARgHApgUQAfgNANAFQAFACAFALQACAGgNAJQgLAHgKACQgPAFhHArQgWAPgUABQgJAAgjgFQgUgDgVAIQgaAJgMABIgOAAQguAAgPgMg");
	this.shape_39.setTransform(355.9197,123.0453);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFF8").s().p("AAIAmQgLgDgBgHIgCgUQgCgQgHgMQgGgMAEgDQADgDAKAAQAQABAFAZQACAJABAfQAAALgIAAIgEgBg");
	this.shape_40.setTransform(351.234,191.535);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFF8").s().p("AAoAeIgmgNIg/gUQgTgGAEgMQAEgMAUAAQANAAAKAHQAMAJAPACIAjAFQARACANADQAQAEgBAQQgBAQgLACIgEABQgIAAgOgEg");
	this.shape_41.setTransform(364.8715,171.5517);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFF8").s().p("AAbAYIgqgDQgbgBgoABQgrABAAgWQAAgUAfgEQAUgCA2ARQAPAEAcgFIA3gKQAbgDANAIQAKAHgCAIQgBAFgGACQgJADgFAEQgJAHgXADIgaABIgUgBg");
	this.shape_42.setTransform(350.9917,179.7661);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFF8").s().p("AhGAqQgGgOgbgOQgWgMgCgWQAAgEAJgBQAJgBAEADQACABAhABQAlABANAEQAPAEAkgNQAVgHAtgSQAcgLACAHQACAGgPALQgIAGgwAaQgzAagNAKQgZAUgLAFQgFACgEAAQgMAAgHgQg");
	this.shape_43.setTransform(325.707,165.6935);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFF8").s().p("AgCAgQgGgDgiABQgoABgagEQgigFAYgJQAWgIAbAAIBVgFQANAAAlgRQAigRASACQAWACgVAPQgNAKgWAKQg8AdgUAAQgEAAgCgCg");
	this.shape_44.setTransform(363.8409,158.0807);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFF8").s().p("AhqASQgEgGAHgKQATgXArgBQAxgBATAFQAVAFAWAAQAnAAgBAIQAAAEgUAPQgLAJgXgDIgngJQgPgDgbAEQgkAHgXADIgGABQgLAAgDgFg");
	this.shape_45.setTransform(349.6067,141.5152);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFF8").s().p("Ah8BJQgPgGAdg+IACgFIAKgJQALgLAMgEIAqgHQAjgGAfgNQAjgPAigFQAfgEgEAGIgmAZQgoAYgPATQgRAVgZAJQgNAEgvAJQgaAFgPAPQgJAKgFAAIgDAAg");
	this.shape_46.setTransform(317.6091,152.3954);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFF8").s().p("AhpBOQgzgDgKgJQgHgHAGgEQAPgJAGgHQALgNAfgBQARAAArAEQAVACAkguQAog0AQgFQAXgHAWABIApAGQASACgCAbIgIA6QAAAegOAHQgKAFgfgEQgbgEg1AHQg1AGgOAKQgLAHggAAIgXgBg");
	this.shape_47.setTransform(284.7442,154.7228);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFF8").s().p("ABFBrQgJgBhWgbQgzgQglAFQglAGgZgIQgogLAegOQANgGAxgMQBEgSA+gBQAmAAAigZQAXgSAkgsQAbghAUAOQATANgEAiQgDAZgXAhQghAqgSAbQgYAjgbAAIgCAAg");
	this.shape_48.setTransform(251.3722,152.8944);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFF8").s().p("AAuBZQgNgEAHgQQAIgUgCgFQgEgLgZgbQgbgdgRgHQgWgKgUgTQgWgVAMgKQAHgGAlATIA4AgQASAJARApQAKAWAOAnQAJAUgMAFQgEACgGAAQgJAAgMgEg");
	this.shape_49.setTransform(298.1077,222.4902);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFF8").s().p("AAGAeQgHgDgGgNIgJgXQgGgQAGgEQAHgGANAWQAOAUABANQACAMgIAAIgHgCg");
	this.shape_50.setTransform(128.5044,28.7903);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFF8").s().p("AgcAsIAAgVQAAgJAIgKIAUgaQAJgSAHgEQADgCAFABQAJABgHARQgGAPgMAOQgGAHgEALQgFAKgJAJQgHAIgDAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_51.setTransform(141.6735,24.4757);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFF8").s().p("AgDAXQgEgDgEgLQgEgIACgMIACgKQAGgKAIAJQAJAHACALQABAJgCAKQgDALgFABIgBAAQgEAAgDgEg");
	this.shape_52.setTransform(105.7556,36.9021);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFF8").s().p("AgPAEQgBgPAIgNQAGgKAGgDIALAIQADACgGASIgMAjQgDAMgDAAQgGAAgDgig");
	this.shape_53.setTransform(114.9724,35.0087);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFF8").s().p("AAjAtQgQgNgIgEQgIgFgKgMQgQgQgLgJQgOgOAJgJQAKgKAGALQAGAJAKgBQAKAAATgNQAQgLgDANQgIAcAAAEQABALAEALIALAYQADAIgEAAQgDAAgEgCg");
	this.shape_54.setTransform(110.589,44.9818);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFF8").s().p("AASAuQgIgJgIgYQgGgPgNgMQgUgSgDgEQgHgIAOABQANABALAIQAIAFAJgHQAQgKAKgCQANgDgFAIQgJAQgBALIACAeQAAAPgEAMQgCAJgEAAQgDAAgDgEg");
	this.shape_55.setTransform(133.7383,37.6728);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFF8").s().p("AALBtQAFgbABgPQACgPgOgVQgQgagEgOQgGgWgWgSIgxgiQgOgKACgGQACgGAQgHQAXgLA1AlQATAOAKADQASAFAQgOQARgNAMAAQAJAAAKAIQANALgjBJIgXAwQgRAigOAVQgIAMgEAAQgCAAAAgHg");
	this.shape_56.setTransform(132.4117,62.4089);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFF8").s().p("ABZAvQgQgXgXgJQgVgIhNgNQhCgMgLgLQgEgEACgFIAEgJQAFgVA6ADQA4ACARACQAkAEAXAKQAUAJAJAXQARAqACAEQAQAbgPAHIgGABQgMAAgOgTg");
	this.shape_57.setTransform(91.0171,64.256);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFF8").s().p("AA6BoQgQgOgzg+QgngugNgSQgUgcgSglQgLgWAeAGQAYAEATAMQAIAEAUAQQAUAOAVgBQA0gDAMAPQAGAJgCAPIgFArQgBASAGAZQAFAVgFAcQgDAQgLAAQgLAAgRgPg");
	this.shape_58.setTransform(116.9579,88.2174);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFF8").s().p("AgFEXQgvgHgWgJQghgOANgXQAJgRAmg0QAkg0AHgoQAGgqgDg1IgNhvIgRhYQgJgyARABQAUACAOAXQAOAWAPAyQAOAuAdBUQAVA/gHATQgKAcgEAgQgFAnAHAZQAJAggCALQgCAQgUALQgIAFgZAeQgPATgVAAIgGAAg");
	this.shape_59.setTransform(184.3801,364.9469);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFF8").s().p("AhiC8IgggXQgRgaAxghQAngZAvgdQAbgUAEgXQACgKgGg/QgFg0ANgTQAVggAWgOQAagRAGAcQAGAYAaAvQAQAtghAtQgeAogJAvQgJAsgMAMQgSATgfAGIgxAGQgPACgUANQgNAJgEAAIgBgBg");
	this.shape_60.setTransform(177.7697,288.3241);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFF8").s().p("AgpCXQgEgrgKgRQgWgmgkgxQgvg/gZgOQhGgpgKgHQgrgeAWgMQAWgMAyAPQAbAIAmAPQAOAFApAaIBLAwQAgATAegHIBMghQAogRAjAaIAYATQAMAJAIgBQASgEAMAMQAGAGASAeQAMAVgqARQghANgbAAQgNABgsAQQglANgVAJQgIADgYAXQgcAbgdASQgNAHgIAAQgOAAgEgSg");
	this.shape_61.setTransform(180.7447,111.3424);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFF8").s().p("AgDBnIhGgKQglAEgOgCQgZgDAigcQAagWA5gXQAsgRAFgPQAKgqAIgVQAOgpAYAHQAXAGAGAaIAIBGQADAdAVA1QAJAlgsABIgIAAQgoAAg2gJg");
	this.shape_62.setTransform(161.0597,161.2846);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFF8").s().p("AhIBBQgLgZgYhXQgFgLgCgNQgCgaAUgOQASgNAZAxQAjBBAMAKQAVAUAagbQAtgxAFgDQAagRgCAWIgMAwQgEARgNASQgRAXgJAUQgNAdgSAIQgLAFgnABIgBAAQgdAAgVgyg");
	this.shape_63.setTransform(194.3902,175.4979);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFF8").s().p("AgZBFQgTgUgPgfQgmhOAsgSQAggNAEAQQAJAlADAFQANASAKgJQAXgUAPgFQAbgJgGAPQgFALgXAjQgKAUgKAdQgJAWgQAKIgEABQgKAAgPgQg");
	this.shape_64.setTransform(202.2951,219.3765);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFF8").s().p("AiqBRQgUgLgDgdQgHg5ABgPQADguAegFQAVgEAFAPQADAHgCAXQgBAMAMABIAngBQB+ACBnAJQALABAQAOQAQAPANAWQALAVgYgDQgOgCgqgNQghgMg0gIQg4gKggACQgfACgUAPQgPALgUAeQgLARgOAAQgGAAgHgDg");
	this.shape_65.setTransform(233.7046,218.5377);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFF8").s().p("ADeBOIgrgHQhJAEgwgMIg8gPQgcgIgOgJQgRgLgzgLQg0gLg2gFQgzgFALgaQAKgXAtgOQAfgJAvAQQAqAOAQATQAZAcBvAZQA+AOBQAHIAXAJQAXAMAEALQACAIgUAAIgVgBg");
	this.shape_66.setTransform(298.0899,188.3738);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFF8").s().p("AAbAsIgMgUQgGgMg4gdQgZgNAMgMQAMgMAUAFIAUAFQAGACARAOQASAQAMAEQARAHADARQACASgPANQgGAEgFAAQgHAAgHgHg");
	this.shape_67.setTransform(344.5873,204.2462);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFF8").s().p("ABDAZQgegKgKgCQgLgCgegCIg6gGQgcgDAJgLQAJgLAXgDIAEgBIgQACIAPgCQAXgBAeAIQAiAKASABQAeABAJAIQAHAGgCAOQAAAGgKAAQgGAAgKgCg");
	this.shape_68.setTransform(331.3523,215.1874);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFF8").s().p("AAFAyQgigQgJgDQgkgNgTgRQgagVAKgbQAGgOAmARQAcAMAYASQANAJAYgBQAPAAAogHQAbgFAFAHQADAEgBALQABAGgTAFQgZAHgFADQgIAFgJAIIgSAOQgDADgFAAQgHAAgKgFg");
	this.shape_69.setTransform(309.5467,207.8948);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFF8").s().p("AAtAWIgYgLQgKgGgjgBQgXgCgIgGQgIgHAIgKQAEgFAfAEIAdAFIAYAKQAZAMACAMQABAIgGAAQgEAAgGgDg");
	this.shape_70.setTransform(329.3353,290.9814);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFF8").s().p("AAoAOQgHgCgUAAIgxABQgeABAAgKQAAgJAZgJQAKgEAMAFQAPAGAMgBQARgCAQAHIAWALQAJAFgLACIgJABQgGAAgGgCg");
	this.shape_71.setTransform(360.0525,280.5132);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFF8").s().p("AhOAsQgbgBgTgQQgNgKAWgKQAMgGAcgJQAMgFAjgDIA2gFQAGgBAqgPQAegKASAGQAeALhQANQgIAAgbANQghAOgZARQgZARgcAAIgEAAg");
	this.shape_72.setTransform(349.7295,274.6314);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFF8").s().p("AArArQgbgWgTgMQgZgPgVAGIgfAOQgPAHgMgWQgMgYARgVQANgQAXAQQAIAFAXADIAkAGQANADAZAPQAjAVASAJQAdAOgLALQgGAGgaAHIgGABQgMAAgRgMg");
	this.shape_73.setTransform(320.5247,269.1671);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFF8").s().p("AheAgQgHgRgDgCQgpgaAFgLQAFgKAUABIAoAEQAMAAAZAIQAXAIATgBIA7gDQAmgCASAAQAXABAAAJQgBAIgTgDQgPgCgaAEIgnAEQhEAKgnAQQgRAGgHAAQgEAAgBgCg");
	this.shape_74.setTransform(338.9981,256.0945);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFF8").s().p("AhXAPQgPgEAXgLQAVgKALgCQASgCAVADQARACANgDQAUgEATAAQASAAALAEQAKAEgOAIQgNAHgRAEQgNADgQAAIgpABIgrACIgHAAQgMAAgLgCg");
	this.shape_75.setTransform(356.9623,239.2861);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFF8").s().p("AhAAcQAFgPAPgMQANgJASgLQAVgOAMgDQAogKAGAYQACAIgHAGQgIAHgOgCQgVgEgSAPQgaAXgRAFQgKAEgFAAQgKAAAEgMg");
	this.shape_76.setTransform(349.77,231.3679);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFF8").s().p("AjHA+QgKgOACgqQACgiAkgWQAWgOAWgEQAmgHAJAQQAEAHgBAdQgBAQAnABIBmgFQA4gDArAQQAgANALAPQAIAKgogCQgogDg4gOQgtgMgfANQggANgGgBQgQgDgmAOIhCAWQgNAEgJAAQgPAAgHgJg");
	this.shape_77.setTransform(293.9426,245.5027);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFF8").s().p("AgOA/IgBgbIABgUQABgPgCgQQgCgTAIgQQADgGAJgNQAHgHADAbQAEAYgBARIAAAmQgDAcgNAJQgEAEgDAAQgGAAgBgIg");
	this.shape_78.setTransform(89.1111,289.5117);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFF8").s().p("AgMDpQgQgNAEgUQADgMgCgSQgBgVAAgIQABgKAMggQALgiACgKQABgHAPgeQAPgdAEgdQAFgegKgSQgRgbgNgfQgOghgggZQgXgTAEgIQAGgOAaAWQAaAWAHAWQAFAOAUAiQAWAiAGAQQAJAZABAeQAAAegKAvQgHAhgJA7QgJAxgNAaQgJAUgKAAQgFAAgFgFg");
	this.shape_79.setTransform(79.5709,307.1307);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFF8").s().p("AAvA9IgngNQgKgEgFgLIgOgjQgKgSgWgVQgRgPADgCQAJgFAfAOQAeAOATARQAPANAKAQIARAZQAIALgJAIQgGAGgHAAIgDAAg");
	this.shape_80.setTransform(92.5584,109.9467);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFF8").s().p("AgJAoQgSgKgDgMIgNgiQgJgYAHgFQALgIAoARIAHAEQAFAEAOAQQAPATACALQABAMgHAIQgIAJgOABIgEAAQgMAAgOgIg");
	this.shape_81.setTransform(123.4594,124.0796);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFF8").s().p("AATAiQgQgLgDgLQgCgIgTgKQgTgMgEgMQgDgNALAAQAFAAAIADIAXAKIASAUQATAVAFAKQAGAKgDAIQgCAEgFABQgFAAgOgKg");
	this.shape_82.setTransform(55.1857,79.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFF8").s().p("AABAoQgBgMABgQQABgKgJgaQgJgWAGgBIACgBQADAAAFABQADACAEAWIAFAgQAFAXgKAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQgCAAgBgJg");
	this.shape_83.setTransform(58.2395,23.3271);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFF8").s().p("AAEAxIgIgNQgHgHgHgdQgHgcACgLQACgLAFgBQAFgBAKAEQAGADAEAXQAGAaAEAIQANAUgTASQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgDg");
	this.shape_84.setTransform(43.5008,19.2413);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFF8").s().p("AgOApQgDgTAEgQQAFgSAGgPQAHgTAHgCQAEgBAAAIQAAAJgGAGQgFAFgDANIgIApQgDAQgCAAQgCAAgBgIg");
	this.shape_85.setTransform(67.7607,4.8705);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFF8").s().p("AACA3QgFgCgIgKQgCgDAFgMQAGgOgEgYQgFgaABgLIABgFQALgLAGArQAGAogCAXQgBAMgGAAIgDAAg");
	this.shape_86.setTransform(79.9342,15.9712);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFF8").s().p("AAcA5QgMgGgCgGIgEgNQgDgHgGgBQgDgBgNgSQgPgSgHgEQgQgJAAgOQgBgKAHgIQADgFAQAHQAIADAHAFIANAPQAOAPAHAEQAJAEAFAFQAGAFAHALQALASgJAdQgBACgFABIgCAAQgFAAgJgEg");
	this.shape_87.setTransform(72.2683,18.3785);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFF8").s().p("AADAgIgTgBQgLAAgIgDIgygSQgFgDgEgHQgFgJAGgGQAKgLAJgDQAQgGATALQAPAIATgEQASgEAQAIQARAJAYAEQAUADADABQAGAHgCAEQgBAGgPADQgtALgXAAIgKAAg");
	this.shape_88.setTransform(39.7764,31.4905);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFF8").s().p("AAjAwQgIgCgJgIIgigjQgbgWgLgQQgGgHAKgDQAIgDAGACIAVAOQAVANAYACQAaACACAJQABAFgFAKQgCAZgEAIQgDAGgGAAIgEAAg");
	this.shape_89.setTransform(52.0466,29.9811);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFF8").s().p("AA5AeQgUgDgXgLQgTgJgXgBIgmgDQgTgDgBgHQgBgHALgHQAKgFASgDQARgDAPACIAQAEQADACALAAQARABAZAHQAKACAGAKIALATQAGAIgCACQgFABgDADQgDACgIAAIgLgBg");
	this.shape_90.setTransform(75.3475,39.9536);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFF8").s().p("AB/BJQgugMgRgBQgZgBgSgGIgNgGQghgMglgBQgYAAgMgGIgfgUQgSgKgJgRIgEgPQgCgIALgNIAQgRQAGgIAWAGQAbAHAUAbQASAbAeAGQAPADAYgBQAPABAeANQAfANARANIAeAXQANALgCAGQAAADgGAAQgJAAgTgFg");
	this.shape_91.setTransform(34.1682,43.2871);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFF8").s().p("AiqBMIADgMIAAgQQAAgPAGgRQAHgQAGgFIAPgQQASgXBAgFQAUgBAbgOQAagOANgCQAXgCAeANQAQAHALAHIATALIAhAVQATAOhRgTQg9gLgfAAQgSAAgLAIQgLALgMAIIgpAaIgqAaQgLAJgNAPQgMAOgFACIgEABQgDAAAAgFg");
	this.shape_92.setTransform(43.1116,61.3971);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFF8").s().p("AhdA5IgMgLQgKgHAdgOIAngPQA6gTArgfQAcgVAPAFQAJAEACAMQABAJgwArQgKAJg5AVQgeALglAEIgMABQgGAAgCgBg");
	this.shape_93.setTransform(27.1088,76.3454);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFF8").s().p("AhyAnIgfgDQgMgBgRgFQgVgGAEgUQACgQANgIQAEgDARgBQARgBAJACIAeAKQAZAHASgIQASgJAegEIAwgGQAkgGBEgBQAbgBAHAFQAFADAHAMQAOARg3gOQgkgKgrAIQgOACgdASQgfAVgPAFQgcAKgUADQgNACgNAAQgLAAgKgCg");
	this.shape_94.setTransform(79.6747,89.3666);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFF8").s().p("ABcA6QgmgDgOgHQgJgFgngPQgmgNgDgDQgEgEgJgDIgNgFIgogWQgMgBgGgEQgMgHAYgMQAbgOAXAEQARADAUAPIAiAZQAUANAYABQAbADAkATQAkATgGAJQgFAHgbAAIgNAAg");
	this.shape_95.setTransform(46.6179,86.9737);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFF8").s().p("AA6APQgagDgBgBIgVACQgVACgJAAQgUgCgJgDQgGgCgsgFQgKgBABgGQABgHAHgBIAWgDQARgCAJACIAUAFQAMADAMgBIAggCIAggCQAMAAAVALQATAJACAFQABAEgXAAIgegCg");
	this.shape_96.setTransform(24.2476,97.2929);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFF8").s().p("ABXA/QgSgFgFAAQgZAAgegSIgmgXQgYgMgHgFQgRgLgJgSQgJgQAFgLIAGgHQAKgBADAGQABACgBADIALALQAMALANABQAcADAUAQIAQAOQAHAHAMAFQAMAFAFAGIAUAYQAMAOgHAAIgDgBg");
	this.shape_97.setTransform(60.9519,108.0097);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFF8").s().p("AAvBGIgYgRQgMgIgGgLQgFgKgGgCQgGgDgFgMQgGgSgKgOIgVghQgFgLALgCQAMgDARAWQANAQAJAXIAOAaQAHALAPAMQAOAMADAIQABAEgBAJQAAABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgGgCg");
	this.shape_98.setTransform(90.5333,121.6632);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFF8").s().p("AA1BbIgXglQgLgTgLgBIghAGQgSACgGgnQgHgvgQgLQgRgOAFgYQACgJAJABQAFAAAKAEQABAAALAUQALAWAUANQATAOAZAJIAmANQAPAGADAdQACAPgCAbQABAIgDAIQgDAKgFADQgCACgDAAQgIAAgJgLg");
	this.shape_99.setTransform(111.0069,135.5037);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFF8").s().p("AAhB3QgfgXgcgRQgpgagIgCQgGgCgvAAQgqAAgmg7QgggygEgpQgDgeAXALQAVALAHAQQAFAMAYAEQAbAFAlgLQAigLAPAQQAKAKAYAoQAZAgAMAHQAOAJA7ASQAuAPAUgBQAdAAALACQAcAFAMAOQAHAIACAPQACAJgOABQgNABgVgFQgYgGgeACQglACgbAQQgPAIgNAAQgKAAgKgFg");
	this.shape_100.setTransform(106.49,158.7219);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFF8").s().p("AA2BBIgHgHQgMgFgSgEQgjgIgcADQgdADgKgHQgLgNgMgKQgPgNgDgiIABghQAWgOAdAXQAQAOAcAdQAQANATAFIA3AIQAgAFARANQAJAIAHAKQAGAFgMAEQgHACgcAGIgNABQgKAAgHgEg");
	this.shape_101.setTransform(65.789,126.3745);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFF8").s().p("ABrBQQgQgMgRgVQgKgMgLACIgjAPQgUAJgDgFQgCgRgJgTQgGgNgSADQgZAEgPgFQgRgHgTgiQgNgYgEgPQgEgRAMACQAJACANAIQAGAEAXAEQAlAGATAFQAaAGAMANQATAUAIAFQARAKAXAKIAgAQQAOAJACAMQABAIgEAYQgCALgHAAQgGAAgKgHg");
	this.shape_102.setTransform(46.9842,144.1624);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFF8").s().p("AgbATQgHgiAEgWQADgOAJACQAFABALAJQAFAFADgBQADAAALgEQAKgCACAHQACAGgDASQgEAWgEALQgIARgRAJQgDACgDAAQgNAAgGggg");
	this.shape_103.setTransform(13.9923,145.5464);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFF8").s().p("AgyAUQgLgHANgRQANgTAQgDQAHgBAMAFQADACAVAAQAUABAIAEQAIAFgIAEIgMAEIgUAEQgUAGgOAJQgSAKgEAAQgCAAgMgHg");
	this.shape_104.setTransform(6.3116,159.8089);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFF8").s().p("AhEASQgSgJAfgRQAdgRAPAAQAdgBAuABQAOAIgDAKQgDAHgZAKQgbALgZACQgcADgIAAIgBAAQgKAAgQgIg");
	this.shape_105.setTransform(69.5534,187.5763);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFF8").s().p("Ai4AhIAKgVQAEgKAfgJIAsgMQAMgEASAAIAbABQAZABAqAKQAZAGAZgNQANgHANgJQAkgJAYAFQAWAGgBANQgCAShHAMQgSADgXAIQgVAGgIAEQgHAEgSAAQgTABgMgFQgOgFgjgHQglgHgQAAQgNAAgWAOQgWAOgGAAIgBAAQgIAAADgIg");
	this.shape_106.setTransform(47.1187,250.9256);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFF8").s().p("AgaAfQgPAAgGgCQgIgDgHgJQgHgKAdgQQAagPAZgGQAIgCALABQAJABAEACQACABAFAJIAMATQAHAKgMAGQgGACghAIQgWAFgGAAIgQgBg");
	this.shape_107.setTransform(52.1359,276.43);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFF8").s().p("AhFAbQgIgCgIgLQgIgKAdgNQAagNARAAIAUgBIAggEQAUgEAgAPQAMAFgRAIQgZAJgIAEQgOAHgaAGQgaAFgUABQgWAAgGgCg");
	this.shape_108.setTransform(43.9205,311.0669);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFF8").s().p("AAfAaIgggGQgMAAgVgQQgUgOgBgIQgCgNAaAIIAkAOQAMACAVANQAVAOgDAFQgCACgHAAIgQgBg");
	this.shape_109.setTransform(123.3885,296.2425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFF8").s().p("AhXARQgDgBgPgUQgMgPAWgBIAoAFQBNAKAfAAQAVAAALADQANACAKAKQAJAJgcAAIgsgDQg7AAgpAEIgOABQgNAAgFgEg");
	this.shape_110.setTransform(107.525,272.1058);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFF8").s().p("AALAcQgfgDgTAAQgYAAgCgIIACgQQAAgFAQgHQANgGALgCIAOABQAKABALgCIAigHQAUgDAAAFQgBAGgIANIgQAXQgGAKgWAAIgCAAg");
	this.shape_111.setTransform(129.0006,271.2732);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFF8").s().p("Ag1ASQgBgKASgLQAQgMAVgFQAJgDASAFQATAFAGAHQAGAGgXAFQgTAEgYABQgMAAgVAJQgGADgDAAQgEAAAAgEg");
	this.shape_112.setTransform(34.5344,115.2014);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFF8").s().p("AhLAVQgZgLgEgOQgEgMAhgBQATgBAiACQAKAAAdgHQAfgHAigBQAagBgDARQgCARggAHQgOADglAMQgWAHgVABIgEAAQgZAAgXgLg");
	this.shape_113.setTransform(40.8648,169.3013);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFF8").s().p("AggAVQghgGAfgTQAegTAfABQAXAAAAANQAAAHgEAFQgIAHgOAFQgTAIgTAAQgJAAgJgCg");
	this.shape_114.setTransform(13.5742,237.2615);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFF8").s().p("ABOAjIglgTIgmgTQghgQgPgCIg+AAQgugBgHgIQgIgJAvgEQAvgDAfAHIA0AHQAcAEAMAFQALAFApgIQArgJANAFQANAFgUAcQgOAWgSAQQgEAEgGAAQgLAAgTgKg");
	this.shape_115.setTransform(16.2416,224.9597);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFF8").s().p("AAMA8IhagQQgbgDhGggQhMgjgCgUQgCgTApADQAXACA1AHQAOABBEALQA5AJAjgBQBvgCA8AMQASADANAGQAQAHAAAHQABAHgwAPQhAAVgWALQgVAKgjAAQgYAAgdgEg");
	this.shape_116.setTransform(127.5456,210.3312);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFF8").s().p("AAAArQgagBgLgSQgJgMgDgbQgCgTArgFQAdgFAOADQAQADgBARIgDAdQAEAPgKAKQgMAKgYAAIgFAAg");
	this.shape_117.setTransform(56.4269,223.8095);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFF8").s().p("AgGAbQhMgcgTgVQgSgUAQgGQAOgGAbAKIAmAPQATAGAeAHQAsAJARAIQAZANABAbQAAAFgGABIgXAEIgFABQgVAAg/gZg");
	this.shape_118.setTransform(27.979,201.8371);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("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");
	this.shape_119.setTransform(187.625,197.3199);

	this.instance = new lib.Blend();
	this.instance.setTransform(245.05,423.55,0.9985,0.8449,0,0,0,67.9,49.9);
	this.instance.alpha = 0.1484;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.8,465.5);


(lib.Cloud05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1();
	this.instance.setTransform(54.8,25.65,1,1,0,0,0,47.6,20);
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("AnCDvQhagGABg8QAChGBbACQAtABAuAPQgVgaAFggQAGgnAsgUQApgRA3AaQAbANAUAPQgdgZgMgtQgMgwANguQAhh0CUAAQCRAAAfB5QAPA9gOA7IAIgQQAKgUANgQQAsgwA/AWQA8AVgFA3QgCAbgOAYIAbgUQAggQAcAWQAYATgIAhQgEAQgJAMQAzgnAyAbQAyAagdAyQgeAyiiAHQhqAEh1gNQg7gGiaABQiFAChHAFQiCAJgPAAIgCgBg");
	this.shape.setTransform(53.9711,23.9513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud05, new cjs.Rectangle(0,0,108,47.9), null);


(lib.Cloud04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_2();
	this.instance.setTransform(94.05,35.75,1,1,0,0,0,81.7,27.9);
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("AsEFOQiagJAChUQAChiCcADQBPABBNAVQgjgjAIgtQALg3BMgbQBGgYBfAkQAuARAhAWQgygjgUg/QgUhCAWhAQAZhIBIgqQBSgwCEAAQD5AAA1CoQAbBVgYBTIANgXQARgdAYgVQBLhDBsAfQBmAdgHBNQgDAmgYAhIAtgcQA3gWAvAfQAqAbgOAtQgHAWgPARQAqgaAygDQAugEAkAQQAlAPALAcQAMAegZAiQgzBGkWAJQi2AGjJgSQhkgJkKACQjiACh9AHIh2AJQg4ADgqAAIgkAAg");
	this.shape.setTransform(92.546,33.4391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud04, new cjs.Rectangle(0,0,185.1,66.9), null);


(lib.Cloud02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(100.2,42.45,1,1,0,0,0,87,33.1);
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0C6CB").s().p("As2GLQilgJAChlQADhzCnADQBTACBTAYQgmgpAJg2QALhBBRggQBKgcBmAqQAxAVAjAaQg1gqgVhLQgWhPAYhMQAahUBMgyQBYg6CMAAQEKAAA5DIQAcBkgZBjIAOgbQASgiAZgZQBQhQBzAkQBtAjgIBcQgEAtgZAnIANgMQARgNASgIQA7gaAyAlQAsAfgOA1QgIAbgQAUQAtgeA1gFQAxgEAnATQAnASAMAhQAMAkgaAnQg2BTkpALQjCAHjWgVQhqgLkbADQjyADiEAHIh+ALQg5AFgsAAIgpgCg");
	this.shape.setTransform(98.5767,39.6583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud02, new cjs.Rectangle(0,0,197.2,79.3), null);


(lib.Cloud01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(57.1,35,1,1,0,0,0,51.1,27.4);
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE9EB").s().p("AlkFIQivgBgjhCQgQggAGgdQAGgaAWgQQAWgQAdACQAfACAcAYQgKgQgGgWQgKgrAZgaQAcgfAjATQASAKAMAQQgQgfgEglQgIhKA/geQBCghAyA/QAZAfALAlQgShPANhSQAbijCbgGQBSgEA2AsQAuAnATBEQAQA9gKBAQgKA/gfAjIAxgqQA6gkAtAWQAxAXAIA0QAIArgVAjIAegMQAkgMAegCQBigGAFBdQAFBRhgAMQghAEgzgDIhKgFQhMgEiQAEQilAFg/ALQh3AWhuAAIgJAAg");
	this.shape.setTransform(57.8824,32.8642);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud01, new cjs.Rectangle(0,0,115.8,65.7), null);


(lib.Moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moon();
	this.instance.setTransform(36.15,37.05,0.4056,0.4056,0,0,0,89.1,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.4,74.2);


(lib.Cloudwhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cloud03();
	this.instance.setTransform(193.05,191.75,0.6637,0.9954,0,0,0,135.8,60.5);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CloudsBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cloud02();
	this.instance.setTransform(110.15,39.6,1,1.0416,0,16.2411,0,98.6,39.6);
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.3,79.3);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_3();
	this.instance.setTransform(44.95,60.25,0.5059,1.0166,0,0,0,119.7,50.5);
	this.instance.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#978EB5").s().p("AOpJUQh+gNgvgDQi2gMlNgEQmFgEiTAQQkmAhkLgLQmZgQhKh/Qgkg8ASg2QAQgyA1gcQA2gcBDAGQBJAHA+AuQgWgfgKgoQgUhRA8gwQBFg4BRAnQAoAUAaAeQgjg7gFhFQgKiLCVg1QCfg3BuB5QA3A9AXBHQgIglgEg5QgIhyAZhfQBOkwFuAAQDAAAB5BXQBpBMAlCBQAgB0geB4QgeB0hLBAIAigZQAqgdArgUQCLhBBnAsQBvAxAPBiQANBSg0A/IBHgTQBWgTBHgCQDmgFADCwQADCZjjAOQgYACgdAAQg9AAhRgHg");
	this.shape.setTransform(46.0053,55.8305,0.5059,1.0166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-22.6,-5.4,137.2,122.5), null);


(lib.MoonandStars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Moon
	this.instance = new lib.Moon("synched",0);
	this.instance.setTransform(-8.75,23.15,1,1,0,0,0,36.1,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Stars
	this.instance_1 = new lib.stars();
	this.instance_1.setTransform(119.3,97.65,0.7355,0.8895,0,0,0,652.6,137.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MoonandStars, new cjs.Rectangle(-360.6,-38.4,941.4,272.4), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Snowflakes
	this.instance = new lib.Snowflakewhite("synched",0);
	this.instance.setTransform(311.85,431.8,1,1,0,0,0,11.8,11.3);

	this.instance_1 = new lib.SnowflakesBlue("synched",0);
	this.instance_1.setTransform(512.85,377.65,1,1,0,0,0,19.2,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBDFED").s().p("AgqBSIAIgUIgRADIgDgSIAcgEIANggIgiAFIgKAZIgRgHIAGgPIgVADIgCgSIAVgEIgLgMIAPgMIASAXIAfgFIgUgaIgbAEIgDgTIARgCIgOgRIAQgMIAMARIAHgPIARAGIgKAaIAVAaIAKgeIgQgWIAOgMIAKAOIAIgUIASAHIgIATIARgCIACASIgbAEIgMAgIAhgFIALgZIARAHIgHAPIAVgCIACASIgVACIALANIgPAMIgRgXIghAFIAUAaIAcgEIADATIgRACIANARIgPAMIgNgRIgGAPIgRgHIAKgaIgVgaIgLAfIAQAVIgNAMIgLgNIgIAUg");
	this.shape.setTransform(772.6,357.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBSIAHgUIgQAEIgDgTIAcgFIAMgeIgiAEIgKAZIgRgHIAHgPIgWADIgDgSIAXgEIgMgMIAPgLIASAVIAggEIgVgaIgbADIgDgSIARgCIgNgRIAPgLIANAQIAGgPIARAGIgKAaIAUAaIAMgeIgQgWIANgMIALAOIAIgUIARAHIgIATIAQgCIAEASIgcAFIgMAeIAhgEIALgZIARAGIgHAQIAVgCIADASIgVACIAKANIgPAMIgRgWIghAEIAVAaIAcgDIACASIgRACIANARIgPALIgMgRIgHAQIgRgHIAKgaIgUgaIgMAfIARAVIgNAMIgLgNIgIAUg");
	this.shape_1.setTransform(937.15,210.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBDFED").s().p("AgXAuIAEgLIgJACIgCgLIAQgCIAHgSIgTADIgGAOIgJgEIADgIIgMABIgBgKIAMgCIgGgGIAIgHIAKAMIASgCIgLgPIgQACIgBgKIAJgBIgHgKIAIgGIAHAJIAEgJIAKAEIgGAPIAMAPIAGgSIgJgMIAHgHIAGAIIAEgLIAKAEIgEALIAJgCIACALIgQACIgHARIATgCIAGgPIAKAFIgEAIIAMgBIABAKIgMABIAGAHIgIAHIgKgNIgSADIALAPIAQgDIABALIgJABIAHAKIgIAGIgIgJIgDAIIgKgEIAGgOIgMgPIgFASIAIAMIgHAGIgGgHIgEALg");
	this.shape_2.setTransform(946.425,50.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAsIAEgKIgJABIgBgKIAOgCIAHgRIgSADIgFANIgJgEIADgIIgMACIgBgKIAMgCIgGgGIAIgGIAJAMIASgDIgLgOIgPACIgCgKIAJgBIgHgJIAIgGIAHAJIAEgJIAJAEIgGAOIALAOIAGgQIgIgMIAHgGIAFAHIAFgLIAJAEIgEAKIAJgBIABAKIgPACIgGARIASgDIAFgNIAKAEIgEAIIALgCIACAKIgMABIAGAHIgIAGIgJgMIgSADIALAOIAPgCIABAKIgJABIAHAJIgIAGIgHgJIgDAJIgJgEIAFgOIgLgOIgFAQIAIAMIgHAGIgGgHIgEALg");
	this.shape_3.setTransform(189.975,216.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBSIAIgTIgQACIgDgSIAbgFIAMgeIghAEIgKAZIgRgHIAGgPIgVADIgDgTIAWgCIgLgNIAPgMIARAWIAhgEIgVgaIgbADIgDgSIARgCIgNgRIAOgLIAOARIAGgRIARAIIgKAaIAUAaIAMggIgQgVIANgLIALANIAIgUIARAHIgIAUIARgDIACATIgbADIgMAfIAhgEIALgaIARAIIgHAPIAVgDIADASIgVADIAKANIgPALIgRgWIghAFIAVAaIAbgEIADATIgRACIANARIgPALIgNgQIgGAPIgRgHIAKgZIgUgaIgMAeIARAWIgOALIgKgOIgJAVg");
	this.shape_4.setTransform(379.725,130.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBDFED").s().p("AgqBTIAIgUIgQADIgDgTIAbgFIAMgeIghAEIgJAZIgRgHIAFgPIgVADIgCgSIAVgDIgLgNIAPgLIASAVIAggEIgUgaIgcADIgCgSIAQgCIgNgRIAPgLIAMARIAHgQIARAHIgKAaIAVAaIALgfIgRgVIAOgNIALAOIAIgUIARAHIgIAUIARgDIACASIgbAFIgMAfIAhgFIALgZIARAHIgGAPIAUgDIACATIgUACIAKANIgOALIgRgVIgiAEIAUAaIAcgDIADASIgRACIANARIgOALIgOgRIgGAQIgRgHIAKgaIgVgZIgLAeIARAVIgOANIgLgOIgIAUg");
	this.shape_5.setTransform(749.55,68.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBDFED").s().p("AgfCxIAEgqIgeAPIgPghIAvgXIAGhAIg6AcIgDA1IgkgCIACghIgmASIgQggIAlgSIgbgRIAUgdIAtAcIA6gbIg1glIgvAWIgPgfIAcgPIgjgXIAVgeIAjAYIACghIAkADIgEA2IA0AkIAFhBIgsgeIAUgeIAbATIADgqIAjADIgDApIAdgNIARAfIgxAYIgFBBIA6gcIAEg2IAkACIgCAiIAlgSIAQAfIgmASIAbASIgUAeIgsgeIg6AcIA1AlIAxgXIAPAhIgdANIAhAYIgVAdIghgXIgDAgIgkgCIAEg1Ig0glIgGBAIAtAeIgVAeIgagSIgEAog");
	this.shape_6.setTransform(936.1,329.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BtIALgaIgWADIgEgYIAkgGIARgpIgsAGIgOAhIgWgJIAIgUIgcAEIgEgZIAdgEIgOgQIATgQIAYAdIAqgFIgbgjIglAFIgDgZIAWgDIgRgWIATgPIASAWIAIgUIAXAJIgOAiIAcAjIAOgpIgVgdIASgPIAOARIALgaIAWAJIgKAaIAWgDIAEAYIgkAGIgRApIAsgGIAPgiIAWAJIgJAVIAcgEIAEAYIgdAEIAOARIgTAPIgXgdIgsAGIAbAjIAlgFIADAYIgWADIARAWIgTAPIgSgWIgIAVIgWgJIANgiIgbgjIgPApIAWAcIgSAQIgPgSIgKAbg");
	this.shape_7.setTransform(878.15,425.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBDFED").s().p("AhQCcIAOglIgeAFIgGgjIA0gIIAYg7IhAAIIgTAwIgggNIALgdIgoAGIgFgjIApgGIgUgZIAcgWIAhAqIA9gIIgngyIg0AHIgEgjIAfgEIgZggIAbgWIAaAgIALgeIAhANIgTAxIAnAyIAXg7IgggpIAagWIAVAZIAPglIAhANIgQAlIAggFIAFAjIgzAIIgYA7IA/gIIAUgxIAhAOIgMAdIAogFIAEAjIgoAFIAUAZIgcAVIgggpIg/AIIAnAyIA0gHIAEAjIgfAEIAYAgIgbAWIgZggIgMAeIghgOIAUgwIgngyIgWA6IAgApIgbAWIgUgZIgQAmg");
	this.shape_8.setTransform(306.1,64.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BmIAJgYIgTADIgEgXIAhgFIAQgnIgqAGIgMAfIgVgJIAIgTIgbAEIgDgXIAbgDIgNgQIASgPIAVAcIApgGIgaggIgiAEIgDgXIAVgCIgRgVIASgPIARAVIAIgTIAVAJIgMAfIAZAhIAOgmIgUgbIARgPIANARIAKgZIAVAJIgJAYIAUgDIAEAXIgiAFIgQAnIAqgGIANggIAWAJIgIAUIAZgEIADAXIgaADIANAQIgTAOIgUgbIgqAGIAaAgIAigEIADAWIgVADIARAVIgSAOIgRgVIgIAUIgVgJIAMggIgZggIgOAmIAVAbIgRAOIgNgQIgKAZg");
	this.shape_9.setTransform(502.95,198.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBPIAHgSIgPACIgDgSIAZgEIANgeIghAEIgJAZIgRgHIAGgPIgUADIgDgSIAVgDIgJgMIANgLIARAWIAfgFIgUgZIgbADIgCgRIARgDIgOgQIAPgLIAMAQIAGgPIARAHIgJAZIATAZIALgeIgPgVIAMgLIALANIAHgTIARAHIgIASIARgCIACASIgaAEIgMAeIAggEIALgZIAQAHIgGAPIAUgDIACASIgUACIAKANIgOAKIgQgVIghAFIAUAZIAbgEIACASIgQACIAMARIgNALIgNgRIgGAQIgRgHIAKgZIgTgZIgMAdIAQAVIgMALIgLgMIgIATg");
	this.shape_10.setTransform(98.4,295.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBDFED").s().p("AgeA7IAGgOIgLACIgDgNIATgDIAJgXIgXAEIgHARIgMgEIADgLIgPACIgCgNIAQgDIgIgIIALgJIANAQIAWgDIgOgTIgUADIgCgNIANgCIgKgMIALgIIAJAMIAEgLIANAFIgHASIAOATIAIgWIgMgQIAKgIIAIAJIAGgOIAMAFIgGAOIAMgCIACAOIgTADIgJAWIAXgDIAIgTIANAFIgGAMIAQgDIABAOIgPABIAIAJIgLAJIgMgQIgXADIAOATIAUgDIACANIgMACIAJAMIgKAIIgKgMIgFALIgMgFIAHgSIgOgTIgIAWIALAQIgJAIIgIgKIgFAPg");
	this.shape_11.setTransform(267.65,350.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBDFED").s().p("AALBnIgRAQIgTgTIAcgbIgKgvIgiAhIAKAnIgaAHIgHgYIgWAVIgTgUIAWgUIgXgHIAHgaIAnALIAjghIgvgOIgcAaIgSgTIARgQIgegJIAIgZIAeAJIgGgYIAagGIAKAnIAtAOIgLgvIgmgMIAIgaIAXAHIgHgeIAagGIAHAeIARgQIASATIgcAcIALAuIAighIgJgnIAagGIAGAYIAWgVIATATIgWAVIAXAHIgHAaIgngLIgjAhIAvANIAdgaIASATIgRAQIAdAJIgIAaIgegJIAGAXIgaAGIgJgmIgvgOIAMAuIAmAMIgIAaIgXgHIAHAeIgaAGg");
	this.shape_12.setTransform(350.125,292.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBDFED").s().p("AgZAyIAFgMIgKACIgCgLIARgDIAHgTIgUADIgGAPIgLgEIAEgKIgNACIgCgLIAOgCIgHgHIAJgHIALANIATgCIgMgQIgRACIgBgLIAKgCIgIgKIAJgHIAIAKIAEgJIAKAEIgGAQIAMAQIAHgTIgJgNIAHgHIAHAIIAFgMIAKAEIgFAMIALgCIABALIgQADIgIATIAUgDIAHgPIAKAEIgEAJIANgBIACALIgNABIAGAIIgJAHIgKgOIgUADIAMAQIARgCIABALIgKACIAIAKIgJAHIgIgKIgEAJIgKgEIAGgQIgMgQIgHATIAKANIgIAHIgHgIIgFAMg");
	this.shape_13.setTransform(417.975,352.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Wolf
	this.instance_2 = new lib.Wolfsvg("synched",0);
	this.instance_2.setTransform(294.25,384.7,0.1859,0.1859,0,0,0,80.7,85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#323232").s().p("AjuEKIgDgFIACgMIABgDIACgDIAEgFIACgEIADgGIAAgDIgBAAIgCgBIgFAEIgBABIgLABIgBgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgBIAAgIIABgDIABgGIAAgCIgDgDIABgEIADgGIADgEIAEgBIACgBIACgBIAHgEQAOgLALgPQAOgSAKgVQAHgNAPgCIAFgJIAKgTIAEgGIAGgKQADgGAHgBIACABIAAACIgBAFIgCAFIgEAJIALgKIAUgXIAHgKIARgaIAWgiIATgiIASgfQALgSAFgTIAFgSIAGgUQAEgNAFgNIAIgRIAFgMIAEgFIABgCIgHgBIgBABIgDACIgFAAIgJAGIgJADQgDADgDAGIAAAGIAAABIAMADIAGgCIgCABIAAABIgCACIgCADIgBABIgQAIIgCABIAAABIgFgBIAAAAIgBABIgBAAIgHgDIgCgBIgDgBIgEgDIgBgJIAAgEIABgIIACgFIABgEQAEgIAIgHQAGgEAJgEIAFgCIAmgIIACgCIAJAAIAFAAIABAAIACgDIAOgFIAEACIAOADIALADIAxAOIADACQAHgBADAIQADAJgDAIQgCAEgDAEIgLAGIgFACIgBAAIgGABIgKAAIgGgBIAAAJIgBAPIAAAAIgDAHIgDAGQgDAEAAAEIgCAEIgBABIgCAEIgGAJIgBABIgBABIgBABIACAHIgGANIgOAiIAkgkIALgKIACgEIAAgCQAAgEAEgCIACgCIAFgFIABgBIACgCIAQgQQAYgWATgYQAMgQAJgRIAAgBIADgCIAFAAIADADIAHgCIAFABIAEAJIgEAOIgBAAIgBACIgBABIgBAAIgCACIgBABIgDACIgEABIgDABIgHAIIgMAPIgKAOIgIANQgJAOgMANQgbAcgXAgIgaAgIgSAVIgRASIgCACIAAAGIgDAHIgFAGIgCAIIgLAPIgEAEIgDAGIgIAJQgEAEgDABIgCADIgEAEQgLAKgPAKIgUANIgFAEIgBABIgCACIAAACIAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIABAAIAAACIAAABIAAABIgBAAIgBADIgBAAIABABIgBAAIAAAAIgBABIAAAAIgCACIgDADIgBABIgCADIgGAFIgBAAIgBABIgBACIgCAAIgCADIgHADIgGAEIgDABQABABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgBAEIAAABIgBABIgCACIgFAFQgDACgBACIgBAAIgDADQgKAIgGACIgFAAIgGADIgBABIABABIACABIgBACIgbAPQgGAFgFACIgDABIgDABIgBAAQgIAGgJgCQgJAFgFAGQgOAPgMARIgDADIgDADIgDADg");
	this.shape_14.setTransform(281.6,422.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(289.425,394.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.instance_2}]}).wait(1));

	// Tree_Snowy
	this.instance_3 = new lib.TreeSnowy("synched",0);
	this.instance_3.setTransform(173.9,416.05,0.4628,0.5322,0,0,180,188.2,232.9);

	this.instance_4 = new lib.TreeSnowy("synched",0);
	this.instance_4.setTransform(717.35,307.2,1,1,0,0,0,188.3,232.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Clouds
	this.instance_5 = new lib.Cloudwhite("synched",0);
	this.instance_5.setTransform(552.15,89.95,1,1,0,0,0,135.6,60.2);

	this.instance_6 = new lib.CloudsBlue("synched",0);
	this.instance_6.setTransform(222.35,147.75,1,1,0,0,0,110.1,39.6);

	this.instance_7 = new lib.Cloud04();
	this.instance_7.setTransform(679.1,90.15,1,1,0,0,0,92.5,33.5);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Cloud05();
	this.instance_8.setTransform(926.6,100.9,1,1,0,0,0,54,23.9);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Cloud01();
	this.instance_9.setTransform(127.95,78.55,1,1,0,0,0,57.9,32.9);
	this.instance_9.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// SnowyGround
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DAE6EF","#D4E0EC","#C3D1E4","#A8B8D7","#8394C5","#5368AF","#495EAA"],[0,0.133,0.31,0.51,0.725,0.957,1],-3.8,-88.3,6,145.2).s().p("Eg/BALyIBogxQCIg/CihGQIEjeI+jHQcup9a7isQSGhzQUAXQIKAMEiAjIAAWxg");
	this.shape_16.setTransform(608.825,464.5013);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#ACCBE1","#A6C6DE","#98B5D5","#809AC8","#5E76B6","#495EAA"],[0,0.161,0.369,0.604,0.859,1],0,-54.5,0,129.3).s().p("Egr4AMsIAA4iQDDghGYgOQMwgcQvBjQQtBiRwEeQI4COFiB7MgsnAOBg");
	this.shape_17.setTransform(333.2,458.7499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Mountains
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFF8").s().p("AhpCjQgRgRgXguQgVgpgNgJQgVgPggAaQhAA0gUgfQgHgMACgTQABgRAIgKQChjTByAAQBKAABfA5QA3AhB8BSQAcAzgqAiQgSAOgbgFQgQgEgigRQhKgkgmARQgZALgIAYQgCAFgHApQgJA7hHAIIgMABQgjAAgagZg");
	this.shape_18.setTransform(247.0128,251.8362);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFF8").s().p("AG/EBQgZgYhGhPQg7hCgigcQhVhGgrAZQggAUgWBgQgSBOhVgCQhGgChrg0QgrgVgnAKQgdAIgqAgQgyAogeAWQg1Amg2AVQhaAhgJheQgIhOAthoQBri0BwhgQCEhyCTgFQC7gGDIDNQBOBPBmCFIC4D4QgXAMgaAAQhCAAhShPg");
	this.shape_19.setTransform(370.1146,206.8782);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFF8").s().p("AgDCWQgWgbghhBQgbg4gNgFQhWgohaAeIhQAcQgzARguAEQhnAJANg5QAFgXAZgXQAagYAigMQFZh0DjAaQBwAMByBBQBaAzBqBcQAEAogPATQgVAbg+gLQgcgFghgXIg0giQg6gehCBOQhPBdg+AAQgpAAghgog");
	this.shape_20.setTransform(146.8343,268.3316);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#563C94","#316187"],[0,1],0,-75.3,0,121.3).s().p("Eg36AOAIzFkzIAAvmQCghXDVhSQGqiiELAdQCPAQCUBmQBfBBCUCQQCaCVA9AsQByBTBdgLQBZgLBujVQAlhJA/iOQBWjEAXgxQCNkxB+iZQCujRDIgGQDBgGDQDbQBPBTBsCPQA/BTCCCxQD7FPDFCaQEdDfFCgCQFAgBEShmQCxhBEDicQESilCBg1QDthhEEAFQEAAFDLA1QBgAZDQBRQCpBDB9ASQC4AcD4giQD2giC/hPQCBg2CdhnQCxh0BBggQCOhGCmgTIAAeYMhmlAHzg");
	this.shape_21.setTransform(532.275,320.992);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2E1C6A").s().p("AxDCoQAIgIBBhiQBPhyBIhWQDqkaCmAAQBZAABJA8QAoAgBRBjQBMBeA3AoQBVA9BsACQCyAECShKQBbguAPgGQA8gZBAAAQB6AACWBZQBMArAyAtInLGGI4eAhg");
	this.shape_22.setTransform(874.425,254.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2E1C6A").s().p("A1yKdQnOgnmagsIrxgqIjriZIAAuJIBXAzQBrA9BnA0QFIClCcAHQDRAJDegLQD0gLAjgbQANgLAxhFQBAhbAkguQCVi7BrAAQBCAABMApQAWAMB5BQQBgA+BMAfQBtArB4ADQBEACHiAYQFIAQChgIQBZgFBtgbQArgLCagvQEOhRDPgHQB/gEBsAOQA6AHByAXQBlAVBDAGQBnAJB8gKQB8gKBng0QBDghBbhHQBfhMAogWQBNgqBUAEQDvAJClCsQBSBWAiBVIh2I/I6YFSQk2AolrArQrVBYkEAVQg3AFhUAAQk8AArag/g");
	this.shape_23.setTransform(377.825,295.332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// Moon_and_Stars
	this.instance_10 = new lib.MoonandStars();
	this.instance_10.setTransform(433.75,130.6,1.0177,1.022,0,0,0,14.1,87.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Sky
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#1A5D8E","#04215A","#001744","#001744","#001744","#051D4B"],[0,1,1,1,1,1],337.2,-92.3,337.2,-320.7).s().p("Ag4AvQgMgHgJgLIAEgPIABAAIAUAHIAIADQAOADAKgFIAAAAQAOAFAIgDIAZgUIAXgRIAHgGIgBADIgCgBIgMAKIgdA1IgLAVQgigDgYgRgABAgjIAAgBIgBABQgGABgHgBIgBAAIgOgCIACgFIABgEIAAgBIgBAAIgGACQgIACgKAAIgMgGIgOgFIAAAAIgEgBIgBAAIgDgBIAMgFIAPgFQAdACAXAJQAKAEAKAFIAAAJIgFADQgHAGgFAHIgDABQAFgGABgJg");
	this.shape_24.setTransform(282.075,400.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#1A5D8E","#04215A","#001744","#001744","#001744","#051D4B"],[0,1,1,1,1,1],317.8,-144.6,317.8,-373).s().p("AgaAmIgIgDIgUgHIgBAAIABgFQAKgbAUgaIAGgEIAHgEIAIACQARAHARAAQAKAAAIgCIAGgCIABAAIAAABIgBAEIgCAFQgEAIgHAHIgsAsIAAAAQgGADgHAAIgLgBg");
	this.shape_25.setTransform(280.275,398.735);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#1A5D8E","#04215A","#001744","#001744","#001744","#051D4B"],[0,1,1,1,1,1],240,-216,240,-478.3).s().p("AgMADQAHgUANgIQAFgCAFgBIgGAEQgTAZgKAcQAAgNAFgNg");
	this.shape_26.setTransform(276.5856,398.1625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#1A5D8E","#04215A","#001744","#001744","#001744","#051D4B"],[0,1,1,1,1,1],0,-29.6,0,-291.8).s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXgEgn0AToQgOAIgIAVQgFANABANIgCAEIgDAPQAJALALAIIAAAEQAUAiAngDIAMglIAdg1IAMgKIABAAIABgDIgHAGIgXATIAFgOIAJgNIABAAIABgEIAAgBIADgCIADgHIACAAQAGABAHgBIABAAIAAAAQgBAJgGAHIAEgCQAEgGAIgHIAEgDIAAgJQgJgFgLgEIAAgEQgWgOgfADIgOAKIgMAFIADAAIgEAAQgPAAgJALg");
	this.shape_27.setTransform(532.325,269.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(52.3,0,960,540), null);


// stage content:
(lib._72_TicTacBone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {feedbtn:19,okbtn:14,replaybtn:9,homebtn:9,letsgobtn:4,playbtn:0,win:19,lose:14,startGame:9,objective:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,32,41,50];
	// timeline functions:
	this.frame_0 = function() {
		//Initial Timeline Hold
		this.stop();
		
		// --- SOUND CODE SECTION ---
		// Variables to keep track of the music instance
		var backgroundMusic;
		var soundName = "ambient"; // Library Linkage Name to BG Sound
		
		// Listen for the Play button click
		this.playbtn.addEventListener("click", playSequence.bind(this));
		
		function playSequence() {
		    // Only start the music if it's not already playing
		    if (!backgroundMusic || backgroundMusic.playState !== createjs.Sound.PLAY_SUCCEEDED) {
		        backgroundMusic = createjs.Sound.play(soundName, {loop:-1});
		        backgroundMusic.volume = 0.05; // Optional: Adjust volume
		    }
		    this.play(); 
		}
		
		// Listen for the Home button click
		this.homebtn.addEventListener("click", goHome.bind(this));
		
		function goHome() {
		    if (backgroundMusic) {
		        backgroundMusic.stop(); // Stops the music entirely and resets it to the beginning
		        backgroundMusic = null; // Clear the variable so it starts fresh next time
		    }
		    this.gotoAndStop(1); // Return to the first frame and stop
		}
		
		//Replay Button Sound
		this.replaybtn.addEventListener("click", playReplaySound.bind(this));
		
		function playReplaySound() {
		    // Volume accepts values between 0 (silent) and 1 (maximum volume)
		    createjs.Sound.play("wind", {
		        //offset: 0, 
		        //duration: 800, 
		        volume: 0.15
		    }); 
		    
		    this.gotoAndStop(9); 
		}
		
		//Global Game Variables
		let board = ["", "", "", "", "", "", "", "", ""];
		let gameActive = true;
		
		const winningCombinations = [
		    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
		    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
		    [0, 4, 8], [2, 4, 6]             // Diagonals
		];
		
		// --- BUTTON NAVIGATION HANDLERS ---
		
		// slide 1 -> slide 2
		this.playbtn.addEventListener("click", () => {
		    this.gotoAndStop(4); // slide 2 on frame 5
		    setupSlide2Buttons.call(this);
		});
		
		function setupSlide2Buttons() {
		    // slide 2 -> slide 3
		    this.letsgobtn.addEventListener("click", () => {
		        this.gotoAndStop(9); // slide 3 on frame 10
		        resetGame.call(this);
		    });
		}
		
		function setupGameInterface() {
		    // Game Board Navigation
		    this.homebtn.addEventListener("click", () => {
		        this.gotoAndStop(0); // Go back to Frame 1
		    });
		
		    this.replaybtn.addEventListener("click", () => {
		        resetGame.call(this);
		    });
		
		    // Clear previous cell event handlers before initializing
		    for (let i = 0; i < 9; i++) {
		        let cell = this["cell" + i];
		        if (cell) {
		            cell.removeAllEventListeners("click");
		            cell.addEventListener("click", () => {
		                if (board[i] === "" && gameActive) {
		                    makePlayerMove.call(this, i);
		                }
		            });
		        }
		    }
		}
		
		// slide 4 (Tie/Lose Screen) Interaction
		function setupSlide4Buttons() {
		    this.okbtn.addEventListener("click", () => {
		        this.gotoAndStop(9); // Jump directly back to slide 3
		        resetGame.call(this);
		    });
		}
		
		// Slide 5 (Win Screen) Interaction
		function setupSlide5Buttons() {
		    this.feedbtn.addEventListener("click", () => {
		        this.gotoAndPlay(24); // Returns to Frame 3 and plays animation timeline sequence
			});
		}
		
		
		// --- TIC TAC TOE CORE GAMEPLAY ---
		
		function resetGame() {
		    board = ["", "", "", "", "", "", "", "", ""];
		    gameActive = true;
		    setupGameInterface.call(this);
		
		    // Empty previous visual instances out of cells
		    for (let i = 0; i < 9; i++) {
		        let cell = this["cell" + i];
		        if (cell) {
		            cell.removeAllChildren();
		        }
		    }
		}
		
		function makePlayerMove(index) {
		    board[index] = "Player";
		    
		    // Instantiate Snowflake from Library
		    let snowflake = new lib.snowflake();
			
			// CENTER REGISTRATION POINT FIX
		    let bounds = snowflake.getBounds() || {x:0, y:0, width:100, height:100}; // Fallback size if bounds aren't baked
		    snowflake.regX = bounds.width / 2;
		    snowflake.regY = bounds.height / 2;
		    
		    // Center it relative to the parent cell container coordinates
		    snowflake.x = 0;
		    snowflake.y = 0;
		
		    this["cell" + index].addChild(snowflake);
		
		    if (checkWin("Player")) {
		        gameActive = false;
		        setTimeout(() => {
		            this.gotoAndStop(19); // Go to Frame 5 (Win Screen)
		            setupSlide5Buttons.call(this);
		        }, 200);
		        return;
		    }
		
		    if (checkTie()) {
		        gameActive = false;
		        setTimeout(() => {
		            this.gotoAndStop(14); // Go to slide 4 (Tie/Lose Screen)
		            setupSlide4Buttons.call(this);
		        }, 200);
		        return;
		    }
		
		    // Hand turn to AI with a short artificial brain delay
		    gameActive = false; 
		    setTimeout(() => {
		        makeAIMove.call(this);
		    }, 200);
		}
		
		function makeAIMove() {
		    // Look for empty array items
		    let emptyCells = [];
		    for (let i = 0; i < board.length; i++) {
		        if (board[i] === "") emptyCells.push(i);
		    }
		
		    if (emptyCells.length > 0) {
		        // AI selects a random open position
		        let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		        board[randomIndex] = "AI";
		
		        // Instantiate Cloud from Library
		        let cloud = new lib.cloud();
				
				// CENTER REGISTRATION POINT FIX
		        let bounds = cloud.getBounds() || {x:0, y:0, width:100, height:100}; // Fallback size if bounds aren't baked
		        cloud.regX = bounds.width / 2;
		        cloud.regY = bounds.height / 2;
		        
		        // Center it relative to the parent cell container coordinates
		        cloud.x = 0;
		        cloud.y = 0;
				
		        this["cell" + randomIndex].addChild(cloud);
		
		        if (checkWin("AI")) {
		            setTimeout(() => {
		                this.gotoAndStop(14); // Go to slide 4 (Lose Screen)
		                setupSlide4Buttons.call(this);
		            }, 200);
		            return;
		        }
		
		        if (checkTie()) {
		            setTimeout(() => {
		                this.gotoAndStop(14); // Go to slide 4 (Tie Screen)
		                setupSlide4Buttons.call(this);
		            }, 200);
		            return;
		        }
		
		        gameActive = true; // Turn control back over to player
		    }
		}
		
		function checkWin(player) {
		    return winningCombinations.some(combination => {
		        return combination.every(index => {
		            return board[index] === player;
		        });
		    });
		}
		
		function checkTie() {
		    return board.every(cell => cell !== "");
		}
		
		// Monitor the main timeline layout execution loop
		this.addEventListener("tick", checkAnimationLoop.bind(this));
		
		function checkAnimationLoop() {
		    // If the playhead wanders past your animation sequence, bounce it back to frame 10 (index 9)
		    //  Frame 51 is where the slide 3 animation sequence ends
		    if (this.currentFrame >= 50) { 
		        this.gotoAndPlay(9); // Index 9 is visual Frame 10
		    }
		}
	}
	this.frame_32 = function() {
		if (!this.soundPlayed) {
		    // Library Linkage Name to sound
		    this.mySoundInstance = createjs.Sound.play("eat");
		    this.soundPlayed = true; 
		}
	}
	this.frame_41 = function() {
		if (this.mySoundInstance) {
		    this.mySoundInstance.stop();
		    this.soundPlayed = false; // Resets the variable if the timeline loops
		}
	}
	this.frame_50 = function() {
		// 1. Stop the animation playhead from moving forward or looping
		this.stop();
		
		// 2. Jump back to the start of Slide 3 (Frame 10 is index 9)
		this.gotoAndStop(9);
		
		// 3. Clear the grid and reset the board array variables for a clean match
		if (typeof resetGame === "function") {
		    resetGame.call(this);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(9).call(this.frame_41).wait(9).call(this.frame_50).wait(1));

	// Feed_btn
	this.feedbtn = new lib.feed();
	this.feedbtn.name = "feedbtn";
	this.feedbtn.setTransform(727.35,733.7);
	this.feedbtn._off = true;
	new cjs.ButtonHelper(this.feedbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.feedbtn).wait(19).to({_off:false},0).to({_off:true},5).wait(27));

	// OK_btn
	this.okbtn = new lib.ok();
	this.okbtn.name = "okbtn";
	this.okbtn.setTransform(727.35,733.55);
	this.okbtn._off = true;
	new cjs.ButtonHelper(this.okbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.okbtn).wait(14).to({_off:false},0).to({_off:true},5).wait(32));

	// Replay_btn
	this.replaybtn = new lib.replay();
	this.replaybtn.name = "replaybtn";
	this.replaybtn.setTransform(651,996.85);
	this.replaybtn._off = true;
	new cjs.ButtonHelper(this.replaybtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.replaybtn).wait(9).to({_off:false},0).wait(42));

	// Home_btn
	this.homebtn = new lib.home();
	this.homebtn.name = "homebtn";
	this.homebtn.setTransform(208,996.85);
	this.homebtn._off = true;
	new cjs.ButtonHelper(this.homebtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.homebtn).wait(9).to({_off:false},0).wait(42));

	// LetsGo_btn
	this.letsgobtn = new lib.letsGo();
	this.letsgobtn.name = "letsgobtn";
	this.letsgobtn.setTransform(954,987.85);
	this.letsgobtn._off = true;
	new cjs.ButtonHelper(this.letsgobtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.letsgobtn).wait(4).to({_off:false},0).to({_off:true},5).wait(42));

	// Play_btn
	this.playbtn = new lib.play();
	this.playbtn.name = "playbtn";
	this.playbtn.setTransform(951,929.85);
	new cjs.ButtonHelper(this.playbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.playbtn).to({_off:true},4).wait(47));

	// Win
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVIjQg7g7ABhcQgBhdA6g5QA6g6BcAAQBcAAA7A6QA5A6AABcQAABcg5A7Qg7A5hcAAQhbAAg6g5gAhFCeQgaAAgKgXQhqkBAAgmIACmeQAAgdAVAAQAgAAA/ADQA/ADAeAAQAfAAA/gDQBAgDAfAAQAVAAAAAcIAABVIABBTQAACBgOBEQgOBFgmBnIg9CoQgIAcgeAAg");
	this.shape.setTransform(923.35,403.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiVIjQg7g7ABhcQgBhdA6g5QA6g6BcAAQBcAAA7A6QA5A6AABcQAABcg5A7Qg7A5hcAAQhbAAg6g5gAhFCeQgaAAgKgXQhqkBAAgmIACmeQAAgdAVAAQAgAAA/ADQA/ADAeAAQAfAAA/gDQBAgDAfAAQAVAAAAAcIAABVIABBTQAACBgOBEQgOBFgmBnIg9CoQgIAcgeAAg");
	this.shape_1.setTransform(866.65,403.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFsGuQg5gDgbAAIhZABIhYABQghAAAAgrIABh0IAChzIgChXIgBhVQAAgxgxAAQgwAAAAAvIAAGYQAAArgkAAQgbAAg3gCQg3gDgbAAIhXABIhXABQgkAAAAglIAAmKQAAi4goiRQgDgKAAgGQAAgQAPgGQBWgLB3gRQCvgiAaAAQARAAAEA4QAEA4AKAAIAAAAIAAAAQgGgBBdgwQBegyA+AAQBmAABKAxQBWA4AABiIAAJkQAAAjgfAAQgdAAg5gCg");
	this.shape_2.setTransform(782.925,418.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABZJaQg7gEgeAAQgcAAg6AEQg8ADgdAAQgXAAgDgOQgCgEAAgcQAAg6AChxQADhzgBg4QABiBgdkQQgCgQAAgHQAAgWAaAAQAhAABFALQBEALAhAAQAjAABFgLQBDgLAiAAQAZAAABAXIgCAWQgeE9AABUQABA4ADBzQACBxAAA6QAAAcgBAEQgEAOgXAAQgdAAg7gDgAiQkeQhCgvAAhYQAAhUBEg0QA/gvBVAAQBVAAA+AvQBFA0AABUQAACxjYAAQhcAAg6gqg");
	this.shape_3.setTransform(703.15,401.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABeI5QgihShDijIhmD1QgLAagQAAIhQgCQg0gDgbAAIhRACIhRACQgQAAgMgZQlCqoAAgwQAAhDAFiGQAFiHgBhCQAAggAUAAQAjAABIAEQBHADAkAAQAgAABAgDQBAgFAfAAQANAAAAASQAABGgECOQgHCNABBGQgBAZAlBTQAlBWAQAAQAFAAAHgTQAMgaARhIQAThNABgXIAAmHQAAgbAMAAQAkAABHAFQBGADAjAAQAgAABBgDQBBgEAfAAQAWAAgBAVQAAA/gECBQgEB/AABAQAAAbAXBQQAWBMAPAdQAIASAFAAQAPAAAghWQAdhSAAgaQAAhGgFiNQgGiOAAhGQAAgSANAAQAjAABEAFQBDADAiAAQAkAABIgDQBIgEAjAAQAUAAgBAgQABBCADCHQAFCGAABDQAAAChPCkIhXC6QhRCzhdDFIgJAUQgEAEgPABQgdABgzgCIhRgDQgaAAg2ADIhQACQgPAAgKgag");
	this.shape_4.setTransform(589.65,402.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C6E6E").ss(1,1,1).p("EhkzhBXMDJnAAAMAAACCvMjJnAAAg");
	this.shape_5.setTransform(727.35,484.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#062A62").s().p("EhkzBBYMAAAiCvMDJnAAAMAAACCvg");
	this.shape_6.setTransform(727.35,484.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},5).wait(27));

	// Lose
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADxFZIhGgBQgNAAABgUIAChpQAChGAAgkIgBhUIgBhTQABhRgYghQgcgohMAAQgiAAg/AoQhCAqAAAgIAAGnQAAARgOAAIhDgBIhFgBQgOAAAAgPIACioIACinQAAiWghh/IgCgJQAAgHAJgDIBRgNIBQgMQAEAAACALQADAsAMAsQAlgdA8grQBJgtBFAAQCFAAAwBNQAlA4gBB/IAABDIgBBCIABCNIABCOQABAPgOAAIhGgBg");
	this.shape_7.setTransform(981.15,502.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCHRQgPAAAAgdQAAgwADhiIACiTQAAg3gHhtQgJhuAAg3QAAgMAOAAQANAAAbADQAaAEAMAAQAOAAAbgEQAagDAOAAQAMAAgBANQAAA3gGBuQgHBsAAA3IACCaIACCaQAAAOgMAAgAhhl4QABgnAegZQAcgYAmAAQAoAAAdAZQAcAYABAnQgBBXhhAAQhgAAgBhXg");
	this.shape_8.setTransform(928.3,490.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkSD6QhYhoAAiMQAAibBZhnQBdhqCaAAQBrAABQBLIAlAoQABABAAABQABAAABAAQAAABABAAQAAAAABAAQAEAAAIgsQAIgtALAAQAUAAAzAKQA6ANABAKIgDANQgbChAAB2IARE7IABAKQABAUgTAAQgUABgmAEQgoAEgTAAQgNABgHgyQgIgxgGAAQgEAAgiAcQgqAhgjASQg5Acg2AAQiJAAhehtgAiTiWQg2A/AABWQAABVA2A+QA4BBBVAAQBSAAA4hCQA0g/AAhTQAAhXg0g+Qg2hDhUAAQhVAAg4BDg");
	this.shape_9.setTransform(871.8,503.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjxF/QgPgJgBgHQABAGAVhvQACgMAIAAQADAAAGAEQBqA8BqAAQBFAAAtgfQA1gjAAhDIgChDQhOBfh4ABQiCAAhUheQhRhbAAiCQAAiGBOheQBShlCEAAQB0ABBEBZQALAPAFAAQAGAAgBgNIgBgdIgBgeQAAgqAJAAQAHAABEANQBGANAGADQAKADAAAPIgBD/IgCD9QAACnhIBQQhMBVilAAQifAAhjg9gAh+juQgrA2AABPQAABMAsA3QAvA9BMAAQBJAAAwg9QAsg3AAhMQABhPgsg3Qgvg9hLAAQhNAAgvA+gAkBFuIAAABIAAgBg");
	this.shape_10.setTransform(793.3,511.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AGeH2IgogCIgoACIgoACQgUAAgehrQgfhrgggBQgagChuAAIhuAAQh1AAgQACQgZACgdBqQgdBrgPAAIifAAQgOAAAAgKQAAgHAKgZICtnXQAWg6BukQQAUgtAihbQAIgbAKAAQAOAAAaAEQAaADANAAQAMAAAagDQAagFAMAAQAGAAALAbQARAnCWGCQDVIdAAAFQAAAJgRAAIgngCgAiaBpQAAAYA1AEQADABBCAAIBIAAQBlAAAAgcQAAgVhAihQg9iegYgyQiSF0AAARg");
	this.shape_11.setTransform(709.625,486.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AkGG6QgFgEgTgvQgTgvAAgJQAAgQAmAAQBPAAAlgWQANgIAagpQAZgpAAgOQAAgThmiCQhsiIgNglQgKgdAAhuIABhQIABhRQAAgQARAAQAWAAAtADQAsACAWABQALgBAAAQIgCA6IgCA8QAABWAGAqQAEAbBJBrQBIBpAQAAQAMAABAhnQBBhqAEgYQAFgkAAhdQAAgUgEgnQgEgpAAgUQAAgRALAAQAXAAAugDQAtgEAWAAQAWAAAACsQAAB4gHAYQgKAfilD1QikD1gfAdQgdAZiZAAQgTAAgFgEg");
	this.shape_12.setTransform(591.625,515.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhmFWIhDAAQgQAAAAgRIACisIACisQAAivghhpIgBgJQAAgJAJgDIBJgJQBMgOgFABQALAAAEApQADAqAJAAIAEgCIA5gkQAfgUAigIQAbgJArAAQA3AAAAAOQAABOgKBAQgDAQgMAAQgOAAgegDQgegDgQgBQhZAAgXAzQgPAeAABfIAABNQAAAoADBRQADBQAAAoQAAASgQAAIhCgBg");
	this.shape_13.setTransform(534.925,503.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAsHwIgngCIgmACIgnACQgSAAAAgSQAAhQAHihQAHiiAAhQQAAh9gIjcQi2AMhVAAQgIAAAAgHQAAgNAGgYIAJglQACgZAIgrQAEgJAIAAIAJAAQD5APBPAAQBHAACggKQBlgHgIgBQAQABACAMQgBgIAABNIACAdQACATAAAJQAAATgNAAIj5gJQgHDXAACCQAABQAHCjQAFCiAABRQAAAPgUAAIgngCg");
	this.shape_14.setTransform(471.775,487.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah8HHQgxgwABhNQAAhOAvgvQAxgxBMAAQBNAAAwAyQAxAvgBBNQABBNgxAwQgwAxhNAAQhMAAgwgxgAg5CEQgWAAgIgUQhZjVAAggIAClZQAAgZASABQAagBA1ADQA0ADAZAAQAaAAA1gDQA1gDAaABQARAAAAAYIABBGIABBFQAABrgNA5QgMA6geBVIgzCNQgIAXgYAAg");
	this.shape_15.setTransform(905,325.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AlBHFIgchjIgehCQgXgvAAgQQAAgPAKAAIAdACIAdABQBYAAAkghQAOgNAAgFQAAgEgLgKQgbgXhKhyQhKhxgIghQgDgJAAgmQAAgsADhXIABiDQAAgYAeAAQAaAAAzADQAzADAZAAQAZAAAxgDQAxgDAZAAQASAAAAAaQAAAdgDA8QgDA6AAAeQAACeAsAAQAzAAAAjXQAAgUgDgoQgDgoAAgUQAAgaATAAQAXAAAtADQAsADAWAAQAcAAA3gDQA3gDAbAAQAXAAAHAYQAMAjAAB+QAACPgKAmQgNAuicDuQhRB6h9CNQgNARgNAAIg6gCIg6gCQgdAAg4AGQg5AFgcAAQgOAAgNgQg");
	this.shape_16.setTransform(837.775,351.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAFfIhEgCIhIABIhJABQgfAAAAgfIAAlIQAAiagehvQgCgHAAgGQAAgOAMgEQASgHA4gFQBCgFAPgDQCPgdAJAAQAPAAADAvQADAuAKAAQgHAABAgmQA+gmBBAAQATAAAAAVQAAAagEA2QgEA1gBAbIADBPIACBNQgBAfhAAAIgngBIgfgDQgyAAAAAoQAAAqAFBTQAEBTAAAqQAAAkgeAAQgWAAgtgDg");
	this.shape_17.setTransform(766,338.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAFfIhEgCIhIABIhJABQgfAAAAgfIAAlIQABiagfhvQgCgHAAgGQAAgOAMgEQASgHA4gFQBCgFAPgDQCPgdAJAAQAOAAAEAvQADAuAKAAQgGAAA/gmQA+gmBBAAQATAAAAAVQAAAagEA2QgFA1AAAbIACBPIADBNQAAAfhCAAIgmgBIgegDQgzAAAAAoQAAAqAFBTQAEBTAAAqQAAAkgdAAQgXAAgtgDg");
	this.shape_18.setTransform(705.05,338.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkHEOQhrhnAAidQAAikBmhsQBphuCjAAQCiAABpBpQBoBqAAChQAACihoBqQhpBpiiAAQidAAhqhngAgtgvQgTAUAAAbQAAAbATAUQATATAaAAQAcAAASgTQATgTgBgcQABgbgTgTQgSgUgcAAQgaAAgTATg");
	this.shape_19.setTransform(635.1,338.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiZIYIhRiWIhIiFQAAgFAvgbQA5ghAdgcQAvguAAgxQAAgsgfgsIg6hTQgfg6AAhLQAAiEB8hWQBlhFCPgVIAXgDQAEABAGAOQAeBMB4C4QACADAAADQAAADg8ApQg9ApAAAtQAAAgA2BdQA3BbAABKQAABbgqBGQgtBKh8BIQhmA8hpAfQgJACgGAAQgHAAgIgPg");
	this.shape_20.setTransform(559.55,326.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5C6E6E").ss(1,1,1).p("EhkzhBXMDJnAAAMAAACCvMjJnAAAg");
	this.shape_21.setTransform(727.35,484.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#062A62").s().p("EhkzBBYMAAAiCvMDJnAAAMAAACCvg");
	this.shape_22.setTransform(727.35,484.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},14).to({state:[]},5).wait(32));

	// TicTacToeGrid
	this.cell8 = new lib.gameGrid();
	this.cell8.name = "cell8";
	this.cell8.setTransform(780.1,697.95);

	this.cell7 = new lib.gameGrid();
	this.cell7.name = "cell7";
	this.cell7.setTransform(551.45,701.75);

	this.cell6 = new lib.gameGrid();
	this.cell6.name = "cell6";
	this.cell6.setTransform(325.35,699.25);

	this.cell5 = new lib.gameGrid();
	this.cell5.name = "cell5";
	this.cell5.setTransform(778.85,478);

	this.cell4 = new lib.gameGrid();
	this.cell4.name = "cell4";
	this.cell4.setTransform(551.45,476.9);

	this.cell3 = new lib.gameGrid();
	this.cell3.name = "cell3";
	this.cell3.setTransform(325.35,478,1,1,0,0,0,2.5,0);

	this.cell2 = new lib.gameGrid();
	this.cell2.name = "cell2";
	this.cell2.setTransform(775.25,251.95);

	this.cell1 = new lib.gameGrid();
	this.cell1.name = "cell1";
	this.cell1.setTransform(551.4,256.8);

	this.cell0 = new lib.gameGrid();
	this.cell0.name = "cell0";
	this.cell0.setTransform(327.8,254.4);

	this.tictactoe = new lib.TicTacToe();
	this.tictactoe.name = "tictactoe";
	this.tictactoe.setTransform(552.45,481.75,1,1,0,0,0,332.1,332.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tictactoe},{t:this.cell0},{t:this.cell1},{t:this.cell2},{t:this.cell3},{t:this.cell4},{t:this.cell5},{t:this.cell6},{t:this.cell7},{t:this.cell8}]},9).wait(42));

	// Objective
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5HqQgUgdAAgsQAAgrAVgdQAVgdAjAAQAiAAAWAdQAWAdAAArQAAAsgWAeQgVAfgjAAQgjAAgWgggAgYDJQgKgEgDgTQgljZAAg9IAAmIQAAgdAHAAQALAAAXAEQAWADALAAQALAAAXgDQAWgEALAAQAIAAAAAcIAABQIABBOQAAC5gXCYQgJA6gOBzQgCAdgdgBQgRAAgGgCg");
	this.shape_23.setTransform(1105.475,724.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhRIVQgQAAAAgWIAAn2QABgTgmABQgnABgDgEQgCgDAAgYIgBgwIAAgwQgBgPBNgFQgCgvAAgdQAAiCAmg7QAig2A/geQA7gcA/AAQAFgBADAJIALA+IAJA9QABAKgLABIg7AGQgiAGgSAYQgdAmgBCdIA/ACIBAACQAPAAAAANIABA9IABA8QAAANgMAAIg/gBQgrgDgVAAIAADZQAAAzADBnQADBoAAAzQAAATgMAAg");
	this.shape_24.setTransform(1073.65,721.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag3H/QgLABAAgSIABkCIABkDQAAhPgGieQgGieAAhOQAAgOAMAAIAhACQAWACAJAAQAMAAAWgCIAhgCQALAAgBALIAAAKQgNEPAADDIACEDQACCtAABVQAAASgJgBg");
	this.shape_25.setTransform(1040.9761,724.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjQEDQhShsgBiXQABiYBShsQBVhtB8AAQB7AABVBtQBTBrAACYQgBCXhSBsQhUBwh8AAQh9AAhUhvgAh3iYQgsA/gBBZQAABXAuBAQAwBEBHAAQBHAAAwhEQAshAABhXQgBhZgsg/QgwhChHAAQhIAAgwBCg");
	this.shape_26.setTransform(995.85,739.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACRH/QgMAAgHgTQgsh/hTkRQgqCGhXEKQgHATgLAAIhsAAQgJAAgIgTIh8k+Qh0kiABgVQAAg8ACh5QADh3ABg9QAAgMAPAAIAhACQAWACALAAIAegBIAegCQANAAABALQgBA7gFB4QgGB2AAA8QAAAkB5ErQApBjAEAAIACgEQAIgSAXhMQAsiOAti0QACgSAAhiIgCiAIgCiAQAAgLANAAIAhACQAXACALAAQALAAAVgCIAegCQAOAAAAALQAAAugDBcQgCBcAAAvIAABbQADAkBYEaQAKAhAWA8IACAEQAEAAAnhhQB2kkABgmQgBg8gFh2QgGh4ABg6QAAgLAEAAIAkACQAYACAMAAQALAAAWgCIAigCQAMgBACAJIAAAVQAAA5AEBzQACByABA6QgBAGh4ExQgpBqhSDUQgIATgJAAg");
	this.shape_27.setTransform(909.4,724.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ai+ESQhThmAAioQAAiWBQhvQBTh0B5AAQBxAABMBlQBKBhAACMQAAA1gnASQgaANlZAeQAIBBAyAtQAwArA3AAQBfAABPhKIATgTQAFAAACABIAWAzQAVAxAAADQAAAFgJAMQhZByiKAAQiLAAhThkgAhfizQgrA2AABDQAAAPAWAAQBZABB7gXQAjgFAAgJQAAg9gogvQgngugyAAQg2AAgrA2g");
	this.shape_28.setTransform(793.925,739.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ADLIGIg4AAQgPAAAAgYQAAgjAChHIAChrIgChlQgChEAAgjQAAiChnAAQggAAg1AoQg5AqAAAkIAAGxQAAAVgNAAIg4gBIg4AAQgOAAAAgUIAAlgQAAhWgIkXQgBhXgJiqIgBgMQAAgMAHgDQAKgEA6AAQANAAAZgFQAZgGAMAAQAIAAAAAOQAABEgFCKQgECJAABFQAAAQAEABQAfgfAxgtQA6gsBBAAQBxAAArBSQAfA7AACBIgBBGIgBBFIABCMIABCKQAAAbgMAAIg5gBg");
	this.shape_29.setTransform(731.575,723.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah3E/QAAg+ADh8QACh8AAg9QAAgegYgCIgsgBQgNgEAAg4QAAgVACgXQACgSASgDIAdgBQAcgCAAgcIgBhZIgChaQAAg1ARAAQAFAABrAXQAOACAAAOQAAAggEBAQgEBAAAAgQAAAVAQAAICRAAQAKAAAAAJIgCAdIgCAcIAAAhIABAiQAAAOgRAAQgYAAgxgEQgxgEgYAAQgFAAgCApQgDAzAABeIAABsQAAA/AKAZQAOAmAtAAQATAAAkgKQAkgKASAAQAHAAAAANQAAAQgDAcIgDAsQgBANgBADQgCAFgJAGQgyAchqAAQiMAAAAibg");
	this.shape_30.setTransform(678.125,728.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AjpGdQhJhqgBiVQABibBKhpQBPhvB9AAQBLAAA5A2IAzA3QAEgCABgJIAAjsIgChJIgChJQAAgSAKAAQAWAAAsgEQAsgFAVAAQAKAAAAAPQABBegHC8QgHC8AABcQAAEgAKCUIAAAJQACAIgSACQgLABgVgBIgYgCIgaACQgSACgJAAQgIAAgBgyQgCgzgDgBQgDACgGAIQhTBrhpAAQh6AAhPhwgAh/AAQgtBBAABbQAABYAvBBQAxBEBIAAQBHAAAvhFQArhBAAhZQAAhYgshCQgwhGhFAAQhKAAgxBGg");
	this.shape_31.setTransform(592,724.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai+ESQhThmAAioQAAiWBQhvQBTh0B5AAQBxAABMBlQBKBhAACMQAAA1gnASQgaANlZAeQAIBBAyAtQAwArA3AAQBfAABPhKIATgTQAFAAACABIAWAzQAVAxAAADQAAAFgJAMQhZByiKAAQiLAAhThkgAhfizQgrA2AABDQAAAPAWAAQBZABB7gXQAjgFAAgJQAAg9gogvQgngugyAAQg2AAgrA2g");
	this.shape_32.setTransform(529.125,739.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ai+ESQhThmAAioQAAiWBQhvQBTh0B5AAQBxAABMBlQBKBhAACMQAAA1gnASQgaANlZAeQAIBBAyAtQAwArA3AAQBfAABPhKIATgTQAFAAACABIAWAzQAVAxAAADQAAAFgJAMQhZByiKAAQiLAAhThkgAhfizQgrA2AABDQAAAPAWAAQBZABB7gXQAjgFAAgJQAAg9gogvQgngugyAAQg2AAgrA2g");
	this.shape_33.setTransform(469.725,739.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AitICQgYgEgNAAQgKAAgVACIggACQgPAAAAgQQAAhRAGiiQAGijAAhRQAAhKgNmeIAAgJQAAgPAPgCIBNACQBeACBRgCQBsgBCogNQAXgCADAaQgBAUADAoQAIA4AAARQAAANgNAAQgvAAhrgGQhkgGg1ACIgsAAQgqABgDABQgMAGAAAoIAACwQAAAyASAAQA6AAB1gHQB2gGA6AAQANAAAAALIgCAlIgBAlIABAnIABAnQAAAJgNAAQgpAAhUgDQhVgDgpAAQhOAAgKACQgbADAAAYQAABBADCEQADCDAABCQAAAVgPAAQgMAAgXgCg");
	this.shape_34.setTransform(409.3742,723.7679);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjQEDQhShsAAiXQAAiYBShsQBVhtB7AAQB8AABUBtQBTBrAACYQAACXhSBsQhUBwh9AAQh8AAhUhvgAh2iYQguA/ABBZQAABXAtBAQAxBEBFAAQBIAAAvhEQAthAAAhXQAAhZgtg/QgvhChIAAQhHAAgvBCg");
	this.shape_35.setTransform(1154.65,570.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ah3E/QAAg+ADh8QACh8AAg9QAAgegYgCIgsgBQgNgEAAg4QAAgVACgXQACgSASgDIAdgBQAcgCAAgcIgBhZIgChaQAAg1ARAAQAFAABrAXQAOACAAAOQAAAggEBAQgEBAAAAgQAAAVAQAAICRAAQAKAAAAAJIgCAdIgCAcIAAAhIABAiQAAAOgRAAQgYAAgxgEQgxgEgYAAQgFAAgCApQgDAzAABeIAABsQAAA/AKAZQAOAmAtAAQATAAAkgKQAkgKASAAQAHAAAAANQAAAQgDAcIgDAsQgBANgBADQgCAFgJAGQgyAchqAAQiMAAAAibg");
	this.shape_36.setTransform(1101.125,559.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ai+ERQhThlAAioQAAiVBQhwQBTh0B5AAQBxAABMBlQBKBiAACMQAAA1gnASQgaALlZAgQAIBAAyAtQAwArA3AAQBfAABPhLIATgTQAFAAACACIAWAzQAVAxAAADQAAAFgJANQhZBxiKAAQiLAAhThlgAhfizQgrA2AABDQAAAPAWAAQBZAAB7gVQAjgHAAgIQAAg8gogwQgngugyAAQg2AAgrA2g");
	this.shape_37.setTransform(1020.525,570.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AGqFkQgSgCgKAAIgfABIgeACQgNAAAAgiQAAgiADhCIABhlQAAi4gBgUQgFhMgUgcQgYgfg8ABQgmAAgvArQgyAugBAtQgDA4AACXQAAAjADBIIACBrQAAATgLABIgfgDQgVgCgLAAIgbABIgdACQgMAAAAgVIAChpIAChqIAAivQAAhSgQgjQgXgxhBAAQglAAg1AmQg6ArAAAqIAADUIABBtIABBsQAAAVgOAAIhwAAQgMAAAAgUIAAixIABixQAAiGgXiEQgCgKAAgFQAAgKAFgBIBBgLQAUgIAogIIAFgBQAHAAAGA0QAGAzAFAAIAeggQAkgmAjgVQAzghA0AAQCJAAAmCJQAlg6A4glQA7gpA5gBQBwAAAqBQQAfA5AAB/IgBBLIgBBJIACCKIABCKQAAAdgOAAIgbgDg");
	this.shape_38.setTransform(938.325,570.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AjqECQhLhsAAiQQAAigBMhqQBQhuCDAAQBbAABEBNIAgAqIAEADQADAAAHgvQAHgtAKAAQAQAAAtALQAxANAAAKIgCANQgXCnAAB5IAPFGIAAALQABAVgQAAQgRAAghAFQgiAFgQAAQgMAAgGgzQgGg0gFAAQgEAAgcAdQgkAjgfASQgvAdgvAAQh1AAhQhxgAh9ibQgvBBAABZQAABXAvBBQAwBEBIAAQBGAAAvhFQAthCAAhVQAAhagshAQgvhGhHAAQhIABgwBFg");
	this.shape_39.setTransform(852.775,570.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AkRF0QhsiXAAjaQAAjeBqiYQBxihCzAAQBdAABWA2QBVA0AzBcQAIAOAAAHQAAAKgqA6QgsA5gGAAQgFAAgggtQgng1gjgdQg2gsg8AAQhxAAhIBzQhDBpAACOQAACLBEBrQBKB0BvAAQBuAABdhJIgLiKQgHhVAAg1QAAgNANAAQAMAAAXADIAiABIAjgBIAjgCQAMAAAAAYIgBBNIgCBMQAABpAMC0IAAAKQACAQgRAAQgJAAgigUQgjgWgKgIQhuBbiYAAQiwAAhyihg");
	this.shape_40.setTransform(777.6313,554.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ai+ERQhThlAAioQAAiVBQhwQBTh0B5AAQBxAABMBlQBKBiAACMQAAA1gnASQgaALlZAgQAIBAAyAtQAwArA3AAQBfAABPhLIATgTQAFAAACACIAWAzQAVAxAAADQAAAFgJANQhZBxiKAAQiLAAhThlgAhfizQgrA2AABDQAAAPAWAAQBZAAB7gVQAjgHAAgIQAAg8gogwQgngugyAAQg2AAgrA2g");
	this.shape_41.setTransform(675.475,570.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ADLIGIg4AAQgPAAAAgYQAAgjAChHIAChrIgChlQgChEAAgjQAAiChnAAQggAAg1AoQg5AqAAAkIAAGxQAAAVgNAAIg4gBIg4AAQgOAAAAgUIAAlgQAAhWgIkXQgBhXgJiqIgBgMQAAgMAHgDQAKgEA6AAQANAAAZgFQAZgGAMAAQAIAAAAAOQAABEgFCKQgECJAABFQAAAQAEABQAfgfAxgtQA6gsBBAAQBxAAArBSQAfA7AACBIgBBGIgBBFIABCMIABCKQAAAbgMAAIg5gBg");
	this.shape_42.setTransform(613.125,554.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ah3E/QAAg+ADh8QACh8AAg9QAAgegYgCIgsgBQgNgEAAg4QAAgVACgXQACgSASgDIAdgBQAcgCAAgcIgBhZIgChaQAAg1ARAAQAFAABrAXQAOACAAAOQAAAggEBAQgEBAAAAgQAAAVAQAAICRAAQAKAAAAAJIgCAdIgCAcIAAAhIABAiQAAAOgRAAQgYAAgxgEQgxgEgYAAQgFAAgCApQgDAzAABeIAABsQAAA/AKAZQAOAmAtAAQATAAAkgKQAkgKASAAQAHAAAAANQAAAQgDAcIgDAsQgBANgBADQgCAFgJAGQgyAchqAAQiMAAAAibg");
	this.shape_43.setTransform(559.675,559.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ADOFlIg8gBQgLAAAAgVIAChtIAChtIgBhXIAAhWQAAhTgUgjQgYgohBAAQgdAAg2AoQg4ArAAAiIAAG0QAAATgMAAIg6gBIg5gBQgNAAAAgRIACisIABitQAAibgbiDIgCgKQAAgHAIgDIBFgNIBEgNQADAAABALQADAtALAuQAggeAzgsQA+gvA7AAQBxAAApBQQAfA6AACDIAABFIgCBFIACCSIABCSQAAAQgMAAIg7gBg");
	this.shape_44.setTransform(475.825,570.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag4HhQgNAAAAgeQAAgyADhlIABiYQAAg5gHhxQgHhyAAg4QAAgNANAAQALAAAWAEQAXAEAKgBQAMABAXgEQAWgEAMAAQAJAAABAOQgBA4gFByQgGBwAAA5IACCgIACCdQAAAQgLAAgAhSmFQAAgoAagaQAXgZAhAAQAiAAAZAaQAYAZAAAoQAABahTAAQhSAAAAhag");
	this.shape_45.setTransform(430.7,557.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ACRH/QgMABgGgUQgth/hTkRQgpCHhYEJQgHAUgLgBIhsAAQgJABgIgUIh9k+QhykigBgVQABg8ADh4QACh5AAg7QAAgOAQAAIAhADQAWACAKAAIAfgBIAfgCQAMAAAAALQABA7gGB4QgGB2AAA7QAAAmB6ErQAoBiADABIAEgGQAGgQAYhNQAriOAui0QACgTAAhhIgCh/IgCiBQAAgMAMAAIAjADQAXACALAAQAKAAAUgCIAfgDQAOAAAAAMQAAAugDBcQgCBdAAAtIABBbQABAlBaEbQAJAgAWA7IACAGQAEgBAnhgQB3klAAgmQAAg8gGh3QgGh3AAg6QABgMAFAAIAkADQAXACAMAAQALAAAWgCIAigDQANAAACAJIAAAVQAAA5ACBzQADByABA6QAAAGh5ExQgoBrhUDTQgHAUgIgBg");
	this.shape_46.setTransform(362.25,555);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AjREkQhehgAAi5QAAimBbhxQBbhxCHAAQB4AABVBrQBVBrAACRQAABLgnALQgOAFiOATIiMAUQAHAZAfAOQAaALAbAAQAbAAAugSQAugSAGAAQAJAAAHANIAcBJIAYAoQAUAjAAAEQAAAIgIAIQhCBPilAAQibAAhYhagAgTh1QgSASAAAZQAAARAUAAQALAAATgEIAegFQAVgCAAgHQAAgWgOgTQgOgUgRAAQgVAAgRATg");
	this.shape_47.setTransform(1096.75,229.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AEDFyIg8gCIg/ABIg/AAQgYAAAAglIABhjIAChkIgChKIgBhKQAAgqgiAAQgiAAAAApIAAFfQAAAlgaAAQgTAAgngCIg7gCIg9ABIg+AAQgaAAAAgfIAAlUQAAiegch9IgCgOQAAgOAKgFICSgYQB9gdASAAQAMAAADAwQADAwAHAAQgFAABCgqQBDgrAsAAQBJAAA1AqQA9AxAABUIAAIPQAAAegXAAQgUAAgogCg");
	this.shape_48.setTransform(1024.875,229.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AjhEXQhbhqAAijQAAiqBYhvQBahxCKAAQCKAABaBsQBYBtABCnQgBCnhYBuQhaBsiKAAQiGAAhbhqgAgmgwQgRAUAAAcQAAAcARAVQAPATAXAAQAYAAAQgTQAQgUAAgdQAAgcgQgTQgQgVgYAAQgXAAgPAUg");
	this.shape_49.setTransform(954.8,229.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRH9QhtgEg2AAQggAAg+AEQg/ACgeAAQgUAAAAgUQAAhQAHifQAIiggBhPQAAhTgGjqIgHi0IAAgKQgCgRAQAAIGbAAQCYAABYBIQApAiAZBBQAXA9ABBAQgBA0giBEQgkBEAAgHIAAgBIAAABQAAAGAPANQBLBEAACPQAAB8hGBeQhIBhhlAAQg2AAhsgCgAhNB3QgCAEAAAlQAAAlADAHQAGALAbAAQAwAAAPgCQAqgKAAgjQAAg8htAAQgaAAgEALgAhNj6QgCAGAAAhQAAAgACAHQAGAMAWAAQBaAAAAgtQAAg4hdAAQgVAAgEALg");
	this.shape_50.setTransform(878.7,214.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AjnCJQAAgZAah0QAahxALgcQAFgNALAAQATAAArAFQAnAFAWAAIAPgCQAVAACRgZQA+gKAGAAQAMAAAAAbQAAAfgLAxIgSBOQgOBGAABJQAAANgQAAIhGgCIhHgBQgyAAh/AVIhFAMQgRAAAAgxg");
	this.shape_51.setTransform(806.325,221.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AiZELQhfhyAAiZQAAikBahrQBbhsCHAAQBhAABAAnQAUAMAAAJQAAALgYBpQgXBmgGATQgGATgMAAIgbgCIgcgCQgZAAgRATQgRASAAAeQAABCA7AAQAOAAAZgJQAYgKAEAAQAQAAAVB7QATBsAAAoQAAAZhQAVQg/AQgjAAQh+AAhfhxg");
	this.shape_52.setTransform(751.525,229.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AkbEFQhGhoAAiTQAAirBPhyQBCheCTABQAfAAA2AYIA2AXQAFAAAEgaQADgZANAAQAUAABiAYQBfAXAbAKQAKAEABAKIgDASQgaCnAABlQAABOAKCWIAHBvQAAAegaACIhtAAQgTAAgpADQgnADgVAAQgYAAgCgdQAAgdgIAAQADAAg3AjQg3AiglAAQh1AAhLhwgAgpg2QgRASAAAeQAAAcARASQAQASAZAAQAXAAAPgSQAPgSAAgcQAAhDg1AAQgZAAgQATg");
	this.shape_53.setTransform(685.9,230.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABOIIQg0gEgaAAQgYAAgxADQgxADgZAAQgUAAAAgVQAAhZAHi0QAGizAAhZIgDihQg1AEhqAMQgJgFAAgBQAAgJAKhCQAMhIABgMQAChEAKheQACgFAHAAIAJABQB5AQCuAAQA2ABCTgSIBPgJQASAAAAAMQAAAagDA1QgDA1AAAaQAAAZAGAwQAFAxAAAZQAAAPgMAAQAIAAifgLIgDClQAABZAHCzQAGC0AABZQAAAVgSABQgaAAgzgDg");
	this.shape_54.setTransform(614.325,213.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AjnCJQAAgZAah0QAahxALgcQAFgNALAAQATAAArAFQAnAFAWAAIAPgCQAVAACRgZQA+gKAGAAQAMAAAAAbQAAAfgLAxIgSBOQgOBGAABJQAAANgQAAIhGgCIhHgBQgyAAh/AVIhFAMQgRAAAAgxg");
	this.shape_55.setTransform(552.375,221.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiZELQhfhyAAiZQAAikBahrQBbhsCHAAQBhAABAAnQAUAMAAAJQAAALgYBpQgXBmgGATQgGATgMAAIgbgCIgcgCQgZAAgRATQgRASAAAeQAABCA7AAQAOAAAZgJQAYgKAEAAQAQAAAVB7QATBsAAAoQAAAZhQAVQg/AQgjAAQh+AAhfhxg");
	this.shape_56.setTransform(497.575,229.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ABAIHQgrgEgVAAQgUAAgpAEQgrACgUAAQgQAAgDgMQgCgEAAgXIADiUIABiTQAAhvgVjrIgBgUQAAgSASgBQAZABAwAJQAwAJAYAAQAZAAAxgJQAwgJAYgBQASABAAATIgBATQgWESAABIQABAwACBjIACCUQAAAXgBAEQgEAMgPAAQgVAAgpgCgAhmj2QgvgpAAhMQAAhIAwgsQAtgpA8gBQA9ABAsApQAxAsAABIQAACZiaABQhBAAgpglg");
	this.shape_57.setTransform(450.45,213.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ABOIIQg0gEgaAAQgYAAgxADQgxADgZAAQgUAAAAgVQAAhZAHi0QAGizAAhZIgDihQg1AEhqAMQgJgFAAgBQAAgJAKhCQAMhIABgMQAChEAKheQACgFAHAAIAJABQB5AQCuAAQA2ABCTgSIBPgJQASAAAAAMQAAAagDA1QgDA1AAAaQAAAZAGAwQAFAxAAAZQAAAPgNAAQAJAAifgLIgDClQAABZAHCzQAGC0AABZQAAAVgSABQgaAAgzgDg");
	this.shape_58.setTransform(396.575,213.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},4).to({state:[]},5).wait(42));

	// wolf
	this.instance = new lib.wolfSit();
	this.instance.setTransform(1675.15,1044.65,1,1,0,0,0,0.2,21);
	this.instance._off = true;

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(1675.2,1044.7,1,1,0,0,0,0.3,21.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(1675.2,1044.7,1,1,0,0,0,0.1,20.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(1675.25,1044.65,1,1,0,0,0,0.1,21.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.wolfEat();
	this.instance_4.setTransform(1675.15,1044.7,1,1,0,0,0,0.2,20.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.wolf_t3_1();
	this.instance_5.setTransform(1675.15,1044.75,1,1,0,0,0,0.2,21.4);
	this.instance_5._off = true;

	this.instance_6 = new lib.wolf_t2_1();
	this.instance_6.setTransform(1675.25,1044.75,1,1,0,0,0,0.5,22.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.wolf_t1_1();
	this.instance_7.setTransform(1675.15,1044.65,1,1,0,0,0,0.2,20.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(20).to({_off:true,regX:0.3,regY:21.2,x:1675.2,y:1044.7,mode:"synched",startPosition:0},2).wait(21).to({_off:false,regX:0.2,regY:21,x:1675.15,y:1044.65,mode:"independent"},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},2).to({_off:true,regX:0.1,regY:20.6},2).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},2).to({_off:true,regY:21.2,x:1675.25,y:1044.65},2).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},2).to({_off:true,regX:0.2,regY:20.9,x:1675.15,y:1044.7,mode:"independent"},2).to({_off:false,regX:0.1,regY:21.2,x:1675.25,y:1044.6,mode:"synched",startPosition:0},3).to({_off:true,regX:0.2,regY:21.3,x:1675.15,y:1044.65,mode:"independent"},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},2).to({_off:true,regX:0.1,regY:21.2,x:1675.25,y:1044.6,mode:"synched",startPosition:0},3).to({_off:false,regX:0.2,regY:21.3,x:1675.15,y:1044.65,mode:"independent"},3).to({_off:true,regY:21.4,y:1044.75},3).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},3).to({_off:true,regX:0.5,regY:22.3,x:1675.25},3).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},3).to({_off:true,regX:0.2,regY:20.9,x:1675.15,y:1044.65},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},3).to({_off:true,regY:21},3).wait(1));

	// BoardBG
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#195C8D").ss(1,1,1).p("AjVAAIGrAA");
	this.shape_59.setTransform(1383.275,97.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(6,40,96,0.898)").s().p("EhjoBBVMAAAiCpMDHRAAAIAAE3MAAAB9yg");
	this.shape_60.setTransform(724.225,484.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59}]},4).wait(47));

	// BG_Winter
	this.instance_8 = new lib.ClipGroup();
	this.instance_8.setTransform(906.35,554,2.0045,1.9988,0,0,0,505.3,276.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#195C8D").ss(1,1,1).p("EhbrhCMMC3YAAAMAAACEZMi3YAAAg");
	this.shape_61.setTransform(768.2,521.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("EhbsBCNMAAAiEZMC3YAAAMAAACEZg");
	this.shape_62.setTransform(768.2,521.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.instance_8}]}).wait(51));

	// stageBackground
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
	this.shape_63.setTransform(960,540);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
	this.shape_64.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63}]}).wait(51));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(958.3,540.8,983.5,540.5);
// library properties:
lib.properties = {
	id: '56D5E136EBE8BE4594F816B529085F7C',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Feed.png", id:"Feed"},
		{src:"images/food.png", id:"food"},
		{src:"images/Home.png", id:"Home"},
		{src:"images/LetsGo.png", id:"LetsGo"},
		{src:"images/OK.png", id:"OK"},
		{src:"images/Play.png", id:"Play"},
		{src:"images/Replay.png", id:"Replay"},
		{src:"images/Wolf01.png", id:"Wolf01"},
		{src:"images/Wolf02.png", id:"Wolf02"},
		{src:"images/wolf_t1.png", id:"wolf_t1"},
		{src:"images/wolf_t2.png", id:"wolf_t2"},
		{src:"images/wolf_t3.png", id:"wolf_t3"},
		{src:"sounds/ambient.mp3", id:"ambient"},
		{src:"sounds/eat.mp3", id:"eat"},
		{src:"sounds/wind.mp3", id:"wind"}
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
an.compositions['56D5E136EBE8BE4594F816B529085F7C'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;