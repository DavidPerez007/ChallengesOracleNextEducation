const input_text = document.querySelector('#text-area')
const error_msg = document.querySelector('.no-text-error-container')
const crypt_btn = document.querySelector('#crypt-btn')
const decrypt_btn = document.querySelector("#decrypt-btn")
const output = document.querySelector('.result-container')
const text_result = document.querySelector('.text-result')
const copy_btn = document.querySelector('.copy-container')
const silly_guy = document.querySelector('.silly-guy')
const message_container = document.querySelector('.message-container')

crypt_btn.onclick = encrypt
decrypt_btn.onclick = decrypt
const rules = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
}

inputMensaje.addEventListener("input", validate);

function encrypt() {
    if(input_text === ""){
        error_msg.classList.remove("hide")
    }
    hide_elements()
    let encrypted_text = ""
    let word_size = input_text.value.length
    for (let i = 0; i < word_size; i++) {
        if (rules.hasOwnProperty(input_text.value[i].toString())) {
            encrypted_text = encrypted_text.concat(rules[input_text.value[i]])
        } else {
            encrypted_text = encrypted_text.concat(input_text.value[i])
        }
    }
    show_result(encrypted_text)

}

function decrypt() {
    let decrypted_text = ""
    let word_size = input_text.value.length
    for (let i = 0; i < word_size; i++) {
        if (rules.hasOwnProperty(input_text.value[i].toString())) {
            decrypted_text = decrypted_text.concat(input_text.value[i])
            i += rules[input_text.value[i]].length - 1
        } else {
            decrypted_text = decrypted_text.concat(input_text.value[i])
        }
    }
    show_result(decrypted_text)

}

function hide_elements(){
    silly_guy.classList.add("hide")
    message_container.classList.add("hide")
    output.classList.remove("hide")
    copy_btn.classList.remove("hide")

}

function show_result(text){
    text_result.innerHTML = text
}

function validate(){
    alert(input_text.value)
}