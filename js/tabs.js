const tabButtons = document.querySelectorAll('.js--tab')

for (i of tabButtons) {
    i.addEventListener('click', function() {
        console.log(this, this.dataset.tab);
        const tabNum = this.dataset.tab;
        const activeTab = document.querySelector('.js--tab.active');
        const activeContent = document.querySelector(
            '.js--tab-content-wrapper .visible'
        );
        const showContent = document.querySelector(
            `.js--tab-content[data-tab='${tabNum}']`
        );
        
        if (!tabNum) {
            return;
          }
          
        activeTab.classList.remove('active');
        this.classList.add('active');
        activeContent.classList.remove('visible');
        showContent.classList.add('visible');
    });
}