import React from "react";
import style from "../../css/main.css";

function TitanicText ({bool}) {
  return (
    <div className = {(bool) ? style.textContainerStarted : style.textContainer}>
    <p>In the late 19th and early 20th centuries, millions of people migrated from Europe to North America. With the massive quantities of people wanting to migrate, shippers began to accommodate this growing demand with large and extravagant passenger ships. Among the competing liners, two rose to prominence among the others. These were the White Star Line and Cunard, and they were fierce rivals in this field. In 1907, Cunard produced two passenger liners that broke speed records in crossing the Atlantic, the <i>Lusitania</i> and the <i>Mauretania</i>. White Star Line rose to this challenge by hiring the shipbuilder Harland and Wolff to construct three “Olympic-class” vessels, the <i>Olympic</i>, the <i>Titanic</i>, and the <i>Britannic</i>. These vessels were highly touted by the White Star line as being the largest and most luxurious vessels ever created, and were marketed toward crossing the Atlantic in with all the modern conveniences of the time. </p>

    <p>	When people think about the Titanic, one of the topics that always comes up is the differences between first, second, and third class. As with many things, the Titanic accommodated those who were willing to pay more by offering grander luxuries to those who paid more. First class tickets ranged from $150 ($3,700 today) to 4350 ($100,000), with the larger amounts being the luxurious Parlour suites, of which there were four. Second class was around $60 ($1500), and third class ranged from $15 ($375) to $40 ($1000). To put this in perspective, the average laborer only made 10$ a week during this time. </p>

    <p> So what did the extra money buy you on the Titanic? As to accommodations, the first class deck included a gymnasium with mechanical bicycles, a rowing machine, and a weightlifting machine. There was also a Turkish bathhouse, adorned in Turkish/Arabic styles, indoor heated swimming pool, barber, a fine dining French restaurant, and a court for playing squash. Many of these were an additional fee for entry. In addition to these, there was an extremely large dining saloon, where the majority of first class ate, multiple café’s, and gathering places such as the smoking room, reading room, and lounge. Rooms were spacious and even included electric heaters and bed warmers on request. </p>

    <p> The second and third class passenger’s facilities were not without amenities, however.  Second class amenities included a library, smoking room, dining room, and outdoor promenade. Third class passengers had an outdoor area, dining saloon, smoking room, and a “general room”, which was basically just a room for people to gather and interact. Second class rooms were also fairly large, including a sofa, bed, wardrobe, and storage space. Third class passenger rooms were similar in furnishing, but typically didn’t have much storage space, nor did it have a wardrobe. Many of the rooms were also shaped strangely in order to accommodate the ship’s shape. However, these rooms were still luxurious for third-class passengers of the time. It should be stated that second and third class passengers generally all had to share restrooms in order to conserve water and space. These were separated by gender. Bathing had to be requested, and would be drawn up by a steward. There were only two baths for the entire third class. </p>
    </div>

  );
}

export default TitanicText;
