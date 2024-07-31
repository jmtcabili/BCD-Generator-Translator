function fromDecimal() {
    const binaryMap = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1000',
        '9': '1001'
    };

    const decimalInput = document.getElementById('decimalInput').value.split('');
    let unpackedOutput = document.getElementById('uBCD');
    let packedOutput = document.getElementById('pBCD');
    let denseOutput = document.getElementById('dBCD'); 
    let errMsg = document.getElementById('err1'); 

    let flag = 1; 
    
    const has2To9 = /[2-9]/
    const hasFloating = /[.-]/

    if (hasFloating.test(decimalInput)){
        errMsg.style.display = "inline-block"; 
        errMsg.innerText = "Input should not have decimal point or any unary sign";
        flag = 0;
    }else{
        errMsg.style.display = "none";
        flag = 1;
    }

    if (flag){
        let unpackedResult = unpackedBCD(binaryMap, decimalInput);
        let packedResult = packedBCD(binaryMap, decimalInput);
        let denseResult = denseBCD(binaryMap, decimalInput);
        unpackedOutput.innerHTML = unpackedResult;
        packedOutput.innerHTML = packedResult;
        denseOutput.innerHTML = denseResult;
    }else{
        unpackedOutput.innerHTML = "";
        packedOutput.innerHTML = "";
        denseOutput.innerHTML = "";
    }
    

    
}

function unpackedBCD(binaryMap, decimalInput) {
    return decimalInput.map(digit => '0000-' + binaryMap[digit]).join(' ');
}

function packedBCD(binaryMap, decimalInput) {
    return decimalInput.map(digit => binaryMap[digit]).join(' ');
}

function denseBCD(){
    return ""
}

function fromBCD(){
    const dBCDInput = document.getElementById('bcdInput').value; 
    let decimalOutput = document.getElementById('decimalOutput'); 
    let errMsg = document.getElementById('err2');
    let flag = 0; 

    const idx = {
        'a': 0, 'p': 0, 
        'b': 1, 'q': 1,
        'c': 2, 'r': 2,
        'd': 3, 's': 3,
        'e': 4, 't': 4,
        'f': 5, 'u': 5,
        'g': 6, 'v': 6,
        'h': 7, 'w': 7,
        'i': 8, 'x': 8,
        'j': 9, 'y': 9,
        'k': 10,
        'm': 11
    };

    //to packedBCD
    numGroups = Math.floor(dBCDInput.length/10); 
    numExcess = dBCDInput.length%10;

     
    //generate default 0-array
    numBits = numGroups * 12;

    console.log(numExcess);
    const has2To9 = /[2-9]/
    const hasFloating = /[.-]/


    if (has2To9.test(dBCDInput)){
        errMsg.style.display = "inline-block"; 
        errMsg.innerText = "Input should be in terms of bit values (0 / 1)";
        flag = 0; 
    }else if (hasFloating.test(dBCDInput)){
        errMsg.style.display = "inline-block"; 
        errMsg.innerText = "Input should not have decimal point or any unary sign";
        flag = 0;
    }else if (numExcess != 0){
        errMsg.style.display = "inline-block"; 
        
        errMsg.innerText = "Enter bits in multiples of 10";
        flag = 0; 
    }
    else{
        errMsg.style.display = "none";
        flag = 1;
    }

    if (flag){
        let result = new Array(numBits).fill('0')
    
        for(let count = 1; count <= numGroups ; count++){
        
            //default values
            result[idx['d']]  = dBCDInput[idx['r']]
            result[idx['h']]  = dBCDInput[idx['u']]
            result[idx['m']]  = dBCDInput[idx['y']]
    
            //finding majors
            if (dBCDInput[idx['v']] == '0'){
                result[idx['b']] = dBCDInput[idx['p']]
                result[idx['c']] = dBCDInput[idx['q']]
                result[idx['f']] = dBCDInput[idx['s']]
                result[idx['g']] = dBCDInput[idx['t']]
                result[idx['j']] = dBCDInput[idx['w']]
                result[idx['k']] = dBCDInput[idx['x']]
    
                result[idx['a']] = '0'
                result[idx['e']] = '0'
                result[idx['i']] = '0'
            }else{                                      //if v == 1
                w = dBCDInput[idx['w']]; 
                x = dBCDInput[idx['x']]; 
    
                if (w == '0' && x == '0')               //if w and x are 0
                    result[idx['i']] = 1;
                else if (w == '0' || x == '0'){         //if either w or x is 0
                    if (w == '0')                       
                        result[idx['e']] = 1; 
                    else 
                        result[idx['a']] = 1; 
                }else if (w == '1' && x == '1'){        //if both are 1 
    
                    //check st for location of 0 in major
                    s = dBCDInput[idx['s']];        
                    t = dBCDInput[idx['t']]; 
    
                    //default majors to 1 to make adjusting easier
                    result[idx['a']] = '1'
                    result[idx['e']] = '1'
                    result[idx['i']] = '1'
    
                    if (s == '0' && t == '0')           //if w and x are 0
                        result[idx['i']] = 0;
                    else if (s == '0' || t == '0'){     //if either w or x is 0
                        if (s == '0')                       
                            result[idx['e']] = 0; 
                        else 
                            result[idx['a']] = 0;
                    }
                    //else, they're all 1 -> already set earlier
                }
    
                //handling bc, fg, and jk - > depends on majors
                a = result[idx['a']]; 
                e = result[idx['e']]; 
                i = result[idx['i']]; 
    
                
                if (a == '0'){
                    //pq
                    result[idx['b']] = dBCDInput[idx['p']];
                    result[idx['c']] = dBCDInput[idx['q']];
                    
                    //st
                    if (e == '0'){
                        result[idx['f']] = dBCDInput[idx['s']];
                        result[idx['g']] = dBCDInput[idx['t']]; 
                    }else{
                        if (i == '0'){
                            result[idx['j']] = dBCDInput[idx['s']];
                            result[idx['k']] = dBCDInput[idx['t']]; 
                        }
                    }
    
                }else{                                  //a is 1 (lower half of table)
                    if (i == '0'){
                        //pq
                        result[idx['j']] = dBCDInput[idx['p']];
                        result[idx['k']] = dBCDInput[idx['q']]; 
                        
                        //st
                        if (e == '0'){
                            result[idx['f']] = dBCDInput[idx['s']];
                            result[idx['g']] = dBCDInput[idx['t']]; 
                        }
                    }else{
                        result[idx['f']] = dBCDInput[idx['p']];
                        result[idx['g']] = dBCDInput[idx['q']];
    
                    }
                }
            }
    
            //increment the indices of the idx array for the next group
            idx.a = 0 + (12*count);
            idx.b = 1 + (12*count);
            idx.c = 2 + (12*count);
            idx.d = 3 + (12*count);
            idx.e = 4 + (12*count);
            idx.f = 5 + (12*count);
            idx.g = 6 + (12*count);
            idx.h = 7 + (12*count);
            idx.i = 8 + (12*count);
            idx.j = 9 + (12*count);
            idx.k = 10 + (12*count);
            idx.m = 11 + (12*count);
    
            idx.p = 0 + (10*count);
            idx.q = 1 + (10*count);
            idx.r = 2 + (10*count);
            idx.s = 3 + (10*count);
            idx.t = 4 + (10*count);
            idx.u = 5 + (10*count);
            idx.v = 6 + (10*count);
            idx.w = 7 + (10*count);
            idx.x = 8 + (10*count);
            idx.y = 9 + (10*count);
    
            //console.log("LOOP");
    
        }
        
        final = result.join(''); 
    
        const binaryMap = {
            '0000': '0',
            '0001': '1',
            '0010': '2',
            '0011': '3',
            '0100': '4',
            '0101': '5',
            '0110': '6',
            '0111': '7',
            '1000': '8',
            '1001': '9'
        };
        
        // Split the joined BCD string into chunks of 4 bits and map each chunk to its decimal equivalent
        const decimalString = final.match(/.{1,4}/g).map(digit => binaryMap[digit]).join('');
    
        console.log(decimalString);
        
        // Convert the decimal string to a number to remove the non significant zeroes
        const decimalOutputNum = parseInt(decimalString, 10);
    
        decimalOutput.innerHTML = decimalOutputNum;
    }else{
        decimalOutput.innerHTML = ""; 
    }
}

function generateText(){

    const decimalInput = document.getElementById('decimalInput').value
    const unpackedOutput = document.getElementById('uBCD').innerHTML;
    const packedOutput = document.getElementById('pBCD').innerHTML;
    const denseOutput = document.getElementById('dBCD').innerHTML; 

    const dBCDInput = document.getElementById('bcdInput').value; 
    const decimalOutput = document.getElementById('decimalOutput').innerHTML; 

    fileName  = "BCD Generation and Translation"
    fileOutput = 

`BCD Generation
-------------------------------
Decimal Input      : ${decimalInput}
Unpacked BCD       : ${unpackedOutput}
Packed BCD         : ${packedOutput}
Densely Packed BCD : ${denseOutput}

BCD Translation
-------------------------------
Densely Packed BCD Input: ${dBCDInput}
Decimal Equivalent      : ${decimalOutput}
`; 

    const blob = new Blob([fileOutput], {type: "text/plain"}); 
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName; 
    link.href = fileUrl; 
    link.click(); 

}
