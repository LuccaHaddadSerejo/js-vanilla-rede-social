function appendLikeCounter(){

}

function createPost(arrUsers, arrPosts){
    const ulPosts = document.querySelector("#posts")

    for(let i = 1; i < arrUsers.length; i++){
        const listPost = document.createElement('li')
        const listDivOne = document.createElement('div')
        const listDivOne_img = document.createElement('img')
        const listDivOne_div = document.createElement('div')
        const listDivOne_div_pOne = document.createElement('p')
        const listDivOne_div_pTwo = document.createElement('p')
        const listDivTwo = document.createElement('div')
        const listDivTwo_h2 = document.createElement('h2')
        const listDivTwo_p = document.createElement('p')
        const listDivThree = document.createElement('div')
        const listDivThree_btn = document.createElement('button')
        const listDivThree_div = document.createElement('div')
        const listDivThree_div_btn = document.createElement('button')
        const listDivThree_div_btn_img = document.createElement('img')
        const listDivThree_div_counter = document.createElement('span')
   

        listPost.classList = "flex__column gap-1"
        listDivOne.classList = "flex__row gap-2"
        listDivOne_img.classList = "img__formatting"
        listDivOne_div.classList = "flex__column gap-3"
        listDivOne_div_pOne.classList = "title-2"
        listDivOne_div_pTwo.classList = "text-2"
        listDivTwo.classList = "post__fullComment"
        listDivTwo_h2.classList = "title-1 mb-2"
        listDivTwo_p.classList = "text-1"
        listDivThree.classList = "flex__row align__center gap-6"
        listDivThree_div.classList = "flex__row align__center like__div"
        listDivThree_btn.classList = "button border__radius-1 border-2 button__grey"
        listDivThree_div_btn.classList = "button__like"

        listDivOne_img.src = arrUsers[i].img
        listDivOne_div_pOne.innerText = arrUsers[i].user
        listDivOne_div_pTwo.innerText = arrUsers[i].stack
        listDivTwo_h2.innerText = arrPosts[i].title
        listDivTwo_p.innerText = arrPosts[i].text
        listDivThree_btn.innerText = "Abrir post"
        listDivThree_div_btn_img.src = "../../assets/img/Vector.svg"
        listDivThree_div_counter.innerText = 0

        let toggleImg = true 
        listDivThree_div_btn.addEventListener("click", function(){ 
            if(toggleImg){
                listDivThree_div_btn_img.src = "../../assets/img/Vectorred.svg"
                    listDivThree_div_counter.innerText ++
                    toggleImg = false 
            }else{
                listDivThree_div_btn_img.src = "../../assets/img/Vector.svg"
                toggleImg = true
                listDivThree_div_counter.innerText --
            }
        })


        listDivThree_btn.addEventListener("click", function(){

        const modalWrapper = document.createElement("div")
        const modalMain = document.createElement("div")
        const modalDivOne = document.createElement("div")
        const modalDivOneDiv = document.createElement("div")
        const modalCloseBtn = document.createElement("button")
        const modalImg = document.createElement("img")
        const modalInformation = document.createElement("div")
        const modalName = document.createElement("h3")
        const modalJob = document.createElement("p")
        const modalDivTwo = document.createElement("div")
        const modalPostName = document.createElement("h2")
        const modalPostFull = document.createElement("p")

        modalWrapper.classList = "modal__wrapper"
        modalMain.classList = "modal"
        modalDivOne.classList = "modal__div-1"
        modalDivOneDiv.classList = "modal__div-1__div"
        modalImg.classList = "modal__div1-img"
        modalInformation.classList = "modal__div1-information"
        modalName.classList = "title-2"
        modalJob.classList = "text-2"
        modalDivTwo.classList = "modal__div-2"
        modalPostName.classList = "title-1 mb-2"
        modalPostFull.classList = "text-1"
        modalCloseBtn.classList = "modal__closeButton button__font"

        modalWrapper.id = "modalWrap"
        modalCloseBtn.id = "modalClose"

        modalImg.src = arrUsers[i].img
        modalName.innerText = arrUsers[i].user
        modalJob.innerText = arrUsers[i].stack
        modalPostName.innerText = arrPosts[i].title
        modalPostFull.innerText = arrPosts[i].text
        modalCloseBtn.innerText = "X"
        
        
        modalInformation.append(modalName, modalJob)
        modalDivOneDiv.append(modalImg, modalInformation)
        modalDivOne.append(modalDivOneDiv ,modalCloseBtn)
        modalDivTwo.append(modalPostName, modalPostFull)
        modalMain.append(modalDivOne, modalDivTwo)
        modalWrapper.append(modalMain)
    
        
        const mainSection = document.getElementById("modalParent")
        mainSection.appendChild(modalWrapper)
        const btnClose = document.getElementById("modalClose")
        const wrapper = document.getElementById("modalWrap")
    
        btnClose.addEventListener("click", function(){
            wrapper.remove()      
        })
        })

        listDivOne_div.append(listDivOne_div_pOne, listDivOne_div_pTwo)
        listDivOne.append(listDivOne_img, listDivOne_div)
        listDivTwo.append(listDivTwo_h2, listDivTwo_p)
        listDivThree_div_btn.append(listDivThree_div_btn_img)
        listDivThree_div.append(listDivThree_div_btn, listDivThree_div_counter)
        listDivThree.append(listDivThree_btn, listDivThree_div)
        listPost.append(listDivOne, listDivTwo, listDivThree)
        ulPosts.appendChild(listPost)   
    }
}

createPost(users, posts)

function followHover(){
        const btnFollower = document.getElementsByClassName("button_follower")
        for(let i = 0; i < btnFollower.length; i++){      
            btnFollower[i].addEventListener("click", function(){
                if(btnFollower[i].classList.contains("button__outline-active")){
                    btnFollower[i].classList.remove("button__outline-active")
                    btnFollower[i].innerText = "Seguir"
                }else{
                    btnFollower[i].classList.add("button__outline-active")
                    btnFollower[i].innerText = "Seguindo"
                }  
            })
        }
}

followHover()






