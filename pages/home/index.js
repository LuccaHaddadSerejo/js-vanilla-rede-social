function createModal(){
    const modalWrapper = document.createElement("div")
    const modalMain = document.createElement("div")
    const modalDivOne = document.createElement("div")
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

    modalImg.src = "../../assets/img/user1.svg"
    modalName.innerText = "Samuel Leão"
    modalJob.innerText = "Front end Engineer"
    modalPostName.innerText = "Empresa de Tecnologia da Informação abre vagas para programa de estágio"
    modalPostFull.innerText = "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força."
    modalCloseBtn.innerText = "X"

    modalInformation.append(modalName, modalJob)
    modalDivOne.append(modalImg, modalInformation, modalCloseBtn)
    modalDivTwo.append(modalPostName, modalPostFull)
    modalMain.append(modalDivOne, modalDivTwo)
    modalWrapper.append(modalMain)
    
    return modalWrapper
}

function showModal(){
    const btnOpen = document.getElementById("OpeningModal")
    const mainSection = document.getElementById("parentModal")

    btnOpen.addEventListener('click', function(){
        const modalOpening = createModal()

    mainSection.appendChild(modalOpening)
    closeModal()
    })  
}

function closeModal(){
    const btnClose = document.getElementById("modalClose")
    const wrapper = document.getElementById("modalWrap")

    btnClose.addEventListener("click", function(){
        wrapper.remove()
    })
}

showModal()

const btnFollower = document.querySelector("#teste")

function followHover(){
        btnFollower.addEventListener("click", function(){
            if(btnFollower.classList.contains("button__outline-active")){
                btnFollower.classList.remove("button__outline-active")
                btnFollower.innerText = "Seguir"
            }else{
                btnFollower.classList.add("button__outline-active")
                btnFollower.innerText = "Seguindo"
            }  
        })
}
followHover()






