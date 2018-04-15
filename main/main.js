module.exports = function main(waitMinites,kilometers) {
    let waitFees = wait(waitMinites);
    let runFees = runFee(kilometers);
    let fee = Math.round(waitFees + runFees);
    let feeCheck = 
    `账单明细：
    等待时间：${waitMinites}（分钟），收费：${waitFees.toFixed(2)}（元）；
    乘坐距离：${kilometers}（公里），收费：${runFees.toFixed(2)}（元）；
    总计收费：${fee.toFixed(2)}（元）。`
    console.log(feeCheck);
};

let wait = (waitMinites) => {
    return waitFee = Math.ceil(waitMinites) * 0.25;
}

let runFee = (kilometers) => {
    if (kilometers <= 2) {
        return runFee = 6.00;
    } else if (kilometers > 2 && kilometers <= 8) {
        return runFee = 6.00 + 0.80 * (Math.ceil(kilometers - 2));
    } else {
        return runFee = 6 + 0.80 * 6 + 1.20 * (Math.ceil(kilometers - 8))
    }
}

