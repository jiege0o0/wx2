var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = undefined;generateEUI.paths['resource/skin/commont/btns/Btn1Skin.exml'] = window.Btn1Skin = (function (_super) {
	__extends(Btn1Skin, _super);
	function Btn1Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn1_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn1Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn2Skin.exml'] = window.Btn2Skin = (function (_super) {
	__extends(Btn2Skin, _super);
	function Btn2Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn2Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn3Skin.exml'] = window.Btn3Skin = (function (_super) {
	__extends(Btn3Skin, _super);
	function Btn3Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn3Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn4Skin.exml'] = window.Btn4Skin = (function (_super) {
	__extends(Btn4Skin, _super);
	function Btn4Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn4Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn5Skin.exml'] = window.Btn5Skin = (function (_super) {
	__extends(Btn5Skin, _super);
	function Btn5Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(36,35,122,9);
		t.source = "btn5_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 30;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn5Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn6Skin.exml'] = window.Btn6Skin = (function (_super) {
	__extends(Btn6Skin, _super);
	function Btn6Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "btn6_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.size = 36;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn6Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn7Skin.exml'] = window.Btn7Skin = (function (_super) {
	__extends(Btn7Skin, _super);
	function Btn7Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn7Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "btn7_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 30;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn7Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn8Skin.exml'] = window.Btn8Skin = (function (_super) {
	__extends(Btn8Skin, _super);
	function Btn8Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn8Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn8_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn8Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/btns/Btn9Skin.exml'] = window.Btn9Skin = (function (_super) {
	__extends(Btn9Skin, _super);
	function Btn9Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn9Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn9_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn9Skin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/BasePanelSkin.exml'] = window.BasePanelSkin = (function (_super) {
	__extends(BasePanelSkin, _super);
	function BasePanelSkin() {
		_super.call(this);
		this.skinParts = ["bottomGroup","nameText"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.bottomGroup_i(),this.nameText_i()];
	}
	var _proto = BasePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(68,128,187,230);
		t.source = "window2_png";
		t.top = 0;
		t.y = 10;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 25;
		t.height = 90;
		t.left = 28;
		t.right = 28;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0x160D06;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3d3d3d;
		t.height = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.text = "领取补助";
		t.textColor = 0xD0C7AD;
		t.y = 33;
		return t;
	};
	return BasePanelSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/BookBGSkin.exml'] = window.BookBGSkin = (function (_super) {
	__extends(BookBGSkin, _super);
	function BookBGSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BookBGSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 50;
		t.scale9Grid = new egret.Rectangle(40,19,240,324);
		t.source = "book_bg1_jpg";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 50;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(40,24,240,319);
		t.scaleX = -1;
		t.source = "book_bg1_jpg";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 50;
		t.scale9Grid = new egret.Rectangle(40,12,240,323);
		t.source = "book_bg2_jpg";
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 50;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(40,10,240,318);
		t.scaleX = -1;
		t.source = "book_bg2_jpg";
		return t;
	};
	return BookBGSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyCheckBoxSkin.exml'] = window.MyCheckBoxSkin = (function (_super) {
	__extends(MyCheckBoxSkin, _super);
	function MyCheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group2_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","strokeColor",0xf2a221),
					new eui.SetProperty("_Rect1","strokeWeight",2)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","_Group1",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image1","_Group1",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = MyCheckBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 35;
		t.width = 35;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x000000;
		t.height = 35;
		t.strokeColor = 0xF1BB64;
		t.strokeWeight = 1;
		t.top = 0;
		t.width = 35;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "scale";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_right_png";
		t.x = -2;
		t.y = -8;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 24;
		t.stroke = 2;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xffeabc;
		t.verticalAlign = "middle";
		t.y = 5;
		return t;
	};
	return MyCheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyHSliderSkin.exml'] = window.MyHSliderSkin = (function (_super) {
	__extends(MyHSliderSkin, _super);
	function MyHSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 600;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = MyHSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xDBDBB3;
		t.height = 6;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "point2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 60;
		t.x = -15;
		t.y = 0;
		return t;
	};
	return MyHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyRadioButtonSkin.exml'] = window.MyRadioButtonSkin = (function (_super) {
	__extends(MyRadioButtonSkin, _super);
	function MyRadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
		];
	}
	var _proto = MyRadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radio_btn2_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 24;
		t.text = "123";
		t.textAlign = "center";
		t.textColor = 0xCCB48E;
		t.verticalAlign = "middle";
		return t;
	};
	return MyRadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyTabItemSkin.exml'] = window.MyTabItemSkin = (function (_super) {
	__extends(MyTabItemSkin, _super);
	function MyTabItemSkin() {
		_super.call(this);
		this.skinParts = ["label","redMC"];
		
		this.currentState = "up";
		this.height = 53;
		this.elementsContent = [this._Image1_i(),this.label_i(),this.redMC_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","tab1_png"),
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("label","textColor",0xedd580),
					new eui.SetProperty("label","left",15),
					new eui.SetProperty("label","right",15),
					new eui.SetProperty("label","verticalCenter",6.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("label","stroke",2),
					new eui.SetProperty("label","textColor",0xf6c922)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.label,"text");
	}
	var _proto = MyTabItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,18,10,21);
		t.source = "tab2_png";
		t.top = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.left = 15;
		t.right = 15;
		t.size = 22;
		t.stroke = 2;
		t.textAlign = "center";
		t.textColor = 0xf6c922;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 3.5;
		return t;
	};
	_proto.redMC_i = function () {
		var t = new eui.Image();
		this.redMC = t;
		t.right = -5;
		t.source = "red_mc_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return MyTabItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyTabItemSkin2.exml'] = window.MyTabItemSkin2 = (function (_super) {
	__extends(MyTabItemSkin2, _super);
	function MyTabItemSkin2() {
		_super.call(this);
		this.skinParts = ["label"];
		
		this.currentState = "up";
		this.width = 160;
		this.elementsContent = [this.label_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"label"),
					new eui.SetProperty("_Image2","left",-3),
					new eui.SetProperty("_Image2","source","btn_b2_png")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"label")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"label"),
					new eui.SetProperty("label","strokeColor",0x025CB5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.label,"text");
	}
	var _proto = MyTabItemSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scale9Grid = new egret.Rectangle(31,17,98,24);
		t.source = "btn_r2__png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = -5;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,17,98,24);
		t.source = "btn_b2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.height = 26;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xAFAFAF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.y = 14;
		return t;
	};
	return MyTabItemSkin2;
})(eui.Skin);generateEUI.paths['resource/skin/commont/skin/MyTextInputSkin.exml'] = window.MyTextInputSkin = (function (_super) {
	__extends(MyTextInputSkin, _super);
	function MyTextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.height = 50;
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("textDisplay","textColor",0xC1A77C)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0x563F18)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = MyTextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 34;
		t.left = "15";
		t.right = "15";
		t.size = 28;
		t.text = "123456";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 34;
		t.left = 10;
		t.right = 10;
		t.size = 26;
		t.textAlign = "left";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return MyTextInputSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn","text","closeBtn"];
		
		this.width = 540;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.text_i(),this.closeBtn_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(33,31,4,6);
		t.source = "bg14_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 30;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cancelBtn_i(),this.okBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.label = "按钮";
		t.skinName = "Btn2Skin";
		t.width = 150;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "按钮";
		t.skinName = "Btn1Skin";
		t.width = 150;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 140;
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.maxWidth = 440;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "标签标签标签标签";
		t.textAlign = "left";
		t.textColor = 0xffeba3;
		t.top = 66;
		t.verticalAlign = "top";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = -10;
		t.source = "icon_error_png";
		t.y = -10;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/BottomUISkin.exml'] = window.BottomUISkin = (function (_super) {
	__extends(BottomUISkin, _super);
	function BottomUISkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 100;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i()];
	}
	var _proto = BottomUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "title_bg4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -3;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.height = 90;
		t.source = "back_btn_png";
		t.x = 10;
		t.y = 4;
		return t;
	};
	return BottomUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/CommonNumInputSkin.exml'] = window.CommonNumInputSkin = (function (_super) {
	__extends(CommonNumInputSkin, _super);
	function CommonNumInputSkin() {
		_super.call(this);
		this.skinParts = ["input","addBtn","reduceBtn"];
		
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this.input_i(),this.addBtn_i(),this.reduceBtn_i()];
	}
	var _proto = CommonNumInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 3;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x180802;
		t.left = 55;
		t.right = 55;
		t.strokeColor = 0xA38D6A;
		t.strokeWeight = 2;
		t.top = 3;
		return t;
	};
	_proto.input_i = function () {
		var t = new eui.EditableText();
		this.input = t;
		t.height = 27;
		t.left = "35";
		t.maxChars = 3;
		t.restrict = "0-9";
		t.right = "35";
		t.size = 24;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0xedd6b4;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new eui.Group();
		this.addBtn = t;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(19,19,12,9);
		t.source = "bg16_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_add4_png";
		t.verticalCenter = -1;
		return t;
	};
	_proto.reduceBtn_i = function () {
		var t = new eui.Group();
		this.reduceBtn = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(19,19,12,9);
		t.source = "bg16_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_dec_png";
		t.verticalCenter = -1;
		return t;
	};
	return CommonNumInputSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/DownListItemSkin.exml'] = window.DownListItemSkin = (function (_super) {
	__extends(DownListItemSkin, _super);
	function DownListItemSkin() {
		_super.call(this);
		this.skinParts = ["img","text","con"];
		
		this.height = 50;
		this.elementsContent = [this._Group1_i(),this._Rect1_i(),this.con_i()];
	}
	var _proto = DownListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x38230f;
		t.height = 1;
		t.left = 5;
		t.right = 5;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this.text_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingRight = 3;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 30;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.size = 25;
		t.stroke = 2;
		t.text = "Label";
		t.x = 6;
		t.y = 0;
		return t;
	};
	return DownListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/DownListSkin.exml'] = window.DownListSkin = (function (_super) {
	__extends(DownListSkin, _super);
	function DownListSkin() {
		_super.call(this);
		this.skinParts = ["img","titleText","btn","list","scroller","listCon"];
		
		this.width = 152;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = DownListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 53;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this.titleText_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 40;
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.size = 25;
		t.stroke = 2;
		t.text = "Label";
		t.x = 45;
		t.y = 14.5;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		t.elementsContent = [this._Image2_i(),this.scroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return DownListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/LeftListSkin.exml'] = window.LeftListSkin = (function (_super) {
	__extends(LeftListSkin, _super);
	function LeftListSkin() {
		_super.call(this);
		this.skinParts = ["img","btn","list","scroller","listCon"];
		
		this.height = 53;
		this.width = 80;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = LeftListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this._Image2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 40;
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "arrow3_png";
		t.x = 13;
		t.y = 9;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 0;
		t.right = -190;
		t.width = 180;
		t.elementsContent = [this._Image3_i(),this.scroller_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return LeftListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/TipsUISkin.exml'] = window.TipsUISkin = (function (_super) {
	__extends(TipsUISkin, _super);
	function TipsUISkin() {
		_super.call(this);
		this.skinParts = ["text"];
		
		this.elementsContent = [this._Image1_i(),this.text_i()];
	}
	var _proto = TipsUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.maxWidth = 560;
		t.minWidth = 300;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(41,24,9,9);
		t.source = "black_bg_png";
		t.top = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 20;
		t.left = 30;
		t.right = 30;
		t.size = 26;
		t.stroke = 5;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 20;
		t.verticalAlign = "middle";
		return t;
	};
	return TipsUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/TopUISkin.exml'] = window.TopUISkin = (function (_super) {
	__extends(TopUISkin, _super);
	function TopUISkin() {
		_super.call(this);
		this.skinParts = ["titleText","helpBtn"];
		
		this.height = 50;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.titleText_i(),this.helpBtn_i()];
	}
	var _proto = TopUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "title_bg4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -63;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x110900;
		t.text = "标签";
		t.textColor = 0xef9f32;
		t.y = 15;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Group();
		this.helpBtn = t;
		t.height = 60;
		t.right = 0;
		t.width = 60;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "icon_help_png";
		t.x = 10.6;
		t.y = 1.51;
		return t;
	};
	return TopUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/TouchTipsSkin.exml'] = window.TouchTipsSkin = (function (_super) {
	__extends(TouchTipsSkin, _super);
	function TouchTipsSkin() {
		_super.call(this);
		this.skinParts = ["text"];
		
		this.elementsContent = [this._Image1_i(),this.text_i()];
	}
	var _proto = TouchTipsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,16,41,27);
		t.source = "border4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 20;
		t.left = 20;
		t.lineSpacing = 5;
		t.maxWidth = 320;
		t.right = 20;
		t.size = 26;
		t.text = "标签标签标签标签";
		t.textAlign = "left";
		t.textColor = 0xCCB48E;
		t.top = 20;
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 10;
		return t;
	};
	return TouchTipsSkin;
})(eui.Skin);generateEUI.paths['resource/skin/commont/ui/UpListSkin.exml'] = window.UpListSkin = (function (_super) {
	__extends(UpListSkin, _super);
	function UpListSkin() {
		_super.call(this);
		this.skinParts = ["titleText","btn","list","scroller","listCon"];
		
		this.height = 53;
		this.width = 152;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = UpListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 53;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.titleText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 50;
		t.height = 30;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this.scroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return UpListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/debug/DebugInputSkin.exml'] = window.DebugInputSkin = (function (_super) {
	__extends(DebugInputSkin, _super);
	function DebugInputSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn","inputText","titleText"];
		
		this.height = 700;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.cancelBtn_i(),this.okBtn_i(),this.inputText_i(),this.titleText_i()];
	}
	var _proto = DebugInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.bottom = 8;
		t.label = "取消";
		t.skinName = "Btn_b1Skin";
		t.x = 94;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.bottom = 12;
		t.label = "确定";
		t.skinName = "Btn_b1Skin";
		t.x = 295;
		return t;
	};
	_proto.inputText_i = function () {
		var t = new eui.EditableText();
		this.inputText = t;
		t.background = true;
		t.border = true;
		t.bottom = "130";
		t.left = "60";
		t.lineSpacing = 5;
		t.multiline = true;
		t.right = "60";
		t.size = 26;
		t.text = "标签";
		t.textColor = 0xCCB48E;
		t.top = "100";
		t.wordWrap = true;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 428;
		t.x = 21;
		t.y = 4;
		return t;
	};
	return DebugInputSkin;
})(eui.Skin);generateEUI.paths['resource/skin/debug/DebugSkillItemSkin.exml'] = window.DebugSkillItemSkin = (function (_super) {
	__extends(DebugSkillItemSkin, _super);
	function DebugSkillItemSkin() {
		_super.call(this);
		this.skinParts = ["skillName"];
		
		this.height = 250;
		this.width = 200;
		this.elementsContent = [this.skillName_i()];
	}
	var _proto = DebugSkillItemSkin.prototype;

	_proto.skillName_i = function () {
		var t = new eui.Label();
		this.skillName = t;
		t.bottom = 13;
		t.horizontalCenter = 0;
		t.text = "标签";
		return t;
	};
	return DebugSkillItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/debug/DebugSkillListSkin.exml'] = window.DebugSkillListSkin = (function (_super) {
	__extends(DebugSkillListSkin, _super);
	function DebugSkillListSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.scroller_i()];
	}
	var _proto = DebugSkillListSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.width = 200;
		t.x = 100;
		t.y = 38;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 3;
		return t;
	};
	return DebugSkillListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/debug/DebugUISkin.exml'] = window.DebugUISkin = (function (_super) {
	__extends(DebugUISkin, _super);
	function DebugUISkin() {
		_super.call(this);
		this.skinParts = ["btn0","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10","btn11","btn12","btn13","btn14","btn15","btn16","btn17","btn18","btn19"];
		
		this.height = 300;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = DebugUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 280;
		t.width = 460;
		t.x = 10;
		t.y = 10;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i(),this.btn11_i(),this.btn12_i(),this.btn13_i(),this.btn14_i(),this.btn15_i(),this.btn16_i(),this.btn17_i(),this.btn18_i(),this.btn19_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Button();
		this.btn0 = t;
		t.label = "按钮";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "按钮";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "按钮";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Button();
		this.btn3 = t;
		t.label = "按钮";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Button();
		this.btn4 = t;
		t.label = "按钮";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Button();
		this.btn5 = t;
		t.label = "按钮";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Button();
		this.btn6 = t;
		t.label = "按钮";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Button();
		this.btn7 = t;
		t.label = "按钮";
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Button();
		this.btn8 = t;
		t.label = "按钮";
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Button();
		this.btn9 = t;
		t.label = "按钮";
		t.x = 90;
		t.y = 90;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Button();
		this.btn10 = t;
		t.label = "按钮";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Button();
		this.btn11 = t;
		t.label = "按钮";
		t.x = 110;
		t.y = 110;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new eui.Button();
		this.btn12 = t;
		t.label = "按钮";
		t.x = 120;
		t.y = 120;
		return t;
	};
	_proto.btn13_i = function () {
		var t = new eui.Button();
		this.btn13 = t;
		t.label = "按钮";
		t.x = 130;
		t.y = 130;
		return t;
	};
	_proto.btn14_i = function () {
		var t = new eui.Button();
		this.btn14 = t;
		t.label = "按钮";
		t.x = 140;
		t.y = 140;
		return t;
	};
	_proto.btn15_i = function () {
		var t = new eui.Button();
		this.btn15 = t;
		t.label = "按钮";
		t.x = 150;
		t.y = 150;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Button();
		this.btn16 = t;
		t.label = "按钮";
		t.x = 160;
		t.y = 160;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Button();
		this.btn17 = t;
		t.label = "按钮";
		t.x = 170;
		t.y = 170;
		return t;
	};
	_proto.btn18_i = function () {
		var t = new eui.Button();
		this.btn18 = t;
		t.label = "按钮";
		t.x = 180;
		t.y = 180;
		return t;
	};
	_proto.btn19_i = function () {
		var t = new eui.Button();
		this.btn19 = t;
		t.label = "按钮";
		t.x = 190;
		t.y = 190;
		return t;
	};
	return DebugUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/debug/ScrollTestSkin.exml'] = window.ScrollTestSkin = (function (_super) {
	__extends(ScrollTestSkin, _super);
	function ScrollTestSkin() {
		_super.call(this);
		this.skinParts = ["removeBtn","addBtn","scroller","group"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.removeBtn_i(),this.addBtn_i(),this.group_i()];
	}
	var _proto = ScrollTestSkin.prototype;

	_proto.removeBtn_i = function () {
		var t = new eui.Button();
		this.removeBtn = t;
		t.label = "remove";
		t.x = 54;
		t.y = 191;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new eui.Button();
		this.addBtn = t;
		t.label = "add";
		t.x = 57;
		t.y = 134;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.top = 35;
		t.x = 80;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this.scroller_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 90;
		t.width = 324;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 200;
		t.width = 200;
		t.x = 52;
		t.y = 5;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 500;
		t.width = 20;
		t.x = 55;
		t.y = 110;
		return t;
	};
	return ScrollTestSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/AddCoinItemSkin.exml'] = window.AddCoinItemSkin = (function (_super) {
	__extends(AddCoinItemSkin, _super);
	function AddCoinItemSkin() {
		_super.call(this);
		this.skinParts = ["addText"];
		
		this.elementsContent = [this._Image1_i(),this.addText_i()];
	}
	var _proto = AddCoinItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.addText_i = function () {
		var t = new eui.Label();
		this.addText = t;
		t.text = "+1000";
		t.textColor = 0xffe29e;
		t.verticalCenter = 0;
		t.x = 60;
		return t;
	};
	return AddCoinItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pkRelate/PKCardInfoSkin.exml'] = window.PKCardInfoSkin = (function (_super) {
	__extends(PKCardInfoSkin, _super);
	function PKCardInfoSkin() {
		_super.call(this);
		this.skinParts = ["type","nameText","bg","cardGroup","desText","list","teamIcon"];
		
		this.width = 560;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.cardGroup_i(),this._Group2_i(),this.list_i(),this.teamIcon_i()];
	}
	var _proto = PKCardInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(26,25,6,7);
		t.source = "bg13_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 20;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.type_i(),this.nameText_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.type_i = function () {
		var t = new eui.Image();
		this.type = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_type1_png";
		t.x = 0;
		t.y = 5.6000000000000405;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 3;
		t.strokeColor = 0x281502;
		t.text = "苦顶替";
		t.textColor = 0xffffff;
		t.verticalAlign = "bottom";
		t.x = 45;
		t.y = 8.980000000000018;
		return t;
	};
	_proto.cardGroup_i = function () {
		var t = new eui.Group();
		this.cardGroup = t;
		t.height = 180;
		t.scrollEnabled = true;
		t.width = 150;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = -80;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,12,76,76);
		t.source = "border_8_png";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.left = 180;
		t.right = 20;
		t.y = 70;
		t.elementsContent = [this._Image2_i(),this.desText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg1_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desText_i = function () {
		var t = new eui.Label();
		this.desText = t;
		t.bottom = 10;
		t.left = 15;
		t.lineSpacing = 5;
		t.right = 15;
		t.size = 22;
		t.text = "Label";
		t.top = 10;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 220;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 6;
		t.requestedColumnCount = 2;
		return t;
	};
	_proto.teamIcon_i = function () {
		var t = new eui.Image();
		this.teamIcon = t;
		t.source = "";
		t.x = 22;
		t.y = 22;
		return t;
	};
	return PKCardInfoSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/card/CardInfoUISkin.exml'] = window.CardInfoUISkin = (function (_super) {
	__extends(CardInfoUISkin, _super);
	function CardInfoUISkin() {
		_super.call(this);
		this.skinParts = ["item","closeBtn"];
		
		this.height = 640;
		this.elementsContent = [this._Group5_i(),this.closeBtn_i()];
	}
	var _proto = CardInfoUISkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.top = 0;
		t.x = 0;
		t.elementsContent = [this.item_i(),this._Group4_i()];
		return t;
	};
	_proto.item_i = function () {
		var t = new PKCardInfoUI();
		this.item = t;
		t.bottom = 0;
		t.currentState = "window";
		t.left = 0;
		t.minHeight = 560;
		t.right = 0;
		t.skinName = "PKCardInfoSkin";
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 40;
		t.horizontalCenter = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type1_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 78;
		t.y = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "克制";
		t.textColor = 0xfcde83;
		t.x = 107;
		t.y = 1;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type2_png";
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type2_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 78;
		t.y = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "克制";
		t.textColor = 0xfcde83;
		t.x = 107;
		t.y = 1;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type3_png";
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 20;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label3_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type3_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 78;
		t.y = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "克制";
		t.textColor = 0xfcde83;
		t.x = 107;
		t.y = 1;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "arrow2_png";
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_type1_png";
		t.x = 10;
		t.y = 11;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.bottom = -45;
		t.horizontalCenter = 0;
		t.source = "close_btn2_png";
		return t;
	};
	return CardInfoUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/common/AwardItemSkin.exml'] = window.AwardItemSkin = (function (_super) {
	__extends(AwardItemSkin, _super);
	function AwardItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","img","nameText","numText"];
		
		this.height = 70;
		this.width = 500;
		this.elementsContent = [this._Image1_i(),this.bg_i(),this.img_i(),this.nameText_i(),this.numText_i(),this._Rect1_i()];
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("hero",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.img"],[0],this.img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.nameText,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.num"],[0],this.numText,"text");
	}
	var _proto = AwardItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(10,10,10,7);
		t.source = "bg11_png";
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(12,12,3,3);
		t.source = "border2_png";
		t.verticalCenter = 0;
		t.width = 60;
		t.x = 5;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 50;
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 10;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.stroke = 2;
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	_proto.numText_i = function () {
		var t = new eui.Label();
		this.numText = t;
		t.right = 15;
		t.stroke = 2;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x2b0e00;
		t.height = 1;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	return AwardItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/common/AwardUISkin.exml'] = window.AwardUISkin = (function (_super) {
	__extends(AwardUISkin, _super);
	function AwardUISkin() {
		_super.call(this);
		this.skinParts = ["okBtn","btn2","btnGroup","list","scroller","titleText","desText"];
		
		this.currentState = "normal";
		this.width = 580;
		this.elementsContent = [this._Image1_i(),this.btnGroup_i(),this.scroller_i(),this._Group2_i()];
		this.desText_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("scroller","top",80),
					new eui.SetProperty("scroller","bottom",100)
				])
			,
			new eui.State ("des",
				[
					new eui.AddItems("desText","",1,""),
					new eui.SetProperty("scroller","top",100)
				])
		];
	}
	var _proto = AwardUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(33,31,4,6);
		t.source = "bg14_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.okBtn_i(),this.btn2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "谢 谢";
		t.skinName = "Btn1Skin";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "知道了";
		t.skinName = "Btn4Skin";
		t.width = 150;
		t.x = 0;
		t.y = 240;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 120;
		t.bounces = false;
		t.horizontalCenter = 0;
		t.maxHeight = 500;
		t.minHeight = 150;
		t.top = 70;
		t.width = 500;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = AwardItemSkin;
		t.width = 500;
		t.x = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = -40;
		t.elementsContent = [this._Image2_i(),this.titleText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(83,15,285,45);
		t.source = "title_bg3_png";
		t.width = 540;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x140000;
		t.text = "恭喜获得";
		t.y = 23;
		return t;
	};
	_proto.desText_i = function () {
		var t = new eui.Label();
		this.desText = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.lineSpacing = 6;
		t.size = 23;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFE6AA;
		t.verticalAlign = "middle";
		t.y = 35;
		return t;
	};
	return AwardUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/common/CardImgSkin.exml'] = window.CardImgSkin = (function (_super) {
	__extends(CardImgSkin, _super);
	function CardImgSkin() {
		_super.call(this);
		this.skinParts = ["img","typeMC"];
		
		this.height = 154;
		this.width = 134;
		this.elementsContent = [this.img_i(),this._Image1_i(),this.typeMC_i()];
	}
	var _proto = CardImgSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.bottom = 2;
		t.left = 2;
		t.right = 2;
		t.source = "";
		t.top = 2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(8,10,25,22);
		t.source = "border_15_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.typeMC_i = function () {
		var t = new eui.Image();
		this.typeMC = t;
		t.bottom = 5;
		t.source = "skill_type1_png";
		t.x = 5;
		return t;
	};
	return CardImgSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/common/HeadMCSkin.exml'] = window.HeadMCSkin = (function (_super) {
	__extends(HeadMCSkin, _super);
	function HeadMCSkin() {
		_super.call(this);
		this.skinParts = ["bg","rect","mc"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.bg_i(),this.rect_i(),this.mc_i()];
	}
	var _proto = HeadMCSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(9,9,12,11);
		t.source = "bg5_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.ellipseWidth = 15;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mc_i = function () {
		var t = new eui.Image();
		this.mc = t;
		t.bottom = 5;
		t.left = 5;
		t.right = 5;
		t.source = "bg5_png";
		t.top = 5;
		return t;
	};
	return HeadMCSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/TeamUISkin.exml'] = window.TeamUISkin = (function (_super) {
	__extends(TeamUISkin, _super);
	function TeamUISkin() {
		_super.call(this);
		this.skinParts = ["bg","con","addBtn1","addBtn10","addBtn100","addBtn1000","totalText","rateText","myText","forceText","forceText1","addGroup","forceGroup"];
		
		this.height = 400;
		this.width = 640;
		this.elementsContent = [this.con_i(),this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group7_i(),this._Group8_i()];
	}
	var _proto = TeamUISkin.prototype;

	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = true;
		t.top = 0;
		t.touchChildren = false;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 100;
		t.horizontalCenter = 0;
		t.x = 320;
		t.y = 300;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "line2_png";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 125;
		t.left = -5;
		t.right = -5;
		t.scale9Grid = new egret.Rectangle(32,32,3,6);
		t.source = "bg14_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 10;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.addBtn1_i(),this.addBtn10_i(),this.addBtn100_i(),this.addBtn1000_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 35;
		return t;
	};
	_proto.addBtn1_i = function () {
		var t = new eui.Button();
		this.addBtn1 = t;
		t.height = 50;
		t.label = "+1";
		t.skinName = "Btn1Skin";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.addBtn10_i = function () {
		var t = new eui.Button();
		this.addBtn10 = t;
		t.height = 50;
		t.label = "+10";
		t.skinName = "Btn1Skin";
		t.width = 120;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.addBtn100_i = function () {
		var t = new eui.Button();
		this.addBtn100 = t;
		t.height = 50;
		t.label = "+100";
		t.skinName = "Btn1Skin";
		t.width = 120;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.addBtn1000_i = function () {
		var t = new eui.Button();
		this.addBtn1000 = t;
		t.height = 50;
		t.label = "+1000";
		t.skinName = "Btn1Skin";
		t.width = 120;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.bottom = 70;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 240;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Group2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg1_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.left = 5;
		t.right = 10;
		t.top = 5;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image4_i(),this.totalText_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.totalText_i = function () {
		var t = new eui.Label();
		this.totalText = t;
		t.size = 22;
		t.text = "总投资：1,000,000";
		t.x = 84;
		t.y = 11;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 43;
		t.minWidth = 250;
		t.width = 150;
		t.x = 240;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.rateText_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg1_png";
		t.top = 0;
		return t;
	};
	_proto.rateText_i = function () {
		var t = new eui.Label();
		this.rateText = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "倍率：1000%";
		t.y = 11;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.minWidth = 250;
		t.width = 200;
		t.x = 410;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Group5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg1_png";
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.left = 5;
		t.right = 10;
		t.top = 5;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image7_i(),this.myText_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myText_i = function () {
		var t = new eui.Label();
		this.myText = t;
		t.size = 22;
		t.text = "我的：100,000";
		t.x = 84;
		t.y = 11;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.forceGroup_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,7,17,42);
		t.source = "black_bg_png";
		t.top = 0;
		return t;
	};
	_proto.forceGroup_i = function () {
		var t = new eui.Group();
		this.forceGroup = t;
		t.left = 20;
		t.right = 20;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this._Image9_i(),this.forceText_i(),this.addGroup_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "icon_force2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.forceText_i = function () {
		var t = new eui.Label();
		this.forceText = t;
		t.size = 25;
		t.text = "战力:12345";
		t.x = -135;
		t.y = 11;
		return t;
	};
	_proto.addGroup_i = function () {
		var t = new eui.Group();
		this.addGroup = t;
		t.x = 172;
		t.y = 7;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Label1_i(),this._Image10_i(),this.forceText1_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingLeft = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 30;
		t.size = 25;
		t.text = "（";
		t.textColor = 0x67f836;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "arrow5_png";
		t.x = 127;
		t.y = 0;
		return t;
	};
	_proto.forceText1_i = function () {
		var t = new eui.Label();
		this.forceText1 = t;
		t.height = 30;
		t.size = 25;
		t.text = "+123）";
		t.textColor = 0x67f836;
		t.verticalAlign = "middle";
		t.x = 144;
		t.y = 3;
		return t;
	};
	return TeamUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/MainPKUISkin.exml'] = window.MainPKUISkin = (function (_super) {
	__extends(MainPKUISkin, _super);
	function MainPKUISkin() {
		_super.call(this);
		this.skinParts = ["con","list1","lineMC","list2","scroller","teamCost1Text","cost1Text","cost1Group","costText2","cost2Group","forceText1","teamCost2Text","forceText2","timeText","winText","des1","des2","desGroup","winGroup","failText","failGroup","backBtn","replayBtn","btnGroup"];
		
		this.height = 800;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.con_i(),this._Image2_i(),this._Image3_i(),this.scroller_i(),this._Image4_i(),this._Image5_i(),this._Group2_i(),this.cost1Group_i(),this.cost2Group_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this.winGroup_i(),this.failGroup_i(),this.btnGroup_i()];
	}
	var _proto = MainPKUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(32,32,3,6);
		t.source = "bg14_png";
		t.top = 0;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.height = 512;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "line2_png";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "line2_png";
		t.y = 512;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 5;
		t.bounces = false;
		t.top = 520;
		t.width = 640;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.list1_i(),this.lineMC_i(),this.list2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingBottom = 10;
		t.paddingTop = 10;
		return t;
	};
	_proto.list1_i = function () {
		var t = new eui.List();
		this.list1 = t;
		t.width = 297;
		t.x = 67;
		t.y = 43;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 3;
		return t;
	};
	_proto.lineMC_i = function () {
		var t = new eui.Rect();
		this.lineMC = t;
		t.fillColor = 0x4c2904;
		t.height = 100;
		t.width = 2;
		t.x = 242;
		t.y = 146;
		return t;
	};
	_proto.list2_i = function () {
		var t = new eui.List();
		this.list2 = t;
		t.width = 297;
		t.x = 67;
		t.y = 43;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.requestedColumnCount = 3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.source = "black_bg2_png";
		t.width = 310;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.right = 0;
		t.scaleX = -1;
		t.source = "black_bg2_png";
		t.width = 310;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image6_i(),this.teamCost1Text_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto.teamCost1Text_i = function () {
		var t = new eui.Label();
		this.teamCost1Text = t;
		t.text = "Label";
		t.textColor = 0xffe2a5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.cost1Group_i = function () {
		var t = new eui.Group();
		this.cost1Group = t;
		t.x = 0;
		t.y = 472;
		t.elementsContent = [this._Image7_i(),this._Group3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "black_bg2_png";
		t.width = 320;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 5;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image8_i(),this.cost1Text_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto.cost1Text_i = function () {
		var t = new eui.Label();
		this.cost1Text = t;
		t.size = 24;
		t.stroke = 3;
		t.text = "Label";
		t.textColor = 0xffe2a5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.cost2Group_i = function () {
		var t = new eui.Group();
		this.cost2Group = t;
		t.right = 0;
		t.y = 472;
		t.elementsContent = [this._Image9_i(),this._Group4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.right = 0;
		t.scaleX = -1;
		t.source = "black_bg2_png";
		t.width = 320;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 5;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.costText2_i(),this._Image10_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.costText2_i = function () {
		var t = new eui.Label();
		this.costText2 = t;
		t.size = 24;
		t.stroke = 3;
		t.text = "Label";
		t.textColor = 0xFFE2A5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 60;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Image11_i(),this.forceText1_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon_force2_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto.forceText1_i = function () {
		var t = new eui.Label();
		this.forceText1 = t;
		t.size = 24;
		t.text = "Label";
		t.textColor = 0xffe2a5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.right = 10;
		t.y = 10;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.teamCost2Text_i(),this._Image12_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.teamCost2Text_i = function () {
		var t = new eui.Label();
		this.teamCost2Text = t;
		t.text = "Label";
		t.textColor = 0xffe2a5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.right = 10;
		t.y = 60;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this.forceText2_i(),this._Image13_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.forceText2_i = function () {
		var t = new eui.Label();
		this.forceText2 = t;
		t.size = 24;
		t.text = "123";
		t.textColor = 0xffe2a5;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "icon_force2_png";
		t.x = 0;
		t.y = 1.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 5;
		t.elementsContent = [this._Image14_i(),this.timeText_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "main_button_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "123";
		t.textColor = 0xfccd7e;
		t.verticalCenter = -2;
		return t;
	};
	_proto.winGroup_i = function () {
		var t = new eui.Group();
		this.winGroup = t;
		t.anchorOffsetY = 130;
		t.height = 265;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 180;
		t.elementsContent = [this._Group9_i(),this.winText_i(),this.desGroup_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "pk_win_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "pk_win_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winText_i = function () {
		var t = new eui.Label();
		this.winText = t;
		t.horizontalCenter = 0;
		t.strokeColor = 0xFFFFFF;
		t.text = "挑战成功";
		t.textColor = 0xFCE492;
		t.y = 118;
		return t;
	};
	_proto.desGroup_i = function () {
		var t = new eui.Group();
		this.desGroup = t;
		t.horizontalCenter = 0;
		t.y = 288;
		t.elementsContent = [this._Image17_i(),this._Group10_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(43,7,8,42);
		t.source = "black_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.left = 30;
		t.right = 30;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this.des1_i(),this._Image18_i(),this.des2_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.des1_i = function () {
		var t = new eui.Label();
		this.des1 = t;
		t.text = "Label";
		t.textColor = 0xFFE89E;
		t.x = 51;
		t.y = 12;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "icon_coin_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.des2_i = function () {
		var t = new eui.Label();
		this.des2 = t;
		t.text = "Label";
		t.textColor = 0xffe89e;
		t.x = 41;
		t.y = 2;
		return t;
	};
	_proto.failGroup_i = function () {
		var t = new eui.Group();
		this.failGroup = t;
		t.anchorOffsetY = 130;
		t.height = 265;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 180;
		t.elementsContent = [this._Group11_i(),this.failText_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout10_i();
		t.elementsContent = [this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "pk_fail_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "pk_fail_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.failText_i = function () {
		var t = new eui.Label();
		this.failText = t;
		t.horizontalCenter = 0;
		t.stroke = 3;
		t.text = "挑战失败";
		t.y = 119;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.horizontalCenter = 0;
		t.y = 410;
		t.layout = this._HorizontalLayout11_i();
		t.elementsContent = [this.backBtn_i(),this.replayBtn_i()];
		return t;
	};
	_proto._HorizontalLayout11_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "关闭";
		t.skinName = "Btn2Skin";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.label = "回放";
		t.skinName = "Btn1Skin";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainPKUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/GameUISkin.exml'] = window.GameUISkin = (function (_super) {
	__extends(GameUISkin, _super);
	function GameUISkin() {
		_super.call(this);
		this.skinParts = ["team1","team2","coinText","coinGroup","shopRedMC","shopBtn","rankBtn","cdText","mailRed","mailBtn","settingBtn","bottomGroup","mainPKUI","loadMC","loadText","loadingGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.coinGroup_i(),this._Image4_i(),this.bottomGroup_i(),this.mainPKUI_i(),this.loadingGroup_i()];
	}
	var _proto = GameUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.scaleY = -1;
		t.source = "title_bg4_png";
		t.width = 640;
		t.x = 0;
		t.y = 92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 105;
		t.top = 90;
		t.x = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.team1_i(),this.team2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.verticalAlign = "justify";
		return t;
	};
	_proto.team1_i = function () {
		var t = new TeamUI();
		this.team1 = t;
		t.skinName = "TeamUISkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.team2_i = function () {
		var t = new TeamUI();
		this.team2 = t;
		t.skinName = "TeamUISkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.x = 10;
		t.y = 20;
		t.elementsContent = [this._Image2_i(),this.coinText_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(28,20,26,2);
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "border1_png";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.coinText_i = function () {
		var t = new eui.Label();
		this.coinText = t;
		t.size = 24;
		t.text = "1234567890";
		t.textColor = 0xffe3b7;
		t.verticalCenter = -5;
		t.x = 50;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_coin_png";
		t.x = 2.02;
		t.y = -1.33;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.fillMode = "repeat";
		t.source = "title_bg4_png";
		t.width = 640;
		t.x = 0;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 20;
		t.height = 75;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.shopBtn_i(),this.rankBtn_i(),this.cdText_i(),this.mailBtn_i(),this.settingBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.horizontalAlign = "right";
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Group();
		this.shopBtn = t;
		t.height = 80;
		t.width = 80;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.shopRedMC_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "main_shop_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shopRedMC_i = function () {
		var t = new eui.Image();
		this.shopRedMC = t;
		t.right = 0;
		t.source = "red_mc_png";
		t.top = 12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "商城";
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Group();
		this.rankBtn = t;
		t.height = 80;
		t.width = 80;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "main_rank_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "排行";
		return t;
	};
	_proto.cdText_i = function () {
		var t = new eui.Label();
		this.cdText = t;
		t.size = 40;
		t.text = "Label";
		t.x = 250;
		t.y = 35;
		return t;
	};
	_proto.mailBtn_i = function () {
		var t = new eui.Group();
		this.mailBtn = t;
		t.height = 80;
		t.width = 80;
		t.x = 10;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this.mailRed_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "main_mail_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "消息";
		return t;
	};
	_proto.mailRed_i = function () {
		var t = new eui.Image();
		this.mailRed = t;
		t.right = 0;
		t.source = "red_mc_png";
		t.top = 12;
		return t;
	};
	_proto.settingBtn_i = function () {
		var t = new eui.Group();
		this.settingBtn = t;
		t.height = 80;
		t.width = 80;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_setting_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "设置";
		return t;
	};
	_proto.mainPKUI_i = function () {
		var t = new MainPKUI();
		this.mainPKUI = t;
		t.bottom = 105;
		t.skinName = "MainPKUISkin";
		t.top = 90;
		t.x = 0;
		return t;
	};
	_proto.loadingGroup_i = function () {
		var t = new eui.Group();
		this.loadingGroup = t;
		t.bottom = 105;
		t.left = 0;
		t.right = 0;
		t.top = 90;
		t.elementsContent = [this._Image9_i(),this.loadMC_i(),this.loadText_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(32,32,3,6);
		t.source = "bg14_png";
		t.top = 0;
		return t;
	};
	_proto.loadMC_i = function () {
		var t = new eui.Image();
		this.loadMC = t;
		t.horizontalCenter = 0;
		t.source = "ui_loading_png";
		t.verticalCenter = -50;
		return t;
	};
	_proto.loadText_i = function () {
		var t = new eui.Label();
		this.loadText = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Label";
		t.verticalCenter = 50;
		return t;
	};
	return GameUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/LogItemSkin.exml'] = window.LogItemSkin = (function (_super) {
	__extends(LogItemSkin, _super);
	function LogItemSkin() {
		_super.call(this);
		this.skinParts = ["timeText","cost1","force1","myCost1","result1","cost2","force2","myCost2","result2","desText","coinText","videoBtn"];
		
		this.height = 410;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this._Group4_i(),this._Group13_i(),this._Group14_i(),this.videoBtn_i()];
	}
	var _proto = LogItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 5;
		t.right = 5;
		t.scale9Grid = new egret.Rectangle(12,12,6,5);
		t.source = "bg9_png";
		t.top = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 8;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this.timeText_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_clock_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.height = 40;
		t.size = 24;
		t.strokeColor = 0x231507;
		t.text = "2011-12-1 11:11";
		t.textColor = 0xdbd3c7;
		t.verticalAlign = "middle";
		t.x = 9;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 270;
		t.left = 10;
		t.right = 10;
		t.top = 60;
		t.elementsContent = [this._Image4_i(),this._Group3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(19,19,9,10);
		t.source = "bg13_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 60;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 47;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xbf8a42;
		t.height = 3;
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBF8A42;
		t.height = 3;
		t.width = 560;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBF8A42;
		t.height = 3;
		t.width = 560;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xBF8A42;
		t.height = 3;
		t.width = 560;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 70;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group6_i(),this._Group9_i(),this._Group12_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.x = 0;
		t.y = -3.03;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.size = 24;
		t.text = "最终投注";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.size = 24;
		t.text = "最终战力";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.size = 24;
		t.text = "我的投注";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 50;
		t.y = 64;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.size = 24;
		t.text = "战斗结果";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 60;
		t.y = 74;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Group7_i(),this.cost1_i(),this.force1_i(),this.myCost1_i(),this._Group8_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.width = 150;
		t.x = 0;
		t.y = -3.03;
		t.elementsContent = [this._Image5_i(),this._Label5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "card_battle2_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "队伍1";
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto.cost1_i = function () {
		var t = new eui.Label();
		this.cost1 = t;
		t.height = 50;
		t.size = 24;
		t.text = "1,000,000,000";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto.force1_i = function () {
		var t = new eui.Label();
		this.force1 = t;
		t.height = 50;
		t.size = 24;
		t.text = "队伍1";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto.myCost1_i = function () {
		var t = new eui.Label();
		this.myCost1 = t;
		t.height = 50;
		t.size = 24;
		t.text = "队伍1";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 50;
		t.y = 64;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 75;
		t.y = 200;
		t.elementsContent = [this.result1_i()];
		return t;
	};
	_proto.result1_i = function () {
		var t = new eui.Image();
		this.result1 = t;
		t.source = "win_icon_png";
		t.x = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this._Group10_i(),this.cost2_i(),this.force2_i(),this.myCost2_i(),this._Group11_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.width = 150;
		t.x = 0;
		t.y = -3.03;
		t.elementsContent = [this._Image6_i(),this._Label6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "card_battle_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "队伍2";
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	_proto.cost2_i = function () {
		var t = new eui.Label();
		this.cost2 = t;
		t.height = 50;
		t.size = 24;
		t.text = "队伍1";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto.force2_i = function () {
		var t = new eui.Label();
		this.force2 = t;
		t.height = 50;
		t.size = 24;
		t.text = "队伍1";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto.myCost2_i = function () {
		var t = new eui.Label();
		this.myCost2 = t;
		t.height = 50;
		t.size = 24;
		t.text = "队伍1";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 50;
		t.y = 64;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 75;
		t.y = 200;
		t.elementsContent = [this.result2_i()];
		return t;
	};
	_proto.result2_i = function () {
		var t = new eui.Image();
		this.result2 = t;
		t.source = "lose_icon_png";
		t.x = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.bottom = 25;
		t.height = 40;
		t.x = 20;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.desText_i(),this._Image7_i(),this.coinText_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.desText_i = function () {
		var t = new eui.Label();
		this.desText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "1队获胜，最终收益";
		t.textAlign = "left";
		t.textColor = 0x512200;
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_coin_png";
		t.x = 304;
		t.y = 0;
		return t;
	};
	_proto.coinText_i = function () {
		var t = new eui.Label();
		this.coinText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.lineSpacing = 5;
		t.size = 26;
		t.text = "-10000";
		t.textAlign = "left";
		t.textColor = 0xcc0000;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Button();
		this.videoBtn = t;
		t.bottom = 10;
		t.label = "录像回放";
		t.right = 20;
		t.skinName = "Btn1Skin";
		t.width = 180;
		return t;
	};
	return LogItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/LogUISkin.exml'] = window.LogUISkin = (function (_super) {
	__extends(LogUISkin, _super);
	function LogUISkin() {
		_super.call(this);
		this.skinParts = ["topUI","bottomUI","list","scroller","desText"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.topUI_i(),this.bottomUI_i(),this.scroller_i(),this._Group2_i()];
	}
	var _proto = LogUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,7,7);
		t.source = "bg3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new TopUI();
		this.topUI = t;
		t.skinName = "TopUISkin";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomUI_i = function () {
		var t = new BottomUI();
		this.bottomUI = t;
		t.bottom = 0;
		t.skinName = "BottomUISkin";
		t.x = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 100;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.width = 200;
		t.x = 96;
		t.y = 96;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.paddingBottom = 10;
		t.paddingLeft = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 28;
		t.right = 20;
		t.elementsContent = [this._Image2_i(),this.desText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(16,15,7,7);
		t.source = "bg3_png";
		t.top = 0;
		return t;
	};
	_proto.desText_i = function () {
		var t = new eui.Label();
		this.desText = t;
		t.bottom = 10;
		t.left = 15;
		t.right = 15;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x301200;
		t.text = "日志只保留最近20条";
		t.top = 10;
		return t;
	};
	return LogUISkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/MainPKItemSkin.exml'] = window.MainPKItemSkin = (function (_super) {
	__extends(MainPKItemSkin, _super);
	function MainPKItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","mc"];
		
		this.height = 95;
		this.width = 95;
		this.elementsContent = [this.bg_i(),this.mc_i()];
	}
	var _proto = MainPKItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "border_6_png";
		t.top = 0;
		return t;
	};
	_proto.mc_i = function () {
		var t = new eui.Image();
		this.mc = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	return MainPKItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKAddStateSkin.exml'] = window.PKAddStateSkin = (function (_super) {
	__extends(PKAddStateSkin, _super);
	function PKAddStateSkin() {
		_super.call(this);
		this.skinParts = ["stateMC"];
		
		this.height = 32;
		this.width = 32;
		this.elementsContent = [this.stateMC_i()];
	}
	var _proto = PKAddStateSkin.prototype;

	_proto.stateMC_i = function () {
		var t = new eui.Image();
		this.stateMC = t;
		t.height = 32;
		t.source = "buff_1_png";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 0;
		return t;
	};
	return PKAddStateSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKMonsterItemSkin.exml'] = window.PKMonsterItemSkin = (function (_super) {
	__extends(PKMonsterItemSkin, _super);
	function PKMonsterItemSkin() {
		_super.call(this);
		this.skinParts = ["bar","barGroup","teamMC","list"];
		
		this.height = 300;
		this.width = 100;
		this.elementsContent = [this.barGroup_i(),this.teamMC_i(),this.list_i()];
	}
	var _proto = PKMonsterItemSkin.prototype;

	_proto.barGroup_i = function () {
		var t = new eui.Group();
		this.barGroup = t;
		t.horizontalCenter = 0;
		t.y = 150;
		t.elementsContent = [this._Rect1_i(),this.bar_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x605d5d;
		t.height = 6;
		t.strokeColor = 0x000000;
		t.strokeWeight = 1;
		t.width = 42;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.Rect();
		this.bar = t;
		t.fillColor = 0x512020;
		t.height = 4;
		t.width = 40;
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto.teamMC_i = function () {
		var t = new eui.Image();
		this.teamMC = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "card_battle_png";
		t.y = 280;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.bottom = 0;
		t.itemRendererSkinName = PKMonsterStateItemSkin;
		t.width = 30;
		t.x = 70;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 1;
		return t;
	};
	return PKMonsterItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKMonsterStateItemSkin.exml'] = window.PKMonsterStateItemSkin = (function (_super) {
	__extends(PKMonsterStateItemSkin, _super);
	function PKMonsterStateItemSkin() {
		_super.call(this);
		this.skinParts = ["mc"];
		
		this.height = 30;
		this.width = 30;
		this.elementsContent = [this.mc_i()];
	}
	var _proto = PKMonsterStateItemSkin.prototype;

	_proto.mc_i = function () {
		var t = new eui.Image();
		this.mc = t;
		t.height = 30;
		t.source = "buff_1_png";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PKMonsterStateItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKSkillItemSkin.exml'] = window.PKSkillItemSkin = (function (_super) {
	__extends(PKSkillItemSkin, _super);
	function PKSkillItemSkin() {
		_super.call(this);
		this.skinParts = ["img","nameText"];
		
		this.height = 52;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_i(),this.nameText_i()];
		this.states = [
			new eui.State ("left",
				[
					new eui.SetProperty("_Image2","x",10),
					new eui.SetProperty("img","x",13),
					new eui.SetProperty("nameText","x",60)
				])
			,
			new eui.State ("right",
				[
					new eui.SetProperty("_Image1","scaleX",-1),
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",30),
					new eui.SetProperty("_Image2","right",10),
					new eui.SetProperty("img","right",13),
					new eui.SetProperty("nameText","right",60)
				])
		];
	}
	var _proto = PKSkillItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 40;
		t.left = 30;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(0,12,5,74);
		t.source = "black_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(16,15,7,7);
		t.source = "bg3_png";
		t.top = 0;
		t.width = 46;
		t.x = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new CardImg();
		this.img = t;
		t.height = 46;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 3;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.size = 24;
		t.text = "召唤黑";
		t.verticalCenter = 0;
		return t;
	};
	return PKSkillItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKTalkItemSkin.exml'] = window.PKTalkItemSkin = (function (_super) {
	__extends(PKTalkItemSkin, _super);
	function PKTalkItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","text"];
		
		this.height = 110;
		this.width = 161;
		this.elementsContent = [this.bg_i(),this.text_i()];
	}
	var _proto = PKTalkItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "talk_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.maxWidth = 140;
		t.size = 24;
		t.text = "标签标标签标标签标";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 16;
		return t;
	};
	return PKTalkItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKTotemSkin.exml'] = window.PKTotemSkin = (function (_super) {
	__extends(PKTotemSkin, _super);
	function PKTotemSkin() {
		_super.call(this);
		this.skinParts = ["topMC"];
		
		this.height = 80;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this.topMC_i()];
	}
	var _proto = PKTotemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "totem_png";
		t.x = 3;
		t.y = 22;
		return t;
	};
	_proto.topMC_i = function () {
		var t = new eui.Image();
		this.topMC = t;
		t.bottom = 58;
		t.horizontalCenter = 0;
		t.source = "totem_1_png";
		return t;
	};
	return PKTotemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pk/ui/scene/PKVideoConSkin.exml'] = window.PKVideoConSkin = (function (_super) {
	__extends(PKVideoConSkin, _super);
	function PKVideoConSkin() {
		_super.call(this);
		this.skinParts = ["bg","con"];
		
		this.height = 512;
		this.width = 1000;
		this.elementsContent = [this.con_i()];
	}
	var _proto = PKVideoConSkin.prototype;

	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.height = 512;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.fillMode = "clip";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	return PKVideoConSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/pkRelate/PKCardInfoItemSkin.exml'] = window.PKCardInfoItemSkin = (function (_super) {
	__extends(PKCardInfoItemSkin, _super);
	function PKCardInfoItemSkin() {
		_super.call(this);
		this.skinParts = ["rect","barMC","icon","text"];
		
		this.height = 40;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.rect_i(),this.barMC_i(),this.icon_i(),this.text_i()];
		this.states = [
			new eui.State ("stat1",
				[
				])
			,
			new eui.State ("stat2",
				[
					new eui.SetProperty("_Image1","source","bg5_png")
				])
		];
	}
	var _proto = PKCardInfoItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillAlpha = 0.2;
		t.fillColor = 0x000000;
		t.height = 36;
		t.width = 40;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.barMC_i = function () {
		var t = new eui.Rect();
		this.barMC = t;
		t.fillColor = 0xfccf46;
		t.height = 34;
		t.width = 205;
		t.x = 42;
		t.y = 3;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = -102;
		t.source = "icon_rage_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.size = 22;
		t.stroke = 2;
		t.text = "你好:123745";
		t.verticalCenter = 1;
		t.x = 45;
		return t;
	};
	return PKCardInfoItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/RankUISkin.exml'] = window.RankUISkin = (function (_super) {
	__extends(RankUISkin, _super);
	function RankUISkin() {
		_super.call(this);
		this.skinParts = ["topUI","bottomUI","tab"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.topUI_i(),this.bottomUI_i(),this.tab_i()];
	}
	var _proto = RankUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,7,7);
		t.source = "bg3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 100;
		t.scale9Grid = new egret.Rectangle(19,18,10,8);
		t.source = "bg15_png";
		t.top = 120;
		t.width = 640;
		t.x = 0;
		return t;
	};
	_proto.topUI_i = function () {
		var t = new TopUI();
		this.topUI = t;
		t.skinName = "TopUISkin";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomUI_i = function () {
		var t = new BottomUI();
		this.bottomUI = t;
		t.bottom = 0;
		t.skinName = "BottomUISkin";
		t.x = 0;
		return t;
	};
	_proto.tab_i = function () {
		var t = new eui.TabBar();
		this.tab = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = MyTabItemSkin;
		t.width = 400;
		t.y = 67;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.label = "金币排行";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.label = "收益排行";
		return t;
	};
	return RankUISkin;
})(eui.Skin);