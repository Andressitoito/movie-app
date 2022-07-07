import './SerieDetailSimilar.scss';
import ItemList from './ItemList';


const SerieDetailSimilar = () => {

 // https://api.themoviedb.org/3/movie/338953/similar?api_key=92b7c9e2808de339886a0b75ca3aa28e

 const similar = {
  "page": 1,
  "results": [
   {
    "adult": false,
    "backdrop_path": "/2fQ6d8B0wgKTr2c7aHcDW8DqwIB.jpg",
    "genre_ids": [
     28,
     12,
     878,
     10751
    ],
    "id": 10249,
    "title": "The Rocketeer",
    "original_language": "en",
    "original_title": "The Rocketeer",
    "overview": "A stunt pilot comes across a prototype jetpack that gives him the ability to fly. However, evil forces of the world also want this jetpack at any cost.",
    "popularity": 12.325,
    "poster_path": "/2tDFRESFwKww1LHRE8W1Exj9edH.jpg",
    "release_date": "1991-06-21",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 712
   },
   {
    "adult": false,
    "backdrop_path": "/x2N4ruyJCmugvGk9W5XPSrBLMZO.jpg",
    "genre_ids": [
     28,
     12,
     10751,
     14
    ],
    "id": 10323,
    "title": "Clash of the Titans",
    "original_language": "en",
    "original_title": "Clash of the Titans",
    "overview": "To win the right to marry his love, the beautiful princess Andromeda, and fulfil his destiny, Perseus must complete various tasks including taming Pegasus, capturing Medusa's head, and battling the Kraken monster.",
    "popularity": 20.952,
    "poster_path": "/5JCLODNLJH6alc3KmyoiC21Nlob.jpg",
    "release_date": "1981-06-12",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 572
   },
   {
    "adult": false,
    "backdrop_path": "/wa2jU39LByrAG0l7wiXFvb81Ndi.jpg",
    "genre_ids": [
     53
    ],
    "id": 10398,
    "title": "Double Jeopardy",
    "original_language": "en",
    "original_title": "Double Jeopardy",
    "overview": "A woman framed for her husband's murder suspects he is still alive; as she has already been tried for the crime, she can't be re-prosecuted if she finds and kills him.",
    "popularity": 16.408,
    "poster_path": "/dPd9QvEeMQpgHO6iLB1LqALTZl.jpg",
    "release_date": "1999-09-24",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 1000
   },
   {
    "adult": false,
    "backdrop_path": "/eIEsSLSjH1NOh3JL2fasrgG25Pr.jpg",
    "genre_ids": [
     18
    ],
    "id": 10400,
    "title": "The Hurricane",
    "original_language": "en",
    "original_title": "The Hurricane",
    "overview": "The story of Rubin \"Hurricane\" Carter, a boxer wrongly imprisoned for murder, and the people who aided in his fight to prove his innocence.",
    "popularity": 17.836,
    "poster_path": "/eOzbt7KsqTC8gcjJMxcQnr89cxJ.jpg",
    "release_date": "1999-09-17",
    "video": false,
    "vote_average": 7.448,
    "vote_count": 1142
   },
   {
    "adult": false,
    "backdrop_path": "/cuEFmtmqMyqHQH0GYco2IrjKVPQ.jpg",
    "genre_ids": [
     35,
     10751,
     14
    ],
    "id": 10439,
    "title": "Hocus Pocus",
    "original_language": "en",
    "original_title": "Hocus Pocus",
    "overview": "After 300 years of slumber, three sister witches are accidentally resurrected in Salem on Halloween night, and it is up to three kids and their newfound feline friend to put an end to the witches' reign of terror once and for all.",
    "popularity": 84.108,
    "poster_path": "/emyI24MDEB29nL5OwOthAnKIrqU.jpg",
    "release_date": "1993-07-16",
    "video": false,
    "vote_average": 7.011,
    "vote_count": 2139
   },
   {
    "adult": false,
    "backdrop_path": "/tgp4OH8lBhXMnj23h2jM8A99DHr.jpg",
    "genre_ids": [
     28,
     18,
     878,
     53
    ],
    "id": 10447,
    "title": "No Escape",
    "original_language": "en",
    "original_title": "No Escape",
    "overview": "In the year 2022, a ruthless prison warden has created the ultimate solution for his most troublesome and violent inmates: Absolom, a secret jungle island where prisoners are abandoned and left to die. But Marine Captain John Robbins, convicted of murdering a commanding officer, is determined to escape the island in order to reveal the truth behind his murderous actions and clear his name.",
    "popularity": 16.282,
    "poster_path": "/jBVyUBqaMf66WJ7bsJrzmCz8QmW.jpg",
    "release_date": "1994-04-29",
    "video": false,
    "vote_average": 6.285,
    "vote_count": 311
   },
   {
    "adult": false,
    "backdrop_path": "/aEo3hKjdfJ5wmPz12TNexMoK6vW.jpg",
    "genre_ids": [
     35
    ],
    "id": 10471,
    "title": "Next Friday",
    "original_language": "en",
    "original_title": "Next Friday",
    "overview": "A streetwise man flees South Central Los Angeles, heading to the suburbs and his lottery-winner uncle and cousin, to avoid a neighborhood thug with a grudge who has just escaped from prison.",
    "popularity": 19.298,
    "poster_path": "/dP4fYCGQZzg17ta7FvLwJVCwwt9.jpg",
    "release_date": "2000-01-12",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 438
   },
   {
    "adult": false,
    "backdrop_path": "/eqZ5t82asfprFcNS56eVruNT5G5.jpg",
    "genre_ids": [
     10751,
     35
    ],
    "id": 10481,
    "title": "102 Dalmatians",
    "original_language": "en",
    "original_title": "102 Dalmatians",
    "overview": "Get ready for a howling good time as an all new assortment of irresistible animal heroes are unleashed in this great family tail! In an unlikely alliance, the outrageous Waddlesworth - a parrot who thinks he's a Rottweiler - teams up with Oddball - an un-marked Dalmatian puppy eager to earn her spots! Together they embark on a laugh-packed quest to outwit the ever-scheming Cruella De Vil.",
    "popularity": 13.675,
    "poster_path": "/dSxnIika9yWwTvEbpsmoGdeh65E.jpg",
    "release_date": "2000-10-07",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 1131
   },
   {
    "adult": false,
    "backdrop_path": "/buqaSUVoFaTZGJzVD0w1a14RMMD.jpg",
    "genre_ids": [
     28,
     53,
     878
    ],
    "id": 10483,
    "title": "Death Race",
    "original_language": "en",
    "original_title": "Death Race",
    "overview": "Terminal Island, New York: 2020. Overcrowding in the US penal system has reached a breaking point. Prisons have been turned over to a monolithic Weyland Corporation, which sees jails full of thugs as an opportunity for televised sport. Adrenalized inmates, a global audience hungry for violence and a spectacular, enclosed arena come together to form the 'Death Race', the biggest, most brutal event.",
    "popularity": 33.772,
    "poster_path": "/5A79GeOb3uChQ0l0ZDjDyODKQp3.jpg",
    "release_date": "2008-08-22",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 3099
   },
   {
    "adult": false,
    "backdrop_path": "/ka6np2LONtAElZOVeebb3mwSTBs.jpg",
    "genre_ids": [
     18
    ],
    "id": 687,
    "title": "Dead Man Walking",
    "original_language": "en",
    "original_title": "Dead Man Walking",
    "overview": "A justice drama based on a true story about a man on death row who, in his last days, forms a strong relationship with a nun who teaches him forgiveness and gives him spirituality, as she accompanies him to his execution.",
    "popularity": 11.468,
    "poster_path": "/wQmmJi5ypfHH2boXrQBmsep7qb2.jpg",
    "release_date": "1995-12-29",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1078
   },
   {
    "adult": false,
    "backdrop_path": "/ebaq0ecL1Tu39rIExfHwE4ToFl2.jpg",
    "genre_ids": [
     28,
     12,
     53
    ],
    "id": 708,
    "title": "The Living Daylights",
    "original_language": "en",
    "original_title": "The Living Daylights",
    "overview": "After a defecting Russian general reveals a plot to assassinate foreign spies, James Bond is assigned a secret mission to dispatch the new head of the KGB to prevent an escalation of tensions between the Soviet Union and the West.",
    "popularity": 19.998,
    "poster_path": "/jcP0sarQXmx7XgwNoxJtqbllNyM.jpg",
    "release_date": "1987-06-29",
    "video": false,
    "vote_average": 6.459,
    "vote_count": 1349
   }
  ]
 }


 return (
  <div className='detail-similar'>
   {
    similar.results.map(({ id, title, vote_average, poster_path }) => (
     <ItemList
      key={id}
      id={id}
      title={title}
      vote_average={vote_average}
      poster_path={poster_path}
     />
    ))
   }
  </div>
 )
}

export default SerieDetailSimilar;