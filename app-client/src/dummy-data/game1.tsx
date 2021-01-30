import { Game } from './Game';

const game1Content = {
  pros: ["Funniest game in the series", "Eivor is brilliant protagonist", "Every hub bursts with life", "Huge open world"],
  cons: ["Combat can feel messy", "Plot never gets you invested", "Open-world can feel sparse in places", "Combat can feel messy"],
  title: `Assassin's Creed Valhalla`,
  image: [
    'https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/11/ACV_1015_HERO.jpg?resize=1920%2C1080',
    'https://www.musictech.net/wp-content/uploads/2020/11/Assassins-creed@1400x1050_0005_ACV_screen_fwd_World_Vista_Male_200712_945pm_CEST.jpg',
    'https://www.gameinformer.com/sites/default/files/styles/full/public/2020/11/08/64cf8408/04_0.jpg',
    'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-07-12-21-29/ubisoft-finally-shows-assassins-creed-valhalla-gameplay-1594585580741.jpg/EG11/thumbnail/750x422/format/jpg/quality/60'

  ],
  score: 88,
  synopsis: `Assassin’s Creed Valhalla can't sustain its own open world and doesn't have a story worth caring about,
   but Eivor's broad shoulders do just about enough to carry the latest Viking-inspired chapter in the veteran series. 
   Other open-world games deliver the tried and tested formula better, but Valhalla offers an enjoyable experience buoyed 
   by the smaller adventures you have along the way.`,
  body: `Assassin's Creed Valhalla sees the veteran stealth series return after taking a year off from its annual release cycle, 
  but there's not much evidence Ubisoft has benefited from the extra development time. 
  This time around, the series is set during the Viking invasion of England, with you taking on the role of raider Eivor. 
  And, given the latest Assassin’s Creed chapter is set in a time period synonymous with looting and pillaging, 
  it’s no surprise that Valhalla brings with it much more aggressive and chaotic combat. 
  At times, Valhalla's gameplay often harkens back to the more classic combat of Assassin's Creed II, and the series 
  rediscovers the sense of humor and rugged silliness which has been missing since Black Flag. The series often takes 
  itself a little bit too seriously, so it's great to see Ubisoft embrace a more jovial tone.
  But old habits die hard and Ubisoft still believes that bigger is better, creating a game full of wide-open 
  spaces populated with little more than a handful of scattered collectibles.`,
}

export const game1 = new Game(game1Content);
