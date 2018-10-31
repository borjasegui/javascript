onmessage = function(mess){
    let text =mess.data;
    console.log(text);
    this.postMessage('*'+text+'*');
}
onmessage =function(suma){
    result=0
    for (let index = 0; index < suma.length; index++) {
       result += suma[index];
    }
    this.postMessage(suma);
}