const bhuiyanBariOldSerial = [88,11,32,34,66,8];

function bubbleSort(bhuiyanBariOldSerial){
    for (let i = 0; i < bhuiyanBariOldSerial.length; i++) {
        for (let j = 0; j < bhuiyanBariOldSerial.length; j++) {
            if (bhuiyanBariOldSerial[j] > bhuiyanBariOldSerial[j+1]) {
                //while used '>' then output shown ascending order;
                //while used '<' then output shown descending order;
                let something = bhuiyanBariOldSerial[j];
                bhuiyanBariOldSerial[j] = bhuiyanBariOldSerial[j+1];
                bhuiyanBariOldSerial[j+1] = something;

            }
            
        }
        
        }
    return bhuiyanBariOldSerial;
    }
            

    const oldSerial = bubbleSort(bhuiyanBariOldSerial);
    console.log('22222',oldSerial)