const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    var waitMinites;
    var kilometers;

    it('should print correct feeCheck1', function () {

        // waitMinites = 2;
        // kilometers = 2;

        spyOn(console, 'log');

        main(2,2);

        var expectText1 =
            `账单明细：
    等待时间：2（分钟），收费：0.50（元）；
    乘坐距离：2（公里），收费：6.00（元）；
    总计收费：7.00（元）。`;

        expect(console.log).toHaveBeenCalledWith(expectText1);
    });

    // it('should print correct feeCheck2', function () {

    //     waitMinites = 0;
    //     kilometers = 5.6;

    //     spyOn(console, 'log');

    //     main(waitMinites, kilometers);

    //     var expectText2 =
    //         `账单明细：
    // 等待时间：0（分钟），收费：0.00（元）；
    // 乘坐距离：5.6（公里），收费：9.20（元）；
    // 总计收费：9.00（元）。`;

    //     expect(console.log).toHaveBeenCalledWith(expectText2);
    // });


    // it('should print correct feeCheck3', function () {

    //     waitMinites = 10;
    //     kilometers = 10;

    //     spyOn(console, 'log');

    //     main(waitMinites, kilometers);

    //     var expectText3 =
    //         `账单明细：
    // 等待时间：10（分钟），收费：2.50（元）；
    // 乘坐距离：10（公里），收费：13.20（元）；
    // 总计收费：16.00（元）。`;

    //     expect(console.log).toHaveBeenCalledWith(expectText3);
    // });
});
