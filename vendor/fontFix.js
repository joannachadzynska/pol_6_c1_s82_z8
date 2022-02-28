createjs.Text.prototype._drawTextLine = function ( ctx, text, y ) {

  var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
  var fontSize;
  if ( this.__fontSize !== undefined ) {
    fontSize = this.__fontSize;
  }

  else {
    var match = this.font.match( /([0-9]+)px/ );
    if ( match ) {
      fontSize = Number( match[ 1 ] );
      this.__fontSize = fontSize;
    }
  }

  var baselineModifier = 2;
  if ( this.__baselineModifier !== undefined ) {
    baselineModifier = this.__baselineModifier;
  }
  else {
    const isCambria = this.font.search( 'Cambria' ) !== -1;
    if ( isCambria ) baselineModifier = -1;
    this.__baselineModifier = baselineModifier;
  }

  if ( this.textBaseline !== 'alphabetic' ) {
    this.textBaseline = 'alphabetic';
    ctx.textBaseline = this.textBaseline;
  }

  if ( fontSize ) {
    y += fontSize + baselineModifier;
  }
  else {
    y += lineHeight;
  }

  if ( this.outline ) {
    ctx.strokeText( text, 0, y, this.maxWidth || 0xFFFF );
  }
  else {
    ctx.fillText( text, 0, y, this.maxWidth || 0xFFFF );
  }
};

var isSafari = /^((?!chrome|android).)*safari/i.test( navigator.userAgent );
if ( isSafari ) {
  document.body.classList.add( 'safari' );
}
