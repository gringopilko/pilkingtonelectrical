import { suburbGroups, slugify } from "@/lib/suburbGroups";
export { suburbGroups, slugify };

export interface SuburbEntry {
  name: string;
  slug: string;
  area: string;
  blurb: string;
  neighbours: string[];
  localIntro?: string;
  watchFor?: string[];
  photo?: { file: string; alt: string; width: number; height: number; credit?: { author: string; license: string; url: string } };
}

/** What makes each suburb different, and the electrical issues that come with it. */
const suburbDetails: Record<string, Pick<SuburbEntry, "localIntro" | "watchFor" | "photo">> = {
  "Melbourne CBD": {
    photo: { file: "suburb-melbourne-cbd-princes-bridge.webp", alt: "Princes Bridge over the Yarra with Melbourne CBD towers behind", width: 1600, height: 1050 },
    localIntro: "Office towers, Victorian-era buildings, laneway cafes and shops, and a growing number of apartment towers, all with tight access and busy trading hours.",
    watchFor: [
      "Parking is the biggest challenge on CBD jobs. Please let me know if there's parking on site or a loading bay, and the height clearance of any car park, so the van can get in",
      "Work planned around trading hours, often early or after close",
      "Ageing risers and submains in older buildings",
      "Office and shop fit-outs, plus test and tag for workplaces",
    ],
  },
  "Elwood": {
    photo: { file: "suburb-elwood-point-ormond.webp", alt: "View from Point Ormond in Elwood along the bay to the Melbourne skyline", width: 1600, height: 1200 },
    localIntro: "Built on drained swampland around the Elwood Canal and Elster Creek, so it's low-lying and some streets still flood in heavy rain. Famous for its art deco and interwar apartment blocks.",
    watchFor: [
      "Damp subfloors and flood risk. I keep electrical gear up high where possible and make sure safety switches are in place",
      "Old ceramic fuse boards in older flat blocks and common areas",
      "Solid brick walls. I chase them for the cleanest finish wherever possible. Where body corporate rules or budget rule it out, premium surface ducting is a neat alternative that suits art deco flats",
    ],
  },
  "St Kilda": {
    photo: { file: "suburb-st-kilda-luna-park.webp", alt: "Luna Park entrance on the St Kilda foreshore", width: 1600, height: 1067 },
    localIntro: "Grand Victorian homes split into flats, art deco blocks, high-density apartments and busy strips along Acland and Fitzroy Streets.",
    watchFor: [
      "Ageing common-area wiring and submains in older apartment buildings",
      "Salt air from the bay on outdoor and rooftop equipment",
      "Body corporate work with access, notice and shutdowns planned around residents",
    ],
  },
  "St Kilda East": {
    photo: { file: "suburb-st-kilda-east.webp", alt: "St George's Presbyterian Church, St Kilda East", width: 1024, height: 683, credit: { author: "iPostcodes", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:St_George%27s_Presbyterian_Church_St.Kilda_East_Victoria.jpg" } },
    localIntro: "Leafy streets of Victorian and Edwardian homes mixed with 1930s flats and newer apartment blocks, between Balaclava and Caulfield.",
    watchFor: [
      "Original wiring hidden behind renovated period interiors",
      "1930s flats still running on old fuse boards",
      "Rental safety checks for landlords with older flats",
    ],
  },
  "St Kilda West": {
    photo: { file: "suburb-st-kilda-west.webp", alt: "Bellaire art deco flats, St Kilda West", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Bellaire_Flats_St_Kilda_West.jpg" } },
    localIntro: "Quiet streets of Victorian terraces and apartment blocks a short walk from the beach and Catani Gardens.",
    watchFor: [
      "Salt air corroding outdoor lights, power points and meter boxes",
      "Tight terraces with little roof space. I chase new cabling into the walls wherever possible for a concealed finish",
      "Older apartment blocks with shared switchboards and meters",
    ],
  },
  "Balaclava": {
    photo: { file: "suburb-balaclava.webp", alt: "Carlisle Street near Balaclava station", width: 1600, height: 1067, credit: { author: "Maksym Kozlenko", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Balaclava_VIC_3183,_Australia_-_panoramio_(14).jpg" } },
    localIntro: "Built around the Carlisle Street shops and station, with Edwardian homes alongside plenty of 1960s walk-up flats.",
    watchFor: [
      "1960s walk-up flats with original wiring and cramped meter panels",
      "Common-area lighting and safety switches in older blocks",
      "Rental safety checks across multi-unit properties",
    ],
  },
  "Windsor": {
    photo: { file: "suburb-windsor.webp", alt: "Old W-class tram on Chapel Street, Windsor", width: 1600, height: 1200 },
    localIntro: "Narrow Victorian workers' cottages and terraces packed in behind Chapel Street, with shopfronts and bars along the main strip.",
    watchFor: [
      "Shared walls and tight roof spaces in terraces, so cable routes need planning",
      "Solid double-brick walls. I chase them for a concealed finish wherever possible, with premium surface ducting where body corporate rules or budget call for it",
      "Shop and hospitality work along Chapel Street",
    ],
  },
  "Prahran": {
    photo: { file: "suburb-prahran.webp", alt: "Chapel Street, Prahran", width: 1600, height: 1067, credit: { author: "Mat Connolley (Matnkat)", license: "CC BY 2.5", url: "https://commons.wikimedia.org/wiki/File:Chapel_Street,_Prahran,_Victoria,_Australia.jpg" } },
    localIntro: "Victorian terraces, newer apartment towers and a busy commercial strip around Chapel Street and the Prahran Market.",
    watchFor: [
      "Terraces still on original wiring behind updated interiors",
      "Shopfront and hospitality fit-outs",
      "Apartment work under body corporate rules",
    ],
  },
  "South Yarra": {
    photo: { file: "suburb-south-yarra.webp", alt: "Beverley Hills art deco apartments, South Yarra", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Beverley_Hill_apartments_South_Yarra_1.jpg" } },
    localIntro: "Grand Victorian mansions, art deco flats and modern high-rise apartments around Toorak Road and Chapel Street.",
    watchFor: [
      "High-rise apartment switchboards and building rules on access and shutdowns",
      "Large period homes with old wiring and heavy modern loads",
      "Lighting upgrades that suit both heritage and modern interiors",
    ],
  },
  "Albert Park": {
    photo: { file: "suburb-albert-park-lake.webp", alt: "Aerial view of Albert Park Lake with the Melbourne skyline", width: 1600, height: 1200 },
    localIntro: "A heritage streetscape of Victorian terraces and cottages between the lake and the beach.",
    watchFor: [
      "Heritage overlays to respect when adding external lights or equipment",
      "Salt air near the beach on outdoor fittings",
      "Narrow terraces with limited roof and floor access. Chasing into the brick keeps new circuits hidden",
    ],
  },
  "Middle Park": {
    photo: { file: "suburb-middle-park.webp", alt: "Beach shelter at Middle Park", width: 1600, height: 1198, credit: { author: "Fmackz", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Middle_Park_Beach,_Melbourne,_Victoria.jpg" } },
    localIntro: "Quiet, tree-lined streets of Victorian and Edwardian terraces near the beach and Armstrong Street, many renovated behind original facades.",
    watchFor: [
      "Old wiring left in place behind newer renovations",
      "Salt air near Beaconsfield Parade on outdoor fittings",
      "Running new circuits through tight terraces without damaging period detail",
    ],
  },
  "South Melbourne": {
    photo: { file: "suburb-south-melbourne.webp", alt: "Avenue Court art deco flats, South Melbourne", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Avenue_Court_flats.jpg" } },
    localIntro: "Workers' cottages, converted warehouses and mixed-use buildings around the South Melbourne Market and Clarendon Street.",
    watchFor: [
      "Warehouse conversions with leftover industrial wiring",
      "Mixed shop-and-residence buildings with shared supply",
      "Cafe, shop and office fit-outs",
    ],
  },
  "Port Melbourne": {
    photo: { file: "suburb-port-melbourne-princes-pier.webp", alt: "Old timber piles at Princes Pier, Port Melbourne", width: 1600, height: 1200 },
    localIntro: "Old workers' cottages near the bay alongside modern apartment developments around Beacon Cove and Bay Street.",
    watchFor: [
      "Salt air and wind off the bay on outdoor equipment",
      "Compact switchboards in newer apartments with little spare room",
      "EV charging in apartment car parks",
    ],
  },
  "Brighton": {
    photo: { file: "suburb-brighton-bathing-boxes.webp", alt: "Colourful bathing boxes on Brighton Beach", width: 1600, height: 1200 },
    localIntro: "Large Victorian, Edwardian and interwar homes, many under heritage overlays, sitting alongside big modern rebuilds.",
    watchFor: [
      "Cloth or rubber-insulated wiring in period homes, which goes brittle with age",
      "Big homes with pools, heated floors and ducted air needing more supply capacity, sometimes three-phase",
      "Fitting new work around heritage features without damaging them",
    ],
  },
  "Brighton East": {
    photo: { file: "suburb-brighton-east.webp", alt: "Local shops in Brighton East", width: 1600, height: 1200, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Brightoneastphotodec21.jpg" } },
    localIntro: "Interwar and postwar brick homes and Californian bungalows around Dendy Park, with a growing number of townhouses.",
    watchFor: [
      "1940s to 60s wiring stretched by modern kitchens and air conditioning",
      "Old switchboards that trip once extensions add load",
      "New circuits and switchboards for townhouse developments",
    ],
  },
  "Hampton": {
    photo: { file: "suburb-hampton.webp", alt: "St Mary's Church, Hampton", width: 1600, height: 1048, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:St_Marys_Church_Hampton_2024.jpg" } },
    localIntro: "A beachside suburb built around the Hampton Street shops, with Californian bungalows, interwar weatherboards and a steady stream of knock-down rebuilds.",
    watchFor: [
      "Salt air near the beach corroding outdoor lights, power points and meter boxes",
      "Older homes still on original wiring behind renovated interiors",
      "Outdoor lighting and power for gardens and entertaining areas",
    ],
  },
  "Hampton East": {
    photo: { file: "suburb-hampton-east.webp", alt: "Shops in Hampton East", width: 1600, height: 1200, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Hampton_East_2021.jpg" } },
    localIntro: "Mostly 1950s and 60s brick veneer and weatherboard homes on decent blocks, with plenty now being replaced by townhouses and dual-occupancy builds. It's where I'm based, so I'm usually only minutes away.",
    watchFor: [
      "Original 1950s wiring and old fuse boards with no safety switches",
      "Supply and switchboard upgrades for subdivisions and new builds",
      "EV chargers in new townhouse garages",
    ],
  },
  "Black Rock": {
    photo: { file: "suburb-black-rock.webp", alt: "Aerial view of the Black Rock coastline", width: 1600, height: 900, credit: { author: "Bob Tan", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Aerial_perspective_of_Black_Rock,_facing_south_along_Port_Philip_Bay._Jan_2019.jpg" } },
    localIntro: "Clifftop and foreshore streets with 1950s beach houses, mid-century homes and newer architect-designed builds.",
    watchFor: [
      "Heavy salt exposure. I use marine-grade and weather-sealed fittings outdoors",
      "Original wiring in older beach houses",
      "Garden, deck and pathway lighting built to cope with coastal weather",
    ],
  },
  "Beaumaris": {
    photo: { file: "suburb-beaumaris.webp", alt: "Ricketts Point beacon at Beaumaris", width: 1600, height: 871, credit: { author: "Stephen Edmonds", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Rock_glow_-_panoramio.jpg" } },
    localIntro: "Known for its mid-century modern homes among coastal tea-tree, many with low, flat roofs and big glass walls.",
    watchFor: [
      "Very little roof space in flat-roof homes. Where the walls are brick, chasing is often the neatest way to run new circuits and rewire",
      "Salt air near the coast on outdoor fittings",
      "Updating lighting in mid-century homes without spoiling the original design",
    ],
  },
  "Mentone": {
    photo: { file: "suburb-mentone.webp", alt: "Mentone Hotel and Florida Street corner", width: 1600, height: 1200, credit: { author: "Dragan Jankovic Fazan", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Mentone_Vic_Australia-Dragan_Jankovic_Fazan_-_panoramio.jpg" } },
    localIntro: "A beachside suburb with Federation and interwar homes near the Mentone shops and station, plus plenty of newer units.",
    watchFor: [
      "Salt air along Beach Road on outdoor lights and meter boxes",
      "Older homes with original wiring and no safety switches",
      "Switchboard and circuit work in unit blocks",
    ],
  },
  "Mordialloc": {
    photo: { file: "suburb-mordialloc.webp", alt: "Bridge Hotel on Mordialloc Creek", width: 1600, height: 1071, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Bridgehotelwinter.jpg" } },
    localIntro: "Where Mordialloc Creek meets the bay, with boat moorings, the Main Street shops, older weatherboards and new townhouses.",
    watchFor: [
      "Salt and moisture near the creek and marina on outdoor equipment",
      "Power and lighting for sheds, boats and outdoor areas",
      "Older weatherboards on original wiring",
    ],
  },
  "Toorak": {
    photo: { file: "suburb-toorak-tennis-courts.webp", alt: "Grass tennis courts in Toorak", width: 1600, height: 1067 },
    localIntro: "Some of Melbourne's grandest homes, from Victorian and Edwardian mansions to interwar estates and large modern builds, plus apartments and boutiques along Toorak Road.",
    watchFor: [
      "Large homes with heavy loads from pools, heated floors, ducted air and court lighting, often needing three-phase and a well-planned switchboard",
      "Original wiring in period homes that have been extended in stages over the years",
      "Gate, security, garden and outdoor lighting across large grounds",
    ],
  },
  "Malvern": {
    photo: { file: "suburb-malvern-aerial.webp", alt: "Aerial view over the leafy streets of Malvern", width: 1030, height: 516 },
    localIntro: "Grand Victorian, Edwardian and interwar homes around Glenferrie Road and High Street, many with heritage protection.",
    watchFor: [
      "Old wiring in large period homes, often extended in stages over the years",
      "Heavy modern loads from kitchens, heating and air conditioning on old boards",
      "Heritage-sensitive lighting and fittings",
    ],
  },
  "Malvern East": {
    photo: { file: "suburb-malvern-east.webp", alt: "The Gables, a Federation home in Malvern East", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:The_Gables,_East_Malvern.jpg" } },
    localIntro: "Interwar and postwar homes on quieter streets near Gardiners Creek and Chadstone, with lots of renovations and extensions.",
    watchFor: [
      "Postwar wiring that needs safety switches and updating",
      "New circuits for extensions and home offices",
      "Switchboard upgrades when renovations add load",
    ],
  },
  "Glen Iris": {
    photo: { file: "suburb-glen-iris.webp", alt: "Harold Holt Memorial Swimming Pool, Glen Iris", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Harold_Holt_Memorial_Swimming_Pool_corner.jpg" } },
    localIntro: "Californian bungalows and interwar homes on hilly, leafy streets running down to Gardiners Creek.",
    watchFor: [
      "Sloping blocks with long cable runs to garages, studios and outbuildings",
      "Original wiring under floors and in roof spaces",
      "Outdoor and garden lighting on terraced yards",
    ],
  },
  "Camberwell": {
    photo: { file: "suburb-camberwell-junction.webp", alt: "Trams and shops at Camberwell Junction", width: 1280, height: 853 },
    localIntro: "Edwardian and interwar homes around Camberwell Junction, with large blocks and protected heritage streetscapes.",
    watchFor: [
      "Heritage controls on external changes",
      "Old wiring in large homes and outbuildings",
      "Switchboard upgrades to suit modern loads",
    ],
  },
  "Hawthorn": {
    photo: { file: "suburb-hawthorn-glenferrie-road.webp", alt: "Shops along Glenferrie Road, Hawthorn", width: 960, height: 640 },
    localIntro: "Grand Victorian and Edwardian homes on leafy streets by the Yarra, students around Swinburne, and busy shopping strips along Glenferrie Road and Burwood Road.",
    watchFor: [
      "Original wiring in large period homes, often added to in stages over the years",
      "Student rentals and share houses that need safety checks and enough circuits for everyone",
      "Heritage overlays to respect when adding external lights or equipment",
    ],
  },
  "Caulfield": {
    photo: { file: "suburb-caulfield-park.webp", alt: "Ducks on the pond in Caulfield Park", width: 1024, height: 768 },
    localIntro: "Large Victorian and Edwardian homes near the racecourse, plus plenty of flats and rentals close to the Monash campus and station.",
    watchFor: [
      "Rental safety checks for landlords and property managers",
      "Older flats with shared meters and dated switchboards",
      "Original wiring in large period homes",
    ],
  },
  "Caulfield North": {
    photo: { file: "suburb-caulfield-north.webp", alt: "Labassa mansion, Caulfield North", width: 1600, height: 1200, credit: { author: "Rohanstorey", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Labassa_entrance_front_01.jpg" } },
    localIntro: "Edwardian and interwar homes and art deco flats along Hawthorn Road and Balaclava Road.",
    watchFor: [
      "Ceramic fuse boards still common in art deco flats",
      "Large period homes with original wiring",
      "Lighting upgrades that keep the period character",
    ],
  },
  "Caulfield South": {
    photo: { file: "suburb-caulfield-south.webp", alt: "Glenhuntly tram depot, Caulfield South", width: 1024, height: 683, credit: { author: "Marcus Wong", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Glenhuntly_Tram_Depot_main_entrance.jpg" } },
    localIntro: "Interwar and postwar homes along Glen Huntly Road, increasingly mixed with townhouses.",
    watchFor: [
      "Old wiring and missing safety switches in unrenovated homes",
      "New switchboards and supply for townhouse builds",
      "Extra circuits for kitchens and air conditioning",
    ],
  },
  "Bentleigh": {
    photo: { file: "suburb-bentleigh-centre-road.webp", alt: "Shops along Centre Road, Bentleigh", width: 1600, height: 1002 },
    localIntro: "Interwar Californian bungalows and postwar homes close to the Centre Road shops and the Frankston line, with lots of renovations and extensions.",
    watchFor: [
      "Old wiring and missing safety switches uncovered during renovations",
      "New circuits for extensions, kitchens and home offices",
      "Switchboard upgrades when the old board can't take the extra load",
    ],
  },
  "Bentleigh East": {
    photo: { file: "suburb-bentleigh-east.webp", alt: "Corner shop on Tucker Road, Bentleigh East", width: 1600, height: 777, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Milk_bar_on_Tucker_Road.jpg" } },
    localIntro: "Mostly 1950s and 60s family homes on bigger blocks, many being replaced by units and townhouses.",
    watchFor: [
      "Original wiring and fuse boards in homes that haven't been updated",
      "Supply upgrades and new switchboards for dual-occupancy builds",
      "EV chargers and solar-ready switchboards in new builds",
    ],
  },
  "Moorabbin": {
    photo: { file: "suburb-moorabbin.webp", alt: "Kingston City Hall, Moorabbin", width: 1600, height: 1200, credit: { author: "StAnselm", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Moorabbin.JPG" } },
    localIntro: "Postwar homes mixed with light industry and businesses around South Road and the Moorabbin industrial area.",
    watchFor: [
      "Factory and workshop circuits, including three-phase machinery",
      "Test and tag for workplaces",
      "Older homes still on their original switchboards",
    ],
  },
  "Cheltenham": {
    photo: { file: "suburb-cheltenham-southland.webp", alt: "Westfield Southland shopping centre, Cheltenham", width: 1346, height: 677 },
    localIntro: "Postwar homes and a growing number of townhouses between Southland and the Charman Road shops.",
    watchFor: [
      "1950s and 60s wiring in original homes",
      "New switchboards and supply for townhouse builds",
      "Safety switch upgrades on older boards",
    ],
  },
  "Dingley Village": {
    localIntro: "Quiet estates of 1970s and 80s brick homes surrounded by golf courses and open space.",
    watchFor: [
      "Boards from the 70s and 80s that often protect power circuits only, not lighting",
      "Old halogen downlights that run hot and are worth replacing with LEDs",
      "Extra circuits for extensions and outdoor living",
    ],
  },
  "Murrumbeena": {
    photo: { file: "suburb-murrumbeena.webp", alt: "Murrumbeena village shops", width: 1600, height: 1000, credit: { author: "Celco85", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Murrumbeenavillage2021November.jpg" } },
    localIntro: "Californian bungalows and postwar homes on leafy streets near Neerim Road and the station.",
    watchFor: [
      "Original bungalow wiring behind renovated rooms",
      "Switchboard upgrades with safety switches",
      "New circuits for extensions and studios",
    ],
  },
  "Oakleigh": {
    photo: { file: "suburb-oakleigh.webp", alt: "Oakleigh Council Chambers", width: 1600, height: 1200, credit: { author: "Totallynotarandomalt69", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Oakleigh_Council_Chambers_2026_1.jpg" } },
    localIntro: "Victorian and Edwardian cottages and postwar homes, with the busy cafe and restaurant strip around Eaton Mall.",
    watchFor: [
      "Cafe and restaurant fit-outs with heavy kitchen loads",
      "Older cottages on original wiring",
      "Commercial lighting and test and tag for local businesses",
    ],
  },
  "Clayton": {
    photo: { file: "suburb-clayton.webp", alt: "Monash University buildings, Clayton", width: 1600, height: 1200, credit: { author: "Natebailey", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:MonashUni-Clayton-3a.jpg" } },
    localIntro: "Close to Monash University, with plenty of rentals, share houses, units and light industry.",
    watchFor: [
      "Rental safety checks for landlords and property managers",
      "Share houses overloading old circuits with power boards",
      "Small factory and workshop electrical",
    ],
  },
  "Clayton South": {
    photo: { file: "suburb-clayton-south.webp", alt: "Shops in Clayton South", width: 1600, height: 1200, credit: { author: "Orderinchaos", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:OIC_clayton_near_train_station.jpg" } },
    localIntro: "Postwar homes alongside the industrial areas around Westall and Clayton Road.",
    watchFor: [
      "Factory and warehouse circuits, including three-phase",
      "Test and tag for workplaces",
      "Original wiring in older homes",
    ],
  },
  "Clarinda": {
    localIntro: "A quiet residential suburb of 1960s and 70s brick homes with established gardens.",
    watchFor: [
      "Switchboards from the 60s and 70s without full safety switch protection",
      "Kitchen and air conditioning circuits on old wiring",
      "Outdoor lighting for established gardens",
    ],
  },
  "Springvale": {
    photo: { file: "suburb-springvale-centre.webp", alt: "Shoppers outside the Springvale Centre", width: 862, height: 656 },
    localIntro: "A busy, multicultural shopping centre with restaurants and grocers, surrounded by postwar homes and units.",
    watchFor: [
      "Restaurant and shop fit-outs with heavy kitchen and refrigeration loads",
      "Older units with dated switchboards",
      "Test and tag for local businesses",
    ],
  },
  "Noble Park": {
    photo: { file: "suburb-noble-park.webp", alt: "NPK sign at Noble Park station", width: 1600, height: 1200, credit: { author: "PEPSI697", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:%22NPK%22_station_code_signage_entrance_at_Noble_Park_railway_station_(7_October_2024).jpg" } },
    localIntro: "Postwar homes and units on established streets near the station and Douglas Street shops.",
    watchFor: [
      "Original wiring and fuse boards in older homes",
      "Rental safety checks across units",
      "Safety switch upgrades",
    ],
  },
  "Keysborough": {
    photo: { file: "suburb-keysborough.webp", alt: "Parkmore shopping centre, Keysborough", width: 1600, height: 1067 },
    localIntro: "Newer housing estates from the 90s onwards next to industrial areas and green wedge land.",
    watchFor: [
      "Adding EV chargers and solar to switchboards with little spare room",
      "Factory and warehouse electrical",
      "Outdoor lighting and power for larger blocks",
    ],
  },
  "Aspendale": {
    photo: { file: "suburb-aspendale.webp", alt: "Street leading down to the beach, Aspendale", width: 1600, height: 1200, credit: { author: "Orderinchaos", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Aspendale_view_to_beach.jpg" } },
    localIntro: "Beachfront streets between the bay and Mordialloc Creek, with older beach houses and new builds.",
    watchFor: [
      "Salt air on outdoor lights, power points and meter boxes",
      "Original wiring in older beach houses",
      "Outdoor and deck lighting built for coastal weather",
    ],
  },
  "Aspendale Gardens": {
    photo: { file: "suburb-aspendale-gardens.webp", alt: "Family homes in Aspendale Gardens", width: 1600, height: 1200, credit: { author: "Orderinchaos", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Aspendale_Gdns_-_houses_on_Narelle.jpg" } },
    localIntro: "A 1980s and 90s estate near the Edithvale wetlands, with family homes on quiet courts.",
    watchFor: [
      "Boards from the 80s and 90s with partial safety switch protection",
      "Old halogen downlights worth replacing with LEDs",
      "Extra circuits for extensions, pools and outdoor areas",
    ],
  },
  "Braeside": {
    photo: { file: "suburb-braeside.webp", alt: "Wetlands at Braeside Park", width: 1600, height: 1062, credit: { author: "Danielmendelbaum", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Braeside_Park.jpg" } },
    localIntro: "Mostly industrial, with factories and warehouses next to Braeside Park.",
    watchFor: [
      "Three-phase machinery and factory circuits",
      "Test and tag for workplaces",
      "Warehouse lighting and emergency lighting",
    ],
  },
  "Waterways": {
    photo: { file: "suburb-waterways.webp", alt: "Lake at Waterways", width: 1600, height: 1200, credit: { author: "Beckmc", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:WaterwaysEast.jpg" } },
    localIntro: "A newer estate built around lakes and wetlands, with modern family homes.",
    watchFor: [
      "Weather-sealed outdoor fittings near the water",
      "Adding EV chargers and solar to newer switchboards",
      "Garden, jetty-side and outdoor lighting",
    ],
  },
  "Bangholme": {
    photo: { file: "suburb-bangholme.webp", alt: "Old trees on open land at Bangholme", width: 1600, height: 1067, credit: { author: "Dragan Jankovic Fazan", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Bangholme_VIC_3175,_Australia_-_panoramio.jpg" } },
    localIntro: "Semi-rural green wedge land with acreage, sheds and outbuildings.",
    watchFor: [
      "Long underground cable runs to sheds and outbuildings",
      "Power for pumps, workshops and machinery",
      "Outdoor and security lighting on large properties",
    ],
  },
  "Patterson Lakes": {
    photo: { file: "suburb-patterson-lakes.webp", alt: "Boats on the canals at Patterson Lakes", width: 1600, height: 1200, credit: { author: "Orderinchaos", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Patterson_Lakes_canal_near_Lagoon_1.jpg" } },
    localIntro: "A canal estate of waterfront homes, many with their own jetties and boat moorings.",
    watchFor: [
      "Power for jetties and boat lifts, with marine-grade fittings",
      "Salt and moisture on all outdoor equipment",
      "Waterfront lighting that copes with the weather",
    ],
  },
  "Seaford": {
    photo: { file: "suburb-seaford.webp", alt: "Aerial view of Keast Park and the Seaford coastline", width: 1600, height: 972, credit: { author: "Bob Tan", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Seaford%27s_Keast_Park_alongside_the_coastline.jpg" } },
    localIntro: "Beachside streets near Kananook Creek and the Seaford wetlands, with older weatherboards and new townhouses.",
    watchFor: [
      "Salt air on outdoor fittings near the beach",
      "Original wiring in older weatherboards",
      "New switchboards and supply for townhouse builds",
    ],
  },
  "Carrum Downs": {
    photo: { file: "suburb-carrum-downs.webp", alt: "Serbian Orthodox church, Carrum Downs", width: 1600, height: 1067, credit: { author: "Dragan Jankovic Fazan", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Carrum_Downs_VIC_3201,_Australia_-_panoramio_(2).jpg" } },
    localIntro: "Estates of 80s, 90s and 2000s homes alongside a large industrial area.",
    watchFor: [
      "Older halogen downlights and partial safety switch protection in 80s and 90s homes",
      "Factory and warehouse electrical",
      "Adding EV chargers and solar to existing switchboards",
    ],
  },
};

export function getAllSuburbs(): SuburbEntry[] {
  return suburbGroups.flatMap((group) =>
    group.suburbs.map((name) => ({
      name,
      slug: slugify(name),
      area: group.area,
      blurb: group.blurb,
      neighbours: group.suburbs.filter((s) => s !== name),
      ...suburbDetails[name],
    })),
  );
}

export function getSuburbBySlug(slug: string): SuburbEntry | undefined {
  return getAllSuburbs().find((s) => s.slug === slug);
}
