var vows = require('vows');
var preparedTests = require('../tools/preparedTests.js');


vows.describe('Kategorie')

//12282 Brno
.addBatch({'Brno Nejprodávanější': preparedTests.categoryCheck(12282, 'nejprodavanejsi', 'Nejprodávanější')})
.addBatch({'Brno Cestování': preparedTests.categoryCheck(12282, 'cestovani', 'Cestování')})
.addBatch({'Brno Krása & Relax': preparedTests.categoryCheck(12282, 'beauty-relax', 'Relax & Krása')})
.addBatch({'Brno Zboží': preparedTests.categoryCheck(12282, 'zbozi', 'Zboží')})

.export(module);