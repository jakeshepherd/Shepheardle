// Song data with dates and audio URLs
// Format dates as DD-MM-YYYY to match today's song
const SONGS = [
    {
        name: "A Hard Rain's A-Gonna Fall - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "A Hero's Death - Fontaines D.C.",
        date: null,
        audioUrl: null
    },
    {
        name: "All American - Mickey Guyton",
        date: null,
        audioUrl: null
    },
    {
        name: "All Kinds Of Everything - Dana",
        date: null,
        audioUrl: null
    },
    {
        name: "Buy Dirt - Jordan Davis",
        date: null,
        audioUrl: null
    },
    {
        name: "Classic - Cam",
        date: null,
        audioUrl: null
    },
    {
        name: "Collide - Ed Sheeran",
        date: null,
        audioUrl: null
    },
    {
        name: "Come Together - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Country - Angaleena Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Dirty World - The Traveling Wilburys",
        date: null,
        audioUrl: null
    },
    {
        name: "Disappointing - John Grant",
        date: null,
        audioUrl: null
    },
    {
        name: "Don't Get Better Than That - LoCash",
        date: null,
        audioUrl: null
    },
    {
        name: "Don't Let Her - Walker Hayes",
        date: null,
        audioUrl: null
    },
    {
        name: "Done Too Soon - Neil Diamond",
        date: null,
        audioUrl: null
    },
    {
        name: "Eclipse - Pink Floyd",
        date: null,
        audioUrl: null
    },
    {
        name: "Forever After All - Luke Combs",
        date: null,
        audioUrl: null
    },
    {
        name: "Happy People - Little Big Town",
        date: null,
        audioUrl: null
    },
    {
        name: "Heaven South - Brad Paisley",
        date: null,
        audioUrl: null
    },
    {
        name: "I Lived It - Blake Shelton",
        date: null,
        audioUrl: null
    },
    {
        name: "I Wish Grandpas Never Died - Riley Green",
        date: null,
        audioUrl: null
    },
    {
        name: "Killers Who Are Partying - Madonna",
        date: null,
        audioUrl: null
    },
    {
        name: "Last Time for Everything - Brad Paisley",
        date: null,
        audioUrl: null
    },
    {
        name: "Let's Do It - Cole Porter",
        date: null,
        audioUrl: null
    },
    {
        name: "Lit - Trace Adkins",
        date: null,
        audioUrl: null
    },
    {
        name: "Lovin' On You - Luke Combs",
        date: null,
        audioUrl: null
    },
    {
        name: "Mellowship Slinky In B Major - Red Hot Chili Peppers",
        date: null,
        audioUrl: null
    },
    {
        name: "Metamorphosis - John Grant",
        date: null,
        audioUrl: null
    },
    {
        name: "Money - Blake Shelton",
        date: null,
        audioUrl: null
    },
    {
        name: "Museum Song - Cast of Barnum",
        date: null,
        audioUrl: null
    },
    {
        name: "My Favorite Things - Julie Andrews",
        date: null,
        audioUrl: null
    },
    {
        name: "One I Want - Van Halen",
        date: null,
        audioUrl: null
    },
    {
        name: "Poster Child - Red Hot Chili Peppers",
        date: null,
        audioUrl: null
    },
    {
        name: "Reasons To Be Cheerful Part 3 - Ian Dury & the Blockheads",
        date: null,
        audioUrl: null
    },
    {
        name: "Soho (Needless To Say) - Al Stewart",
        date: null,
        audioUrl: null
    },
    {
        name: "That's Country Bro - Toby Keith",
        date: null,
        audioUrl: null
    },
    {
        name: "That's Entertainment - The Jam",
        date: null,
        audioUrl: null
    },
    {
        name: "The Daily Mail Song - Dan & Dan",
        date: null,
        audioUrl: null
    },
    {
        name: "Things A Man Oughta Know - Lainey Wilson",
        date: null,
        audioUrl: null
    },
    {
        name: "Twelve Days of Christmas - Traditional",
        date: null,
        audioUrl: null
    },
    {
        name: "Waiting - Jack Tempchin",
        date: null,
        audioUrl: null
    },
    {
        name: "We Didn't Start The Fire - Billy Joel",
        date: null,
        audioUrl: null
    },
    {
        name: "Why We Drink - Justin Moore",
        date: null,
        audioUrl: null
    },
    {
        name: "Wishlist - Pearl Jam",
        date: null,
        audioUrl: null
    },
    {
        name: "You're The Top - Ethel Merman and William Gaxton",
        date: null,
        audioUrl: null
    },
    {
        name: "Blacked Out - Chris Young",
        date: null,
        audioUrl: null
    },
    {
        name: "Like a Rolling Stone - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Satisfaction - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Imagine - John Lennon",
        date: null,
        audioUrl: null
    },
    {
        name: "What's Going On - Marvin Gaye",
        date: null,
        audioUrl: null
    },
    {
        name: "Respect - Aretha Franklin",
        date: null,
        audioUrl: null
    },
    {
        name: "Good Vibrations - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "Johnny B. Goode - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Hey Jude - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Smells Like Teen Spirit - Nirvana",
        date: null,
        audioUrl: null
    },
    {
        name: "What'd I Say - Ray Charles",
        date: null,
        audioUrl: null
    },
    {
        name: "My Generation - The Who",
        date: null,
        audioUrl: null
    },
    {
        name: "A Change Is Gonna Come - Sam Cooke",
        date: null,
        audioUrl: null
    },
    {
        name: "Yesterday - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Blowin' in the Wind - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "London Calling - The Clash",
        date: null,
        audioUrl: null
    },
    {
        name: "I Want to Hold Your Hand - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Purple Haze - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "Maybellene - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Hound Dog - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Let It Be - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Born to Run - Bruce Springsteen",
        date: null,
        audioUrl: null
    },
    {
        name: "Be My Baby - The Ronettes",
        date: null,
        audioUrl: null
    },
    {
        name: "In My Life - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "People Get Ready - The Impressions",
        date: null,
        audioUrl: null
    },
    {
        name: "God Only Knows - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "A Day in the Life - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Layla - Derek and the Dominos",
        date: null,
        audioUrl: null
    },
    {
        name: "(Sittin on) the Dock of the Bay - Otis Redding",
        date: null,
        audioUrl: null
    },
    {
        name: "Help! - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "I Walk the Line - Johnny Cash",
        date: null,
        audioUrl: null
    },
    {
        name: "Stairway To Heaven - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "Sympathy for the Devil - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "River Deep - Mountain High - Ike and Tina Turner",
        date: null,
        audioUrl: null
    },
    {
        name: "You've Lost That Lovin' Feelin' - The Righteous Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Light My Fire - The Doors",
        date: null,
        audioUrl: null
    },
    {
        name: "One - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "No Woman, No Cry - Bob Marley and the Wailers",
        date: null,
        audioUrl: null
    },
    {
        name: "Gimme Shelter - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "That'll Be the Day - Buddy Holly and the Crickets",
        date: null,
        audioUrl: null
    },
    {
        name: "Dancing in the Street - Martha and the Vandellas",
        date: null,
        audioUrl: null
    },
    {
        name: "The Weight - The Band",
        date: null,
        audioUrl: null
    },
    {
        name: "Waterloo Sunset - The Kinks",
        date: null,
        audioUrl: null
    },
    {
        name: "Tutti-Frutti - Little Richard",
        date: null,
        audioUrl: null
    },
    {
        name: "Georgia on My Mind - Ray Charles",
        date: null,
        audioUrl: null
    },
    {
        name: "Heartbreak Hotel - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Heroes - David Bowie",
        date: null,
        audioUrl: null
    },
    {
        name: "Bridge Over Troubled Water - Simon and Garfunkel",
        date: null,
        audioUrl: null
    },
    {
        name: "All Along the Watchtower - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "Hotel California - The Eagles",
        date: null,
        audioUrl: null
    },
    {
        name: "The Tracks of My Tears - Smokey Robinson and the Miracles",
        date: null,
        audioUrl: null
    },
    {
        name: "The Message - Grandmaster Flash and the Furious Five",
        date: null,
        audioUrl: null
    },
    {
        name: "When Doves Cry - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "Anarchy in the U.K. - The Sex Pistols",
        date: null,
        audioUrl: null
    },
    {
        name: "When a Man Loves a Woman - Percy Sledge",
        date: null,
        audioUrl: null
    },
    {
        name: "Louie Louie - The Kingsmen",
        date: null,
        audioUrl: null
    },
    {
        name: "Long Tall Sally - Little Richard",
        date: null,
        audioUrl: null
    },
    {
        name: "Whiter Shade of Pale - Procol Harum",
        date: null,
        audioUrl: null
    },
    {
        name: "Billie Jean - Michael Jackson",
        date: null,
        audioUrl: null
    },
    {
        name: "The Times They Are A-Changin' - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Let's Stay Together - Al Green",
        date: null,
        audioUrl: null
    },
    {
        name: "Whole Lotta Shakin' Goin On - Jerry Lee Lewis",
        date: null,
        audioUrl: null
    },
    {
        name: "Bo Diddley - Bo Diddley",
        date: null,
        audioUrl: null
    },
    {
        name: "For What It's Worth - Buffalo Springfield",
        date: null,
        audioUrl: null
    },
    {
        name: "She Loves You - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Sunshine of Your Love - Cream",
        date: null,
        audioUrl: null
    },
    {
        name: "Redemption Song - Bob Marley and the Wailers",
        date: null,
        audioUrl: null
    },
    {
        name: "Jailhouse Rock - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Tangled Up in Blue - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Crying - Roy Orbison",
        date: null,
        audioUrl: null
    },
    {
        name: "Walk On By - Dionne Warwick",
        date: null,
        audioUrl: null
    },
    {
        name: "California Girls - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "Papa's Got a Brand New Bag - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "Summertime Blues - Eddie Cochran",
        date: null,
        audioUrl: null
    },
    {
        name: "Superstition - Stevie Wonder",
        date: null,
        audioUrl: null
    },
    {
        name: "Whole Lotta Love - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "Strawberry Fields Forever - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Mystery Train - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "I Got You (I Feel Good) - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "Mr. Tambourine Man - The Byrds",
        date: null,
        audioUrl: null
    },
    {
        name: "I Heard It Through the Grapevine - Marvin Gaye",
        date: null,
        audioUrl: null
    },
    {
        name: "Blueberry Hill - Fats Domino",
        date: null,
        audioUrl: null
    },
    {
        name: "You Really Got Me - The Kinks",
        date: null,
        audioUrl: null
    },
    {
        name: "Norwegian Wood (This Bird Has Flown) - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Every Breath You Take - The Police",
        date: null,
        audioUrl: null
    },
    {
        name: "Crazy - Patsy Cline",
        date: null,
        audioUrl: null
    },
    {
        name: "Thunder Road - Bruce Springsteen",
        date: null,
        audioUrl: null
    },
    {
        name: "Ring of Fire - Johnny Cash",
        date: null,
        audioUrl: null
    },
    {
        name: "My Girl - The Temptations",
        date: null,
        audioUrl: null
    },
    {
        name: "California Dreamin' - The Mamas and The Papas",
        date: null,
        audioUrl: null
    },
    {
        name: "In the Still of the Nite - The Five Satins",
        date: null,
        audioUrl: null
    },
    {
        name: "Suspicious Minds - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Blitzkrieg Bop - Ramones",
        date: null,
        audioUrl: null
    },
    {
        name: "I Still Haven't Found What I'm Looking For - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "Good Golly, Miss Molly - Little Richard",
        date: null,
        audioUrl: null
    },
    {
        name: "Blue Suede Shoes - Carl Perkins",
        date: null,
        audioUrl: null
    },
    {
        name: "Great Balls of Fire - Jerry Lee Lewis",
        date: null,
        audioUrl: null
    },
    {
        name: "Roll Over Beethoven - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Love and Happiness - Al Green",
        date: null,
        audioUrl: null
    },
    {
        name: "Fortunate Son - Creedence Clearwater Revival",
        date: null,
        audioUrl: null
    },
    {
        name: "You Can't Always Get What You Want - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Voodoo Child (Slight Return) - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "Be-Bop-A-Lula - Gene Vincent and His Blue Caps",
        date: null,
        audioUrl: null
    },
    {
        name: "Hot Stuff - Donna Summer",
        date: null,
        audioUrl: null
    },
    {
        name: "Living for the City - Stevie Wonder",
        date: null,
        audioUrl: null
    },
    {
        name: "The Boxer - Simon and Garfunkel",
        date: null,
        audioUrl: null
    },
    {
        name: "Mr. Tambourine Man - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Not Fade Away - Buddy Holly and the Crickets",
        date: null,
        audioUrl: null
    },
    {
        name: "Little Red Corvette - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "Brown Eyed Girl - Van Morrison",
        date: null,
        audioUrl: null
    },
    {
        name: "I've Been Loving You Too Long (to Stop Now) - Otis Redding",
        date: null,
        audioUrl: null
    },
    {
        name: "I'm So Lonesome I Could Cry - Hank Williams",
        date: null,
        audioUrl: null
    },
    {
        name: "That's All Right - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Up on the Roof - The Drifters",
        date: null,
        audioUrl: null
    },
    {
        name: "Da Doo Ron Ron (When He Walked Me Home) - The Crystals",
        date: null,
        audioUrl: null
    },
    {
        name: "You Send Me - Sam Cooke",
        date: null,
        audioUrl: null
    },
    {
        name: "Honky Tonk Women - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Take Me to the River  - Al Green",
        date: null,
        audioUrl: null
    },
    {
        name: "Shout (Parts 1 and 2)] - The Isley Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Go Your Own Way - Fleetwood Mac",
        date: null,
        audioUrl: null
    },
    {
        name: "I Want You Back - The Jackson 5",
        date: null,
        audioUrl: null
    },
    {
        name: "Stand By Me - Ben E. King",
        date: null,
        audioUrl: null
    },
    {
        name: "House of the Rising Sun - The Animals",
        date: null,
        audioUrl: null
    },
    {
        name: "It's a Man's Man's Man's World - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "Jumpin' Jack Flash - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Will You Love Me Tomorrow - The Shirelles",
        date: null,
        audioUrl: null
    },
    {
        name: "Shake, Rattle & Roll - Big Joe Turner",
        date: null,
        audioUrl: null
    },
    {
        name: "Changes - David Bowie",
        date: null,
        audioUrl: null
    },
    {
        name: "Rock & Roll Music - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Born to Be Wild - Steppenwolf",
        date: null,
        audioUrl: null
    },
    {
        name: "Maggie May - Rod Stewart",
        date: null,
        audioUrl: null
    },
    {
        name: "With or Without You - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "Who Do You Love - Bo Diddley",
        date: null,
        audioUrl: null
    },
    {
        name: "Won't Get Fooled Again - The Who",
        date: null,
        audioUrl: null
    },
    {
        name: "In the Midnight Hour - Wilson Pickett",
        date: null,
        audioUrl: null
    },
    {
        name: "While My Guitar Gently Weeps - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Your Song - Elton John",
        date: null,
        audioUrl: null
    },
    {
        name: "Eleanor Rigby - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Family Affair - Sly and the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "I Saw Her Standing There - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Kashmir - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "All I Have to Do Is Dream - The Everly Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Please, Please, Please - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "Purple Rain - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "I Wanna Be Sedated - The Ramones",
        date: null,
        audioUrl: null
    },
    {
        name: "Everyday People - Sly and the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "Rock Lobster - The B-52's",
        date: null,
        audioUrl: null
    },
    {
        name: "Lust for Life - Iggy Pop",
        date: null,
        audioUrl: null
    },
    {
        name: "Me and Bobby McGee - Janis Joplin",
        date: null,
        audioUrl: null
    },
    {
        name: "Cathy's Clown - The Everly Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Eight Miles High - The Byrds",
        date: null,
        audioUrl: null
    },
    {
        name: "Earth Angel - The Penguins",
        date: null,
        audioUrl: null
    },
    {
        name: "Foxey Lady - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "A Hard Day's Night - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Rave On - Buddy Holly and the Crickets",
        date: null,
        audioUrl: null
    },
    {
        name: "Proud Mary - Creedence Clearwater Revival",
        date: null,
        audioUrl: null
    },
    {
        name: "The Sounds of Silence - Simon and Garfunkel",
        date: null,
        audioUrl: null
    },
    {
        name: "I Only Have Eyes for You - The Flamingos",
        date: null,
        audioUrl: null
    },
    {
        name: "(We're Gonna) Rock Around the Clock - Bill Haley and His Comets",
        date: null,
        audioUrl: null
    },
    {
        name: "I'm Waiting for the Man - The Velvet Underground",
        date: null,
        audioUrl: null
    },
    {
        name: "Bring the Noise - Public Enemy",
        date: null,
        audioUrl: null
    },
    {
        name: "I Can't Stop Loving You - Ray Charles",
        date: null,
        audioUrl: null
    },
    {
        name: "Nothing Compares 2 U - Sinead O'Connor",
        date: null,
        audioUrl: null
    },
    {
        name: "Bohemian Rhapsody - Queen",
        date: null,
        audioUrl: null
    },
    {
        name: "Folsom Prison Blues - Johnny Cash",
        date: null,
        audioUrl: null
    },
    {
        name: "Fast Car - Tracy Chapman",
        date: null,
        audioUrl: null
    },
    {
        name: "Lose Yourself  - Eminem",
        date: null,
        audioUrl: null
    },
    {
        name: "Let's Get It On - Marvin Gaye",
        date: null,
        audioUrl: null
    },
    {
        name: "Papa Was a Rollin' Stone - The Temptations",
        date: null,
        audioUrl: null
    },
    {
        name: "Losing My Religion - R.E.M.",
        date: null,
        audioUrl: null
    },
    {
        name: "Both Sides Now - Joni Mitchell",
        date: null,
        audioUrl: null
    },
    {
        name: "Dancing Queen - Abba",
        date: null,
        audioUrl: null
    },
    {
        name: "Dream On - Aerosmith",
        date: null,
        audioUrl: null
    },
    {
        name: "God Save the Queen - The Sex Pistols",
        date: null,
        audioUrl: null
    },
    {
        name: "Paint It, Black - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "I Fought the Law - The Bobby Fuller Four",
        date: null,
        audioUrl: null
    },
    {
        name: "Don't Worry Baby - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "Free Fallin' - Tom Petty",
        date: null,
        audioUrl: null
    },
    {
        name: "September Gurls - Big Star",
        date: null,
        audioUrl: null
    },
    {
        name: "Love Will Tear Us Apart - Joy Division",
        date: null,
        audioUrl: null
    },
    {
        name: "Hey Ya! - Outkast",
        date: null,
        audioUrl: null
    },
    {
        name: "Green Onions - Booker T. and the MG's",
        date: null,
        audioUrl: null
    },
    {
        name: "Save the Last Dance for Me - The Drifters",
        date: null,
        audioUrl: null
    },
    {
        name: "The Thrill Is Gone - B.B. King",
        date: null,
        audioUrl: null
    },
    {
        name: "Please Please Me - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Desolation Row - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "I Never Loved a Man (The Way I Love You) - Aretha Franklin",
        date: null,
        audioUrl: null
    },
    {
        name: "Back in Black - AC/DC",
        date: null,
        audioUrl: null
    },
    {
        name: "Who'll Stop the Rain - Creedence Clearwater Revival",
        date: null,
        audioUrl: null
    },
    {
        name: "Stayin' Alive - The Bee Gees",
        date: null,
        audioUrl: null
    },
    {
        name: "Knocking on Heaven's Door - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Free Bird - Lynyrd Skynyrd",
        date: null,
        audioUrl: null
    },
    {
        name: "Wichita Lineman - Glen Campbell",
        date: null,
        audioUrl: null
    },
    {
        name: "There Goes My Baby - The Drifters",
        date: null,
        audioUrl: null
    },
    {
        name: "Peggy Sue - Buddy Holly",
        date: null,
        audioUrl: null
    },
    {
        name: "Maybe - The Chantels",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Child O' Mine - Guns N' Roses",
        date: null,
        audioUrl: null
    },
    {
        name: "Don't Be Cruel - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Hey Joe - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "Flash Light - Parliament",
        date: null,
        audioUrl: null
    },
    {
        name: "Loser - Beck",
        date: null,
        audioUrl: null
    },
    {
        name: "Bizarre Love Triangle - New Order",
        date: null,
        audioUrl: null
    },
    {
        name: "Come Together - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Positively 4th Street - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Try a Little Tenderness - Otis Redding",
        date: null,
        audioUrl: null
    },
    {
        name: "Lean On Me - Bill Withers",
        date: null,
        audioUrl: null
    },
    {
        name: "Reach Out, I'll Be There - The Four Tops",
        date: null,
        audioUrl: null
    },
    {
        name: "Bye Bye Love - The Everly Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Gloria - Them",
        date: null,
        audioUrl: null
    },
    {
        name: "In My Room - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "96 Tears - ? and the Mysterians",
        date: null,
        audioUrl: null
    },
    {
        name: "Caroline, No - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "1999 - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "Your Cheatin' Heart - Hank Williams",
        date: null,
        audioUrl: null
    },
    {
        name: "Rockin' in the Free World - Neil Young",
        date: null,
        audioUrl: null
    },
    {
        name: "Sh-Boom - The Chords",
        date: null,
        audioUrl: null
    },
    {
        name: "Do You Believe in Magic - The Lovin' Spoonful",
        date: null,
        audioUrl: null
    },
    {
        name: "Jolene - Dolly Parton",
        date: null,
        audioUrl: null
    },
    {
        name: "Boom Boom - John Lee Hooker",
        date: null,
        audioUrl: null
    },
    {
        name: "Spoonful - Howlin' Wolf",
        date: null,
        audioUrl: null
    },
    {
        name: "Walk Away Renee - The Left Banke",
        date: null,
        audioUrl: null
    },
    {
        name: "Walk on the Wild Side - Lou Reed",
        date: null,
        audioUrl: null
    },
    {
        name: "Oh, Pretty Woman - Roy Orbison",
        date: null,
        audioUrl: null
    },
    {
        name: "Dance to the Music - Sly and the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "Good Times - Chic",
        date: null,
        audioUrl: null
    },
    {
        name: "Hoochie Coochie Man - Muddy Waters",
        date: null,
        audioUrl: null
    },
    {
        name: "Moondance - Van Morrison",
        date: null,
        audioUrl: null
    },
    {
        name: "Fire and Rain - James Taylor",
        date: null,
        audioUrl: null
    },
    {
        name: "Should I Stay or Should I Go - The Clash",
        date: null,
        audioUrl: null
    },
    {
        name: "Mannish Boy - Muddy Waters",
        date: null,
        audioUrl: null
    },
    {
        name: "Just Like a Woman - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Sexual Healing - Marvin Gaye",
        date: null,
        audioUrl: null
    },
    {
        name: "Only the Lonely - Roy Orbison",
        date: null,
        audioUrl: null
    },
    {
        name: "We Gotta Get Out of This Place - The Animals",
        date: null,
        audioUrl: null
    },
    {
        name: "I'll Feel a Whole Lot Better - The Byrds",
        date: null,
        audioUrl: null
    },
    {
        name: "I Got a Woman - Ray Charles",
        date: null,
        audioUrl: null
    },
    {
        name: "Everyday - Buddy Holly and the Crickets",
        date: null,
        audioUrl: null
    },
    {
        name: "Planet Rock - Afrika Bambaataa and the Soul Sonic Force",
        date: null,
        audioUrl: null
    },
    {
        name: "I Fall to Pieces - Patsy Cline",
        date: null,
        audioUrl: null
    },
    {
        name: "The Wanderer - Dion",
        date: null,
        audioUrl: null
    },
    {
        name: "Son of a Preacher Man - Dusty Springfield",
        date: null,
        audioUrl: null
    },
    {
        name: "Stand! - Sly and the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "Rocket Man - Elton John",
        date: null,
        audioUrl: null
    },
    {
        name: "Love Shack - The B-52's",
        date: null,
        audioUrl: null
    },
    {
        name: "Gimme Some Lovin' - The Spencer Davis Group",
        date: null,
        audioUrl: null
    },
    {
        name: "The Night They Drove Old Dixie Down - The Band",
        date: null,
        audioUrl: null
    },
    {
        name: "(Your Love Keeps Lifting Me) Higher and Higher - Jackie Wilson",
        date: null,
        audioUrl: null
    },
    {
        name: "Hot Fun in the Summertime - Sly and the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "Rappers Delight - The Sugarhill Gang",
        date: null,
        audioUrl: null
    },
    {
        name: "Chain of Fools - Aretha Franklin",
        date: null,
        audioUrl: null
    },
    {
        name: "Paranoid - Black Sabbath",
        date: null,
        audioUrl: null
    },
    {
        name: "Mack the Knife - Bobby Darin",
        date: null,
        audioUrl: null
    },
    {
        name: "Money Honey - The Drifters",
        date: null,
        audioUrl: null
    },
    {
        name: "All the Young Dudes - Mott the Hoople",
        date: null,
        audioUrl: null
    },
    {
        name: "Highway to Hell - AC/DC",
        date: null,
        audioUrl: null
    },
    {
        name: "Heart of Glass - Blondie",
        date: null,
        audioUrl: null
    },
    {
        name: "Paranoid Android - Radiohead",
        date: null,
        audioUrl: null
    },
    {
        name: "Wild Thing - The Troggs",
        date: null,
        audioUrl: null
    },
    {
        name: "I Can See for Miles - The Who",
        date: null,
        audioUrl: null
    },
    {
        name: "Hallelujah - Jeff Buckley",
        date: null,
        audioUrl: null
    },
    {
        name: "Oh, What a Night - The Dells",
        date: null,
        audioUrl: null
    },
    {
        name: "Higher Ground - Stevie Wonder",
        date: null,
        audioUrl: null
    },
    {
        name: "Ooo Baby Baby - Smokey Robinson",
        date: null,
        audioUrl: null
    },
    {
        name: "He's a Rebel - The Crystals",
        date: null,
        audioUrl: null
    },
    {
        name: "Sail Away - Randy Newman",
        date: null,
        audioUrl: null
    },
    {
        name: "Tighten Up - Archie Bell and the Drells",
        date: null,
        audioUrl: null
    },
    {
        name: "Walking in the Rain - The Ronettes",
        date: null,
        audioUrl: null
    },
    {
        name: "Personality Crisis - New York Dolls",
        date: null,
        audioUrl: null
    },
    {
        name: "Sunday Bloody Sunday - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "Roadrunner - The Modern Lovers",
        date: null,
        audioUrl: null
    },
    {
        name: "He Stopped Loving Her Today - George Jones",
        date: null,
        audioUrl: null
    },
    {
        name: "Sloop John B - The Beach Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Little Sixteen - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Something - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Somebody to Love - Jefferson Airplane",
        date: null,
        audioUrl: null
    },
    {
        name: "Born in the U.S.A. - Bruce Springsteen",
        date: null,
        audioUrl: null
    },
    {
        name: "I'll Take You There - The Staple Singers",
        date: null,
        audioUrl: null
    },
    {
        name: "Ziggy Stardust - David Bowie",
        date: null,
        audioUrl: null
    },
    {
        name: "Pictures of You - The Cure",
        date: null,
        audioUrl: null
    },
    {
        name: "Chapel of Love - The Dixie Cups",
        date: null,
        audioUrl: null
    },
    {
        name: "Ain't No Sunshine - Bill Withers",
        date: null,
        audioUrl: null
    },
    {
        name: "You Are the Sunshine of My Life - Stevie Wonder",
        date: null,
        audioUrl: null
    },
    {
        name: "Help Me - Joni Mitchell",
        date: null,
        audioUrl: null
    },
    {
        name: "Call Me - Blondie",
        date: null,
        audioUrl: null
    },
    {
        name: "(What's So Funny 'Bout) Peace Love and Understanding? - Elvis Costello and the Attractions",
        date: null,
        audioUrl: null
    },
    {
        name: "Smoke Stack Lightning - Howlin' Wolf",
        date: null,
        audioUrl: null
    },
    {
        name: "Summer Babe - Pavement",
        date: null,
        audioUrl: null
    },
    {
        name: "Walk This Way - Run-DMC",
        date: null,
        audioUrl: null
    },
    {
        name: "Money (That's What I Want) - Barrett Strong",
        date: null,
        audioUrl: null
    },
    {
        name: "Can't Buy Me Love - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Stan - Eminem featuring Dido",
        date: null,
        audioUrl: null
    },
    {
        name: "She's Not There - The Zombies",
        date: null,
        audioUrl: null
    },
    {
        name: "Train in Vain - The Clash",
        date: null,
        audioUrl: null
    },
    {
        name: "Tired of Being Alone - Al Green",
        date: null,
        audioUrl: null
    },
    {
        name: "Black Dog - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "Street Fighting Man - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Get Up, Stand Up - Bob Marley and the Wailers",
        date: null,
        audioUrl: null
    },
    {
        name: "Heart of Gold - Neil Young",
        date: null,
        audioUrl: null
    },
    {
        name: "One Way or Another - Blondie",
        date: null,
        audioUrl: null
    },
    {
        name: "Sign 'O' the Times - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "Like a Prayer - Madonna",
        date: null,
        audioUrl: null
    },
    {
        name: "Do Ya Think I'm Sexy? - Rod Stewart",
        date: null,
        audioUrl: null
    },
    {
        name: "Blue Eyes Crying In the Rain - Willie Nelson",
        date: null,
        audioUrl: null
    },
    {
        name: "Ruby Tuesday - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "With a Little Help From My Friends - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Say It Loud, I'm Black and Proud - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "That's Entertainment - The Jam",
        date: null,
        audioUrl: null
    },
    {
        name: "Why Do Fools Fall In Love - Frankie Lymon and the Teenagers",
        date: null,
        audioUrl: null
    },
    {
        name: "Lonely Teardrops - Jackie Wilson",
        date: null,
        audioUrl: null
    },
    {
        name: "What's Love Got To Do With It - Tina Turner",
        date: null,
        audioUrl: null
    },
    {
        name: "Iron Man - Black Sabbath",
        date: null,
        audioUrl: null
    },
    {
        name: "Wake Up Little Susie - The Everly Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "In Dreams - Roy Orbison",
        date: null,
        audioUrl: null
    },
    {
        name: "I Put a Spell on You - Screamin' Jay Hawkins",
        date: null,
        audioUrl: null
    },
    {
        name: "Comfortably Numb - Pink Floyd",
        date: null,
        audioUrl: null
    },
    {
        name: "Don't Let Me Be Misunderstood - The Animals",
        date: null,
        audioUrl: null
    },
    {
        name: "Wish You Were Here - Pink Floyd",
        date: null,
        audioUrl: null
    },
    {
        name: "Many Rivers to Cross - Jimmy Cliff",
        date: null,
        audioUrl: null
    },
    {
        name: "Alison - Elvis Costello",
        date: null,
        audioUrl: null
    },
    {
        name: "School's Out - Alice Cooper",
        date: null,
        audioUrl: null
    },
    {
        name: "Heartbreaker - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "Cortez the Killer - Neil Young",
        date: null,
        audioUrl: null
    },
    {
        name: "Fight the Power - Public Enemy",
        date: null,
        audioUrl: null
    },
    {
        name: "Dancing Barefoot - Patti Smith Group",
        date: null,
        audioUrl: null
    },
    {
        name: "Baby Love - The Supremes",
        date: null,
        audioUrl: null
    },
    {
        name: "Good Lovin' - The Young Rascals",
        date: null,
        audioUrl: null
    },
    {
        name: "Get Up (I Feel Like Being a) Sex Machine - James Brown",
        date: null,
        audioUrl: null
    },
    {
        name: "For Your Precious Love - Jerry Butler and the Impressions",
        date: null,
        audioUrl: null
    },
    {
        name: "The End - The Doors",
        date: null,
        audioUrl: null
    },
    {
        name: "That's the Way of the World - Earth, Wind and Fire",
        date: null,
        audioUrl: null
    },
    {
        name: "We Will Rock You - Queen",
        date: null,
        audioUrl: null
    },
    {
        name: "I Can't Make You Love Me - Bonnie Raitt",
        date: null,
        audioUrl: null
    },
    {
        name: "Subterranean Homesick Blues - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Spirit in the Sky - Norman Greenbaum",
        date: null,
        audioUrl: null
    },
    {
        name: "Wild Horses - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Jane - The Velvet Underground",
        date: null,
        audioUrl: null
    },
    {
        name: "Walk This Way - Aerosmith",
        date: null,
        audioUrl: null
    },
    {
        name: "Beat It - Michael Jackson",
        date: null,
        audioUrl: null
    },
    {
        name: "Maybe I'm Amazed - Paul McCartney",
        date: null,
        audioUrl: null
    },
    {
        name: "You Keep Me Hanging On - The Supremes",
        date: null,
        audioUrl: null
    },
    {
        name: "Baba O'Riley - The Who",
        date: null,
        audioUrl: null
    },
    {
        name: "The Harder They Come - Jimmy Cliff",
        date: null,
        audioUrl: null
    },
    {
        name: "Runaround Sue - Dion",
        date: null,
        audioUrl: null
    },
    {
        name: "Jim Dandy - Lavern Baker",
        date: null,
        audioUrl: null
    },
    {
        name: "Piece of My Heart - Big Brother and the Holding Company",
        date: null,
        audioUrl: null
    },
    {
        name: "La Bamba - Ritchie Valens",
        date: null,
        audioUrl: null
    },
    {
        name: "California Love - Dr. Dre and 2Pac",
        date: null,
        audioUrl: null
    },
    {
        name: "Candle in the Wind - Elton John",
        date: null,
        audioUrl: null
    },
    {
        name: "That Lady (Part 1 and 2) - The Isley Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Spanish Harlem - Ben E. King",
        date: null,
        audioUrl: null
    },
    {
        name: "The Locomotion - Little Eva",
        date: null,
        audioUrl: null
    },
    {
        name: "The Great Pretender - The Platters",
        date: null,
        audioUrl: null
    },
    {
        name: "All Shook Up - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Tears in Heaven - Eric Clapton",
        date: null,
        audioUrl: null
    },
    {
        name: "Watching the Detectives - Elvis Costello",
        date: null,
        audioUrl: null
    },
    {
        name: "Bad Moon Rising - Creedence Clearwater Revival",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Dreams (Are Made of This) - Eurythmics",
        date: null,
        audioUrl: null
    },
    {
        name: "Little Wing - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "Nowhere to Run - Martha and the Vandellas",
        date: null,
        audioUrl: null
    },
    {
        name: "Got My Mojo Working - Muddy Waters",
        date: null,
        audioUrl: null
    },
    {
        name: "Killing Me Softly With His Song - Roberta Flack",
        date: null,
        audioUrl: null
    },
    {
        name: "Complete Control - The Clash",
        date: null,
        audioUrl: null
    },
    {
        name: "All You Need Is Love - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "The Letter - The Box Tops",
        date: null,
        audioUrl: null
    },
    {
        name: "Highway 61 Revisited - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "Unchained Melody - The Righteous Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "How Deep Is Your Love - The Bee Gees",
        date: null,
        audioUrl: null
    },
    {
        name: "White Room - Cream",
        date: null,
        audioUrl: null
    },
    {
        name: "Personal Jesus - Depeche Mode",
        date: null,
        audioUrl: null
    },
    {
        name: "I'm A Man - Bo Diddley",
        date: null,
        audioUrl: null
    },
    {
        name: "The Wind Cries Mary - Jimi Hendrix",
        date: null,
        audioUrl: null
    },
    {
        name: "I Can't Explain - The Who",
        date: null,
        audioUrl: null
    },
    {
        name: "Marquee Moon - Television",
        date: null,
        audioUrl: null
    },
    {
        name: "Wonderful World - Sam Cooke",
        date: null,
        audioUrl: null
    },
    {
        name: "Brown Eyed Handsome Man - Chuck Berry",
        date: null,
        audioUrl: null
    },
    {
        name: "Another Brick in the Wall Part 2 - Pink Floyd",
        date: null,
        audioUrl: null
    },
    {
        name: "Fake Plastic Trees - Radiohead",
        date: null,
        audioUrl: null
    },
    {
        name: "Hit the Road Jack - Ray Charles",
        date: null,
        audioUrl: null
    },
    {
        name: "Pride (In The Name of Love) - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "Radio Free Europe - R.E.M.",
        date: null,
        audioUrl: null
    },
    {
        name: "Goodbye Yellow Brick Road - Elton John",
        date: null,
        audioUrl: null
    },
    {
        name: "Tell It Like It Is - Aaron Neville",
        date: null,
        audioUrl: null
    },
    {
        name: "Bitter Sweet Symphony - The Verve",
        date: null,
        audioUrl: null
    },
    {
        name: "Whipping Post - The Allman Brothers Band",
        date: null,
        audioUrl: null
    },
    {
        name: "Ticket to Ride - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Ohio - Crosby, Stills, Nash and Young",
        date: null,
        audioUrl: null
    },
    {
        name: "I Know You Got Soul - Eric B and Rakim",
        date: null,
        audioUrl: null
    },
    {
        name: "Tiny Dancer - Elton John",
        date: null,
        audioUrl: null
    },
    {
        name: "Roxanne - The Police",
        date: null,
        audioUrl: null
    },
    {
        name: "Just My Imagination - The Temptations",
        date: null,
        audioUrl: null
    },
    {
        name: "Baby I Need Your Loving - The Four Tops",
        date: null,
        audioUrl: null
    },
    {
        name: "Band of Gold - Freda Payne",
        date: null,
        audioUrl: null
    },
    {
        name: "O-o-h Child - The Five Stairsteps",
        date: null,
        audioUrl: null
    },
    {
        name: "Summer in the City - The Lovin' Spoonful",
        date: null,
        audioUrl: null
    },
    {
        name: "Can't Help Falling in Love - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Remember (Walkin' in the Sand) - The Shangri-Las",
        date: null,
        audioUrl: null
    },
    {
        name: "Thirteen - Big Star",
        date: null,
        audioUrl: null
    },
    {
        name: "(Don't Fear) the Reaper - Blue Oyster Cult",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Home Alabama - Lynyrd Skynyrd",
        date: null,
        audioUrl: null
    },
    {
        name: "Enter Sandman - Metallica",
        date: null,
        audioUrl: null
    },
    {
        name: "Kicks - Paul Revere and the Raiders",
        date: null,
        audioUrl: null
    },
    {
        name: "Tonight's the Night - The Shirelles",
        date: null,
        audioUrl: null
    },
    {
        name: "Thank You (Falettinme Be Mice Elf Agin) - Sly & the Family Stone",
        date: null,
        audioUrl: null
    },
    {
        name: "C'mon Everybody - Eddie Cochran",
        date: null,
        audioUrl: null
    },
    {
        name: "Visions of Johanna - Bob Dylan",
        date: null,
        audioUrl: null
    },
    {
        name: "We've Only Just Begun - The Carpenters",
        date: null,
        audioUrl: null
    },
    {
        name: "I Believe I Can Fly - R. Kelly",
        date: null,
        audioUrl: null
    },
    {
        name: "In Bloom - Nirvana",
        date: null,
        audioUrl: null
    },
    {
        name: "Sweet Emotion - Aerosmith",
        date: null,
        audioUrl: null
    },
    {
        name: "Crossroads - Cream",
        date: null,
        audioUrl: null
    },
    {
        name: "Monkey Gone to Heaven - Pixies",
        date: null,
        audioUrl: null
    },
    {
        name: "I Feel Love - Donna Summer",
        date: null,
        audioUrl: null
    },
    {
        name: "Ode to Billie Joe - Bobbie Gentry",
        date: null,
        audioUrl: null
    },
    {
        name: "The Girl Can't Help It - Little Richard",
        date: null,
        audioUrl: null
    },
    {
        name: "Young Blood - The Coasters",
        date: null,
        audioUrl: null
    },
    {
        name: "I Can't Help Myself - The Four Tops",
        date: null,
        audioUrl: null
    },
    {
        name: "The Boys of Summer - Don Henley",
        date: null,
        audioUrl: null
    },
    {
        name: "Fuck tha Police - N.W.A.",
        date: null,
        audioUrl: null
    },
    {
        name: "Suite: Judy Blue Eyes - Crosby, Stills and Nash",
        date: null,
        audioUrl: null
    },
    {
        name: "Nuthin' But a 'G' Thang - Dr. Dre",
        date: null,
        audioUrl: null
    },
    {
        name: "It's Your Thing - The Isley Brothers",
        date: null,
        audioUrl: null
    },
    {
        name: "Piano Man - Billy Joel",
        date: null,
        audioUrl: null
    },
    {
        name: "Lola - The Kinks",
        date: null,
        audioUrl: null
    },
    {
        name: "Blue Suede Shoes - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "Tumbling Dice - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "William, It Was Really Nothing - The Smiths",
        date: null,
        audioUrl: null
    },
    {
        name: "Smoke on the Water - Deep Purple",
        date: null,
        audioUrl: null
    },
    {
        name: "New Year's Day - U2",
        date: null,
        audioUrl: null
    },
    {
        name: "Devil With a Blue Dress On - Mitch Ryder and the Detroit Wheels",
        date: null,
        audioUrl: null
    },
    {
        name: "Everybody Needs Somebody to Love - Solomon Burke",
        date: null,
        audioUrl: null
    },
    {
        name: "White Man in Hammersmith Palais - The Clash",
        date: null,
        audioUrl: null
    },
    {
        name: "Ain't It a Shame - Fats Domino",
        date: null,
        audioUrl: null
    },
    {
        name: "Midnight Train to Georgia - Gladys Knight and the Pips",
        date: null,
        audioUrl: null
    },
    {
        name: "Ramble On - Led Zeppelin",
        date: null,
        audioUrl: null
    },
    {
        name: "Mustang Sally - Wilson Pickett",
        date: null,
        audioUrl: null
    },
    {
        name: "Beast of Burden - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Alone Again Or - Love",
        date: null,
        audioUrl: null
    },
    {
        name: "Love Me Tender - Elvis Presley",
        date: null,
        audioUrl: null
    },
    {
        name: "I Wanna Be Your Dog - The Stooges",
        date: null,
        audioUrl: null
    },
    {
        name: "Pink Houses - John Cougar Mellencamp",
        date: null,
        audioUrl: null
    },
    {
        name: "Push It - Salt-n-Pepa",
        date: null,
        audioUrl: null
    },
    {
        name: "Come Go With Me - The Del-Vikings",
        date: null,
        audioUrl: null
    },
    {
        name: "Keep a Knockin' - Little Richard",
        date: null,
        audioUrl: null
    },
    {
        name: "I Shot the Sheriff - Bob Marley and the Whailers",
        date: null,
        audioUrl: null
    },
    {
        name: "I Got You Babe - Sonny and Cher",
        date: null,
        audioUrl: null
    },
    {
        name: "Come As You Are - Nirvana",
        date: null,
        audioUrl: null
    },
    {
        name: "Pressure Drop - Toot and the Maytals",
        date: null,
        audioUrl: null
    },
    {
        name: "Leader of the Pack - The Shangri-Las",
        date: null,
        audioUrl: null
    },
    {
        name: "Heroin - The Velvet Underground",
        date: null,
        audioUrl: null
    },
    {
        name: "Penny Lane - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "By the Time I Get to Phoenix - Glem Campbell",
        date: null,
        audioUrl: null
    },
    {
        name: "The Twist - Chubby Checker",
        date: null,
        audioUrl: null
    },
    {
        name: "Cupid - Sam Cooke",
        date: null,
        audioUrl: null
    },
    {
        name: "Paradise City - Guns n' Roses",
        date: null,
        audioUrl: null
    },
    {
        name: "My Sweet Lord - George Harrison",
        date: null,
        audioUrl: null
    },
    {
        name: "All Apologies - Nirvana",
        date: null,
        audioUrl: null
    },
    {
        name: "Stagger Lee - Lloyd Price",
        date: null,
        audioUrl: null
    },
    {
        name: "Sheena Is a Punk Rocker - Ramones",
        date: null,
        audioUrl: null
    },
    {
        name: "Soul Man - Sam and Dave",
        date: null,
        audioUrl: null
    },
    {
        name: "Rollin' Stone - Muddy Waters",
        date: null,
        audioUrl: null
    },
    {
        name: "One Fine Day - The Chiffons",
        date: null,
        audioUrl: null
    },
    {
        name: "Kiss - Prince",
        date: null,
        audioUrl: null
    },
    {
        name: "Respect Yourself - The Staple Singers",
        date: null,
        audioUrl: null
    },
    {
        name: "Rain - The Beatles",
        date: null,
        audioUrl: null
    },
    {
        name: "Standing in the Shadows of Love - The Four Tops",
        date: null,
        audioUrl: null
    },
    {
        name: "Surrender - Cheap Trick",
        date: null,
        audioUrl: null
    },
    {
        name: "Runaway - Del Shannon",
        date: null,
        audioUrl: null
    },
    {
        name: "Welcome to the Jungle - Guns n' Roses",
        date: null,
        audioUrl: null
    },
    {
        name: "Search and Destroy - The Stooges",
        date: null,
        audioUrl: null
    },
    {
        name: "It's Too Late - Carole King",
        date: null,
        audioUrl: null
    },
    {
        name: "Free Man in Paris - Joni Mitchell",
        date: null,
        audioUrl: null
    },
    {
        name: "On the Road Again - Willie Nelson",
        date: null,
        audioUrl: null
    },
    {
        name: "Where Did Our Love Go - The Supremes",
        date: null,
        audioUrl: null
    },
    {
        name: "Do Right Woman, Do Right Man - Aretha Franklin",
        date: null,
        audioUrl: null
    },
    {
        name: "One Nation Under a Groove - Funkadelic",
        date: null,
        audioUrl: null
    },
    {
        name: "Sabotage - Beastie Boys",
        date: null,
        audioUrl: null
    },
    {
        name: "I Want to Know What Love Is - Foreigner",
        date: null,
        audioUrl: null
    },
    {
        name: "Super Freak - Rick James",
        date: null,
        audioUrl: null
    },
    {
        name: "White Rabbit - Jefferson Airplane",
        date: null,
        audioUrl: null
    },
    {
        name: "Lady Marmalade - Labelle",
        date: null,
        audioUrl: null
    },
    {
        name: "Into the Mystic - Van Morrison",
        date: null,
        audioUrl: null
    },
    {
        name: "Young Americans - David Bowie",
        date: null,
        audioUrl: null
    },
    {
        name: "I'm Eighteen - Alice Cooper",
        date: null,
        audioUrl: null
    },
    {
        name: "Just Like Heaven - The Cure",
        date: null,
        audioUrl: null
    },
    {
        name: "I Love Rock 'N Roll - Joan Jett",
        date: "15-08-2023",
        audioUrl: null
    },
    {
        name: "Graceland - Paul Simon",
        date: null,
        audioUrl: null
    },
    {
        name: "How Soon Is Now? - The Smiths",
        date: null,
        audioUrl: null
    },
    {
        name: "Under the Boardwalk - The Drifters",
        date: null,
        audioUrl: null
    },
    {
        name: "Rhiannon (Will You Ever Win) - Fleetwood Mac",
        date: null,
        audioUrl: null
    },
    {
        name: "I Will Survive - Gloria Gaynor",
        date: null,
        audioUrl: null
    },
    {
        name: "Brown Sugar - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "You Don't Have to Say You Love Me - Dusty Springfield",
        date: null,
        audioUrl: null
    },
    {
        name: "Running on Empty - Jackson Browne",
        date: null,
        audioUrl: null
    },
    {
        name: "Then He Kissed Me - The Crystals",
        date: null,
        audioUrl: null
    },
    {
        name: "Desperado - The Eagles",
        date: null,
        audioUrl: null
    },
    {
        name: "Shop Around - Smokey Robinson and the Miracles",
        date: null,
        audioUrl: null
    },
    {
        name: "Miss You - The Rolling Stones",
        date: null,
        audioUrl: null
    },
    {
        name: "Buddy Holly - Weezer",
        date: null,
        audioUrl: null
    },
    {
        name: "Rainy Night in Georgia - Brook Benton",
        date: null,
        audioUrl: null
    },
    {
        name: "The Boys Are Back in Town - Thin Lizzy",
        date: null,
        audioUrl: null
    },
    {
        name: "More Than a Feeling - Boston",
        date: null,
        audioUrl: null
    },
    {
        name: "You're Beautiful - James Blunt",
        date: "14-08-2023",
        audioUrl: null
    },
    {
        name: "Perfect - Ed Sheeran",
        date: "16-08-2023",
        audioUrl: null
    },
    {
        name: "Remember Me - Robert Lopez and Kristen Anderson-Lopez",
        date: "17-08-2023",
        audioUrl: null
    },
    {
        name: "10 Things I Hate About You - Leah Kate",
        date: null,
        audioUrl: null
    },
    {
        name: "50 Ways To Leave Your Lover - Paul Simon",
        date: null,
        audioUrl: null
    },
    {
        name: "Ode to Sleep - Twenty-One Pilots",
        date: null,
        audioUrl: null
    },
    {
        name: "Car Radio - Twenty-One Pilots",
        date: null,
        audioUrl: null
    },
    {
        name: "Take on Me - A-ha",
        date: "23-04-2025",
        audioUrl: null
    },
    {
        name: "That's What Makes you Beautiful - One Direction",
        date: "24-04-2025",
        audioUrl: null
    },
    {
        name: "The Time of My Life - Bill Medley & Jennifer Warnes",
        date: "25-04-2025",
        audioUrl: null
    },
    {
        name: "The Winner Takes It All - ABBA",
        date: "26-04-2025",
        audioUrl: null
    },
    {
        name: "Over the Rainbow - Harold Arlen",
        date: "27-04-2025",
        audioUrl: null
    },
    {
        name: "Can you feel the love tonight - Elton John",
        date: "28-04-2025",
        audioUrl: null
    },
    {
        name: "Hello - Adele",
        date: "29-04-2025",
        audioUrl: null
    },
    {
        name: "You're Welcome - Dwayne Johnson",
        date: "30-04-2025",
        audioUrl: null
    },
    {
        name: "Circle of Life - Kyam's Kids",
        date: "21-09-2023",
        audioUrl: null
    },
    {
        name: "Shape of You - Ed Sheeran, Marley & Matt",
        date: "26-11-2025",
        audioUrl: 'https://jeardle.s3.eu-west-2.amazonaws.com/14-08-2023'
    },
    {
        name: "Duel of Fates - John Williams & Kyam's Kids",
        date: "21-11-2025",
        audioUrl: "https://example.com/audio/duel-of-fates.mp3"
    }
];

/**
 * Get all available songs
 * @returns {Array} Array of song objects with name, date, and audioUrl
 */
const getAvailableSongs = () => SONGS;

/**
 * Get the song for today
 * @param {string} formattedDate - Date in DD-MM-YYYY format
 * @returns {Object|null} Song object or null if not found
 */
const getTodaysSong = (formattedDate) => {
    return SONGS.find(song => song.date === formattedDate) || null;
};

/**
 * Update a song with audio URL and date
 * Use this to easily add new songs without modifying the array directly
 * @param {string} songName - Name of the song (must match existing entry)
 * @param {string} date - Date in DD-MM-YYYY format
 * @param {string} audioUrl - URL to the audio file
 */
const updateSongWithAudio = (songName, date, audioUrl) => {
    const song = SONGS.find(s => s.name === songName);
    if (song) {
        song.date = date;
        song.audioUrl = audioUrl;
    }
};

export { getAvailableSongs, getTodaysSong, updateSongWithAudio }
