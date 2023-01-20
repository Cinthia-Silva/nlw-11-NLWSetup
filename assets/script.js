const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
    const today = "01/01"
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("Dia já registrado ❌")
        return
    }

    alert('Adicionado com sucesso ✅')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup11@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup11@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()