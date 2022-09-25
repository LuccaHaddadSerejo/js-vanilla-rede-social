const ulPosts = document.querySelector("#posts")

function createPost(listaUm, listaDois){
    for(let i = 0; i < listaUm.length; i++){
        let listPost = document.createElement('li')
        let listDivOne = document.createElement('div')
        let listDivOne_img = document.createElement('img')
        let listDivOne_div = document.createElement('div')
        let listDivOne_div_pOne = document.createElement('p')
        let listDivOne_div_pTwo = document.createElement('p')
        let listDivTwo = document.createElement('div')
        let listDivTwo_h2 = document.createElement('h2')
        let listDivTwo_p = document.createElement('p')
        let listDivThree = document.createElement('div')
        let listDivThree_btn = document.createElement('button')
        let listDivThree_btnTwo = document.createElement('button')
        let listDivThree_btnTwo_imgOne = document.createElement('img')
        let listDivThree_btnTwo_imgTwo = document.createElement('img')
   

        listPost.classList = "flex__column gap-1"
        listDivOne.classList = "flex__row gap-2"
        listDivOne_img.classList = "img__formatting"
        listDivOne_div.classList = "flex__column gap-3"
        listDivOne_div_pOne.classList = "title-2"
        listDivOne_div_pTwo.classList = "text-2"
        listDivTwo.classList = "post__fullComment"
        listDivTwo_h2.classList = "title-1 mb-2"
        listDivTwo_p.classList = "text-1"
        listDivThree.classList = "flex__row align__center gap-3"
        listDivThree_btn.classList = "button border__radius-1 border-2 button__grey"

        listDivOne_img.src = listaUm[i].img
        listDivOne_div_pOne.innerText = listaUm[i].user
        listDivOne_div_pTwo.innerText = listaUm[i].stack
        listDivTwo_h2.innerText = listaDois[i].title
        listDivTwo_p.innerText = listaDois[i].text
        listDivThree_btn.innerText = "Abrir post"
        listDivThree_btnTwo_imgOne.src = "../../assets/img/Vectorred.svg" 
        listDivThree_btnTwo_imgTwo.src = "../../assets/img/Vector.svg"
        listDivThree_btnTwo.innerText = ''
       

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
        modalCloseBtn.classList = "modal__closeButton"

        modalWrapper.id = "modalWrap"
        modalCloseBtn.id = "modalClose"

        modalImg.src = listaUm[i].img
        modalName.innerText = listaUm[i].user
        modalJob.innerText = listaUm[i].stack
        modalPostName.innerText = listaDois[i].title
        modalPostFull.innerText = listaDois[i].text
        modalCloseBtn.innerText = "X"
        
        
        modalInformation.append(modalName, modalJob)
        modalDivOneDiv.append(modalImg, modalInformation)
        modalDivOne.append(modalDivOneDiv ,modalCloseBtn)
        modalDivTwo.append(modalPostName, modalPostFull)
        modalMain.append(modalDivOne, modalDivTwo)
        modalWrapper.append(modalMain)
    
        const mainSection = document.getElementById("parentModal")
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
        listDivThree_btnTwo.append(listDivThree_btnTwo_imgOne)
        listDivThree.append(listDivThree_btn,listDivThree_btnTwo)
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






