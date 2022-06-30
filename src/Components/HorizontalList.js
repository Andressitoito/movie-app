import ItemList from './ItemList';
import './HorizontalList.scss';


const HorizontalList = ({title, type}) => {

 const results = [
  {
   "adult": false,
   "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
   "genre_ids": [
    14,
    28,
    12
   ],
   "id": 453395,
   "original_language": "en",
   "original_title": "Doctor Strange in the Multiverse of Madness",
   "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
   "popularity": 3901.541,
   "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
   "release_date": "2022-05-04",
   "title": "Doctor Strange in the Multiverse of Madness",
   "video": false,
   "vote_average": 7.5,
   "vote_count": 2439
  },
  {
   "adult": false,
   "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
   "genre_ids": [
    14,
    12,
    28
   ],
   "id": 338953,
   "original_language": "en",
   "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
   "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
   "popularity": 3664.629,
   "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
   "release_date": "2022-04-06",
   "title": "Fantastic Beasts: The Secrets of Dumbledore",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 1911
  },
  {
   "adult": false,
   "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
   "genre_ids": [
    28,
    12,
    10751,
    35,
    878
   ],
   "id": 675353,
   "original_language": "en",
   "original_title": "Sonic the Hedgehog 2",
   "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
   "popularity": 3090.091,
   "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
   "release_date": "2022-03-30",
   "title": "Sonic the Hedgehog 2",
   "video": false,
   "vote_average": 7.7,
   "vote_count": 2128
  },
  {
   "adult": false,
   "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
   "genre_ids": [
    28,
    12,
    35
   ],
   "id": 752623,
   "original_language": "en",
   "original_title": "The Lost City",
   "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
   "popularity": 2925.417,
   "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
   "release_date": "2022-03-24",
   "title": "The Lost City",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 1247
  },
  {
   "adult": false,
   "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
   "genre_ids": [
    28,
    53,
    80
   ],
   "id": 818397,
   "original_language": "en",
   "original_title": "Memory",
   "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
   "popularity": 2563.686,
   "poster_path": "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
   "release_date": "2022-04-28",
   "title": "Memory",
   "video": false,
   "vote_average": 7.4,
   "vote_count": 335
  },
  {
   "adult": false,
   "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
   "genre_ids": [
    14,
    12,
    28
   ],
   "id": 338953,
   "original_language": "en",
   "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
   "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
   "popularity": 3664.629,
   "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
   "release_date": "2022-04-06",
   "title": "Fantastic Beasts: The Secrets of Dumbledore",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 1911
  },
  {
   "adult": false,
   "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
   "genre_ids": [
    28,
    12,
    10751,
    35,
    878
   ],
   "id": 675353,
   "original_language": "en",
   "original_title": "Sonic the Hedgehog 2",
   "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
   "popularity": 3090.091,
   "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
   "release_date": "2022-03-30",
   "title": "Sonic the Hedgehog 2",
   "video": false,
   "vote_average": 7.7,
   "vote_count": 2128
  },
  {
   "adult": false,
   "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
   "genre_ids": [
    28,
    12,
    35
   ],
   "id": 752623,
   "original_language": "en",
   "original_title": "The Lost City",
   "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
   "popularity": 2925.417,
   "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
   "release_date": "2022-03-24",
   "title": "The Lost City",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 1247
  },
  {
   "adult": false,
   "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
   "genre_ids": [
    28,
    53,
    80
   ],
   "id": 818397,
   "original_language": "en",
   "original_title": "Memory",
   "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
   "popularity": 2563.686,
   "poster_path": "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
   "release_date": "2022-04-28",
   "title": "Memory",
   "video": false,
   "vote_average": 7.4,
   "vote_count": 335
  },
  {
   "adult": false,
   "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
   "genre_ids": [
    28,
    12,
    10751,
    35,
    878
   ],
   "id": 675353,
   "original_language": "en",
   "original_title": "Sonic the Hedgehog 2",
   "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
   "popularity": 3090.091,
   "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
   "release_date": "2022-03-30",
   "title": "Sonic the Hedgehog 2",
   "video": false,
   "vote_average": 7.7,
   "vote_count": 2128
  },
  {
   "adult": false,
   "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
   "genre_ids": [
    28,
    12,
    35
   ],
   "id": 752623,
   "original_language": "en",
   "original_title": "The Lost City",
   "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
   "popularity": 2925.417,
   "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
   "release_date": "2022-03-24",
   "title": "The Lost City",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 1247
  },
  {
   "adult": false,
   "backdrop_path": "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
   "genre_ids": [
    28,
    53,
    80
   ],
   "id": 818397,
   "original_language": "en",
   "original_title": "Memory",
   "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
   "popularity": 2563.686,
   "poster_path": "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
   "release_date": "2022-04-28",
   "title": "Memory",
   "video": false,
   "vote_average": 7.4,
   "vote_count": 335
  }
 ]

 return (

  <div className='list-container'>

   <h4 className='horizontal-list-title'>
    Popular {title}
   </h4>
   <div className='list-items-container'>

    {
     results.map(({ id, title, vote_average, poster_path }) => (
      <ItemList
       key={id}
       id={id}
       title={title}
       vote_average={vote_average}
       poster_path={poster_path}
       type={type}
      />
     ))
    }

   </div>



  </div>



 )
}

export default HorizontalList;