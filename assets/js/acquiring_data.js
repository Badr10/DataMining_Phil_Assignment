/*=====================
phil@affinio.com
@phil_renaud
March 2016
=====================*/



/*=======================================================
Basic tutorial on pulling and cleaning up data from the wild
These examples will work on the US Census website at, for example, http://www.census.gov/foreign-trade/statistics/product/enduse/exports/c1220.html
All available countries can be found at http://www.census.gov/foreign-trade/statistics/product/enduse/exports/

All the following commands should be pasted into your Chrome or Firefox console.
=======================================================*/




/*=======================================================
STEP 1: IMPORT JQUERY AND THE UNDERSCORE.JS LIBRARY
For documentation, see http://underscorejs.org/
=======================================================*/

// add jquery:
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
document.head.appendChild(script);

// add underscore:
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://api.affin.io/scripts/libs/underscore-min.js';
document.head.appendChild(script);

/*=======================================================
STEP 2: DO SOME BASIC PAGE MANIPULATION
For documentation, see http://underscorejs.org/
=======================================================*/

myArray = [];
d3.csv("youthprison.csv", function(d) {
  return {
    Province: d.Province,
    "yr2009": d.yr2009,
    "yr2010": d.yr2010,
    "yr2011": d.yr2011,
    "yr2012": d.yr2012,
    "yr2013": d.yr2013
  };
}, function(error, rows) {
  // console.log(rows);
  myArray = rows;
});


bigData = _.map(myArray, function(row) {
  return {
    id: row.Province,
    stats: 
    [{
      name: "yr2009",
      value: parseFloat(row.yr2009)
    }, {
      name: "yr2010",
      value: parseFloat(row.yr2010)
    }, {
      name: "yr2011",
      value: parseFloat(row.yr2011)
    }, {
      name: "yr2012",
      value: parseFloat(row.yr2012)
    }, {
      name: "yr2013",
      value: parseFloat(row.yr2013)
    }]
  }
})
JSON.stringify(bigData)