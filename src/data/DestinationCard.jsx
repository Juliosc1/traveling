import parisCard from '../assets/parisCard.jpg'
import paris from '../assets/paris.jpg'
import romeCard from '../assets/romeCard.jpg'
import rome from '../assets/rome.jpg'
import sanfranciscoCard from '../assets/sanfranciscoCard.jpg'
import sanfrancisco from '../assets/sanfrancisco.jpg'
import helsinkiCard from '../assets/helsinkiCard.jpg'
import helsinki from '../assets/helsinki.jpg'
import londonCard from '../assets/londonCard.jpg'
import london from '../assets/london.jpg'

export const DestinationCard = [
  {
    name: "Paris",
    image: parisCard,
    largeImg: paris,
    description: "Paris is a city that needs no introduction. It's home to the Eiffel Tower, the Louvre Museum, and the best croissants you'll ever taste. And if you're feeling adventurous, you can always try crossing the road without getting hit by a scooter. Bonne chance!",
    tours: [
      {tip1: "Visit the Eiffel Tower"}, 
      {tip2: "Expole the Louvre Museum"}, 
      {tip3: "Take a stroll along the Seine River"},
    ]
  },
  {
    name: "Rome",
    image: romeCard,
    largeImg: rome,
    description: "Rome, the eternal city, is a place where history, art, and pizza come together in a beautiful mess. From the Colosseum to the Vatican, there's no shortage of things to see and do. Just be sure to pack your stretchy pants because the food is seriously good.",
    tours: [
      {tip1: "Visit the Colosseum"},
      {tip2: "Expore the Vatican Museums"},
      {tip3: "Indulge in Italien cuisine"},
    ]
  },
  {
    name: "San Francisco",
    image: sanfranciscoCard,
    largeImg: sanfrancisco,
    description: "San Francisco is a city that's as diverse as it is hilly. From the Golden Gate Bridge to Fisherman's Wharf, there's something for everyone. Just be prepared for the fog, because it likes to crash the party uninvited.",
    tours: [
      {tip1: "Walk or bike across the Golden Gate Brigde"},
      {tip2: "Explore the historic neighborhoods"},
      {tip3: "Sample the local food scene"},
    ]
  },
  {
    name: "Helsinki",
    image: helsinkiCard,
    largeImg: helsinki,
    description: "Helsinki is a city that's all about the design, from the iconic architecture to the sleek interiors. And let's not forget the saunas, because nothing says Finnish culture quite like getting hot and sweaty with strangers. Just be sure to pack your layers, because the weather is about as unpredictable as your ex.",
    tours: [
      {tip1: "Visit the historic Suomenlinna Sea Fortress"},
      {tip2: "Enjoy a traditional Finnish sauna"},
      {tip3: "Explore the vibrant Design District"},
    ]
  },
  {
    name: "London",
    image: londonCard,
    largeImg: london,
    description: "London is a bustling city that's full of surprises. From the iconic red telephone booths to the royal guards outside Buckingham Palace, there's always something new to discover. And don't forget to try some fish and chips or a pint of ale in a cozy pub – it's a British tradition!",
    tours: [
      {tip1: "Visit the British Museum"},
      {tip2: "Explore the Tower of London"},
      {tip3: "Take a stroll through Hyde Park"},
    ]
  },
]