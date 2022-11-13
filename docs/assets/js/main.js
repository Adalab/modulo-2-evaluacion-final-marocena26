"use strict";const charactersList=document.querySelector(".js__characters"),favouritesList=document.querySelector(".js__favourites"),searchInput=document.querySelector(".js__search_input"),searchBtn=document.querySelector(".js__search_btn");let myCharactersList=[],myFavouritesList=[],filteredCharacters=[];function renderCharacter(e){return`<li>\n    <article class="js__characters_article" id="${e.char_id}"> \n        <img src="${e.img}" alt="" class="characters__ul--img">\n        <h3 class="characters__ul--name">${e.name}</h3>\n        <p class="characters__ul--status">${e.status}</p>\n    </article>\n    </li>`}function selectFavouriteCharacters(){const e=document.querySelectorAll(".js__characters_article");for(const r of e)r.addEventListener("click",handleClickFavourites)}function renderCharactersList(){let e="";for(let r=0;r<myCharactersList.length;r++)e+=renderCharacter(myCharactersList[r]);charactersList.innerHTML=e,selectFavouriteCharacters()}function renderFavouritesList(){let e="";for(let r=0;r<myFavouritesList.length;r++)e+=renderCharacter(myFavouritesList[r]);favouritesList.innerHTML=e}function renderFilteredCharacters(){let e="";for(let r=0;r<filteredCharacters.length;r++)e+=renderCharacter(filteredCharacters[r]);charactersList.innerHTML=e}function handleClickFavourites(e){e.currentTarget.classList.toggle("selected");const r=myCharactersList.find(r=>r.char_id===parseInt(e.currentTarget.id)),t=myFavouritesList.findIndex(r=>r.char_id===parseInt(e.currentTarget.id));-1===t?myFavouritesList.push(r):myFavouritesList.splice(t,1),renderFavouritesList()}searchBtn.addEventListener("click",e=>{e.preventDefault();const r=searchInput.value.toLowerCase();filteredCharacters=myCharactersList.filter(e=>e.name.toLowerCase().includes(r)),renderFilteredCharacters()}),renderCharactersList(),fetch("https://breakingbadapi.com/api/characters").then(e=>e.json()).then(e=>{myCharactersList=e,renderCharactersList()});