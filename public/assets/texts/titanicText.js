import React from "react";
import style from "../../css/main.css";

function TitanicText ({start, shake, height, textRef}) {
  let name = (start) ? style.textContainerOverlay : style.textContainer;
  let add = (shake) ? (" " + style.shakeThis) : "";
  name = name + add;
  return (
    <div className = { name } style = {{height: height}} ref = {textRef}>

      <div className = {style.textDiv}>
        <p>In the late 19th and early 20th centuries, millions of people migrated from Europe to North America. With the massive quantities of people wanting to migrate, shippers began to accommodate this growing demand with large and extravagant passenger ships. Among the competing liners, two rose to prominence among the others. These were the White Star Line and Cunard, and they were fierce rivals in this field. In 1907, Cunard produced two passenger liners that broke speed records in
        crossing the Atlantic, the <i>Lusitania</i> and the <i>Mauretania</i>. White Star Line rose to this challenge by hiring the shipbuilder Harland and Wolff to construct three “Olympic-class” vessels, the <i>Olympic</i>, the <i>Titanic</i>, and the <i>Britannic</i>. These vessels were highly touted by the White Star line as being the largest and most luxurious vessels ever created, and were marketed toward crossing the Atlantic in with all the modern conveniences of the time. </p>
        <img src = "/assets/images/titanic01.jpg" className = {style.picture}></img>
      </div>
      <div className = {style.textDiv}>
        <img src = "/assets/images/titanic01.jpg" className = {style.picture}></img>
        <p>	When people think about the Titanic, one of the topics that always comes up is the differences between first, second, and third class. As with many things, the Titanic accommodated those who were willing to pay more by offering grander luxuries to those who paid more. First class tickets ranged from $150 ($3,700 today) to 4350 ($100,000), with the larger amounts being the luxurious Parlour suites, of which there were four. Second class was around $60 ($1500), and third class ranged from $15 ($375) to $40 ($1000). To put this in perspective, the average laborer only made 10$ a week during this time. </p>
      </div>
      <div className = {style.textDiv}>
        <p> So what did the extra money buy you on the Titanic? As to accommodations, the first class deck included a gymnasium with mechanical bicycles, a rowing machine, and a weightlifting machine. There was also a Turkish bathhouse, adorned in Turkish/Arabic styles, indoor heated swimming pool, barber, a fine dining French restaurant, and a court for playing squash. Many of these were an additional fee for entry. In addition to these, there was an extremely large dining saloon, where the  majority of first class ate, multiple café’s, and gathering places such as the smoking room, reading room, and lounge. Rooms were spacious and even included electric heaters and bed warmers on request. </p>
        <img src = "/assets/images/titanic01.jpg" className = {style.picture}></img>
      </div>
      <div className = {style.textDiv}>
      <img src = "/assets/images/titanic01.jpg" className = {style.picture}></img>
        <p> The second and third class passenger’s facilities were not without amenities, however.  Second class amenities included a library, smoking room, dining room, and outdoor promenade. Third class passengers had an outdoor area, dining saloon, smoking room, and a “general room”, which was basically just a room for people to gather and interact. Second class rooms were also fairly large, including a sofa, bed, wardrobe, and storage space. Third class passenger rooms were similar in furnishing, but typically didn’t have much storage space, nor did it have a wardrobe. Many of the rooms were also shaped strangely in order to accommodate the ship’s shape. However, these rooms were still luxurious for third-class passengers of the time. It should be stated that second and third class passengers generally all had to share restrooms in order to conserve water and space. These were separated by gender. Bathing had to be requested, and would be drawn up by a steward. There were only two baths for the entire third class. All things said, private rooms and daily meals were amenities were unheard of for the time for third class. This combined with the lavish second and first class cemented the Titanic's reputation as one of the most
        luxurious liners available with which to sail the Atlantic.</p>
      </div>
      <div className = {style.textDivBig}>
        <p>
        That is, until it collided with an iceberg.
        </p>
      </div>
    </div>

  );
}


function TitanicTextSubmerged (arr) {
  return (
    <div className = {style.textContainerSubmerged}>

      <div className = {style.textDiv} style = {{height: arr.arr[0]}}>
        <img src = "/assets/images/titanic02.jpg" className = {style.picture}></img>
        <p> By 12:20 AM, it had been realized that the ship had exceeded it's capacity for damage, and distress signals were ordered. The <i>Carpathia</i>
        responded and began approach, but was over three hours away. As this was happening, the added weight of the water in the foward bulkheads was causing the bow to sink
        into the water. People were scrambling to the top deck to find a lifeboat, but there were only enough lifeboats for not even half of the total crew and passengers.
        To add to this, lifeboats were being launched before they had reached capacity, causing even less people to be able to board one. At 2:20 AM, the bow of the ship had sank so far
        that the stern was up in the air, and at this point the pressure was too much for the ship to bear, so it broke in two, sending anyone left aboard into the frigid waters.  </p>
      </div>
      <div className = {style.textDiv}  style = {{height: arr.arr[1]}}>
        <img src = "/assets/images/titanic02.jpg" className = {style.picture}></img>
        <p>	The ship was designed to be able to take damage to multiple bulkheads, and seal those off effectively stopping water from flooding the rest.
        However, the problem was that the <i>Titanic</i> could theoretically survive the flooding any two watertight compartments or the forward four compartments, and the
        damage from the iceberg exceeded that.
        </p>
      </div>
      <div className = {style.textDiv}  style = {{height: arr.arr[2]}}>
        <p> Radio messages were not the ship's only line of defense, however. The <i>Titanic</i> had two lookouts, Frederick Fleet and Reginald Lee,
        stationed in the crow's nest. However, due to circumstances unknown, the crow's nest binoculars were missing that night. At 11:40 pm,
        they spotted an iceberg directly in front of the ship's bow, and the message was relayed to the bridge, where the order was given to turn the ship as
        hard as possible to avoid the collision. Unfortunately, the ship was going too fast to avoid collision with the iceberg, and instead scraped along the side of it,
        causing damage to 5 of the ship's bulkheads.
          </p>
        <img src = "/assets/images/titanic02.jpg" className = {style.picture}></img>
      </div>
      <div className = {style.textDiv}  style = {{height: arr.arr[3]}}>
      <img src = "/assets/images/titanic02.jpg" className = {style.picture}></img>
        <p> On April 14th, 2018, the <i>Titanic</i> was approaching an area known to have icebergds. Edward J. Smith, the captain,
        set the course slightly south to avoid the area, keeping the ship steady at 22 knots. What Smith didn't know, however, was
        that two nearby linesr, the <i>Californian</i> and the <i>Mesaba</i>, had sent word to the radio operators of the <i>Titanic</i>, warning them
        that there were ice fields in the area, and the former had even been trapped in ice, unable to continue. However, these messages were never relayed to the bridge, due to the negligence of radio operators
        Jack Phillips and Harold Bride. The pair were busy relaying passenger communications at the time and neglected to
        pass the ice field messages to the bridge.
         </p>
      </div>
      <div className = {style.textDivBig}  style = {{height: arr.arr[4]}}>
        <p> On April 10th, 1912, the Titanic began it's maiden voyage from Southampton, England. </p>
      </div>
    </div>

  );
}

export {TitanicText, TitanicTextSubmerged};
