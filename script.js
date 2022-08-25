const btnGeneratePwds =  document.getElementById('btn-get-pwds')

const listChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')']

const listPwdInputs = document.getElementById('passwords__container').getElementsByTagName('input')
    

// Generate random passwords on 'GENERATE PASSWORDS' button click
btnGeneratePwds.addEventListener("click", () => {
    for (let i=0; i<listPwdInputs.length; i++) {
        listPwdInputs[i].style.color = 'var(--color-white)'

        const newPwd = []

        while (newPwd.length < 16) {
            const randomIndex = Math.floor(Math.random() * 71) + 1;
            newPwd.push(listChars[randomIndex])
        }

        listPwdInputs[i].value = newPwd.join('').toString()
    }
})


// Copy password on 'COPY Icon' click
const copyPwdText = (id) => {
    const chosenPwd = listPwdInputs[id].value
    navigator.clipboard.writeText(chosenPwd)

    // const notificationMsg = document.getElementById('notification-msg')
    // notificationMsg.style.transform = 'translateY(30px)'
    // setTimeout(() => {
    //     notificationMsg.style.display = 'none';

    // }, 1000);
}

// Toggle display of Password Manager div on 'password__manager--toggle' click
let isPwdManagerShown = false
const togglePasswordManager = () => {
    if (isPwdManagerShown) {
        document.getElementById('password__manager--toggle').textContent = "+"
        document.getElementById('password__manager').style.transform = "translateX(95%)"
        isPwdManagerShown = false
    } else {
        document.getElementById('password__manager--toggle').textContent = "-"
        document.getElementById('password__manager').style.transform = "translateX(0)"
        isPwdManagerShown = true
        
    }
}
