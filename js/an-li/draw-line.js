// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// Values for xJust / yJust:  "center", "left", "right", "top", "bottom"

var DrawLine = function(objectID, x, y, newX, newY, directed, curve) {
	this.objectID = objectID;
	this.x = x;
	this.y = y;
	this.newX = newX;
	this.newY = newY;
	this.curve = curve;
	this.arrowHeight = 8;
	this.arrowWidth = 4;
	this.addedToScene = true;
	this.directed = directed;
}

DrawLine.prototype = new AnimatedObject();
DrawLine.prototype.constructor = DrawLine;
DrawLine.prototype.draw = function(ctx) {
	ctx.lineWidth = 1.5;
	var deltaX = this.newX - this.x;
	var deltaY = this.newY - this.y;
	var midX = (deltaX) / 2.0 + this.x;
	var midY = (deltaY) / 2.0 + this.y;
	var controlX = midX - deltaY * this.curve;
	var controlY = midY + deltaX * this.curve;
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	ctx.quadraticCurveTo(controlX, controlY, this.newX, this.newY);
	ctx.stroke();
	
	
	if (this.directed) {
		var xVec = controlX - this.newX;
		var yVec = controlY - this.newY;
		var len = Math.sqrt(xVec * xVec + yVec * yVec);
		if (len > 0) {
			xVec = xVec / len;
			yVec = yVec / len;
			ctx.beginPath();
			ctx.moveTo(this.newX, this.newY);
			ctx.lineTo(this.newX + xVec * this.arrowHeight - yVec
					* this.arrowWidth, this.newY + yVec * this.arrowHeight
					+ xVec * this.arrowWidth);
			ctx.lineTo(this.newX + xVec * this.arrowHeight + yVec
					* this.arrowWidth, this.newY + yVec * this.arrowHeight
					- xVec * this.arrowWidth);
			ctx.lineTo(this.newX, this.newY);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
		}
	}
}

function UndoConnect(objectID, x, y, newX, newY, directed, curve) {
	this.objectID = objectID;
	this.x = x;
	this.y = y;
	this.newX = newX;
	this.newY = newY;
	this.directed = directed;
	this.curve = curve;
	this.addedToScene = true;
}

DrawLine.prototype.createUndoDelete = function() {
	return new UndoConnect(this.objectID, this.x, this.y, this.newX, this.newY, this.directed, this.curve);
}

UndoConnect.prototype.undoInitialStep = function(world) {
	if (this.connect) {
		world.connectEdge(this.objectID, this.x, this.y, this.newX, this.newY, this.directed, this.curve);
	} else {
		world.disconnect(this.objectID);
	}
}

UndoConnect.prototype.addUndoAnimation = function(animationList) {
	return false;
}