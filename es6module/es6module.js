export var num = 1;   // 直接导出，值变化了 （对比nodejs)

export var addOne = () => {
    num++;
}

// 通过函数间接导出，值变化了
export var getNumber = function () {
    return num;
}