// Tabs Information Product
tabs = document.querySelectorAll('.tab');
tabsContents = document.querySelectorAll('.tab-content');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function(){
    console.log(this);
    console.log(this.dataset);

    contentId = this.dataset.contentId;
    content = document.getElementById(contentId);
    console.log(content);

    tabsContents.forEach(function(content){
      content.classList.remove('active')
    })
    
    tabs.forEach(function(content){
      content.classList.remove('active')
    })

    this.classList.add('active');
    content.classList.add('active');
  })
})