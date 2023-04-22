function encrypt(text) {
    let encripter = new Encryptor(text)
    encripter.encrypt()
    console.log(encripter.encrypted_text)
}

function decrypt(text) {
    let encripter = new Decryptor(text)
    encripter.decrypt()
    console.log(encripter.decrypted_text)
}