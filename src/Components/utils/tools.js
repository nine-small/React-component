// 减速运动
export const slowDownMove = (dom,origin,cb)=>{
    clearInterval(dom.timer);
    let key;
    dom.timer = setInterval(()=>{
        key = true;
        for(const prop in origin){
            if(origin.hasOwnProperty(prop)){
                const current = parseInt(getComputedStyle(dom,null)[prop]);
                let speed = (origin[prop] - current ) / 7;
                speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
                speed !== 0 && (key = false);
                dom.style[prop] = current + speed + 'px'
            }
        }
        if(key){
            clearInterval(dom.timer);
            typeof cb === 'function' && cb()
        }
    },60)
}