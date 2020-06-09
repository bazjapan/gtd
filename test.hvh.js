FRZ.exports(function(){
  return function(app, hv, opts, dom){
      var api = {};
      
			api.render = function(attrs){
				return dom.div(null, dom.span({
				zac : attrs.zac}, attrs.name), "I live on git is hv a bad thing for item viewer - should they not follow a hvh??? - I think so");
			}
			return api;
  
  }

})
