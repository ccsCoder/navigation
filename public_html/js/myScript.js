$(document).ready(function(e) {
   //kick off creation
   var allNodes=createNodes(15);
   //attach them to parent container.
   attachNodesToParent($("#nodeContainer"),allNodes);
   //attach events
   $(".node").hover(function(event) {
       var currentNode = $(this);
       console.log($("currentNode").css("left"));
      $("#popupDescription").css({
          "left":$(currentNode).css("left")+20,
          "top" :$(currentNode).css("top")-20
      }).fadeIn("fast");
      
   },function(event) {
       $("#popupDescription").fadeOut("fast");
   });
});

function attachNodesToParent(container,allNodes) {
    //var maxWidth = $(container).attr("min-width");
    //var maxHeight= $(container).attr("min-height");
    console.debug(allNodes);
    for(var i=0;i<allNodes.length;i++) {
       $(allNodes[i]).css({
                            "left": Math.floor((Math.random()*($(container).outerWidth()-100))+1),
                            "top" :Math.floor((Math.random()*($(container).height()-100))+1)
       }).text("Node"+i);
       
       $(container).append(allNodes[i]);
        
    }
    
}

function createNodes(num) {
    var nodes = new Array(num);
    var tmpNode;
    for(var i=0;i<num;i++ ) {
        tmpNode = document.createElement("div");
        $(tmpNode).addClass("node");
        nodes[i]=tmpNode;
    }
    
    return nodes;
}
