document.getElementById('toggle').addEventListener('click',()=>{
    if(document.getElementById('toggle-list').classList.contains('toggle-nav')){
        document.getElementById('toggle-list').classList.remove('toggle-nav')
        document.getElementById('toggle-list').classList.add('toggle-nav-close');

        document.getElementById('toggle').classList.remove('toggle-on')
        document.getElementById('toggle').classList.add('toggle-bar')
        
  


    }else{
        document.getElementById('toggle-list').classList.add('toggle-nav');
        document.getElementById('toggle-list').classList.remove('toggle-nav-close');

        document.getElementById('toggle').classList.remove('toggle-bar')
        document.getElementById('toggle').classList.add('toggle-on')
    }   
})