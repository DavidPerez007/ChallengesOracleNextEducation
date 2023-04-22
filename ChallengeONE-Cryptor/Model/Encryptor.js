class Encryptor {
    encrypted_text = ""
    decrypted_text = ""
    rules = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
    }

    constructor(text) {
        this.decrypted_text = text.toLowerCase()
    }

    encrypt() {
        for (let i = 0; i < this.decrypted_text.length; i++) {
            if (this.rules.hasOwnProperty(this.decrypted_text[i])) {
                this.encrypted_text = this.encrypted_text.concat(this.rules[this.decrypted_text[i]])
            } else {
                this.encrypted_text = this.encrypted_text.concat(this.decrypted_text[i])
            }
        }

    }
}




