class Decryptor {
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
        this.encrypted_text = text.toLowerCase()
    }

    decrypt() {
        for (let i = 0; i < this.encrypted_text.length; i++) {
            if (this.rules.hasOwnProperty(this.encrypted_text[i])) {
                this.decrypted_text = this.decrypted_text.concat(this.encrypted_text[i])
                i = i + this.rules[this.encrypted_text[i]].length - 1 
            } else {
                this.decrypted_text = this.decrypted_text.concat(this.encrypted_text[i])
            }
        }
    }
}



