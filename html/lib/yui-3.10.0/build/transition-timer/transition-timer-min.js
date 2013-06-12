/*
YUI 3.10.0 (build a03ce0e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("transition-timer",function(e,t){var n=e.Transition;e.mix(n.prototype,{_start:function(){n.useNative?this._runNative():this._runTimer()},_runTimer:function(){var t=this;t._initAttrs(),n._running[e.stamp(t)]=t,t._startTime=new Date,n._startTimer()},_endTimer:function(){var t=this;delete n._running[e.stamp(t)],t._startTime=null},_runFrame:function(){var e=new Date-this._startTime;this._runAttrs(e)},_runAttrs:function(t){var r=this,i=r._node,s=r._config,o=e.stamp(i),u=n._nodeAttrs[o],a=n.behaviors,f=!1,l=!1,c,h,p,d,v,m,g,y,b;for(h in u)if((p=u[h])&&p.transition===r){g=p.duration,m=p.delay,v=(t-m)/1e3,y=t,c={type:"propertyEnd",propertyName:h,config:s,elapsedTime:v},d=b in a&&"set"in a[b]?a[b].set:n.DEFAULT_SETTER,f=y>=g,y>g&&(y=g);if(!m||t>=m)d(r,h,p.from,p.to,y-m,g-m,p.easing,p.unit),f&&(delete u[h],r._count--,s[h]&&s[h].on&&s[h].on.end&&s[h].on.end.call(e.one(i),c),!l&&r._count<=0&&(l=!0,r._end(v),r._endTimer()))}},_initAttrs:function(){var t=this,r=n.behaviors,i=e.stamp(t._node),s=n._nodeAttrs[i],o,u,a,f,l,c,h,p,d,v,m;for(c in s)(o=s[c])&&o.transition===t&&(u=o.duration*1e3,a=o.delay*1e3,f=o.easing,l=o.value,c in t._node.style||c in e.DOM.CUSTOM_STYLES?(v=c in r&&"get"in r[c]?r[c].get(t,c):n.DEFAULT_GETTER(t,c),p=n.RE_UNITS.exec(v),h=n.RE_UNITS.exec(l),v=p?p[1]:v,m=h?h[1]:l,d=h?h[2]:p?p[2]:"",!d&&n.RE_DEFAULT_UNIT.test(c)&&(d=n.DEFAULT_UNIT),typeof f=="string"&&(f.indexOf("cubic-bezier")>-1?f=f.substring(13,f.length-1).split(","):n.easings[f]&&(f=n.easings[f])),o.from=Number(v),o.to=Number(m),o.unit=d,o.easing=f,o.duration=u+a,o.delay=a):(delete s[c],t._count--))},destroy:function(){this.detachAll(),this._node=null}},!0),e.mix(e.Transition,{_runtimeAttrs:{},RE_DEFAULT_UNIT:/^width|height|top|right|bottom|left|margin.*|padding.*|border.*$/i,DEFAULT_UNIT:"px",intervalTime:20,behaviors:{left:{get:function(t,n){return e.DOM._getAttrOffset(t._node,n)}}},DEFAULT_SETTER:function(t,r,i,s,o,u,a,f){i=Number(i),s=Number(s);var l=t._node,c=n.cubicBezier(a,o/u);c=i+c[0]*(s-i);if(l){if(r in l.style||r in e.DOM.CUSTOM_STYLES)f=f||"",e.DOM.setStyle(l,r,c+f)}else t._end()},DEFAULT_GETTER:function(t,n){var r=t._node,i="";if(n in r.style||n in e.DOM.CUSTOM_STYLES)i=e.DOM.getComputedStyle(r,n);return i},_startTimer:function(){n._timer||(n._timer=setInterval(n._runFrame,n.intervalTime))},_stopTimer:function(){clearInterval(n._timer),n._timer=null},_runFrame:function(){var e=!0,t;for(t in n._running)n._running[t]._runFrame&&(e=!1,n._running[t]._runFrame());e&&n._stopTimer()},cubicBezier:function(e,t){var n=0,r=0,i=e[0],s=e[1],o=e[2],u=e[3],a=1,f=0,l=a-3*o+3*i-n,c=3*o-6*i+3*n,h=3*i-3*n,p=n,d=f-3*u+3*s-r,v=3*u-6*s+3*r,m=3*s-3*r,g=r,y=((l*t+c)*t+h)*t+p,b=((d*t+v)*t+m)*t+g;return[y,b]},easings:{ease:[.25,0,1,.25],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},_running:{},_timer:null,RE_UNITS:/^(-?\d*\.?\d*){1}(em|ex|px|in|cm|mm|pt|pc|%)*$/},!0),n.behaviors.top=n.behaviors.bottom=n.behaviors.right=n.behaviors.left,e.Transition=n},"3.10.0",{requires:["transition"]});