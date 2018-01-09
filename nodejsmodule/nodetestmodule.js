var num = 1;

exports.addOne = () => {
    num++;
}

exports.number = num;  // 直接导出，这个值在外部不会变，除非直接赋值

exports.getNumber = function() { return num; } // 间接导出，通过函数返回可以体现出值的变化