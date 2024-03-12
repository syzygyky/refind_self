const personalityScoreTable = [
  {
    ja:'このゲームを始めた',
    en:'Started the game',
    score:{butler:2, judge:-1, clergy:-1, soloplayer:2, samurai:-6, philosopher:4}
  },
  {
    ja:'診断の進行度を遅らせた',
    en:'Delayed progress of test',
    score:{planner:2, clown:-1, hero:-2}
  },
  {
    ja:'診断の進行度を遅らせなかった',
    en:'Didn\'t delay progress of test',
    score:{pacifist:2, soloplayer:2, runner:4, planner:-4, martialartist:2, clown:2}
  },
  {
    ja:'20分以内にクリアした',
    en:'Finished within 20 minutes',
    score:{runner:4, planner:-4}
  },
  {
    ja:'25分以内にクリアした',
    en:'Finished within 25 minutes',
    score:{runner:2, planner:-2}
  },
  {
    ja:'30分以内にクリアした',
    en:'Finished within 30 minutes',
    score:{runner:2, planner:-2}
  },
  {
    ja:'60分以上かけてクリアした',
    en:'Finished after 60 minutes',
    score:{runner:-2, planner:2}
  },
  {
    ja:'65分以上かけてクリアした',
    en:'Finished after 65 minutes',
    score:{adventurer:2, runner:-2, planner:2}
  },
  {
    ja:'70分以上かけてクリアした',
    en:'Finished afrer 70 minutes',
    score:{adventurer:2, runner:-4, planner:4}
  },
  {
    ja:'地図を3回確認した',
    en:'Checked the map 3 times',
    score:{adventurer:1, planner:2}
  },
  {
    ja:'地図を7回確認した',
    en:'Checked the map 7 times',
    score:{adventurer:2, bancho:-2, planner:2, gambler:-1}
  },
  {
    ja:'地図を12回確認した',
    en:'Checked the map 12 times',
    score:{adventurer:4, bancho:-4, planner:4, gambler:-1}
  },
  {
    ja:'占いで、水晶に触れたタイミングが3回とも同じだった',
    en:'During the divination, touched the crystal at the same time all three times.',
    score:{artisan:-2, traveler:2, butler:-2, leader:-2}
  },
  {
    ja:'占いで、水晶に触れたタイミングが適当だった',
    en:'During the divination, touched the crystal at the appropriate moment.',
    score:{artisan:2, traveler:-2, butler:2, leader:2}
  },
  {
    ja:'占いを3秒以内に終わらせた',
    en:'Finished the divination within 3 seconds.',
    score:{bancho:2, samurai:2, philosopher:-2}
  },
  {
    ja:'占いに10秒以上かけた',
    en:'Took more than 10 seconds to finish the divination.',
    score:{runner:-2, samurai:-2, philosopher:2}
  },
  {
    ja:'占いが終わってもクリックし続けた',
    en:'Kept clicking even after the divination was over.',
    score:{bancho:2, challenger:2, martialartist:-2, sage:-2, collector:2}
  },
  {
    ja:'強引に金庫を開けた',
    en:'Forced the safe open',
    score:{leader:-2, bancho:6, challenger:2, planner:-4, hero:2, collector:2}
  },
  {
    ja:'金庫を開けなかった',
    en:'Didn\'t open the safe',
    score:{judge:2, bancho:-4, challenger:-2, planner:4}
  },
  {
    ja:'海岸を進み続けた',
    en:'Continued down the coast',
    score:{adventurer:2, runner:-2}
  },
  {
    ja:'海岸を沢山進み続けた',
    en:'Walked far down the coast',
    score:{adventurer:4, runner:-2}
  },
  {
    ja:'海岸をかなり沢山進み続けた',
    en:'Walked way down the coast',
    score:{adventurer:8, runner:-4}
  },
  {
    ja:'名前を決めるとき迷わなかった',
    en:'Didn\'t hesitate when deciding name',
    score:{samurai:1}
  },
  {
    ja:'名前を決めるとき、一度考えた',
    en:'Reconsidered when deciding name',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'ハイアンドローを辞めるとき迷わなかった',
    en:'Didn\'t hesitate to quit High-Low',
    score:{samurai:1}
  },
  {
    ja:'ハイアンドローを辞めるとき、一度考えた',
    en:'Reconsidered quitting High-Low',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'羊の絵が完成したとき迷わなかった',
    en:'Didn\'t hesitate to finish sheep-painting game',
    score:{samurai:1}
  },
  {
    ja:'羊の絵が完成したとき、一度考えた',
    en:'Reconsidered finishing sheep-painting game',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'たばこを購入したとき迷わなかった',
    en:'Didn\'t hesitate buying cigarettes',
    score:{samurai:1}
  },
  {
    ja:'たばこを購入したとき、一度考えた',
    en:'Reconsidered buying cigarettes',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'よせあつめからアイテムを購入したとき迷わなかった',
    en:'Didn\'t hesitate buying from Mishmash',
    score:{samurai:1}
  },
  {
    ja:'よせあつめからアイテムを購入したとき、一度考えた',
    en:'Reconsidered buying from Mishmash',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'クレーンゲームのプレイ確認時迷わなかった',
    en:'Didn\'t hesitate to start crane game',
    score:{samurai:1}
  },
  {
    ja:'クレーンゲームのプレイ確認時、一度考えた',
    en:'Reconsidered starting crane game',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'スロットを辞めるか確認するとき迷わなかった',
    en:'Didn\'t hesitate to quit slots',
    score:{samurai:1}
  },
  {
    ja:'スロットを辞めるか確認するとき、一度考えた',
    en:'Reconsidered quitting slots',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'防衛戦の1回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 1st defense upgrade',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の1回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 1st defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の2回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 2nd defense upgrade',
    score:{martialartist:1}
  },
  {
    ja:'防衛戦の2回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 2nd defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の3回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 3rd defense upgrade',
    score:{martialartist:1}
  },
  {
    ja:'防衛戦の3回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 3rd defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の4回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 4th defense upgrade',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の4回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 4th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の5回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 5th defense upgrade',
    score:{martialartist:1}
  },
  {
    ja:'防衛戦の5回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 5th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の6回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 6th defense upgrade',
    score:{martialartist:1}
  },
  {
    ja:'防衛戦の6回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 6th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の7回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 7th defense upgrade',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の7回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 7th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 8th defense upgrade',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 8th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'防衛戦の9回目のアップグレードで迷わなかった',
    en:'Didn\'t hesitate when confirming 9th defense upgrade',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の9回目のアップグレードで一度考えた',
    en:'Reconsidered when confirming 9th defense upgrade',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'会話の選択を1秒以内に回答した',
    en:'Answered a dialogue choice in 1 second',
    score:{samurai:2}
  },
  {
    ja:'会話の選択を1秒以内に回答した（2回目）',
    en:'Answered a dialogue choice in 1 second (2nd time)',
    score:{samurai:2}
  },
  {
    ja:'会話の選択を1秒以内に回答した（3回目）',
    en:'Answered a dialogue choice in 1 second (3rd time)',
    score:{samurai:2, philosopher:-2}
  },
  {
    ja:'会話の選択を1秒以内に回答した（5回目）',
    en:'Answered a dialogue choice in 1 second (5th time)',
    score:{samurai:4, philosopher:-2}
  },
  {
    ja:'会話の選択を1秒以内に回答した（7回目）',
    en:'Answered a dialogue choice in 1 second (7th time)',
    score:{samurai:4, philosopher:-2}
  },
  {
    ja:'会話の選択を1秒以内に回答した（10回目）',
    en:'Answered a dialogue choice in 1 second (10th time)',
    score:{samurai:9, philosopher:-8}
  },
  {
    ja:'会話の選択を2秒以内に回答した',
    en:'Answered a dialogue choice in 2 seconds',
    score:{samurai:1}
  },
  {
    ja:'会話の選択を2秒以内に回答した（2回目）',
    en:'Answered a dialogue choice in 2 seconds (2nd time)',
    score:{samurai:1}
  },
  {
    ja:'会話の選択を2秒以内に回答した（3回目）',
    en:'Answered a dialogue choice in 2 second (3rd time)',
    score:{samurai:1, philosopher:-1}
  },
  {
    ja:'会話の選択を2秒以内に回答した（5回目）',
    en:'Answered a dialogue choice in 2 seconds (5th time)',
    score:{samurai:2, philosopher:-1}
  },
  {
    ja:'会話の選択を2秒以内に回答した（7回目）',
    en:'Answered a dialogue choice in 2 seconds (7th time)',
    score:{samurai:2, philosopher:-1}
  },
  {
    ja:'会話の選択を2秒以内に回答した（10回目）',
    en:'Answered a dialogue choice in 2 seconds (10th time)',
    score:{samurai:2, philosopher:-4}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した',
    en:'Answered a dialogue choice after 12 seconds',
    score:{philosopher:2}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した（2回目）',
    en:'Answered a dialogue choice after 12 seconds (2nd time)',
    score:{samurai:-1, philosopher:2}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した（3回目）',
    en:'Answered a dialogue choice after 12 seconds (3rd time)',
    score:{samurai:-2, philosopher:2}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した（5回目）',
    en:'Answered a dialogue choice after 12 seconds (5th time)',
    score:{samurai:-3, philosopher:4}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した（7回目）',
    en:'Answered a dialogue choice after 12 seconds (7th time)',
    score:{samurai:-4, philosopher:4}
  },
  {
    ja:'会話の選択を12秒以上かけて回答した（10回目）',
    en:'Answered a dialogue choice after 12 seconds (10th time)',
    score:{samurai:-8, philosopher:8}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した',
    en:'Answered a dialogue choice after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した（2回目）',
    en:'Answered a dialogue choice after 7 seconds (2nd time)',
    score:{philosopher:1}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した（3回目）',
    en:'Answered a dialogue choice after 7 seconds (3rd time)',
    score:{philosopher:1}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した（5回目）',
    en:'Answered a dialogue choice after 7 seconds (5th time)',
    score:{samurai:-2, philosopher:2}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した（7回目）',
    en:'Answered a dialogue choice after 7 seconds (7th time)',
    score:{samurai:-2, philosopher:2}
  },
  {
    ja:'会話の選択を7秒以上かけて回答した（10回目）',
    en:'Answered a dialogue choice after 7 seconds (10th time)',
    score:{samurai:-4, philosopher:6}
  },
  {
    ja:'赤く表示された会話中の選択肢を1秒以内に回答した',
    en:'Answered a dialogue choice displayed in red in 1 second',
    score:{judge:-4, soloplayer:2, challenger:2, planner:-2, samurai:4, philosopher:-2, sage:-4, hero:4}
  },
  {
    ja:'赤く表示された会話中の選択肢を2秒以内に回答した',
    en:'Answered a dialogue choice displayed in red in 2 seconds',
    score:{judge:-2, soloplayer:1, challenger:1, planner:-1, samurai:2, philosopher:-1, sage:-2, hero:2}
  },
  {
    ja:'赤く表示された会話中の選択肢を15秒以上かけて回答した',
    en:'Answered a dialogue choice displayed in red after 15 seconds',
    score:{judge:4, soloplayer:-3, challenger:-3, planner:3, samurai:-2, philosopher:4, sage:6, hero:-6}
  },
  {
    ja:'赤く表示された会話中の選択肢を10秒以上かけて回答した',
    en:'Answered a dialogue choice displayed in red after 10 seconds',
    score:{judge:2, soloplayer:-1, challenger:-1, planner:1, samurai:-1, philosopher:2, sage:2, hero:-3}
  },
  {
    ja:'たばこを3秒以内で吸い終わった',
    en:'Stopped smoking a cigarette in 3 seconds',
    score:{artisan:-2, traveler:2, runner:2, martialartist:2}
  },
  {
    ja:'たばこを6秒以上吸った',
    en:'Smoked a cigarette for 6 seconds',
    score:{artisan:-1, traveler:1}
  },
  {
    ja:'たばこを10秒以上吸った',
    en:'Smoked a cigarette for 10 seconds',
    score:{artisan:2, traveler:-2, runner:-1, gambler:2}
  },
  {
    ja:'たばこを3回吸った',
    en:'Smoked 3 cigarettes',
    score:{artisan:1, runner:-1}
  },
  {
    ja:'たばこを5回吸った',
    en:'Smoked 5 cigarettes',
    score:{artisan:2, runner:-2}
  },
  {
    ja:'たばこを10回吸った',
    en:'Smoked 10 cigarettes',
    score:{researcher:-2, artisan:4, traveler:2, runner:-4, clown:2, gambler:2}
  },
  {
    ja:'室外機でたばこを吸おうとした',
    en:'Tried to smoke a cigarette by an AC unit',
    score:{butler:2, judge:-4, bancho:2, challenger:4}
  },
  {
    ja:'ベンチから3秒以内で出た',
    en:'Got off a bench in 3 seconds',
    score:{artisan:-2, traveler:2, runner:4}
  },
  {
    ja:'ベンチから6秒以内で出た',
    en:'Got off a bench in 6 seconds',
    score:{artisan:1, traveler:1}
  },
  {
    ja:'ベンチに10秒以上座った',
    en:'Got off a bench after 10 seconds',
    score:{researcher:-1, artisan:2, traveler:-2, runner:-4}
  },
  {
    ja:'ベンチに3回座った',
    en:'Sat on a bench 3 times',
    score:{traveler:1, pacifist:1, collector:1}
  },
  {
    ja:'ベンチに5回座った',
    en:'Sat on a bench 5 times',
    score:{pacifist:1, bancho:-1, runner:-1}
  },
  {
    ja:'ベンチに10回座った',
    en:'Sat on a bench 10 times',
    score:{pacifist:2, bancho:-1, runner:-1, clown:2}
  },
  {
    ja:'スクラップを1回目の提示（10コイン）で交換',
    en:'Traded scrap for 1st reward (10 coins)',
    score:{butler:2, runner:1, merchant:-2, collector:-2}
  },
  {
    ja:'スクラップを2回目の提示（10コイン）で交換',
    en:'Traded scrap for 2nd reward (10 coins)',
    score:{judge:1, runner:1, merchant:-2, collector:-2}
  },
  {
    ja:'スクラップを3回目の提示（10コイン）で交換',
    en:'Traded scrap for 3rd reward (10 coins)',
    score:{judge:2, merchant:-2, collector:-2}
  },
  {
    ja:'スクラップを4回目の提示（20コイン）で交換',
    en:'Traded scrap for 4th reward (20 coins)',
    score:{gambler:-4, collector:4}
  },
  {
    ja:'スクラップを5回目の提示（30コイン）で交換',
    en:'Traded scrap for 5th reward (30 coins)',
    score:{sage:2, gambler:2}
  },
  {
    ja:'スクラップを6回目の提示（20コイン）で交換',
    en:'Traded scrap for 6th reward (20 coins)',
    score:{butler:2, gambler:4, merchant:2}
  },
  {
    ja:'街灯を3回つけた',
    en:'Touched streetlights 3 times',
    score:{adventurer:2, martialartist:2, collector:2}
  },
  {
    ja:'街灯を10回つけた',
    en:'Touched streetlights 10 times',
    score:{adventurer:4, collector:2}
  },
  {
    ja:'街灯を20回つけた',
    en:'Touched streetlights 20 times',
    score:{artisan:1}
  },
  {
    ja:'街灯を30回つけた',
    en:'Touched streetlights 30 times',
    score:{researcher:1, artisan:2, clown:1}
  },
  {
    ja:'街灯を40回つけた',
    en:'Touched streetlights 40 times',
    score:{researcher:2, artisan:4, traveler:-1, clown:2}
  },
  {
    ja:'全ての街灯をつけた',
    en:'Touched all streetlights',
    score:{researcher:2, artisan:4, collector:6}
  },
  {
    ja:'壺を2回割った',
    en:'Broke 2 pots',
    score:{adventurer:1, judge:-1, pacifist:-1, bancho:1}
  },
  {
    ja:'壺を5回割った',
    en:'Broke 5 pots',
    score:{adventurer:1, judge:-1, pacifist:-2, bancho:1}
  },
  {
    ja:'壺を8回割った',
    en:'Broke 8 pots',
    score:{adventurer:1, judge:-2, pacifist:-2, bancho:1}
  },
  {
    ja:'壺を12回割った',
    en:'Broke 12 pots',
    score:{adventurer:2, researcher:-1, artisan:2, butler:2, judge:-2, pacifist:-2, bancho:1, sage:-2, collector:6}
  },
  {
    ja:'釣りで最初の引きで引いた',
    en:'Pulled at first tug when fishing',
    score:{artisan:-4, butler:4, leader:2, challenger:4, collector:2}
  },
  {
    ja:'釣りで大きい引きで引いた',
    en:'Pulled at biggest tug when fishing',
    score:{artisan:1, leader:1, judge:1, challenger:-2}
  },
  {
    ja:'釣りで引きを待たずに辞めた',
    en:'Gave up on fishing without waiting for a tug',
    score:{traveler:2, leader:-2, runner:2}
  },
  {
    ja:'釣りで1分以上経過してから引き上げた',
    en:'Caught something when fishing after waiting 1 minute',
    score:{artisan:2, philosopher:4}
  },
  {
    ja:'スニーカーを買った',
    en:'Bought the sneakers',
    score:{runner:4, planner:1, collector:-2}
  },
  {
    ja:'釣り竿を買った',
    en:'Bought the fishing rod',
    score:{adventurer:4, planner:1, merchant:2, collector:2}
  },
  {
    ja:'プレゼントを買った',
    en:'Bought the present',
    score:{adventurer:1, leader:2, clergy:2, gambler:4, collector:2}
  },
  {
    ja:'初めて採掘した時アイテムを出さずにやめた',
    en:'When first mining, quit without digging up any items',
    score:{researcher:-2, butler:2, soloplayer:2, bancho:-2, planner:-2, collector:-4}
  },
  {
    ja:'初めて採掘した時アイテムを1個出して掘るのをやめた',
    en:'When first mining, quit after digging up 1 item',
    score:{artisan:-2, soloplayer:2, planner:-4, sage:2, collector:-2}
  },
  {
    ja:'初めて採掘した時アイテムを2個出して掘るのをやめた',
    en:'When first mining, quit after digging up 2 items',
    score:{soloplayer:1, planner:-1}
  },
  {
    ja:'初めて採掘した時アイテムを3個出して掘るのをやめた',
    en:'When first mining, quit after digging up 3 items',
    score:{gambler:1, collector:1}
  },
  {
    ja:'初めて採掘した時アイテムを4個出して掘るのをやめた',
    en:'When first mining, quit after digging up 4 items',
    score:{artisan:2, planner:1, gambler:2, collector:2}
  },
  {
    ja:'初めて採掘した時アイテムを5個出して掘るのをやめた',
    en:'When first mining, quit after digging up 5 items',
    score:{artisan:4, challenger:2, planner:1, gambler:4, collector:4}
  },
  {
    ja:'150回堀った',
    en:'Dug 150 times',
    score:{artisan:2, leader:1, collector:1}
  },
  {
    ja:'300回掘った',
    en:'Dug 300 times',
    score:{artisan:3, leader:2, collector:1}
  },
  {
    ja:'450回掘った',
    en:'Dug 450 times',
    score:{artisan:4, leader:2, collector:1}
  },
  {
    ja:'たばこ屋で【NATURAL INDIE SPIRIT】を買った',
    en:'At cigarette shop, bought NATURAL INDIE SPIRIT',
    score:{butler:1, bancho:2, martialartist:4, clown:-4, merchant:-2}
  },
  {
    ja:'たばこ屋で【GOLDEN SHEEP】を買った',
    en:'At cigarette shop, bought GOLDEN SHEEP',
    score:{bancho:4, runner:2, merchant:2}
  },
  {
    ja:'たばこ屋で【OCHA HEAVEN】を買った',
    en:'At cigarette shop, bought OCHA HEAVEN',
    score:{traveler:1, clergy:2, bancho:2, martialartist:-4, clown:4, merchant:2}
  },
  {
    ja:'自動販売機を殴った',
    en:'Punched the vending machine',
    score:{adventurer:2, judge:-4, clergy:-1, pacifist:-4, challenger:1, clown:2, hero:2}
  },
  {
    ja:'自動販売機を2回殴った',
    en:'Punched the vending machine 2 times',
    score:{adventurer:1, artisan:1, bancho:2}
  },
  {
    ja:'自動販売機を3回殴った',
    en:'Punched the vending machine 3 times',
    score:{adventurer:1, artisan:2, bancho:2}
  },
  {
    ja:'墓を最初に調べた',
    en:'Checked the grave first thing',
    score:{researcher:1, butler:1, clergy:4, pacifist:1, challenger:1}
  },
  {
    ja:'落とし物を最初に拾う',
    en:'Picked up the item on ground first thing',
    score:{butler:1, challenger:1, merchant:2, collector:2}
  },
  {
    ja:'最初に左へ進む',
    en:'Headed left first thing',
    score:{butler:-4, runner:2, planner:1}
  },
  {
    ja:'ゲーム終了通知でOKボタンを押した',
    en:'Pressed the OK button on game end pop-up',
    score:{butler:2, judge:3, pacifist:2, merchant:1, collector:1}
  },
  {
    ja:'ゲーム終了通知で×ボタンを押した',
    en:'Pressed the X button on game end pop-up',
    score:{butler:-2, judge:-2, pacifist:-1, soloplayer:2, clown:2}
  },
  {
    ja:'ゲーム終了通知を3秒以内に消した',
    en:'Closed game end pop-up in 3 seconds',
    score:{researcher:-2, judge:2, clergy:-1, hero:2}
  },
  {
    ja:'ゲーム終了通知を7秒以上経過後に消した',
    en:'Closed game end pop-up after 7 seconds',
    score:{clergy:2, hero:-2}
  },
  {
    ja:'花を8つ拾った',
    en:'Picked up 8 flowers',
    score:{collector:2}
  },
  {
    ja:'花を9つ拾った',
    en:'Picked up 9 flowers',
    score:{artisan:2, collector:2}
  },
  {
    ja:'花を捧げた',
    en:'Offered a flower',
    score:{clergy:4, pacifist:2}
  },
  {
    ja:'室外機を調べた',
    en:'Checked an AC unit',
    score:{challenger:1}
  },
  {
    ja:'室外機を合計3回調べた',
    en:'Checked a total of 3 AC units',
    score:{martialartist:1, gambler:1}
  },
  {
    ja:'室外機を合計5回調べた',
    en:'Checked a total of 5 AC units',
    score:{artisan:2, martialartist:2, gambler:2}
  },
  {
    ja:'何かを合計5回読んだ',
    en:'Read a total of 5 things',
    score:{researcher:1, runner:-1}
  },
  {
    ja:'何かを合計8回読んだ',
    en:'Read a total of 8 things',
    score:{researcher:3, runner:-2}
  },
  {
    ja:'何かを合計14回読んだ',
    en:'Read a total of 14 things',
    score:{researcher:6, runner:-4}
  },
  {
    ja:'二人の写真を1回も触らない',
    en:'Never touched the photo of the two of you',
    score:{pacifist:2, collector:-4}
  },
  {
    ja:'二人の写真を1回触った',
    en:'Touched the photo of the two of you 1 time',
    score:{merchant:2}
  },
  {
    ja:'二人の写真を2-9回触った',
    en:'Touched the photo of the two of you 2-9 times',
    score:{sage:-2}
  },
  {
    ja:'二人の写真を10回触った',
    en:'Touched the photo of the two of you 10 times',
    score:{judge:4, sage:-2}
  },
  {
    ja:'二人の写真を11回以上触った',
    en:'Touched the photo of the two of you 11+ times',
    score:{traveler:2, judge:-8, sage:-2, collector:2}
  },
  {
    ja:'最初のベンチから45秒以内にステージ移動した',
    en:'Moved to another area within 45 seconds from first bench',
    score:{adventurer:-2, butler:2, runner:4, planner:-4}
  },
  {
    ja:'最初のベンチから45秒以上経過後にステージ移動した',
    en:'Moved to another area more than 45 seconds from first bench',
    score:{adventurer:2, butler:-2, pacifist:2, runner:-4, planner:4}
  },
  {
    ja:'かなり早い段階で森へ移動した',
    en:'Went to the forest particularly early on',
    score:{adventurer:2, challenger:-2, planner:4, sage:2}
  },
  {
    ja:'早い段階で森へ移動した',
    en:'Went to the forest early on',
    score:{planner:2, sage:1}
  },
  {
    ja:'時間を掛けて森へ移動した',
    en:'Went to the forest after some time',
    score:{researcher:2, traveler:2, butler:-1, clergy:-2, pacifist:-1, challenger:2, planner:-4, sage:-2}
  },
  {
    ja:'かなり早い段階で街へ移動した',
    en:'Went to the town after particularly early on',
    score:{challenger:-2, planner:4, sage:2}
  },
  {
    ja:'早い段階で街へ移動した',
    en:'Went to the town early on',
    score:{challenger:-1, planner:2, sage:1}
  },
  {
    ja:'時間を掛けて街へ移動した',
    en:'Went to the town after some time',
    score:{researcher:2, traveler:2, butler:-3, clergy:-2, pacifist:-1, challenger:2, planner:-4, sage:-2}
  },
  {
    ja:'最後の行動で墓を調べた',
    en:'For final action, checked the grave',
    score:{leader:2, clergy:2, soloplayer:-4, hero:-4, gambler:-4}
  },
  {
    ja:'最後の行動で写真を調べた',
    en:'For final action, checked the photo',
    score:{butler:-2, judge:4, clergy:2, pacifist:2, soloplayer:-4, hero:-4, gambler:-4}
  },
  {
    ja:'最後の行動で花を拾った',
    en:'For final action, picked up a flower',
    score:{clergy:3, pacifist:2, merchant:2}
  },
  {
    ja:'最後の行動で何かを拾った',
    en:'For final action, picked up something up',
    score:{gambler:4, collector:2}
  },
  {
    ja:'最後の行動で街灯に触れた',
    en:'For final action, touched a streetlight',
    score:{clergy:-3, pacifist:1, sage:4, hero:-3, gambler:-6, collector:-2}
  },
  {
    ja:'最後の行動で誰かと会話した',
    en:'For final action, talked to someone',
    score:{traveler:2, clergy:2, soloplayer:-6, sage:-2, collector:2}
  },
  {
    ja:'最後の行動でベンチに座った',
    en:'For final action, sat on a bench',
    score:{pacifist:4, soloplayer:2, sage:4}
  },
  {
    ja:'最後の行動でタバコを吸った',
    en:'For final action, smoked a cigarette',
    score:{butler:-2, pacifist:2, soloplayer:6}
  },
  {
    ja:'最後の行動で何かを読んだ',
    en:'For final action, read something',
    score:{researcher:4, challenger:-3, martialartist:3}
  },
  {
    ja:'最後の行動で道具や設置物を調べた',
    en:'For final action, checked an item or fixture',
    score:{researcher:4, challenger:6, martialartist:-3, hero:3, merchant:4}
  },
  {
    ja:'最後の行動でゲームをプレイした',
    en:'For final action, played a game',
    score:{traveler:2, hero:4}
  },
  {
    ja:'降ってきたコックピットを調べた',
    en:'Checked the fallen cockpit',
    score:{adventurer:1, pacifist:-2, hero:1}
  },
  {
    ja:'降ってきたコックピットを調べた（空いた状態）',
    en:'Checked the fallen cockpit (when empty)',
    score:{judge:2}
  },
  {
    ja:'スロットをコインがない状態で終了した',
    en:'Exited slots with no coins',
    score:{artisan:4, traveler:-2, sage:-4, gambler:6, collector:2}
  },
  {
    ja:'スロットをコインがある状態で終了した',
    en:'Exited slots with coins left',
    score:{artisan:-2, traveler:2, collector:-4}
  },
  {
    ja:'スロットを50ゲーム以内で終了した',
    en:'Exited slots within 50 spins',
    score:{runner:2, gambler:-4, merchant:4}
  },
  {
    ja:'スロットを100ゲーム以上プレイした',
    en:'Played slots for 100 spins',
    score:{gambler:2}
  },
  {
    ja:'スロットを200ゲーム以上プレイした',
    en:'Played slots for 200 spins',
    score:{artisan:1, gambler:2}
  },
  {
    ja:'スロットを300ゲーム以上プレイした',
    en:'Played slots for 300 spins',
    score:{artisan:1, gambler:4}
  },
  {
    ja:'スロットを400ゲーム以上プレイした',
    en:'Played slots for 400 spins',
    score:{artisan:1, gambler:6}
  },
  {
    ja:'スロットを500ゲーム以上プレイした',
    en:'Played slots for 500 spins',
    score:{artisan:1, gambler:8}
  },
  {
    ja:'クレーンゲームをプレイした',
    en:'Played the crane game',
    score:{planner:2, gambler:2}
  },
  {
    ja:'10コイン以下でクレーンゲームを調べた',
    en:'Checked the crane game with under 10 coins',
    score:{bancho:4, collector:2}
  },
  {
    ja:'羊を塗るとき、4色すべて使った',
    en:'Painting the sheep, used all 4 colors',
    score:{artisan:-2, traveler:2, pacifist:-2, martialartist:-4, clown:3, collector:2}
  },
  {
    ja:'羊を塗るとき、3色使った',
    en:'Painting the sheep, used 3 colors',
    score:{artisan:-1, traveler:1, pacifist:-1, martialartist:-2, clown:2, collector:1}
  },
  {
    ja:'羊を塗るとき、2色使った',
    en:'Painting the sheep, used 2 colors',
    score:{artisan:1, traveler:-1, pacifist:1, martialartist:2, clown:-2}
  },
  {
    ja:'羊を塗るとき、1色のみ使った',
    en:'Painting the sheep, used only 1 color',
    score:{artisan:2, traveler:-2, pacifist:2, martialartist:4, clown:-3}
  },
  {
    ja:'羊を塗るとき、元々の色のみで完成させた',
    en:'Painting the sheep, finishing with starting colors',
    score:{artisan:2, judge:2, soloplayer:-2}
  },
  {
    ja:'羊を塗るとき、元々の色を使用しなかった',
    en:'Painting the sheep, didn\'t use starting colors',
    score:{traveler:2, judge:-2, soloplayer:2}
  },
  {
    ja:'羊を塗るとき、30秒以内に完成させた',
    en:'Painting the sheep, finished in 30 seconds',
    score:{leader:-1, runner:2, samurai:2, philosopher:-2, hero:1}
  },
  {
    ja:'羊を塗るとき、120秒以上かけて完成させた',
    en:'Painting the sheep, finished after 120 seconds',
    score:{traveler:2, leader:1, planner:2, samurai:-2, philosopher:2, hero:-1}
  },
  {
    ja:'羊を塗るとき、色を塗った回数が7回以下',
    en:'Painting the sheep, painted 7 times or less',
    score:{traveler:-2, samurai:2, philosopher:-2}
  },
  {
    ja:'羊を塗るとき、色を塗った回数が15回以上',
    en:'Painting the sheep, painted 15 times or more',
    score:{traveler:2, samurai:-4, philosopher:4}
  },
  {
    ja:'カフェで、1人目の客にHotを入れた',
    en:'At café, for 1st customer, put in Hot',
    score:{leader:2, judge:1, sage:2}
  },
  {
    ja:'カフェで、1人目の客にColdを入れた',
    en:'At café, for 1st customer, put in Cold',
    score:{soloplayer:1, clown:2}
  },
  {
    ja:'カフェで、1人目の客に砂糖を入れた',
    en:'At café, for 1st customer, put in sugar',
    score:{leader:2}
  },
  {
    ja:'カフェで、1人目の客に砂糖を入れなかった',
    en:'At café, for 1st customer, didn\'t put in sugar',
    score:{leader:-2, clergy:-2, gambler:4, merchant:2}
  },
  {
    ja:'カフェで、1人目の客に砂糖以外入れなかった',
    en:'At café, for 1st customer, didn\'t put in non-sugar',
    score:{leader:2, sage:2}
  },
  {
    ja:'カフェで、1人目の客に砂糖以外を入れた',
    en:'At café, for 1st customer, put in non-sugar',
    score:{traveler:1, soloplayer:1, collector:1}
  },
  {
    ja:'カフェで、1人目の客に薬を入れた',
    en:'At café, for 1st customer, put in medicine',
    score:{bancho:2, gambler:2}
  },
  {
    ja:'カフェで、1人目の客にオプションを入れなかった',
    en:'At café, for 1st customer, didn\'nt put in options',
    score:{martialartist:2, sage:2, collector:-2}
  },
  {
    ja:'カフェで、1人目の客にオプションを3つ以上入れた',
    en:'At café, for 1st customer, put in 3+ options',
    score:{traveler:2, planner:2}
  },
  {
    ja:'カフェで、1人目の客にかけた時間が15秒以下',
    en:'At café, for 1st customer, spent 15 seconds or less',
    score:{runner:2, samurai:2}
  },
  {
    ja:'カフェで、1人目の客にかけた時間が60秒以上',
    en:'At café, for 1st customer, spent 60 seconds or more',
    score:{leader:1, philosopher:2}
  },
  {
    ja:'カフェで、2人目の客にHotを入れた',
    en:'At café, for 2nd customer, put in Hot',
    score:{leader:2, judge:1, sage:2}
  },
  {
    ja:'カフェで、2人目の客にColdを入れた',
    en:'At café, for 2nd customer, put in Cold',
    score:{soloplayer:1, clown:2, sage:-6, gambler:4}
  },
  {
    ja:'カフェで、2人目の客に薬を入れた',
    en:'At café, for 2nd customer, put in medicine',
    score:{bancho:2, gambler:2}
  },
  {
    ja:'カフェで、2人目の客にオプションを入れなかった',
    en:'At café, for 2nd customer, didn\'t put in options',
    score:{martialartist:2, merchant:4}
  },
  {
    ja:'カフェで、2人目の客にオプションを1つ入れた',
    en:'At café, for 2nd customer, put in 1 option',
    score:{planner:1, clown:1}
  },
  {
    ja:'カフェで、2人目の客にオプションを2つ入れた',
    en:'At café, for 2nd customer, put in 2 options',
    score:{clergy:1, soloplayer:1, planner:2, clown:2}
  },
  {
    ja:'カフェで、2人目の客にオプションを3つ以上入れた',
    en:'At café, for 2nd customer, put in 3+ options',
    score:{traveler:1, clergy:2, soloplayer:2, planner:4, clown:4, collector:2}
  },
  {
    ja:'カフェで、2人目の客にかけた時間が15秒以下',
    en:'At café, for 2nd customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、2人目の客にかけた時間が60秒以上',
    en:'At café, for 2nd customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、3人目の客にHotを入れた',
    en:'At café, for 3rd customer, put in Hot',
    score:{artisan:2, traveler:-4}
  },
  {
    ja:'カフェで、3人目の客にColdを入れた',
    en:'At café, for 3rd customer, put in Cold',
    score:{researcher:2, artisan:-4, traveler:2, hero:2, gambler:2}
  },
  {
    ja:'カフェで、3人目の客に薬を入れた',
    en:'At café, for 3rd customer, put in medicine',
    score:{bancho:2, gambler:2}
  },
  {
    ja:'カフェで、3人目の客にオプションを入れなかった',
    en:'At café, for 3rd customer, didn\'t put in options',
    score:{martialartist:2, hero:-2, gambler:-2, merchant:4}
  },
  {
    ja:'カフェで、3人目の客にオプションを1つ入れた',
    en:'At café, for 3rd customer, put in 1 option',
    score:{planner:1, martialartist:2, hero:1, gambler:1}
  },
  {
    ja:'カフェで、3人目の客にオプションを2つ入れた',
    en:'At café, for 3rd customer, put in 2 options',
    score:{clergy:1, soloplayer:1, planner:2, clown:2, hero:2, gambler:2}
  },
  {
    ja:'カフェで、3人目の客にオプションを3つ以上入れた',
    en:'At café, for 3rd customer, put in 3+ options',
    score:{traveler:1, clergy:2, soloplayer:2, planner:4, clown:4, hero:4, gambler:4}
  },
  {
    ja:'カフェで、3人目の客にかけた時間が15秒以下',
    en:'At café, for 3rd customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、3人目の客にかけた時間が60秒以上',
    en:'At café, for 3rd customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、4人目の客にHotを入れた',
    en:'At café, for 4th customer, put in Hot',
    score:{artisan:2, traveler:-2, clergy:2}
  },
  {
    ja:'カフェで、4人目の客にColdを入れた',
    en:'At café, for 4th customer, put in Cold',
    score:{artisan:-2, traveler:2}
  },
  {
    ja:'カフェで、4人目の客に薬を入れた',
    en:'At café, for 4th customer, put in medicine',
    score:{butler:-4, pacifist:-2, soloplayer:-4, bancho:4, merchant:4}
  },
  {
    ja:'カフェで、4人目の客に薬を入れなかった',
    en:'At café, for 4th customer, didn\'t put in medicine',
    score:{butler:2, pacifist:2, soloplayer:4, bancho:-4, merchant:-4}
  },
  {
    ja:'カフェで、4人目の客にチリかシナモンを入れた',
    en:'At café, for 4th customer, put in chill or cinnamon',
    score:{researcher:1, challenger:2, gambler:2, collector:2}
  },
  {
    ja:'カフェで、4人目の客にオプションを入れなかった',
    en:'At café, for 4th customer, didn\'t put in options',
    score:{clergy:-4, soloplayer:2, planner:-4, martialartist:2, merchant:4}
  },
  {
    ja:'カフェで、4人目の客にオプションを1つ入れた',
    en:'At café, for 4th customer, put in 1 option',
    score:{planner:1, clown:1}
  },
  {
    ja:'カフェで、4人目の客にオプションを2つ入れた',
    en:'At café, for 4th customer, put in 2 options',
    score:{clergy:1, soloplayer:1, planner:2, clown:2}
  },
  {
    ja:'カフェで、4人目の客にオプションを3つ以上入れた',
    en:'At café, for 4th customer, put in 3+ options',
    score:{traveler:1, clergy:2, soloplayer:2, planner:4, clown:4, collector:2}
  },
  {
    ja:'カフェで、4人目の客にかけた時間が15秒以下',
    en:'At café, for 4th customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、4人目の客にかけた時間が60秒以上',
    en:'At café, for 4th customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、5人目の客にHotを入れた',
    en:'At café, for 5th customer, put in Hot',
    score:{artisan:1, traveler:-1, clergy:2}
  },
  {
    ja:'カフェで、5人目の客にColdを入れた',
    en:'At café, for 5th customer, put in Cold',
    score:{artisan:-1, traveler:1, soloplayer:2}
  },
  {
    ja:'カフェで、5人目の客にミルクを入れた',
    en:'At café, for 5th customer, put in milk',
    score:{judge:-4, clergy:3, martialartist:2, clown:-4, hero:2, merchant:-6}
  },
  {
    ja:'カフェで、5人目の客にオプションを入れなかった',
    en:'At café, for 5th customer, didn\'t put in options',
    score:{judge:4, clergy:-4, runner:4, martialartist:1, clown:-2, hero:2, merchant:6}
  },
  {
    ja:'カフェで、5人目の客にオプションを1つ入れた',
    en:'At café, for 5th customer, put in 1 option',
    score:{clergy:2}
  },
  {
    ja:'カフェで、5人目の客にオプションを2つ入れた',
    en:'At café, for 5th customer, put in 2 options',
    score:{adventurer:2, planner:2, clown:1}
  },
  {
    ja:'カフェで、5人目の客にオプションを3つ以上入れた',
    en:'At café, for 5th customer, put in 3+ options',
    score:{adventurer:4, planner:4, clown:2}
  },
  {
    ja:'カフェで、5人目の客にかけた時間が15秒以下',
    en:'At café, for 5th customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、5人目の客にかけた時間が60秒以上',
    en:'At café, for 5th customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、6人目の客にHotを入れた',
    en:'At café, for 6th customer, put in Hot',
    score:{judge:1, sage:2, hero:-2, gambler:-2, merchant:2}
  },
  {
    ja:'カフェで、6人目の客にColdを入れた',
    en:'At café, for 6th customer, put in Cold',
    score:{judge:-1, sage:-2, hero:2, gambler:2, merchant:-2}
  },
  {
    ja:'カフェで、6人目の客に薬を入れた',
    en:'At café, for 6th customer, put in medicine',
    score:{bancho:2, planner:1, merchant:2}
  },
  {
    ja:'カフェで、6人目の客にオプションを入れなかった',
    en:'At café, for 6th customer, didn\'t put in options',
    score:{butler:4, martialartist:4, clown:-4, merchant:2}
  },
  {
    ja:'カフェで、6人目の客にオプションを1つ入れた',
    en:'At café, for 6th customer, put in 1 option',
    score:{planner:1, hero:-2, gambler:-4}
  },
  {
    ja:'カフェで、6人目の客にオプションを2つ入れた',
    en:'At café, for 6th customer, put in 2 options',
    score:{clergy:1, planner:2, clown:2, gambler:2}
  },
  {
    ja:'カフェで、6人目の客にオプションを3つ以上入れた',
    en:'At café, for 6th customer, put in 3+ options',
    score:{clergy:2, planner:4, clown:4, sage:2, hero:2, gambler:4}
  },

  {
    ja:'カフェで、6人目の客にかけた時間が15秒以下',
    en:'At café, for 6th customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、6人目の客にかけた時間が60秒以上',
    en:'At café, for 6th customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、7人目の客にHotを入れた',
    en:'At café, for 7th customer, put in Hot',
    score:{judge:1, sage:2, hero:-2, gambler:-2, merchant:2}
  },
  {
    ja:'カフェで、7人目の客にColdを入れた',
    en:'At café, for 7th customer, put in Cold',
    score:{judge:-1, sage:-2, hero:2, gambler:2, merchant:-2}
  },
  {
    ja:'カフェで、7人目の客に薬を入れた',
    en:'At café, for 7th customer, put in medicine',
    score:{bancho:2, gambler:2}
  },
  {
    ja:'カフェで、7人目の客にオプションを入れなかった',
    en:'At café, for 7th customer, didn\'t put in options',
    score:{martialartist:2, sage:-4, hero:6, gambler:4}
  },
  {
    ja:'カフェで、7人目の客にオプションを1つ入れた',
    en:'At café, for 7th customer, put in 1 option',
    score:{clergy:1, planner:1, martialartist:2, sage:-2, gambler:2}
  },
  {
    ja:'カフェで、7人目の客にオプションを2つ入れた',
    en:'At café, for 7th customer, put in 2 options',
    score:{clergy:2, soloplayer:1, planner:2, clown:2, sage:2, gambler:-2}
  },
  {
    ja:'カフェで、7人目の客にオプションを3つ以上入れた',
    en:'At café, for 7th customer, put in 3+ options',
    score:{clergy:2, soloplayer:2, bancho:2, planner:4, sage:4, gambler:-4, collector:2}
  },
  {
    ja:'カフェで、7人目の客にかけた時間が15秒以下',
    en:'At café, for 7th customer, spent 15 seconds or less',
    score:{runner:2, samurai:1}
  },
  {
    ja:'カフェで、7人目の客にかけた時間が60秒以上',
    en:'At café, for 7th customer, spent 60 seconds or more',
    score:{leader:1, samurai:-2, philosopher:1}
  },
  {
    ja:'カフェで、1人目の客に迷わず提供した',
    en:'At café, for 1st customer, served without hesitation',
    score:{samurai:1}
  },
  {
    ja:'カフェで、2人目の客に迷わず提供した',
    en:'At café, for 2nd customer, served without hesitation',
    score:{samurai:1}
  },
  {
    ja:'カフェで、3人目の客に迷わず提供した',
    en:'At café, for 3rd customer, served without hesitation',
    score:{clergy:-2, samurai:1}
  },
  {
    ja:'カフェで、4人目の客に迷わず提供した',
    en:'At café, for 4th customer, served without hesitation',
    score:{clergy:-2, samurai:1}
  },
  {
    ja:'カフェで、5人目の客に迷わず提供した',
    en:'At café, for 5th customer, served without hesitation',
    score:{samurai:1}
  },
  {
    ja:'カフェで、6人目の客に迷わず提供した',
    en:'At café, for 6th customer, served without hesitation',
    score:{samurai:1}
  },
  {
    ja:'カフェで、7人目の客に迷わず提供した',
    en:'At café, for 7th customer, served without hesitation',
    score:{samurai:1}
  },
  {
    ja:'カフェで、1人目の客に1度考えて提供した',
    en:'At café, for 1st customer, served after reconsidering',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、2人目の客に1度考えて提供した',
    en:'At café, for 2nd customer, served after reconsidering',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、3人目の客に1度考えて提供した',
    en:'At café, for 3rd customer, served after reconsidering',
    score:{clergy:-1, samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、4人目の客に1度考えて提供した',
    en:'At café, for 4th customer, served after reconsidering',
    score:{clergy:-1, samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、5人目の客に1度考えて提供した',
    en:'At café, for 5th customer, served after reconsidering',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、6人目の客に1度考えて提供した',
    en:'At café, for 6th customer, served after reconsidering',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、7人目の客に1度考えて提供した',
    en:'At café, for 7th customer, served after reconsidering',
    score:{samurai:-1, philosopher:1}
  },
  {
    ja:'カフェで、1人目の客に4度以上考えて提供した',
    en:'At café, for 1st customer, served after reconsidering 4 times',
    score:{samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、2人目の客に4度以上考えて提供した',
    en:'At café, for 2nd customer, served after reconsidering 4 times',
    score:{samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、3人目の客に4度以上考えて提供した',
    en:'At café, for 3rd customer, served after reconsidering 4 times',
    score:{clergy:4, samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、4人目の客に4度以上考えて提供した',
    en:'At café, for 4th customer, served after reconsidering 4 times',
    score:{clergy:4, samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、5人目の客に4度以上考えて提供した',
    en:'At café, for 5th customer, served after reconsidering 4 times',
    score:{samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、6人目の客に4度以上考えて提供した',
    en:'At café, for 6th customer, served after reconsidering 4 times',
    score:{samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、7人目の客に4度以上考えて提供した',
    en:'At café, for 7th customer, served after reconsidering 4 times',
    score:{samurai:-2, philosopher:4}
  },
  {
    ja:'カフェで、ゲームの説明を開いた',
    en:'At café, opened minigame explanation',
    score:{bancho:-1, challenger:-1, planner:1}
  },
  {
    ja:'カフェで、ゲームの説明を開かなかった',
    en:'At café, didn\'t open minigame explanation',
    score:{bancho:1, challenger:2, planner:-1, sage:-1}
  },
  {
    ja:'羊の餌やりで1匹目に草をあげた',
    en:'Feeding the sheep, gave the 1st sheep grass',
    score:{merchant:2}
  },
  {
    ja:'羊の餌やりで1匹目に人参をあげた',
    en:'Feeding the sheep, gave the 1st sheep carrot',
    score:{clergy:2}
  },
  {
    ja:'羊の餌やりで1匹目に肉をあげた',
    en:'Feeding the sheep, gave the 1st sheep meat',
    score:{clergy:-2, soloplayer:1, clown:2, gambler:2}
  },
  {
    ja:'羊の餌やりで1匹目が時間切れになった',
    en:'Feeding the sheep, ran out of time on 1st sheep',
    score:{philosopher:2}
  },
  {
    ja:'羊の餌やりで2匹目に草をあげた',
    en:'Feeding the sheep, gave the 2nd sheep grass',
    score:{clergy:-2, soloplayer:1, clown:2, gambler:2}
  },
  {
    ja:'羊の餌やりで2匹目に人参をあげた',
    en:'Feeding the sheep, gave the 2nd sheep carrot',
    score:{sage:4}
  },
  {
    ja:'羊の餌やりで2匹目に肉をあげた',
    en:'Feeding the sheep, gave the 2nd sheep meat',
    score:{judge:2}
  },
  {
    ja:'羊の餌やりで2匹目が時間切れになった',
    en:'Feeding the sheep, ran out of time on 2nd sheep',
    score:{philosopher:2}
  },
  {
    ja:'羊の餌やりで3匹目に草をあげた',
    en:'Feeding the sheep, gave the 3rd sheep grass',
    score:{clergy:-2, bancho:2, hero:2, gambler:2, merchant:4}
  },
  {
    ja:'羊の餌やりで3匹目に人参をあげた',
    en:'Feeding the sheep, gave the 3rd sheep carrot',
    score:{clergy:2, sage:2, merchant:-2}
  },
  {
    ja:'羊の餌やりで3匹目に肉をあげた',
    en:'Feeding the sheep, gave the 3rd sheep meat',
    score:{martialartist:2, clown:2}
  },
  {
    ja:'羊の餌やりで3匹目が時間切れになった',
    en:'Feeding the sheep, ran out of time on 3rd sheep',
    score:{philosopher:2}
  },
  {
    ja:'羊の餌やりで4匹目に草をあげた',
    en:'Feeding the sheep, gave the 4th sheep grass',
    score:{clergy:-2, soloplayer:1, clown:2, gambler:2}
  },
  {
    ja:'羊の餌やりで4匹目に人参をあげた',
    en:'Feeding the sheep, gave the 4th sheep carrot',
    score:{clergy:2}
  },
  {
    ja:'羊の餌やりで4匹目に肉をあげた',
    en:'Feeding the sheep, gave the 4th sheep meat',
    score:{merchant:2}
  },
  {
    ja:'羊の餌やりで4匹目が時間切れになった',
    en:'Feeding the sheep, ran out of time on 4th sheep',
    score:{philosopher:2}
  },
  {
    ja:'羊の餌やりで4匹とも同じ餌をあげた',
    en:'Feeding the sheep, gave the same meal to all 4',
    score:{artisan:4, traveler:-4}
  },
  {
    ja:'羊の餌やりで4匹とも同じ理由であげた',
    en:'Feeding the sheep, gave for same reason to all 4',
    score:{artisan:4, butler:2, judge:2}
  },
  {
    ja:'羊の餌やりでゲームの説明を開いた',
    en:'Feeding the sheep, opened minigame explanation',
    score:{bancho:-1, challenger:-1, planner:1}
  },
  {
    ja:'羊の餌やりでゲームの説明を開かなかった',
    en:'Feeding the sheep, didn\'t open minigame explanation',
    score:{bancho:1, challenger:2, planner:-1, sage:-1}
  },
  {
    ja:'羊をなでた回数が1回以下',
    en:'Pet sheep 1 time or less',
    score:{sage:2, hero:-2, gambler:-4}
  },
  {
    ja:'羊をなでた回数が2-4回',
    en:'Pet sheep 2-4 times',
    score:{leader:2, hero:-1, gambler:-2}
  },
  {
    ja:'羊をなでた回数が5回',
    en:'Pet sheep 5 times',
    score:{butler:2, clergy:2, challenger:4}
  },
  {
    ja:'羊をなでた回数が6回',
    en:'Pet sheep 6 times',
    score:{butler:1, clergy:1, pacifist:1, challenger:2, hero:2, gambler:2, collector:1}
  },
  {
    ja:'羊をなでた回数が7回以上',
    en:'Pet sheep 7+ times',
    score:{adventurer:2, researcher:1, leader:-2, clergy:-4, sage:2, hero:3, gambler:6, collector:2}
  },
  {
    ja:'羊の頭を最初になでた',
    en:'Pet the sheep\'s head first',
    score:{clergy:2}
  },
  {
    ja:'羊の胴体を最初になでた',
    en:'Pet the sheep\'s torso first',
    score:{pacifist:2, sage:2}
  },
  {
    ja:'羊のお尻を最初になでた',
    en:'Pet the sheep\'s butt first',
    score:{researcher:2, clown:2, collector:2}
  },
  {
    ja:'羊を1カ所のみなでた',
    en:'Pet only 1 spot on sheep',
    score:{artisan:2, traveler:-2, martialartist:4}
  },
  {
    ja:'羊を3カ所なでた',
    en:'Pet 3 spots on sheep',
    score:{adventurer:2, researcher:1, artisan:-1, traveler:2, clergy:2, pacifist:-2, hero:2}
  },
  {
    ja:'羊の世話で、ゲームの説明を開いた',
    en:'When caring for sheep, opened minigame explanation',
    score:{judge:1, pacifist:1, challenger:-1, planner:1}
  },
  {
    ja:'羊の世話で、ゲームの説明を開かなかった',
    en:'When caring for sheep, didn\'t open minigame explanation',
    score:{challenger:2, planner:-1}
  },
  {
    ja:'普通の羊だけ数えた',
    en:'Counted only normal sheep',
    score:{traveler:-4, butler:2, judge:4, clown:-4}
  },
  {
    ja:'羊を数えるとき、種のような何かを数えた',
    en:'When counting sheep, counted seed-like things',
    score:{traveler:2, clown:2, collector:1}
  },
  {
    ja:'羊を数えるとき、帰る羊を数えた',
    en:'When counting sheep, counted returning sheep',
    score:{leader:2, judge:-2, collector:1}
  },
  {
    ja:'羊を数えるとき、丸を数えた',
    en:'When counting sheep, counted circles',
    score:{traveler:2, clown:4, collector:1}
  },
  {
    ja:'羊を数えるとき、全部数えた',
    en:'When counting sheep, counted everything',
    score:{clergy:2, martialartist:4}
  },
  {
    ja:'羊を数えるとき、ゲームの説明を開いた',
    en:'When counting sheep, opened minigame explanation',
    score:{judge:1, pacifist:1, challenger:-1, planner:1}
  },
  {
    ja:'羊を数えるとき、ゲームの説明を開かなかった',
    en:'When counting sheep, didn\'t open minigame explanation',
    score:{challenger:2, planner:-1}
  },
  {
    ja:'羊に見られているとき、1回触った',
    en:'When watched by sheep, touched 1 time',
    score:{leader:2, judge:4, pacifist:2, philosopher:2, hero:4}
  },
  {
    ja:'羊に見られているとき、2-4回触った',
    en:'When watched by sheep, touched 2-4 times',
    score:{leader:1, judge:1, pacifist:1}
  },
  {
    ja:'羊に見られているとき、5-6回触った',
    en:'When watched by sheep, touched 5-6 times',
    score:{leader:-1, judge:-1, bancho:2, runner:2, challenger:2, philosopher:-2, collector:2}
  },
  {
    ja:'羊に見られているとき、7回触った',
    en:'When watched by sheep, touched 7 times',
    score:{leader:-1, judge:-1, bancho:4, runner:4, challenger:4, philosopher:-4, collector:4}
  },
  {
    ja:'羊に見られているとき、ゲームの説明を開いた',
    en:'When watched by sheep, opened minigame explanation',
    score:{pacifist:1, challenger:-1, planner:1}
  },
  {
    ja:'羊に見られているとき、ゲームの説明を開かなかった',
    en:'When watched by sheep, didn\'t open minigame explanation',
    score:{challenger:2, planner:-1}
  },
  {
    ja:'アクションゲームで、ステージ1でコインをとった数が3枚',
    en:'In action game Stage 1, got 3 coins',
    score:{collector:2}
  },
  {
    ja:'アクションゲームで、ステージ1でコインをとった数が2枚以下',
    en:'In action game Stage 1, got 2 coins or a fewer',
    score:{runner:4, collector:-2}
  },
  {
    ja:'アクションゲームで、ステージ1でジャンプした回数が3回以上',
    en:'In action game Stage 1, jumped 3+ times',
    score:{challenger:2, sage:-2}
  },
  {
    ja:'アクションゲームで、ステージ1でジャンプした回数が1回のみ',
    en:'In action game Stage 1, jumped only 1 time',
    score:{runner:1, sage:2, merchant:2}
  },
  {
    ja:'アクションゲームで、ステージ2でコインをとった数が1枚',
    en:'In action game Stage 2, got 1 coin',
    score:{runner:-1, collector:2}
  },
  {
    ja:'アクションゲームで、ステージ2でコインをとらなかった',
    en:'In action game Stage 2, didn\'t get any coins',
    score:{pacifist:1, runner:2, collector:-2}
  },
  {
    ja:'アクションゲームで、ステージ2でジャンプした回数が3回以上',
    en:'In action game Stage 2, jumped 3+ times',
    score:{challenger:2, sage:-2}
  },
  {
    ja:'アクションゲームで、ステージ2でジャンプした回数が1回のみ',
    en:'In action game Stage 2, jumped only 1 time',
    score:{runner:1, sage:2, merchant:2}
  },
  {
    ja:'アクションゲームで、ステージ3でコインをとった数が1枚',
    en:'In action game Stage 3, got 1 coin',
    score:{judge:2, merchant:2}
  },
  {
    ja:'アクションゲームで、ステージ3でジャンプした回数が7回以上',
    en:'In action game Stage 3, jumped 7+ times',
    score:{adventurer:1, runner:-2}
  },
  {
    ja:'アクションゲームで、ステージ3で1度も死ななかった',
    en:'In action game Stage 3, didn\'t die once',
    score:{runner:4, sage:6, hero:-4, collector:-4}
  },
  {
    ja:'アクションゲームで、ステージ3で1-2回死んだ',
    en:'In action game Stage 3, died 1-2 times',
    score:{runner:2, hero:-2, collector:-2}
  },
  {
    ja:'アクションゲームで、ステージ3で3回以上死んだ',
    en:'In action game Stage 3, died 3+ times',
    score:{adventurer:1, runner:-2, hero:2, collector:2}
  },
  {
    ja:'アクションゲームで、ステージ3で6回以上死んだ',
    en:'In action game Stage 3, died 6+ times',
    score:{adventurer:2, runner:-4, challenger:2, hero:4, collector:4}
  },
  {
    ja:'アクションゲームで、ステージ4で何もなさそうなところに移動した',
    en:'In action game Stage 4, went to empty-looking spot',
    score:{adventurer:4, runner:-2, sage:-2, hero:2, collector:1}
  },
  {
    ja:'アクションゲームで、ステージ4で何もなさそうなところは無視した',
    en:'In action game Stage 4, ignored empty-looking spot',
    score:{adventurer:-4, runner:2, sage:2, hero:-2, collector:-1}
  },
  {
    ja:'アクションゲームで、ステージ4でジャンプした回数が6回以上',
    en:'In action game Stage 4, jumped 6+ times',
    score:{adventurer:1, runner:-2}
  },
  {
    ja:'アクションゲームで、ステージ5でコインをとった数が1枚',
    en:'In action game Stage 5, got 1 coin',
    score:{adventurer:2, runner:-2, collector:3}
  },
  {
    ja:'アクションゲームで、ステージ5でコインをとらなかった',
    en:'In action game Stage 5, didn\'t get any coins',
    score:{adventurer:-2, runner:2, collector:-3}
  },
  {
    ja:'アクションゲームで、ステージ6で1度も死ななかった',
    en:'In action game Stage 6, didn\'t die once',
    score:{judge:4, samurai:-4, philosopher:4, sage:6, hero:-6}
  },
  {
    ja:'アクションゲームで、ステージ6で1-2回死んだ',
    en:'In action game Stage 6, died 1-2 times',
    score:{judge:2, samurai:-2, philosopher:2, sage:2, hero:-2}
  },
  {
    ja:'アクションゲームで、ステージ6で3回以上死んだ',
    en:'In action game Stage 6, died 3+ times',
    score:{soloplayer:1, runner:1, samurai:2, philosopher:-2, sage:-4, hero:4}
  },
  {
    ja:'アクションゲームで、ステージ6で6回以上死んだ',
    en:'In action game Stage 6, died 6+ times',
    score:{soloplayer:2, runner:2, samurai:4, philosopher:-4, sage:-4, hero:6}
  },
  {
    ja:'アクションゲームで、ステージ7で上の道を選んだ',
    en:'In action game Stage 7, picked the top path',
    score:{bancho:4, hero:2}
  },
  {
    ja:'アクションゲームで、ステージ7で下の道を選んだ',
    en:'In action game Stage 7, picked the bottom path',
    score:{adventurer:4, sage:2, hero:-2}
  },
  {
    ja:'アクションゲームで、ステージ7で上の道も下の道も選んだ',
    en:'In action game Stage 7, picked both top and bottom path',
    score:{runner:-4, gambler:2, collector:4}
  },
  {
    ja:'アクションゲームで、ステージ7で1度も死ななかった',
    en:'In action game Stage 7, didn\'t die once',
    score:{runner:2, sage:2, hero:-2, collector:-2}
  },
  {
    ja:'アクションゲームで、ステージ7で1-2回死んだ',
    en:'In action game Stage 7, died 1-2 times',
    score:{runner:1, hero:-1, collector:-1}
  },
  {
    ja:'アクションゲームで、ステージ7で3回以上死んだ',
    en:'In action game Stage 7, died 3+ times',
    score:{runner:-1, hero:1, collector:1}
  },
  {
    ja:'アクションゲームで、ステージ7で6回以上死んだ',
    en:'In action game Stage 7, died 6+ times',
    score:{runner:-2, challenger:1, hero:2, collector:2}
  },
  {
    ja:'アクションゲームで、ステージ8でコインをとった数が3枚以上',
    en:'In action game Stage 8, got 3+ coins',
    score:{adventurer:4, challenger:4, collector:2}
  },
  {
    ja:'アクションゲームで、ステージ8でコインをとった数が1枚',
    en:'In action game Stage 8, got 1 coin',
    score:{runner:-1, collector:1}
  },
  {
    ja:'アクションゲームで、ステージ8でコインをとらなかった',
    en:'In action game Stage 8, didn\'t get any coins',
    score:{pacifist:1, runner:2, collector:-2}
  },
  {
    ja:'アクションゲームで、ステージ9で生物をつぶしてクリアした',
    en:'In action game Stage 9, won after cruching creature',
    score:{judge:2, clergy:-2, pacifist:-2, runner:1}
  },
  {
    ja:'アクションゲームで、ステージ9で生物をつぶさずにクリアした',
    en:'In action game Stage 9, won without crushing creature',
    score:{clergy:2, pacifist:4, bancho:-4}
  },
  {
    ja:'アクションゲームで、ステージ10でコインをとった数が1枚以上',
    en:'In action game Stage 10, got 1 coin',
    score:{butler:2, clergy:-2, pacifist:-4, bancho:4, merchant:4, collector:4}
  },
  {
    ja:'アクションゲームで、ステージ10でコインをとらなかった',
    en:'In action game Stage 10, didn\'t get any coins',
    score:{clergy:4, pacifist:6, bancho:-4, runner:4, merchant:-4, collector:-4}
  },
  {
    ja:'戦いで、回復を使用した',
    en:'In battle, used Heal',
    score:{pacifist:2, runner:-2, planner:4, sage:4, hero:-6, gambler:-4}
  },
  {
    ja:'戦いで、回復を使用しなかった',
    en:'In battle, didn\'t use Heal',
    score:{researcher:-2, bancho:2, planner:-4, sage:-4, hero:6, gambler:4}
  },
  {
    ja:'戦いで、まもるを使用した',
    en:'In battle, used Guard',
    score:{researcher:2, sage:2, hero:-4}
  },
  {
    ja:'戦いで、まもるを使用しなかった',
    en:'In battle, didn\'t use Guard',
    score:{researcher:-4, sage:-2, hero:4}
  },
  {
    ja:'戦いで、回復もまもるも使用しなかった',
    en:'In battle, didn\'t use Heal or Guard',
    score:{artisan:4, traveler:-4, martialartist:4, clown:-4}
  },
  {
    ja:'戦いで、回復もまもるも使用した',
    en:'In battle, used both Heal and Guard',
    score:{artisan:-4, traveler:4, pacifist:1, martialartist:-4, clown:4}
  },
  {
    ja:'シューティングゲームで、ステージ1を20秒以内でクリア',
    en:'Cleared shooting game Stage 1 in 20 seconds',
    score:{runner:2, sage:-4, hero:4}
  },
  {
    ja:'シューティングゲームで、ステージ1を60秒以上でクリア',
    en:'Cleared shooting game Stage 1 in 60 seconds',
    score:{bancho:-2, planner:4, sage:4, hero:-4}
  },
  {
    ja:'シューティングゲームで、ステージ2を30秒以内でクリア',
    en:'Cleared shooting game Stage 2 in 30 seconds',
    score:{runner:2, sage:-4, hero:4}
  },
  {
    ja:'シューティングゲームで、ステージ2を90秒以上でクリア',
    en:'Cleared shooting game Stage 2 in 90 seconds',
    score:{runner:-2, planner:4, sage:4, hero:-4}
  },
  {
    ja:'爆弾を大きなコードから切った',
    en:'Cut the big bomb wire first',
    score:{leader:2, sage:-6, hero:2, gambler:6}
  },
  {
    ja:'爆弾を普通のコードから切った',
    en:'Cut the regular bomb wire first',
    score:{leader:1, martialartist:2}
  },
  {
    ja:'爆弾を小さなコードから切った',
    en:'Cut the small bomb wire first',
    score:{sage:4, hero:-4, gambler:-4}
  },
  {
    ja:'爆弾のコードを3つ切った',
    en:'Cut 3 bomb wires',
    score:{leader:4, bancho:3, challenger:4, sage:-4, hero:4}
  },
  {
    ja:'爆弾のコードを2つ切った',
    en:'Cut 2 bomb wires',
    score:{leader:2, bancho:1, challenger:2}
  },
  {
    ja:'爆弾のコードを1つ切った',
    en:'Cut 1 bomb wire',
    score:{leader:1, bancho:-2, sage:6, hero:-4}
  },
  {
    ja:'爆弾のコードを1つも切らなかった',
    en:'Didn\'t cut any bomb wires',
    score:{leader:-2, bancho:-4, martialartist:6, merchant:-2}
  },
  {
    ja:'ハイアンドローで、確率が高い選択をした',
    en:'In High-Low, made high-odds choice',
    score:{judge:2, sage:2, gambler:-2}
  },
  {
    ja:'ハイアンドローで、確率が低い選択をした',
    en:'In High-Low, made low-odds choice',
    score:{judge:2-2, sage:-2, gambler:2}
  },
  {
    ja:'ハイアンドローで、50が出た時に前と同じ選択をした',
    en:'In High-Low, seeing a 50, made same choice as last',
    score:{artisan:2, judge:2, sage:-2, gambler:2}
  },
  {
    ja:'ハイアンドローで、50が出た時に前と違う選択をした',
    en:'In High-Low, seeing a 50, made different choice from last',
    score:{traveler:2, judge:-2, sage:2, gambler:-2}
  },
  {
    ja:'ハイアンドローで、差5以下で確率が低い選択をした',
    en:'In High-Low, with difference of 5 or less, made low-odds choice',
    score:{judge:-4, sage:-4, hero:4, gambler:4}
  },
  {
    ja:'ハイアンドローで、4秒以下で選択した',
    en:'In High-Low, chose in 4 seconds',
    score:{samurai:1, philosopher:-1, gambler:2}
  },
  {
    ja:'ハイアンドローで、10秒以上かけて選択した',
    en:'In High-Low, chose after 10 seconds',
    score:{samurai:-1, philosopher:1, gambler:-2}
  },
  {
    ja:'ハイアンドローで、途中で辞める選択をした',
    en:'In High-Low, chose to quit midway',
    score:{judge:4, sage:4, gambler:-4}
  },
  {
    ja:'ハイアンドローで、50の時に途中で辞める選択をした',
    en:'In High-Low, chose to quit seeing a 50',
    score:{sage:4, merchant:4}
  },
  {
    ja:'ハイアンドローで、ゲームの説明を開いた',
    en:'In High-Low, opened minigame explanation',
    score:{challenger:-1, planner:1}
  },
  {
    ja:'ハイアンドローで、ゲームの説明を開かなかった',
    en:'In High-Low, didn\'t open minigame explanation',
    score:{challenger:2, planner:-1, sage:-1}
  },
  {
    ja:'洞窟にあるロボットの絵を20秒以上見た',
    en:'Viewed cave robot painting for 20 seconds',
    score:{philosopher:4}
  },
  {
    ja:'洞窟にあるロボットの絵を10秒以上見た',
    en:'Viewed cave robot painting for 10 seconds',
    score:{philosopher:2}
  },
  {
    ja:'洞窟にあるロボットの絵を3秒以内に見終わった',
    en:'Viewed cave robot painting for 3 seconds or less',
    score:{samurai:2}
  },
  {
    ja:'洞窟にあるロボットの絵を1回も触らなかった',
    en:'Never touched cave robot painting',
    score:{soloplayer:2, runner:4, planner:-6, sage:2, collector:-4}
  },
  {
    ja:'洞窟にあるロボットの絵を触った',
    en:'Touched cave robot painting',
    score:{butler:2, sage:2}
  },
  {
    ja:'洞窟にあるロボットの絵を4回以上触った',
    en:'Touched cave robot painting 4+ times',
    score:{researcher:2, bancho:2, collector:2}
  },
  {
    ja:'洞窟にあるロボットの絵を10回以上触った',
    en:'Touched cave robot painting 10+ times',
    score:{researcher:4, bancho:4, collector:4}
  },
  {
    ja:'洞窟にあるロボットの絵の目を2回以上触った',
    en:'Touched cave robot painting\'s eye 2+ times',
    score:{adventurer:1, judge:1, clergy:1}
  },
  {
    ja:'洞窟にあるロボットの絵の口を2回以上触った',
    en:'Touched cave robot painting\'s mouth 2+ times',
    score:{adventurer:1, judge:1, clergy:2}
  },
  {
    ja:'防衛戦の1回目のアップグレードで【威力強化】を選択した',
    en:'For 1st defense upgrade, chose Attack Up',
    score:{bancho:4, martialartist:4, clown:-2, sage:2}
  },
  {
    ja:'防衛戦の1回目のアップグレードで【リロード速度強化】を選択した',
    en:'For 1st defense upgrade, chose Reload Speed Up',
    score:{traveler:4}
  },
  {
    ja:'防衛戦の1回目のアップグレードで【マガジン拡張】を選択した',
    en:'For 1st defense upgrade, chose Expand Magazine',
    score:{artisan:2, martialartist:-2, clown:2, collector:2}
  },
  {
    ja:'防衛戦の2回目のアップグレードで【威力強化】を選択した',
    en:'For 2nd defense upgrade, chose Attack Up',
    score:{bancho:2, martialartist:1, clown:-1}
  },
  {
    ja:'防衛戦の2回目のアップグレードで【リロード速度強化】を選択した',
    en:'For 2nd defense upgrade, chose Reload Speed Up',
    score:{traveler:2}
  },
  {
    ja:'防衛戦の2回目のアップグレードで【マガジン拡張】を選択した',
    en:'For 2nd defense upgrade, chose Expand Magazine',
    score:{artisan:1, martialartist:-1, clown:1, collector:2}
  },
  {
    ja:'防衛戦の3回目のアップグレードで【威力強化】を選択した',
    en:'For 3rd defense upgrade, chose Attack Up',
    score:{bancho:2, martialartist:1, clown:-1}
  },
  {
    ja:'防衛戦の3回目のアップグレードで【リロード速度強化】を選択した',
    en:'For 3rd defense upgrade, chose Reload Speed Up',
    score:{traveler:2}
  },
  {
    ja:'防衛戦の3回目のアップグレードで【マガジン拡張】を選択した',
    en:'For 3rd defense upgrade, chose Expand Magazine',
    score:{artisan:1, martialartist:-1, clown:1, collector:2}
  },
  {
    ja:'防衛戦の4回目のアップグレードで【威力強化】を選択した',
    en:'For 4th defense upgrade, chose Attack Up',
    score:{bancho:2, martialartist:1, clown:-1}
  },
  {
    ja:'防衛戦の4回目のアップグレードで【リロード速度強化】を選択した',
    en:'For 4th defense upgrade, chose Reload Speed Up',
    score:{traveler:2}
  },
  {
    ja:'防衛戦の4回目のアップグレードで【マガジン拡張】を選択した',
    en:'For 4th defense upgrade, chose Expand Magazine',
    score:{artisan:1, martialartist:-1, clown:1, collector:2}
  },
  {
    ja:'防衛戦の5回目のアップグレードで【通常タレット設置】を選択した',
    en:'For 5th defense upgrade, chose Normal Turret',
    score:{artisan:4, traveler:-2, soloplayer:-2, bancho:2, martialartist:4, clown:-4, sage:2}
  },
  {
    ja:'防衛戦の5回目のアップグレードで【拡散タレット設置】を選択した',
    en:'For 5th defense upgrade, chose Spread Turret',
    score:{artisan:-2, traveler:1, soloplayer:-2, martialartist:-4, clown:4, gambler:4}
  },
  {
    ja:'防衛戦の5回目のアップグレードで【速度低下エリア設置】を選択した',
    en:'For 5th defense upgrade, chose Speed-Down Field',
    score:{artisan:-2, traveler:2, soloplayer:4, planner:2, martialartist:-2, clown:2}
  },
  {
    ja:'防衛戦の6回目のアップグレードで【通常タレット設置】を選択した',
    en:'For 6th defense upgrade, chose Normal Turret',
    score:{artisan:2, traveler:-1, soloplayer:-2, bancho:1, martialartist:2, clown:-2}
  },
  {
    ja:'防衛戦の6回目のアップグレードで【拡散タレット設置】を選択した',
    en:'For 6th defense upgrade, chose Spread Turret',
    score:{artisan:-1, traveler:1, soloplayer:-1, martialartist:-2, clown:2, gambler:2}
  },
  {
    ja:'防衛戦の6回目のアップグレードで【速度低下エリア設置】を選択した',
    en:'For 6th defense upgrade, chose Speed-Down Field',
    score:{artisan:-1, traveler:1, soloplayer:2, planner:1, martialartist:-1, clown:1}
  },
  {
    ja:'防衛戦の7回目のアップグレードで【通常タレット設置】を選択した',
    en:'For 7th defense upgrade, chose Normal Turret',
    score:{artisan:2, traveler:-1, soloplayer:-2, bancho:1, martialartist:2, clown:-2}
  },
  {
    ja:'防衛戦の7回目のアップグレードで【拡散タレット設置】を選択した',
    en:'For 7th defense upgrade, chose Spread Turret',
    score:{artisan:-1, traveler:1, soloplayer:-1, martialartist:-2, clown:2, gambler:2}
  },
  {
    ja:'防衛戦の7回目のアップグレードで【速度低下エリア設置】を選択した',
    en:'For 7th defense upgrade, chose Speed-Down Field',
    score:{artisan:-1, traveler:1, soloplayer:2, planner:1, martialartist:-1, clown:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードで【威力強化「大」】を選択した',
    en:'For 8th defense upgrade, chose Attack Up+',
    score:{soloplayer:2, bancho:2, martialartist:4, clown:-4, sage:2}
  },
  {
    ja:'防衛戦の8回目のアップグレードで【貫通弾】を選択した',
    en:'For 8th defense upgrade, chose Piercing Bullets',
    score:{planner:2, sage:-4}
  },
  {
    ja:'防衛戦の8回目のアップグレードで【阻害弾】を選択した',
    en:'For 8th defense upgrade, chose Sabotage Bullets',
    score:{planner:2, martialartist:-4, clown:4}
  },
  {
    ja:'防衛戦の9回目のアップグレードで【威力強化「大」】を選択した',
    en:'For 9th defense upgrade, chose Attack Up+',
    score:{soloplayer:1, bancho:2, martialartist:2, clown:-2, sage:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードで【貫通弾】を選択した',
    en:'For 9th defense upgrade, chose Piercing Bullets',
    score:{planner:1, sage:-3, gambler:3}
  },
  {
    ja:'防衛戦の9回目のアップグレードで【阻害弾】を選択した',
    en:'For 9th defense upgrade, chose Sabotage Bullets',
    score:{planner:1, martialartist:-2, clown:2}
  },
  {
    ja:'防衛戦の3回目のアップグレードで、1回目と2回目と同じ選択をした',
    en:'For 3rd defense upgrade, made same choice as 1st and 2nd',
    score:{artisan:4, traveler:-4, challenger:2}
  },
  {
    ja:'防衛戦の1回目と2回目、3回目のアップグレードでそれぞれ違う選択をした',
    en:'For 1st/2nd/3rd defense upgrades, made different choices for each',
    score:{artisan:-4, traveler:4, hero:2}
  },
  {
    ja:'防衛戦の7回目のアップグレードで、5回目と6回目と同じ選択をした',
    en:'For 7th defense upgrade, made same choice as 5th and 6th',
    score:{artisan:4, traveler:-4, challenger:2}
  },
  {
    ja:'防衛戦の5回目と6回目、7回目のアップグレードでそれぞれ違う選択をした',
    en:'For 5th/6th/7th defense upgrades, made different choices for each',
    score:{artisan:-4, traveler:4}
  },
  {
    ja:'防衛戦の1回目のアップグレードの選択時間が3秒以下だった',
    en:'For 1st defense upgrade, chose in 3 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の1回目のアップグレードの選択時間が7秒以上だった',
    en:'For 1st defense upgrade, chose after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の2回目のアップグレードの選択時間が3秒以下だった',
    en:'For 2nd defense upgrade, chose in 3 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の2回目のアップグレードの選択時間が7秒以上だった',
    en:'For 2nd defense upgrade, chose after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の3回目のアップグレードの選択時間が3秒以下だった',
    en:'For 3rd defense upgrade, chose in 3 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の3回目のアップグレードの選択時間が7秒以上だった',
    en:'For 3rd defense upgrade, chose after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の4回目のアップグレードの選択時間が3秒以下だった',
    en:'For 4th defense upgrade, chose in 3 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の4回目のアップグレードの選択時間が7秒以上だった',
    en:'For 4th defense upgrade, chose after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の5回目のアップグレードの選択時間が2秒以下だった',
    en:'For 5th defense upgrade, chose in 2 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の5回目のアップグレードの選択時間が5秒以上だった',
    en:'For 5th defense upgrade, chose after 5 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の6回目のアップグレードの選択時間が2秒以下だった',
    en:'For 6th defense upgrade, chose in 2 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の6回目のアップグレードの選択時間が5秒以上だった',
    en:'For 6th defense upgrade, chose after 5 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の7回目のアップグレードの選択時間が3秒以下だった',
    en:'For 7th defense upgrade, chose in 3 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の7回目のアップグレードの選択時間が7秒以上だった',
    en:'For 7th defense upgrade, chose after 7 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードの選択時間が2秒以下だった',
    en:'For 8th defense upgrade, chose in 2 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の8回目のアップグレードの選択時間が5秒以上だった',
    en:'For 8th defense upgrade, chose after 5 seconds',
    score:{philosopher:1}
  },
  {
    ja:'防衛戦の9回目のアップグレードの選択時間が2秒以下だった',
    en:'For 9th defense upgrade, chose in 2 seconds',
    score:{samurai:1}
  },
  {
    ja:'防衛戦の9回目のアップグレードの選択時間が5秒以上だった',
    en:'For 9th defense upgrade, chose after 5 seconds',
    score:{philosopher:1}
  },
  {
    ja:'みらいに300-349コインで勝負を挑んだ',
    en:'Challenged Mirai with 300-349 coins',
    score:{leader:2, judge:2, runner:4, planner:-1, gambler:2, collector:1}
  },
  {
    ja:'みらいに350-399コインで勝負を挑んだ',
    en:'Challenged Mirai with 350-399 coins',
    score:{runner:2, planner:-4}
  },
  {
    ja:'みらいに400-499コインで勝負を挑んだ',
    en:'Challenged Mirai with 400-499 coins',
    score:{planner:2}
  },
  {
    ja:'みらいに500コイン以上で勝負を挑んだ',
    en:'Challenged Mirai with 500+ coins',
    score:{planner:4}
  },
  {
    ja:'灯篭を1つ灯した',
    en:'Lit 1 lantern',
    score:{artisan:2, planner:1}
  },
  {
    ja:'灯篭を3つ灯した',
    en:'Lit 3 lanterns',
    score:{adventurer:1, researcher:2, leader:1, judge:1, planner:1, hero:1, gambler:1, collector:2}
  },
  {
    ja:'灯篭を1つ灯したが、その場で全て灯すことはなかった',
    en:'Lit 1 lantern, but didn\'t then light them all',
    score:{adventurer:-4, runner:4, collector:-4}
  },
  {
    ja:'羊に触れてきた報告をしたとき、実は1匹も触れていない',
    en:'When reporting touching sheep, didn\'t actually touch any',
    score:{butler:-1, leader:-4, judge:-1, bancho:2, merchant:2}
  },
  {
    ja:'羊に触れてきた報告をしたとき、1-2匹触れた',
    en:'When reporting touching sheep, touched 1 or 2',
    score:{butler:-2, leader:-2, judge:-1, bancho:1, merchant:1}
  },
  {
    ja:'羊に触れてきた報告をしたとき、3匹触れた',
    en:'When reporting touching sheep, touched 3',
    score:{butler:1, leader:1, judge:1}
  },
  {
    ja:'本当に羊に触れてきた報告をしたとき、実は1匹も触れていない',
    en:'When really reporting touching sheep, didn\'t actually touch any',
    score:{butler:-1, leader:-4, judge:-4, bancho:4, merchant:1}
  },
  {
    ja:'本当に羊に触れてきた報告をしたとき、1-2匹触れた',
    en:'When really reporting touching sheep, touched 1 or 2',
    score:{butler:-2, leader:-2, judge:-1, bancho:2, merchant:1}
  },
  {
    ja:'本当に羊に触れてきた報告をしたとき、3匹触れた',
    en:'When really reporting touching sheep, touched 3',
    score:{butler:2, leader:2, judge:2}
  },
  {
    ja:'名前変更で名前を変えなかった',
    en:'Didn\'t change name at name re-entry',
    score:{artisan:4, judge:2, soloplayer:-2, runner:2, martialartist:2}
  },
  {
    ja:'名前変更で自分の名前を入れた',
    en:'Entered your name at name re-entry',
    score:{traveler:2, soloplayer:4, collector:1}
  },
  {
    ja:'名前変更で名無しを入れた',
    en:'Entered no name at name re-entry',
    score:{researcher:2, bancho:2, clown:4}
  },
  {
    ja:'名前変更で長すぎる名前を入れた',
    en:'Entered a too-long name at name re-entry',
    score:{bancho:2, clown:4}
  },
  {
    ja:'エレベーターで最初に地下へ向かった',
    en:'Took elevator to basement first',
    score:{adventurer:2, judge:4, planner:2, martialartist:2, sage:-2}
  },
  {
    ja:'エレベーターで最初に2階へ向かった',
    en:'Took elevator to 2F first',
    score:{adventurer:-2, martialartist:2, clown:-1}
  },
  {
    ja:'エレベーターで最初に3階へ向かった',
    en:'Took elevator to 3F first',
    score:{martialartist:-2, clown:4}
  },
  {
    ja:'エレベーターで最初に屋上へ向かった',
    en:'Took elevator to roof first',
    score:{adventurer:2, traveler:4, challenger:2}
  },
  {
    ja:'屋上から飛び降りた',
    en:'Jumped off the roof',
    score:{adventurer:1, soloplayer:2, runner:-2, challenger:2, hero:4}
  },
  {
    ja:'2回、屋上から飛び降りた',
    en:'Jumped off the roof 2 times',
    score:{researcher:1, leader:-2, clown:1, collector:1}
  },
  {
    ja:'4回、屋上から飛び降りた',
    en:'Jumped off the roof 4 times',
    score:{researcher:4, leader:-2, clown:2, collector:1}
  },
  {
    ja:'神社で2礼2拍手1礼をした',
    en:'At shrine, performed bows and claps',
    score:{researcher:1, leader:2, judge:3}
  },
  {
    ja:'神社で鈴を1回も鳴らさなかった',
    en:'At shrine, didn\'t ring bell once',
    score:{pacifist:2, runner:2, challenger:-2}
  },
  {
    ja:'神社で鈴を1回だけ鳴らした',
    en:'At shrine, rung bell only once',
    score:{pacifist:3, challenger:-1, sage:1, merchant:1}
  },
  {
    ja:'神社で鈴を2-5回鳴らした',
    en:'At shrine, rung bell 2-5 times',
    score:{traveler:1, challenger:2, planner:2, hero:1}
  },
  {
    ja:'神社で鈴を6回以上鳴らした',
    en:'At shrine, rung bell 6+ times',
    score:{traveler:1, hero:4, collector:2}
  },
  {
    ja:'望遠鏡を覗いた時間が1分以内',
    en:'Looked through telescope for 1 minute or less',
    score:{traveler:4, runner:4, sage:2}
  },
  {
    ja:'望遠鏡を1分-2分覗いた',
    en:'Looked through telescope for 1-2 minutes',
    score:{runner:1, sage:1}
  },
  {
    ja:'望遠鏡を2分-3分覗いた',
    en:'Looked through telescope for 2-3 minutes',
    score:{researcher:2, philosopher:2}
  },
  {
    ja:'望遠鏡を3分以上覗いた',
    en:'Looked through telescope for 3+ minutes',
    score:{researcher:4, artisan:4, philosopher:4, gambler:2, collector:2}
  },
  {
    ja:'自動販売機で何かを買う選択をした',
    en:'Chose to buy something from vending machine',
    score:{butler:2, leader:2, runner:-1, martialartist:2, collector:2}
  },
  {
    ja:'自動販売機で殴る選択をした',
    en:'Chose to punch vending machine',
    score:{pacifist:-2, bancho:2}
  },
  {
    ja:'自動販売機で話しかけた',
    en:'Chose to talk to vending machine',
    score:{leader:-2, clergy:2, clown:2, sage:2, collector:-2}
  },
  {
    ja:'自動販売機で水を買った',
    en:'Bought water from vending machine',
    score:{butler:2, leader:2, collector:2}
  },
  {
    ja:'自動販売機で最高のおしるこを買った',
    en:'Bought red-bean soup from vending machine',
    score:{collector:2}
  },
  {
    ja:'自動販売機でやっぱり買わなかった',
    en:'Decided not to buy from vending machine',
    score:{butler:2, leader:-2, soloplayer:2, collector:-2}
  },
  {
    ja:'神社でお詣りする選択をした',
    en:'At shrine, chose to pray',
    score:{butler:1, clergy:2, gambler:1}
  },
  {
    ja:'神社でお詣りしない選択をした',
    en:'At shrine, chose not to pray',
    score:{artisan:2, butler:-2, judge:2, runner:2, philosopher:2, gambler:-2}
  },
  {
    ja:'神社で「祈りなんて」と思った',
    en:'At shrine, thought "What use is praying?"',
    score:{butler:-2, leader:2, philosopher:2, gambler:-4}
  },
  {
    ja:'神社でお賽銭を入れなかった',
    en:'Didn\'t make an offering to shrine',
    score:{judge:-2, hero:1, merchant:2}
  },
  {
    ja:'神社で1コインお賽銭を入れた',
    en:'Offered 1 coin to shrine',
    score:{pacifist:2, martialartist:2}
  },
  {
    ja:'神社で5コインお賽銭を入れた',
    en:'Offered 5 coins to shrine',
    score:{judge:2, clergy:2, gambler:2, merchant:-2}
  },
  {
    ja:'いのりに、「貴方は誰」と質問した',
    en:'Asked Inori "Who are you?"',
    score:{butler:3, clergy:2, soloplayer:2}
  },
  {
    ja:'いのりに、「周りにいるのは何」と質問した',
    en:'Asked Inori "What are these around here?"',
    score:{researcher:2, judge:1, clergy:-1, planner:1, sage:2}
  },
  {
    ja:'いのりに、「私は何をしたらいい」と質問した',
    en:'Asked Inori "What should I do?"',
    score:{judge:1, clergy:-1, soloplayer:-2, runner:6, planner:1}
  },
  {
    ja:'羊に触れてくることを了承した',
    en:'Accepted going to touch sheep',
    score:{butler:2, leader:2}
  },
  {
    ja:'羊に触れてくることを断った',
    en:'Refused going to touch sheep',
    score:{traveler:4, butler:-2, leader:-4, clergy:-4,  soloplayer:1}
  },
  {
    ja:'羊に触れてきたと答えた',
    en:'Answered that you touched sheep',
    score:{samurai:1}
  },
  {
    ja:'羊に触れてきていないと答えた',
    en:'Answered that you didin\'t touch sheep',
    score:{philosopher:1}
  },
  {
    ja:'本当に羊に触れてきたと答えた',
    en:'Answered that you really touch sheep',
    score:{samurai:1}
  },
  {
    ja:'本当は羊に触れてきていないと答えた',
    en:'Answered that you didn\'t really touch sheep',
    score:{judge:2, philosopher:1, hero:2}
  },
  {
    ja:'だるに何を手伝うか聞いた',
    en:'Asked Dull what you could help with',
    score:{researcher:2, leader:2, runner:-2, planner:2}
  },
  {
    ja:'だるの手伝いを断った',
    en:'Refused to help out Dull',
    score:{leader:-2, clergy:-2, pacifist:2, runner:2, planner:-2}
  },
  {
    ja:'だるに飲み物を頼んだ',
    en:'Asked Dull fot a drink',
    score:{researcher:-2, traveler:2, runner:-2, challenger:1, planner:-2, collector:4}
  },
  {
    ja:'カフェでコーヒーを頼んだ',
    en:'Asked for coffee at café',
    score:{artisan:2, leader:2, judge:4, pacifist:2}
  },
  {
    ja:'カフェで水を頼んだ',
    en:'Asked fot water at café',
    score:{adventurer:1, researcher:1, traveler:4, challenger:2, martialartist:4, clown:-2}
  },
  {
    ja:'カフェでフラペチーノを頼んだ',
    en:'Asked for frappuccino at café',
    score:{adventurer:2, martialartist:-2, clown:2}
  },
  {
    ja:'だるに手伝う気になったと報告した',
    en:'Told Dull you felt like helping',
    score:{runner:2, martialartist:2}
  },
  {
    ja:'だるに手伝う気にならなかったと報告した',
    en:'Told Dull you still don\'t feel like helping',
    score:{runner:-2, planner:2}
  },
  {
    ja:'だるに手伝うか確認されたとき、飲み物を頼んだ',
    en:'Asked Dull for a drink when checking if you\'d help',
    score:{researcher:1, challenger:1, clown:4, collector:1}
  },
  {
    ja:'みらいに対してとぼけた',
    en:'Played dumb with Mirai',
    score:{butler:2, pacifist:2}
  },
  {
    ja:'みらいに「私の事が好きって事？」と聞いた',
    en:'Asked Miriai "You mean you like me?"',
    score:{clergy:2}
  },
  {
    ja:'みらいに「お前を殺す」と宣言した',
    en:'Declared to Mirai "I\'ll kill you"',
    score:{traveler:2, clergy:-6, pacifist:-8, clown:2, sage:-4, hero:2}
  },
  {
    ja:'みらいにコインの集め方を聞いた',
    en:'Asked Mirai how to gather coins',
    score:{researcher:2, leader:2, judge:2, soloplayer:4, planner:4, clown:2, gambler:-2, collector:-2}
  },
  {
    ja:'みたいにそんなこと言わないでと訴えた',
    en:'Appealed to Mirai to just play anyway',
    score:{judge:-2, bancho:2, runner:2, challenger:2, gambler:-2}
  },
  {
    ja:'みらいに300コイン欲しいとお願いした',
    en:'Requested 300 coins from Mirai',
    score:{bancho:4, martialartist:2, gambler:4, merchant:2, collector:4}
  },
  {
    ja:'みらいにコインが集まったと答えた',
    en:'Told Mirai you gathered the coins',
    score:{runner:2, samurai:1}
  },
  {
    ja:'みらいにコインが集まっていないと答えた',
    en:'Told Mirai you didn\'t gather the coins',
    score:{runner:-2, planner:2, philosopher:2}
  },
  {
    ja:'思い出の交換を断った',
    en:'Refused the memory trade',
    score:{clergy:-2, bancho:-2, planner:2, sage:2, collector:-2}
  },
  {
    ja:'思い出の交換を了承した',
    en:'Accepted the memory trade',
    score:{clergy:4, bancho:2, planner:-2, sage:-2, hero:2}
  },
  {
    ja:'思い出の交換を、コインと交換ならよいと答えた',
    en:'Answered you\'d accept a memory trade for coins',
    score:{clergy:-2, merchant:1, collector:4}
  },
  {
    ja:'思い出とコインの交換を了承した',
    en:'Accepted the memory trade for coins',
    score:{bancho:2, planner:-2, sage:-2, hero:2, merchant:4}
  },
  {
    ja:'思い出とコインの交換を断った',
    en:'Refused the memory trade for coins',
    score:{butler:2, bancho:-2, planner:2, philosopher:2, sage:2, collector:-2}
  },
  {
    ja:'玩具型M1にぬいぐるみをあげた',
    en:'Gave Toy Type M1 the stuffed animal',
    score:{clergy:2, martialartist:2, sage:-2, collector:-2}
  },
  {
    ja:'玩具型M1にぬいぐるみをあげなかった',
    en:'Didn\'t give Toy Type M1 the stuffed animal',
    score:{leader:2, clergy:-2, martialartist:2, sage:4}
  },
  {
    ja:'玩具型M1にぬいぐるみと交換を申し出た',
    en:'Offered Toy Type M1 a trade for stuffed animal',
    score:{clergy:-1, clown:2, merchant:2, collector:2}
  },
  {
    ja:'玩具型M1に、やっぱりぬいぐるみをあげることにした',
    en:'Decided to five Toy Type M1 the stuffed animal after all',
    score:{traveler:4, butler:2}
  },
  {
    ja:'玩具型M1に、それならと断った',
    en:'Declined Toy Type M1 for having nothing to trade',
    score:{butler:-4, leader:2, judge:4, challenger:2, merchant:2}
  },
  {
    ja:'洞窟にあるロボットの絵を不気味だと思った',
    en:'Thought cave robot painting was creepy',
    score:{sage:2}
  },
  {
    ja:'洞窟にあるロボットの絵をかわいいと思った',
    en:'Thought cave robot painting was cute',
    score:{traveler:2, judge:-2, clergy:2, clown:2, sage:-2, gambler:2}
  },
  {
    ja:'洞窟にあるロボットの絵を不思議だと思った',
    en:'Thought cave robot painting was curious',
    score:{adventurer:2}
  },
  {
    ja:'ごみ箱に手を入れて何かを探した',
    en:'Put hand in the trash can to look for something',
    score:{adventurer:2, researcher:2, clergy:-2, pacifist:-4, bancho:2, hero:2, collector:4}
  },
  {
    ja:'ごみ箱のふたを閉めた',
    en:'Closed the lid on the trash can',
    score:{researcher:-4, butler:2, leader:4, pacifist:4, hero:-2}
  },
  {
    ja:'ごみ箱の匂いを嗅いだ',
    en:'Sniffed the trash can',
    score:{researcher:2, runner:4, clown:2, sage:2, hero:2, gambler:-2}
  },
  {
    ja:'受付に質問した',
    en:'Questioned the receptionist',
    score:{clown:-2, sage:2}
  },
  {
    ja:'受付にきらきらな回答をした',
    en:'Gave the receptionist a sparkly reply',
    score:{traveler:4, pacifist:2}
  },
  {
    ja:'受付にコインを求めた',
    en:'Asked the receptionist for coins',
    score:{merchant:2, collector:2}
  },
  {
    ja:'リサイクルショップで交換した',
    en:'Made a trade at the recycle shop',
    score:{planner:2, sage:2}
  },
  {
    ja:'リサイクルショップで交換を断った',
    en:'Refused to trade at the recycle shop',
    score:{gambler:2, merchant:2}
  },
  {
    ja:'玩具型M2に断った',
    en:'Refused Toy Type M2',
    score:{butler:2, sage:2, merchant:1}
  },
  {
    ja:'玩具型M2にコインをあげた',
    en:'Gave Toy Type M2 coins',
    score:{clergy:4}
  },
  {
    ja:'玩具型M2にむしろコインを求めた',
    en:'Instead asked for coins from Toy Type M2',
    score:{clown:1, merchant:2, collector:2}
  },
  {
    ja:'玩具型M2にプレゼントをあげた',
    en:'Gave Toy Type M2 the present',
    score:{researcher:2, traveler:2, clergy:2, collector:2}
  },
  {
    ja:'玩具型M2にプレゼントをあげなかった',
    en:'Didn\'t give Toy Type M2 the present',
    score:{artisan:2, clergy:-4, merchant:2}
  },
  {
    ja:'玩具型M2に金スクラップを渡した',
    en:'Handed over the gold scrap to Toy Type M2',
    score:{butler:2, clergy:2, pacifist:2, merchant:-2}
  },
  {
    ja:'玩具型M2を疑った',
    en:'Doubted Toy Type M2',
    score:{butler:-4, planner:4, sage:6, gambler:-4}
  },
  {
    ja:'玩具型M2に金スクラップを渡さなかった',
    en:'Didn\'t hand over the gold scrap to Toy Type M2',
    score:{butler:1, clergy:-4, hero:2, merchant:4}
  },
  {
    ja:'玩具型M2にお礼を確認した',
    en:'Checked for a reward from Toy Type M2',
    score:{butler:2, runner:-2, merchant:2, collector:1}
  },
  {
    ja:'玩具型M2から黙って去った',
    en:'Left Toy Type M2 without a word',
    score:{pacifist:2, soloplayer:4, runner:2, challenger:1, martialartist:4}
  },
  {
    ja:'望遠鏡で近くの海を見た',
    en:'Looked at nearby sea with telescope',
    score:{adventurer:2, leader:2, planner:2, sage:2, merchant:2}
  },
  {
    ja:'望遠鏡で遠くの空を見た',
    en:'Looked at distant sky with telescope',
    score:{researcher:2, butler:2, sage:-2}
  },
  {
    ja:'望遠鏡を覗くのをやめた',
    en:'Decided not to look in telescope',
    score:{clown:4}
  },
  {
    ja:'こころの相談を受けた',
    en:'Received consultaton from Kokoro',
    score:{clergy:2, sage:1}
  },
  {
    ja:'こころに自分で描いた方がいいと答えた',
    en:'Told Kokoro "You should draw it yourself"',
    score:{traveler:2, clergy:-1, pacifist:2, soloplayer:4, runner:2, clown:2, merchant:1}
  },
  {
    ja:'こころにコインをくれるなら描いてもいいと答えた',
    en:'Told Kokoro "I\'ll paint it for coins"',
    score:{leader:2, pacifist:-1, hero:1, gambler:1, merchant:4, collector:2}
  },
  {
    ja:'カフェのゲームをプレイした',
    en:'Played the game at the café',
    score:{butler:1, challenger:1}
  },
  {
    ja:'カフェのゲームを調べた',
    en:'Checked the game at the café',
    score:{researcher:2, collector:2}
  },
  {
    ja:'カフェのゲームを破壊した',
    en:'Destroyed the game at the café',
    score:{adventurer:1, judge:-2, pacifist:-2, bancho:2, clown:2, hero:2}
  },
  {
    ja:'研究所のゲームをプレイした',
    en:'Played the game in the laboratory',
    score:{butler:1, challenger:1}
  },
  {
    ja:'研究所のゲームを調べた',
    en:'Checked the game in the laboratory',
    score:{researcher:2, collector:2}
  },
  {
    ja:'研究所のゲームを破壊した',
    en:'Destroyed the game in the laboratory',
    score:{adventurer:1, judge:-2, pacifist:-2, bancho:2, clown:2, hero:2, gambler:2}
  },
  {
    ja:'占ってもらうことにした',
    en:'Chose to have fortune told',
    score:{traveler:2, soloplayer:-2}
  },
  {
    ja:'占いを断った',
    en:'Refused getting a fortune',
    score:{soloplayer:2, samurai:-2, philosopher:2, collector:-6}
  },
  {
    ja:'占い型を破壊した',
    en:'Destroyed Diviner Type',
    score:{judge:4, soloplayer:4, bancho:1}
  },
  {
    ja:'これからするべき事を占った',
    en:'Asked for fortune of what you should do',
    score:{leader:4}
  },
  {
    ja:'してはならない事を占った',
    en:'Asked for fortune of what not to do',
    score:{butler:-2, sage:5, hero:-2, gambler:-4}
  },
  {
    ja:'研究所のPCで性格を確認した',
    en:'Checked personality on laboratory PC',
    score:{researcher:2, butler:4, soloplayer:-2, bancho:-2, planner:2, gambler:-4, collector:2}
  },
  {
    ja:'研究所のPCで性格を確認しなかった',
    en:'Didn\'t check personality on laboratory PC',
    score:{butler:-2, challenger:-4, collector:-4}
  },
  {
    ja:'研究所のPCに興味を示さなかった',
    en:'Didn\'t see a puropose to laboratory PC',
    score:{soloplayer:4, bancho:2, clown:2, hero:2, gambler:2}
  },
  {
    ja:'大きな人にバッテリーを渡した',
    en:'Gave the battery to Large One',
    score:{judge:2, clergy:-2, merchant:4}
  },
  {
    ja:'小さき人々にバッテリーを渡した',
    en:'Gave the battery to Little Ones',
    score:{judge:-2, clergy:2}
  },
  {
    ja:'バッテリーを破壊した',
    en:'Destroyed the battery',
    score:{adventurer:-2, clergy:-2, pacifist:4, bancho:2, hero:2}
  },
  {
    ja:'情報屋で3つの情報を選んだ',
    en:'Chose 3 pieces of info from informant',
    score:{researcher:2, planner:2}
  },
  {
    ja:'情報屋で2つの情報を選んだ',
    en:'Chose 2 pieces of info from informant',
    score:{planner:1}
  },
  {
    ja:'情報屋で1つの情報を選んだ',
    en:'Chose 1 piece of info from informant',
    score:{adventurer:-2, researcher:-2, runner:2, planner:-4, sage:1}
  },
  {
    ja:'近道に梯子をかけた',
    en:'Set up ladder for shortcut',
    score:{adventurer:-4, artisan:2, traveler:-2, clergy:-1, runner:2, merchant:2}
  },
  {
    ja:'行けない場所に行く梯子をかけた',
    en:'Set up ladder to go to inaccessible place',
    score:{adventurer:4, artisan:-2, traveler:2, clergy:-1, planner:2, collector:2}
  },
  {
    ja:'梯子を掛けなかった',
    en:'Didn\'t set up ladder',
    score:{artisan:2, traveler:-2, clergy:2, soloplayer:4, planner:-2, collector:-4}
  },
  {
    ja:'鍵守に鍵を売った',
    en:'Sold key to Key-Keeper',
    score:{adventurer:-2, butler:2, clergy:2, merchant:2, collector:-2}
  },
  {
    ja:'鍵守に鍵を売らなかった',
    en:'Didn\'t sell key to Key-Keeper',
    score:{adventurer:4, soloplayer:2, merchant:-2, collector:2}
  },
  {
    ja:'金スクラップを交換した',
    en:'Traded the gold scrap',
    score:{adventurer:-2, butler:1, pacifist:2, merchant:2, collector:2}
  },
  {
    ja:'金スクラップを交換しなかった',
    en:'Didn\'t trade the gold scrap',
    score:{adventurer:2, soloplayer:2, gambler:2, collector:-2}
  },
  {
    ja:'掃除型をやめさせた',
    en:'Made Cleaner Type stop',
    score:{traveler:2, clergy:4, philosopher:-2}
  },
  {
    ja:'倒れている人を念のため解体した',
    en:'Dismantled collapsed man just to be sure',
    score:{judge:4, clergy:-4, sage:2, hero:4}
  },
  {
    ja:'倒れている人に何もしなかった',
    en:'Did nothing to collapsed man',
    score:{artisan:2, pacifist:1, martialartist:4, clown:2}
  },
  {
    ja:'信号機に感謝した',
    en:'Thanked the traffic light',
    score:{butler:1, leader:4, judge:1, clergy:2, pacifist:2, sage:2, hero:-1, merchant:-1, collector:-1}
  },
  {
    ja:'信号機を破壊した',
    en:'Destroyed the traffic light',
    score:{traveler:2, judge:-4, clergy:-2, pacifist:-4, sage:1, hero:2, merchant:2, collector:2}
  },
  {
    ja:'信号機に話しかけた',
    en:'Talked to the traffic light',
    score:{researcher:2, traveler:2, judge:1, clown:4}
  },
  {
    ja:'猫に話しかけた',
    en:'Talked to the cat',
    score:{adventurer:2, researcher:2, judge:-2, clergy:2, challenger:1, collector:-1}
  },
  {
    ja:'猫をどかした',
    en:'Moved the cat aside',
    score:{researcher:-1, judge:2, clergy:-2, pacifist:-2, bancho:2, planner:2, merchant:4, collector:2}
  },
  {
    ja:'猫に何もしなかった',
    en:'Did nothing to the cat',
    score:{researcher:-2, artisan:2, traveler:-2, pacifist:4, challenger:-2, collector:-4}
  },
  {
    ja:'猫に普通に話しかけた',
    en:'Talked to cat normally',
    score:{adventurer:-2, artisan:2, traveler:-4, soloplayer:1, martialartist:4, clown:-2, gambler:-2}
  },
  {
    ja:'猫に猫風で話しかけた',
    en:'Talked to cat cattishly',
    score:{artisan:-2, judge:2, clergy:2, martialartist:-2, clown:4, gambler:4}
  },
  {
    ja:'羊の世話を任せてと答えた',
    en:'Replied you\'d care for the sheep',
    score:{leader:2, challenger:1}
  },
  {
    ja:'羊の世話を断った',
    en:'Refused to care for the sheep',
    score:{leader:-2, pacifist:2, runner:2, martialartist:4}
  },
  {
    ja:'カラスドローンを殺した',
    en:'Killed Crow Drone',
    score:{leader:4, judge:2, clergy:-4, pacifist:-6, martialartist:2, clown:-2, sage:2, hero:4}
  },
  {
    ja:'カラスドローンを見逃した',
    en:'Let Crow Drone go',
    score:{leader:-2, judge:-2, pacifist:2, runner:2, clown:-2, hero:-4}
  },
  {
    ja:'カラスドローンを撫でた',
    en:'Pet Crow Drone',
    score:{adventurer:2, researcher:2, leader:-4, judge:-4, pacifist:2, martialartist:-2, clown:2, sage:-2, hero:2}
  },
  {
    ja:'マンホールの地下をさらに調べた',
    en:'Further investigated the area in the manhole',
    score:{adventurer:2, researcher:2}
  },
  {
    ja:'マンホールの地下を綺麗にした',
    en:'Cleaned the area in the manhole',
    score:{adventurer:-1, researcher:-1, traveler:2, leader:2, pacifist:2, planner:2}
  },
  {
    ja:'博士との約束を念のために思い出した',
    en:'Recalled promise with the Doctor just to be sure',
    score:{researcher:2, clergy:2, runner:-2, planner:2, collector:1}
  },
  {
    ja:'博士との約束は、忘れる筈がない',
    en:'Couldn\'t imagine forgetting promise with the Doctor',
    score:{leader:4, sage:1}
  },
  {
    ja:'博士との約束を思い出さなかった',
    en:'Didn\'t recall promise with the Doctor',
    score:{clergy:-2, soloplayer:4, runner:2, collector:-2}
  },
  {
    ja:'傷ついた男に博士は死んだと伝えた',
    en:'Told the wounded man the Doctor was dead',
    score:{leader:-2, judge:4, clergy:-1, pacifist:-1, soloplayer:2, hero:2}
  },
  {
    ja:'傷ついた男に博士は死んだと伝えなかった',
    en:'Didn\'t tell the wounded man the Doctor was dead',
    score:{leader:2, clergy:2, pacifist:2, sage:2}
  },
  {
    ja:'死体を調べてから処理した',
    en:'Checked the corpse before disposal',
    score:{hero:2, merchant:2, collector:2}
  },
  {
    ja:'死体を埋葬した',
    en:'Buried the corpse',
    score:{clergy:4, hero:2, merchant:-2, collector:-4}
  },
  {
    ja:'死体をそのままにした',
    en:'Left the corpse alone',
    score:{traveler:-2, pacifist:4, soloplayer:4, sage:4, hero:-4, collector:-4}
  },
  {
    ja:'マンホールにいる猫をカフェへ連れて行った',
    en:'Took the cat in the manhole to the café',
    score:{clergy:2, soloplayer:-4}
  },
  {
    ja:'マンホールにいる猫を森へ連れて行った',
    en:'Took the cat in the manhole to the forest',
    score:{clergy:-2, soloplayer:4}
  },
  {
    ja:'マンホールにいる猫を神社へ連れて行った',
    en:'Took the cat in the manhole to the shrine',
    score:{judge:4, pacifist:2, sage:4, gambler:4}
  },
  {
    ja:'ダンボールを開けた',
    en:'Opened the cardboard box',
    score:{researcher:-2, martialartist:2, clown:-2, merchant:2, collector:2}
  },
  {
    ja:'ダンボールの中に入った',
    en:'Got inside the cardboard box',
    score:{researcher:2, challenger:3, martialartist:-2, clown:2, hero:2, gambler:-2, collector:-2}
  },
  {
    ja:'ダンボールに書いてある事を調べた',
    en:'Read the writing on the cardboard box',
    score:{researcher:4, gambler:-2, merchant:-2, collector:-4}
  },
  {
    ja:'こころに、墓に行ったと答えた',
    en:'Told Kokoro you went to the grave',
    score:{judge:2, clown:-2}
  },
  {
    ja:'こころに、墓に行ってないと答えた',
    en:'Told Kokoro you didn\'t go to the grave',
    score:{judge:-2, clown:2}
  },
  {
    ja:'こころに、博士は死んでると答えた',
    en:'Told Kokoro the Doctor is dead',
    score:{traveler:-2, judge:2, soloplayer:4, merchant:2}
  },
  {
    ja:'こころに、博士の死はわからないと答えた',
    en:'Told Kokoro you\'re not sure if the Doctor is dead',
    score:{pacifist:2, challenger:4, philosopher:2, sage:2}
  },
  {
    ja:'こころに、博士は生きていると答えた',
    en:'Told Kokoro the Doctor alive',
    score:{traveler:2, judge:-2, pacifist:-1, soloplayer:-2, gambler:2}
  },
  {
    ja:'博士との約束を守らなくてはと考えた',
    en:'Thought you had to keep your promise to the Doctor',
    score:{butler:2, leader:2}
  },
  {
    ja:'博士との約束を果たしたいと思った',
    en:'Felt you want to fulfill your promise to the Doctor',
    score:{leader:1, clergy:2}
  },
  {
    ja:'博士と私の為に出来る事をした',
    en:'Chose to do what you can for the Doctor and yourself',
    score:{leader:-2, clergy:-2, pacifist:2, sage:2}
  },
  {
    ja:'自分の記憶を消すことを選んだ',
    en:'Chose to erase your memories',
    score:{}
  },
  {
    ja:'計画を中止することを選んだ',
    en:'Chose to stop the plan',
    score:{}
  },
  {
    ja:'鏡を見て、私は誰か考えた',
    en:'Looking in mirror, thought "Who am I?"',
    score:{researcher:4, butler:2}
  },
  {
    ja:'鏡を見て、約束のことを考えた',
    en:'Looking in mirror, thought about your promise',
    score:{leader:2, merchant:2}
  },
  {
    ja:'鏡を見て、自分の罪について考えた',
    en:'Looking in mirror, thought about your sin',
    score:{leader:2, pacifist:-2, hero:3}
  },
  {
    ja:'私は博士の友人だと思った',
    en:'Thought of yourself as Doctor\'s friend',
    score:{adventurer:-2, butler:3, martialartist:2, sage:2}
  },
  {
    ja:'私は創造物だと思った',
    en:'Thought of yourself as a creation',
    score:{adventurer:-2, judge:4, soloplayer:2, martialartist:2}
  },
  {
    ja:'私は意味不明だと思った',
    en:'Thought of your relationship as unclear',
    score:{adventurer:2, researcher:2, traveler:4, leader:-4, judge:-4, martialartist:-8, clown:4, sage:-8, hero:4, gambler:4}
  },
  {
    ja:'約束は一緒であることだと思った',
    en:'Felt the promise was to be together',
    score:{artisan:4, clergy:-2, soloplayer:-2}
  },
  {
    ja:'約束は幸せであることだと思った',
    en:'Felt the promise was to be happy',
    score:{clergy:4}
  },
  {
    ja:'約束は誰の邪魔もさせないことだと思った',
    en:'Felt no one should interfere with the promise',
    score:{leader:2, clergy:-2, soloplayer:2, bancho:4, planner:2, hero:4, gambler:-4}
  },
  {
    ja:'自分の罪は博士を死なせてしまったことだと思った',
    en:'Felt your sin was letting the Doctor die',
    score:{leader:2, judge:-2, clergy:2}
  },
  {
    ja:'自分の罪は多くの人に恨まれてしまったことだと思った',
    en:'Felt your sin was being hated by many',
    score:{leader:2, judge:-2, pacifist:4}
  },
  {
    ja:'自分の罪は人間のふりをしているだと思った',
    en:'Felt your sin was pretending to be human',
    score:{artisan:2, traveler:-2, leader:-2, judge:4, clergy:-4}
  },
  {
    ja:'管理型に、博士について聞かれてそうだと答えた',
    en:'When Manager Type brought up the Doctor, agreed with him',
    score:{butler:4}
  },
  {
    ja:'管理型に、博士について聞かれてどういう意味か聞き返した',
    en:'When Manager Type brought up the Doctor, asked "how do you mean?"',
    score:{researcher:2, soloplayer:2, sage:2}
  },
  {
    ja:'きぼうに何か用か聞いた',
    en:'Asked what Kibou wanted with you',
    score:{leader:2, runner:2}
  },
  {
    ja:'きぼうに大丈夫か聞いた',
    en:'Asked if Kibou was all right',
    score:{clergy:2, sage:1}
  },
  {
    ja:'きぼうにびっくりしたと伝えた',
    en:'Told Kibou you were surprised',
    score:{butler:2}
  },
  {
    ja:'きぼうからコインを貰った',
    en:'Accepted coins from Kibou',
    score:{clergy:-1, martialartist:2, sage:2, merchant:4}
  },
  {
    ja:'きぼうに移動速度を上げてもらった',
    en:'Increased movement speed by Kibou',
    score:{clergy:-1, soloplayer:2, runner:4, clown:1}
  },
  {
    ja:'きぼうから愛情を貰った',
    en:'Accepted affection from Kibou',
    score:{clergy:4, clown:2, gambler:3}
  },
  {
    ja:'きぼうに力が必要だと答えた',
    en:'Told Kibou you needed help',
    score:{butler:2, leader:1}
  },
  {
    ja:'きぼうに力は必要ないと答えた',
    en:'Told Kibou you didn\'t need help',
    score:{leader:2, pacifist:2, soloplayer:4}
  },
  {
    ja:'ラーメン屋で【あの日】を購入した',
    en:'Bought "That Day" at the ramen shop.',
    score:{adventurer:-1, researcher:-1, butler:2}
  },
  {
    ja:'ラーメン屋で【THE新世界】を購入した',
    en:'Bought "The New World" at the ramen shop.',
    score:{adventurer:2, researcher:2, traveler:2, butler:-2, clown:2, sage:-2}
  },
  {
    ja:'ラーメン屋で【きらめき】を購入した',
    en:'Bought "Glimmer" at the ramen shop.',
    score:{adventurer:-2, researcher:-2, judge:2, sage:4, gambler:-2}
  },
  {
    ja:'ラーメンを購入したとき迷わなかった',
    en:'Didn\'t hesitate while buying ramen.',
    score:{samurai:1}
  },
  {
    ja:'ラーメンを購入したとき、一度考えた',
    en:'Took a thought while buying ramen.',
    score:{samurai:-1, philosopher:1}
  },
];