function cipher(data,shift,action){

    if(action.toLowerCase() == "encrypt"){
        let encryptedText='';
        for(let i = 0; i< data.length;i++){
            let char = data[i];
            if(char.match(/[a-z]/i)){
                const isUppercase = char === char.toUpperCase();
                char = char.toLowerCase();

                const asciiCode = char.charCodeAt(0);
                const shiftedAscii = ((asciiCode - 97 +shift ) % 26 )+ 97;
                let shiftedchar = String.fromCharCode(shiftedAscii);
                if(isUppercase){
                    shiftedchar = shiftedchar.toUpperCase();
                }
                encryptedText += shiftedchar ;
            }else{
                encryptedText += char;
            }
        }
        return encryptedText ;
        
    }else if(action.toLowerCase() == "decrypt"){
        let decryptedText='';
        for(let i = 0; i< data.length;i++){
            let char = data[i];
            if(char.match(/[a-z]/i)){
                const isUppercase = char === char.toUpperCase();
                char = char.toLowerCase();

                const asciiCode = char.charCodeAt(0);
                const shiftedAscii = ((asciiCode - 97 - shift + 26 ) % 26 )+ 97;
                let shiftedchar = String.fromCharCode(shiftedAscii);
                if(isUppercase){
                    shiftedchar = shiftedchar.toUpperCase();
                }
                decryptedText += shiftedchar ;
            }else{
                decryptedText += char;
            }
        }
        return decryptedText ;
    }

}

module.exports = cipher