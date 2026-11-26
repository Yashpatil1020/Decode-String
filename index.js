var decodeString = function(s) {
    const stack=[];
    for(const ch of s){
        if(ch !== ']'){
            stack.push(ch);
        } else{
            let str="";
            while(stack[stack.length-1]!=='['){
                str=stack.pop()+str;
            }
            stack.pop();
            let num="";
            while(stack.length>0 && /\d/.test(stack[stack.length-1])){
                num=stack.pop()+num;
            }
            let repeatCount=parseInt(num,10);
            let repeated=str.repeat(repeatCount);
            for(c of [repeated.toString()]){
                stack.push(c);
            }
        }
    }
    let result="";
    while(stack.length>0){
        result=stack.pop()+result;
    }
    return result;
};