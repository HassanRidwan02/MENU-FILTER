

import { menuList } from './data.js'

let menuContainer = document.getElementById('menu-container')

document.addEventListener('click', function(e){
    let html = ``
    if(e.target.id === 'Morning'){
        menuList.filter(function(menu){
            if(menu.type === "Morning"){
                html += `
                    <div class="individual-menu">
                        <h2 class="food">${menu.food}</h2>
                        <p>${menu.description}</p>
                    </div>
                `
                menuContainer.innerHTML = html
            }  
        })
    }


    if(e.target.id === 'Afternoon'){
        menuList.filter(function(menu){
            if(menu.type === "Afternoon"){
                html += `
                    <div class="individual-menu">
                        <h2 class="food">${menu.food}</h2>
                        <p class="description">${menu.description}</p>
                    </div>
                `
                menuContainer.innerHTML = html
            }  
        })
    }

    if(e.target.id === 'Night'){
        menuList.filter(function(menu){
            if(menu.type === "Night"){
                html += `
                    <div class="individual-menu">
                        <h2 class="food">${menu.food}</h2>
                        <p class="description">${menu.description}</p>
                    </div>
                `
                menuContainer.innerHTML = html
            }  
        })
    }

    
    if(e.target.id === 'all'){
        getMenu(menuList)
        menuContainer.innerHTML = getMenu(menuList)
    }
    
})



function getMenu(menuList){
    let html = ``
    menuList.forEach(function(menu){
        html += `
            <div class="individual-menu"> 
                <h4 class="food">${menu.food}</h4>
                <p class="description">${menu.description}</p>
            </div>
        `
    })
    return html

}

menuContainer.innerHTML = getMenu(menuList)

