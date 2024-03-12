const personalities = [
  'adventurer','researcher','artisan','traveler',
  'butler','leader','judge','clergy','pacifist',
  'soloplayer','bancho','runner','challenger','planner',
  'samurai','philosopher','martialartist','clown',
  'sage','hero','gambler','merchant','collector'
];

let sortParam = '';

function createTable(){
  const lang = document.getElementById('lang').value;
  const category = document.getElementById('category').value;
  let obj;
  if(!category == '') obj = categories[category].map(val => personalityScoreTable[val]);
  else obj = personalityScoreTable.filter(elm => true);
  if(sortParam !=='') obj.sort((a, b) => {
    if (sortParam in a.score && sortParam in b.score) {
      return b.score[sortParam] - a.score[sortParam];
    } else if (sortParam in a.score) {
      return -1;
    } else if (sortParam in b.score) {
      return 1;
    } else {
      return 0;
    }
  });
  const orgIndex = obj.map(elm => personalityScoreTable.indexOf(elm));
  const tbody = document.querySelector('#list tbody');
  tbody.innerHTML = '';
  const tmpNode = document.createElement('tr');
  for(let i=0; i < personalities.length+1; i++){
    const td = document.createElement('td');
    tmpNode.append(td);
  }
  obj.forEach((elm,index) => {
    const tr = tmpNode.cloneNode(true);
    const td = tr.querySelectorAll('td');
    td[0].textContent = elm[lang];
    //td[0].textContent = orgIndex[index] + ': ' +  elm[lang];
    for(const key of Object.keys(elm.score)){
      try {
        td[personalities.indexOf(key) + 1].textContent = elm.score[key];
      } catch (error) {
        //console.error(error);
        console.error(key);
      }
    }
    tbody.append(tr);
  })
}

createTable();

function sortTable(){
  event.stopPropagation();

  const th = event.target.closest('th');
  const btnClass = th.querySelector('button').className;
  (sortParam === btnClass) ? sortParam = '' : sortParam = btnClass;
  createTable();
}

function navigateCategory (){
  event.stopPropagation();

  const select = document.getElementById('category');
  const buttonClicked = event.target.dataset.nav;
  if(buttonClicked === 'prev' && select.selectedIndex !== 0) {
    select.selectedIndex = select.selectedIndex -1;
  }
  if(buttonClicked === 'next' && select.selectedIndex !== select.options.length - 1) {
    select.selectedIndex = select.selectedIndex +1;
  }
  if(buttonClicked === 'first') {
    select.selectedIndex = 0;
  }
  if(buttonClicked === 'last') {
    select.selectedIndex = select.options.length -1;
  }
  createTable();
}

const categories = {
  misc:[0,1,2,3,4,5,6,7,8,9,10,11,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,136,137,138,139,156,157,158,159,160,161],
  ending:[625,626,627,628,629],
  firstarea:[133,134,135,118,119,120,121,122,123,124,125,126,466,467,468,469,22,23],
  bench:[606,607,608,89,90,91,92,93,94,154,155],
  divination:[575,576,577,567,568,569,570,571,12,13,14,15,16],
  kokoro:[620,621,622,623,558,559,560,26,27,185,186,187,188,189,190,191,192,193,194],
  mirror:[630,631,632,633,634,635,636,637,638,639,640,641],
  kibou:[644,645,646,647,648,649,650,651],
  shrine:[457,458,459,492,493,494,477,478,479,480,481,495,496,497,584,585],
  sheep:[498,499,500,501,502,503,504,505,506,460,461,462,463,464,465,599,600],
  caringsheep:[285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329],
  recycleshop:[95,96,97,98,99,100,543,544,586,587],
  npc:[578,579,580,581,582,583,601,602,603,652,653,654,655,656],
  vendingmachine:[486,487,488,489,490,491,130,131,132],
  cat:[594,595,596,597,598,614,615,616],
  telescope:[555,556,557,482,483,484,485],
  m2:[545,546,547,548,549,550,551,552,553,554,377,378,379,380,381,382,383],
  cafe:[507,508,509,510,511,512,513,514,515,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,,276,277,278,279,280,281,282,283,284],
  shootinggame:[561,562,563,373,374,375,376],
  labo:[540,541,542,470,471,472,473,642,643,572,573,574,149,150,151,152,153,17,18,474,475,476],
  actiongame:[564,565,566,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366],
  cigarette:[28,29,82,83,84,85,86,87,88,127,128,129],
  mirai:[516,517,518,519,520,521,522,523,453,454,455,456,24,25,384,385,386,387,388,389,390,391,392,393,394],
  casino:[32,33,183,184,175,176,177,178,179,180,181,182,34,35],
  cave:[107,108,109,110,115,116,117,30,31,111,112,113,114],
  m1:[524,525,526,527,528,529,530,531,532,533,534,535,536,395,396,397,398,399,400,401,402,403],
  coast:[19,20,21,173,174,367,368,369,370,371,372],
  defense:[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452],
  collapsedman:[588,589,590,609,610,611,612,613],
  object:[140,141,142,146,147,148,101,102,103,104,105,106,591,592,593,143,144,145,537,538,539,604,605,617,618,619],
  finalaction:[162,163,164,165,166,167,168,169,170,171,172]
}

document.getElementById('category').addEventListener('change',createTable);
document.querySelector('#list thead tr').addEventListener('click',sortTable);
document.getElementById('navigateCategoryBtn').addEventListener('click',navigateCategory);