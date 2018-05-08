var state = 1;

function showHideSidebar(){
  var sidebar = document.getElementsByTagName("aside")[0];
  var sidebarButton = document.getElementById("sidebar_button");

  if(state == 1){
    hideSidebar(sidebar, sidebarButton);

  } else{
    showSidebar(sidebar, sidebarButton);
  }
}

function showSidebar(sidebar, sidebarButton){
  sidebar.style.display = "block";
  sidebarButton.value = "<";
  sidebarButton.style.left = "170px";
  state = 1;
}

function hideSidebar(sidebar, sidebarButton){
  sidebar.style.display = "none";
  sidebarButton.value = ">";
  sidebarButton.style.left = "10px";
  state = 0;
}
