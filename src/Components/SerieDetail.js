import './SerieDetail.scss';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SerieDetail = () => {

 let params = useParams()

 const results = {
  "adult": false,
  "backdrop_path": "/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
  "created_by": [
    {
      "id": 58321,
      "credit_id": "5f3814c011c066003637f6a8",
      "name": "Eric Kripke",
      "gender": 2,
      "profile_path": "/dd7EgfOEKPqQxWtBfAvjYZahbSc.jpg"
    }
  ],
  "episode_run_time": [
    60
  ],
  "first_air_date": "2019-07-25",
  "genres": [
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10759,
      "name": "Action & Adventure"
    }
  ],
  "homepage": "https://www.amazon.com/dp/B0875L45GK",
  "id": 76479,
  "in_production": true,
  "languages": [
    "en"
  ],
  "last_air_date": "2022-06-30",
  "last_episode_to_air": {
    "air_date": "2022-06-30",
    "episode_number": 7,
    "id": 3435048,
    "name": "Here Comes a Candle to Light You to Bed",
    "overview": "Everything's changing as never expected for the Homelander. Soldier Boy is searching for the other old payback members to slay. Black Noir recollects what has really got him to the current situation.",
    "production_code": "",
    "runtime": 64,
    "season_number": 3,
    "still_path": "/cG7G0XyW0KQ1oeYY06KnaP1n8PR.jpg",
    "vote_average": 8.2,
    "vote_count": 11
  },
  "name": "The Boys",
  "next_episode_to_air": {
    "air_date": "2022-07-07",
    "episode_number": 8,
    "id": 3435049,
    "name": "The Instant White-Hot Wild",
    "overview": "",
    "production_code": "",
    "runtime": 60,
    "season_number": 3,
    "still_path": null,
    "vote_average": 0.0,
    "vote_count": 0
  },
  "networks": [
    {
      "id": 1024,
      "name": "Amazon",
      "logo_path": "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
      "origin_country": ""
    }
  ],
  "number_of_episodes": 24,
  "number_of_seasons": 3,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "The Boys",
  "overview": "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
  "popularity": 4689.521,
  "poster_path": "/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  "production_companies": [
    {
      "id": 20580,
      "logo_path": "/oRR9EXVoKP9szDkVKlze5HVJS7g.png",
      "name": "Amazon Studios",
      "origin_country": "US"
    },
    {
      "id": 333,
      "logo_path": "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
      "name": "Original Film",
      "origin_country": "US"
    },
    {
      "id": 11073,
      "logo_path": "/wHs44fktdoj6c378ZbSWfzKsM2Z.png",
      "name": "Sony Pictures Television Studios",
      "origin_country": "US"
    },
    {
      "id": 38398,
      "logo_path": null,
      "name": "Kripke Enterprises",
      "origin_country": "US"
    },
    {
      "id": 16615,
      "logo_path": "/dbxHaOtibTKvP6dUMRYdwUOULgY.png",
      "name": "Point Grey Pictures",
      "origin_country": "US"
    },
    {
      "id": 2526,
      "logo_path": "/kzIW6QWhacDwzGoXEIWhac8rb70.png",
      "name": "Kickstart",
      "origin_country": "US"
    },
    {
      "id": 33728,
      "logo_path": null,
      "name": "NightSky Productions",
      "origin_country": "US"
    },
    {
      "id": 40457,
      "logo_path": null,
      "name": "Amazon Productions",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "seasons": [
    {
      "air_date": "2020-09-10",
      "episode_count": 19,
      "id": 163277,
      "name": "Specials",
      "overview": "",
      "poster_path": "/cCXG81dSCPXcqYm6gTHlwtXocti.jpg",
      "season_number": 0
    },
    {
      "air_date": "2019-07-25",
      "episode_count": 8,
      "id": 98085,
      "name": "Season 1",
      "overview": "",
      "poster_path": "/8mBpZIU61uNOvW8JBHYVaoDWOdU.jpg",
      "season_number": 1,
      "networks": [
        {
          "id": 1024,
          "logo": {
            "path": "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
            "aspect_ratio": 3.242914979757085
          },
          "name": "Amazon",
          "origin_country": ""
        }
      ]
    },
    {
      "air_date": "2020-09-03",
      "episode_count": 8,
      "id": 154681,
      "name": "Season 2",
      "overview": "The even more intense, more insane season two finds The Boys on the run from the law, hunted by the Supes, and desperately trying to regroup and fight back against Vought. In hiding, Hughie, Mother’s Milk, Frenchie and Kimiko try to adjust to a new normal, with Butcher nowhere to be found. Meanwhile, Starlight must navigate her place in The Seven as Homelander sets his sights on taking complete control. His power is threatened with the addition of Stormfront, a social media-savvy new Supe, who has an agenda of her own. On top of that, the Supervillain threat takes center stage and makes waves as Vought seeks to capitalize on the nation’s paranoia.",
      "poster_path": "/pccmXBaw0j7KZHO52lYLI93trSO.jpg",
      "season_number": 2,
      "networks": [
        {
          "id": 1024,
          "logo": {
            "path": "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
            "aspect_ratio": 3.242914979757085
          },
          "name": "Amazon",
          "origin_country": ""
        }
      ]
    },
    {
      "air_date": "2022-06-02",
      "episode_count": 8,
      "id": 215686,
      "name": "Season 3",
      "overview": "It’s been a year of calm. Homelander’s subdued. Butcher works for the government, supervised by Hughie of all people. But both men itch to turn this peace and quiet into blood and bone. So when The Boys learn of a mysterious Anti-Supe weapon, it sends them crashing into the Seven, starting a war, and chasing the legend of the first Superhero: Soldier Boy.",
      "poster_path": "/ut4PhX7OP2l2oJhrIUYWnt9pnQU.jpg",
      "season_number": 3,
      "networks": [
        {
          "id": 1024,
          "logo": {
            "path": "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
            "aspect_ratio": 3.242914979757085
          },
          "name": "Amazon",
          "origin_country": ""
        }
      ]
    }
  ],
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Returning Series",
  "tagline": "Never meet your heroes.",
  "type": "Scripted",
  "vote_average": 8.4,
  "vote_count": 6480
}



 return (
  <div className='main-container-serie-detail'>
   <div
    className='serie-detail-background'
   >
    <img src={`https://image.tmdb.org/t/p/w1280/${results.backdrop_path}`} />

   </div>

   <div className='details-links'>
    <ul>
     <li><Link to='seriedetailinfo' className='detail-link'>Info</Link></li>
     <li><Link to='seriedetailcast' className='detail-link'>Cast</Link></li>
     <li><Link to='seriedetailsimilar' className='detail-link'>Similar</Link></li>
    </ul>
   </div>
   <Outlet />

  </div>

 )

}

export default SerieDetail;