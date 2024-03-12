function switchLang(){
  const lang = document.getElementById('lang').value;

  const category = document.getElementById('category');
  const categoryText = {
    ja:['--全て表示--', '最初のエリア', 'ベンチ', 'バッテリー、占い', '神社', 'こころ・羊の絵', '鏡', 'きぼう', 'その他の物体', 'いのり', '羊の世話', 'リサイクルショップ', '森のNPC', '自動販売機', '猫', '玩具型M2', '望遠鏡', 'だる・カフェ', 'シューティングゲーム', '研究所', 'アクションゲーム', 'たばこ', 'みらい・ハイアンドロー', 'カジノ', '洞窟', '玩具型M1', '海岸', '防衛戦', '倒れている人', 'いろいろ', '最後の行動', 'エンディング'],
    en:['--Show All--', 'First Area', 'Bench', 'Battery, Divigation', 'Shrine', 'Kokoro/Sheep painting', 'Mirror', 'Kibou', 'Other object', 'Inori', 'Caring sheep', 'Recycle Shop', 'Forest NPC', 'Vending machine', 'Cat', 'Toy Type M2', 'Telescope', 'Dull/Café', 'Shooting game', 'Labo', 'Action game', 'Cigarette', 'Mirai/High-Low', 'Casino', 'Cave', 'Toy Type M1', 'Coast', 'Defense', 'Collapsed man', 'Miscellaneous', 'Final action', 'Ending']
  }
  for(let i=0; i<category.options.length; i++){
    category.options[i].textContent = categoryText[lang][i];
  }

  const th = document.querySelectorAll('th');
  const thText = {
    ja:['行動', '冒険家', '研究家', '職人', '旅人', '執事', 'リーダー', '裁判官', '聖職者', '平和主義者', 'ソロプレイヤー', '番長', 'ランナー', '挑戦者', 'プランナー', '侍', '哲学者', '武闘家', '道化師', '賢者', '勇者', 'ギャンブラー', '商人', 'コレクター'],
    en:['Action', 'Adventurer', 'Researcher', 'Artisan', 'Traveler', 'Butler', 'Leader', 'Judge', 'Clergy', 'Pacifist', 'Solo Player', 'Bancho', 'Runner', 'Challenger', 'Planner', 'Samurai', 'Philosopher', 'Martial Artist', 'Clown', 'Sage', 'Hero', 'Gambler', 'Merchant', 'Collector']
  }
  th[0].textContent = thText[lang][0];
  const personalities = document.querySelectorAll('th p');
  for(let i=0; i<personalities.length; i++) {
    personalities[i].textContent = thText[lang][i+1];
  }
  createTable();
}

document.getElementById('lang').addEventListener('change',switchLang);
