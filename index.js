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

    let unpackedResult = unpackedBCD(binaryMap, decimalInput);
    let packedResult = packedBCD(binaryMap, decimalInput);
    let denseResult = denseBCD(binaryMap, decimalInput);

    unpackedOutput.innerHTML = unpackedResult;
    packedOutput.innerHTML = packedResult;
    denseOutput.innerHTML = denseResult;
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
    numBits = numGroups * 12 + numExcess; 

    let result = new Array(numBits).fill('0')
    
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
    
    final = result.join(''); 
    decimalOutput.innerHTML = final;
}
