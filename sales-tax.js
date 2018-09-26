var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {

  addTotalSales();
  addSalesTax();
  // console.log(salesData);
  concatObjects(salesData);

  function totalSales (sales)
  {
    var money = 0;
    for (var sum = 0; sum < sales.length; sum ++)
    {
      money += sales[sum];
    }
    return money;
  }

  function addTotalSales()
  {
    for (var i = 0; i < salesData.length; i++)
    {
      salesData[i].total = totalSales(salesData[i]['sales']);
    }
  }

  function addSalesTax()
  {
    for (var i = 0; i < salesData.length; i++)
    {
      var province = salesData[i]['province'];
      var salesTax = taxRates[province];
      salesData[i]['sales-tax'] = salesTax * salesData[i]['total'];
      // console.log(salesData[i]);
    }
  }

  function concatObjects()
  {
    var salesReport = {};

    for (var i = 0; i < salesData.length; i++)
    {
      var name = salesData[i]['name'];
      var total = salesData[i]['total'];
      var salesTax = salesData[i]['sales-tax'];

      if (salesReport.hasOwnProperty(name))
      {
        salesReport[name]['totalSales'] += total;
        salesReport[name]['totalTaxes'] += salesTax;
      }
      else
      {
        var report = {'totalSales': total, 'totalTaxes': salesTax};
        salesReport[name] = report;
      }

    }
    console.log(salesReport);
    return salesReport;
  }
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/