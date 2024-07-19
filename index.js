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

function densePackedBCD(binaryMap, decimalInput) {
    arr = packedResult.split('');
    int a = arr[0];
    int b = arr[1];
    int c = arr[2];
    int d = arr[3];
    int e = arr[4];
    int f = arr[5];
    int g = arr[6];
    int h = arr[7];
    int j = arr[8];
    int k = arr[9];
    int l = arr[10];

    if(a == 0){
        if(e == 0){
            if (i == 0){
            }
            else{
                
            }
        }
        else{
            
        }
    }
    else{

    }

