// Product photographs come from manufacturers and electrical product suppliers. These are style examples,
// not a sales ranking; availability and complete fitting prices are quoted.
export type PowerPointStyle = {
  title: string; label: string; image: string; text: string; detail: string; source: string;
  photoType?: "cover" | "outlet"; availability?: string; photoUnavailable?: boolean;
};
export const powerPointStyles: PowerPointStyle[] = [
  {
    title: "Clipsal Saturn Zen - Black",
    label: "Premium statement",
    image: "saturn-zen-black",
    text: "A crisp, square design in matt black for a bold finish in renovated kitchens and modern living spaces.",
    detail: "Explore matching switches for a coordinated designer look",
    source:
      "https://www.clipsal.com/products/power-points-switches/saturn-zen/double-power-point-cover-horizontal-mount-250v-10a-z4025?itemno=Z4025-ZB",
  },
  {
    title: "Clipsal Saturn Zen - White",
    label: "Premium minimalism",
    image: "saturn-zen-white",
    text: "A clean, square matt white design for an understated premium finish against light walls and cabinetry.",
    detail: "A designer alternative to the familiar everyday white outlet",
    source:
      "https://www.clipsal.com/products/power-points-switches/saturn-zen/double-power-point-cover-horizontal-mount-250v-10a-z4025?itemno=Z4025-ZW",
  },
  {
    title: "Clipsal Iconic Styl — Crowne",
    label: "Designer finish",
    image: "iconic-styl-crowne",
    text: "A warm metallic look for feature spaces, warm cabinetry and a coordinated renovation.",
    detail: "Premium decorative cover; quoted with the compatible outlet",
    source:
      "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-CE",
  },
  {
    title: "Clipsal Iconic Styl — Silver Shadow",
    label: "Designer finish",
    image: "iconic-styl-shadow",
    text: "A darker statement finish to explore alongside dark splashbacks, cabinetry and modern interiors.",
    detail: "Premium decorative cover; quoted with the compatible outlet",
    source:
      "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-SH",
  },
  {
    title: "Clipsal Iconic Styl — Silver",
    label: "Designer finish",
    image: "iconic-styl-silver",
    text: "A contemporary metallic finish that can complement cool-toned fittings and appliances.",
    detail: "Premium decorative cover; quoted with the compatible outlet",
    source:
      "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-SV",
  },
  {
    title: "Hager silhouette — Aluminium",
    label: "Slim & architectural",
    image: "hager-silhouette-aluminium",
    text: "A real aluminium cover and slim profile for a clean, understated finish.",
    detail: "Shown with white sockets and an aluminium cover",
    source: "https://www.hagerelectro.com.au/silhouette",
  },
  {
    title: "Hager silhouette — Matt Black",
    label: "Modern contrast",
    image: "hager-silhouette-black",
    text: "A slim matt black finish for a contrasting detail against cabinetry or walls.",
    detail: "Shown in black; confirm the socket and cover combination when quoting",
    source: "https://www.hagerelectro.com.au/silhouette",
  },
  {
    title: "HPM Linea - Black",
    label: "Slim & modern",
    image: "hpm-linea-black",
    text: "A glossy black double power point with a low-profile design for kitchens and contemporary rooms.",
    detail: "A practical alternative to explore alongside premium finishes",
    source:
      "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-black-cdln777blbl",
  },
  {
    title: "Clipsal Iconic — USB-C",
    label: "Built-in charging",
    image: "iconic-usb-c",
    text: "Power and USB-C charging together for bedsides, desks and kitchen benches. I'll help compare charging output and device compatibility.",
    detail: "USB-A and combined USB-A / USB-C options can also be explored",
    source:
      "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/twin-socket-usb-type-c-fast-charger-3025usbc?itemno=3025USBC-VW",
  },
  {
    title: "Clipsal Iconic — Vivid White",
    label: "Contemporary everyday",
    image: "iconic-white",
    text: "A fresh white finish with interchangeable cover options. A simple way to coordinate outlets and switches throughout your home.",
    detail: "Cover shown; I'll quote a complete, suitable fitting",
    source:
      "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-VW",
  },
  {
    title: "HPM Excel - White",
    label: "Everyday value",
    image: "hpm-excel-white",
    text: "A straightforward white double outlet with interchangeable cover options. Well suited to everyday replacements and coordinated practical upgrades.",
    detail: "A simple option for homes, rentals and spare rooms",
    source:
      "https://www.hpm.com.au/en/catalog/products/hpm-excel-10a-double-power-point-white-cdxl777wewe",
  },
  {
    title: "Clipsal 2000 — White",
    label: "Simple & affordable",
    image: "clipsal-2000-white",
    text: "A familiar white double power point for a practical replacement, rental property or budget-conscious upgrade.",
    detail: "Reliable everyday style without paying for a designer finish",
    source:
      "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-WE",
  },
  {
    title: "Clipsal Classic — White",
    label: "Familiar classic",
    image: "clipsal-classic-white",
    text: "A white double power point from the Classic C2000 range, with a low-profile design and clip-on cover for a neat, familiar finish.",
    detail: "A practical option for matching existing Classic outlets and switches",
    source:
      "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-WE",
  },
  {
    "title": "Clipsal Iconic — Warm Grey",
    "image": "iconic-warm-grey",
    "label": "Contemporary everyday",
    "text": "A warm grey clip-on cover for a compatible Iconic double power point.",
    "detail": "Manufacturer lists this version as discontinued; ask about remaining stock or a suitable matching alternative.",
    "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-WY",
    "photoType": "cover",
    "availability": "Discontinued finish"
  },
  {
    "title": "Clipsal Iconic — Extra White",
    "image": "iconic-extra-white",
    "label": "Contemporary everyday",
    "text": "A extra white clip-on cover for a compatible Iconic double power point.",
    "detail": "Cover only shown; quoted with a compatible complete outlet.",
    "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-XW",
    "photoType": "cover"
  },
  {
    "title": "Clipsal Iconic — Anthracite",
    "image": "iconic-anthracite",
    "label": "Contemporary everyday",
    "text": "A anthracite clip-on cover for a compatible Iconic double power point.",
    "detail": "Cover only shown; quoted with a compatible complete outlet.",
    "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-AN",
    "photoType": "cover"
  },
  {
    "title": "Clipsal Iconic — Cool Grey",
    "image": "iconic-cool-grey",
    "label": "Contemporary everyday",
    "text": "A cool grey clip-on cover for a compatible Iconic double power point.",
    "detail": "Cover only shown; quoted with a compatible complete outlet.",
    "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-CY",
    "photoType": "cover"
  },
  {
    "title": "Clipsal Iconic — Extra Black",
    "image": "iconic-extra-black",
    "label": "Contemporary everyday",
    "text": "A extra black clip-on cover for a compatible Iconic double power point.",
    "detail": "Cover only shown; quoted with a compatible complete outlet.",
    "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-XB",
    "photoType": "cover"
  },
  {
    "title": "Clipsal Classic — Brushed Aluminium",
    "image": "clipsal-classic-brushed-aluminium",
    "label": "Classic colour option",
    "text": "A brushed aluminium cover for a compatible Classic double outlet, for a metallic finish alongside familiar Classic switches.",
    "detail": "C2025C-BA cover only shown. The assembled C2025-BA is discontinued; ask about a compatible fitting and current cover availability.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/socket-outlet-cover-plate-horizontal-mount-for-twin-switched-socket-c2025c?itemno=C2025C-BA",
    "photoType": "cover",
    "availability": "Cover option — check stock"
  },
  {
    "title": "Clipsal Classic — Cream",
    "image": "clipsal-classic-cream",
    "label": "Classic colour option",
    "text": "The familiar Clipsal Classic double outlet in cream, for coordinated fittings or matching an existing installation.",
    "detail": "Manufacturer lists this version as discontinued; ask about remaining stock or a suitable matching alternative.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-CM",
    "photoType": "outlet",
    "availability": "Discontinued finish"
  },
  {
    "title": "Clipsal Classic — Black",
    "image": "clipsal-classic-black",
    "label": "Classic colour option",
    "text": "The familiar Clipsal Classic double outlet in black, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-BK",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal Classic — Dark Blue",
    "image": "clipsal-classic-dark-blue",
    "label": "Classic colour option",
    "text": "The familiar Clipsal Classic double outlet in dark blue, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-DB",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal Classic — Green",
    "image": "clipsal-classic-green",
    "label": "Classic colour option",
    "text": "The familiar Clipsal Classic double outlet in green, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-GR",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal Classic — Red",
    "image": "clipsal-classic-red",
    "label": "Classic colour option",
    "text": "The familiar Clipsal Classic double outlet in red, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-RD",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal 2000 — Cream",
    "image": "clipsal-2000-cream",
    "label": "Classic colour option",
    "text": "The familiar Clipsal 2000 double outlet in cream, for coordinated fittings or matching an existing installation.",
    "detail": "Manufacturer lists this version as discontinued; ask about remaining stock or a suitable matching alternative.",
    "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-CM",
    "photoType": "outlet",
    "availability": "Discontinued finish"
  },
  {
    "title": "Clipsal 2000 — Black",
    "image": "clipsal-2000-black",
    "label": "Classic colour option",
    "text": "The familiar Clipsal 2000 double outlet in black, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-BK",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal 2000 — Dark Blue",
    "image": "clipsal-2000-dark-blue",
    "label": "Classic colour option",
    "text": "The familiar Clipsal 2000 double outlet in dark blue, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-DB",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal 2000 — Green",
    "image": "clipsal-2000-green",
    "label": "Classic colour option",
    "text": "The familiar Clipsal 2000 double outlet in green, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-GR",
    "photoType": "outlet"
  },
  {
    "title": "Clipsal 2000 — Red",
    "image": "clipsal-2000-red",
    "label": "Classic colour option",
    "text": "The familiar Clipsal 2000 double outlet in red, for coordinated fittings or matching an existing installation.",
    "detail": "Confirm availability and the correct fitting when quoting.",
    "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-RD",
    "photoType": "outlet"
  },
  {
    "title": "Hager silhouette — Gloss White",
    "image": "hager-silhouette-gloss-white",
    "label": "Slim & architectural",
    "text": "A slim silhouette double socket with a gloss white finish, for coordinated switches and outlets.",
    "detail": "Manufacturer photograph shows white socket inserts with this cover. Confirm your preferred socket and cover combination.",
    "source": "https://www.hagerelectro.com.au/silhouette",
    "photoType": "outlet"
  },
  {
    "title": "Hager silhouette — Matt White",
    "image": "hager-silhouette-matt-white",
    "label": "Slim & architectural",
    "text": "A slim silhouette double socket with a matt white finish, for coordinated switches and outlets.",
    "detail": "Manufacturer photograph shows white socket inserts with this cover. Confirm your preferred socket and cover combination.",
    "source": "https://www.hagerelectro.com.au/silhouette",
    "photoType": "outlet"
  },
  {
    "title": "Hager silhouette — Stainless Steel",
    "image": "hager-silhouette-stainless-steel",
    "label": "Slim & architectural",
    "text": "A slim silhouette double socket with a stainless steel finish, for coordinated switches and outlets.",
    "detail": "Manufacturer photograph shows white socket inserts with this cover. Confirm your preferred socket and cover combination.",
    "source": "https://www.hagerelectro.com.au/silhouette",
    "photoType": "outlet"
  },
  {
    "title": "HPM Linea — White",
    "image": "hpm-linea-white",
    "label": "Slim & modern",
    "text": "A complete white Linea double power point with matching white sockets and switches.",
    "detail": "Complete outlet shown. I'll confirm the correct fitting and installation when quoting.",
    "source": "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-white-cdln777wewe",
    "photoType": "outlet"
  },
  {
    "title": "HPM Linea — Matt Silver",
    "image": "hpm-linea-matt-silver",
    "label": "Slim & modern",
    "text": "A complete Linea double power point with a matt silver faceplate and white sockets and switches.",
    "detail": "Complete outlet shown: CDLN777WEMS. Confirm current supply when quoting.",
    "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/linea/power-points",
    "photoType": "outlet"
  },
  {
    "title": "HPM Linea — Asphalt",
    "image": "hpm-linea-asphalt",
    "label": "Interchangeable colour cover",
    "text": "A asphalt cover plate to coordinate a compatible HPM Linea double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876363577",
    "photoType": "cover"
  },
  {
    "title": "HPM Linea — Gun Metal",
    "image": "hpm-linea-gun-metal",
    "label": "Slim & modern",
    "text": "A complete Linea double power point with a gunmetal faceplate and black sockets and switches.",
    "detail": "Complete outlet shown: CDLN777BLGL. Confirm current supply when quoting.",
    "source": "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-blackgunmetal-cdln777blgl",
    "photoType": "outlet"
  },
  {
    "title": "HPM Linea — Ghost Gum",
    "image": "hpm-linea-ghost-gum",
    "label": "Interchangeable colour cover",
    "text": "A ghost gum cover plate to coordinate a compatible HPM Linea double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876429113",
    "photoType": "cover"
  },
  {
    "title": "HPM Linea — Ninja Khaki",
    "image": "hpm-linea-ninja-khaki",
    "label": "Interchangeable colour cover",
    "text": "A ninja khaki cover plate to coordinate a compatible HPM Linea double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876461881",
    "photoType": "cover"
  },
  {
    "title": "HPM Linea — Wet Elephant",
    "image": "hpm-linea-wet-elephant",
    "label": "Interchangeable colour cover",
    "text": "A wet elephant cover plate to coordinate a compatible HPM Linea double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876527417",
    "photoType": "cover"
  },
  {
    "title": "HPM Linea — Midnight Dash",
    "image": "hpm-linea-midnight-dash",
    "label": "Interchangeable colour cover",
    "text": "A midnight dash cover plate to coordinate a compatible HPM Linea double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876560185",
    "photoType": "cover"
  },
  {
    "title": "HPM Excel — Black",
    "image": "hpm-excel-black",
    "label": "Interchangeable colour cover",
    "text": "A black cover plate to coordinate a compatible HPM Excel double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-power-point-outlet-cover-only-available-in-4-colours-copy?variant=50282368762169",
    "photoType": "cover"
  },
  {
    "title": "HPM Excel — Matt Silver",
    "image": "hpm-excel-matt-silver",
    "label": "Interchangeable colour cover",
    "text": "A matt silver cover plate to coordinate a compatible HPM Excel double power point with your room.",
    "detail": "Cover plate only shown; quoted with the compatible outlet. Confirm the base colour and stock when enquiring.",
    "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-power-point-outlet-cover-only-available-in-4-colours-copy?variant=50282368827705",
    "photoType": "cover"
  },
  {
    "title": "HPM Excel — Stainless Steel",
    "image": "hpm-excel-stainless-steel",
    "label": "Specialist colour cover",
    "text": "A stainless steel cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Cover only shown. Listed by an electrical wholesaler; stock and the suitable outlet combination must be confirmed.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Stainless-Steel/p/10124070",
    "photoType": "cover",
    "availability": "Check wholesaler stock"
  },
  {
    "title": "HPM Excel — Polished Brass",
    "image": "hpm-excel-polished-brass",
    "label": "Specialist colour cover",
    "text": "A polished brass cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Cover only shown. Listed by an electrical wholesaler; stock and the suitable outlet combination must be confirmed.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Polished-Brass/p/10124066",
    "photoType": "cover",
    "availability": "Check wholesaler stock"
  },
  {
    "title": "HPM Excel — Red",
    "image": "hpm-excel-red",
    "label": "Specialist colour cover",
    "text": "A red cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Wholesaler lists this colour, but its image does not show the correct finish. Ask for a current product photo and stock confirmation.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Red/p/10124068",
    "photoType": "cover",
    "availability": "Check wholesaler stock",
    "photoUnavailable": true
  },
  {
    "title": "HPM Excel — Green",
    "image": "hpm-excel-green",
    "label": "Specialist colour cover",
    "text": "A green cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Wholesaler lists this colour, but its image does not show the correct finish. Ask for a current product photo and stock confirmation.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Green/p/10124063",
    "photoType": "cover",
    "availability": "Check wholesaler stock",
    "photoUnavailable": true
  },
  {
    "title": "HPM Excel — Mist Grey",
    "image": "hpm-excel-mist-grey",
    "label": "Specialist colour cover",
    "text": "A mist grey cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Cover only shown. Listed by an electrical wholesaler; stock and the suitable outlet combination must be confirmed.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Mist-Grey/p/10124064",
    "photoType": "cover",
    "availability": "Check wholesaler stock"
  },
  {
    "title": "HPM Excel — Beige",
    "image": "hpm-excel-beige",
    "label": "Specialist colour cover",
    "text": "A beige cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Cover only shown. Listed by an electrical wholesaler; stock and the suitable outlet combination must be confirmed.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Beige/p/10124059",
    "photoType": "cover",
    "availability": "Check wholesaler stock"
  },
  {
    "title": "HPM Excel — Gloss Cream",
    "image": "hpm-excel-gloss-cream",
    "label": "Specialist colour cover",
    "text": "A gloss cream cover plate for a compatible HPM Excel double outlet. Useful when coordinating finishes or matching existing fittings.",
    "detail": "Cover only shown. Listed by an electrical wholesaler; stock and the suitable outlet combination must be confirmed.",
    "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Gloss-Cream/p/10124547",
    "photoType": "cover",
    "availability": "Check wholesaler stock"
  },
  {
    "title": "HPM Linea — Cheeky Boy Blue",
    "image": "hpm-linea-cheeky-boy-blue",
    "label": "Interchangeable colour cover",
    "text": "A light blue cover for a compatible Linea double power point, for a colourful detail in your room.",
    "detail": "Cover only shown. This colour appears in the Linea catalogue; Australian stock and the correct fitting must be confirmed.",
    "source": "https://www.tradezone.com.au/product/legrand-linea-double-powerpoint-cover-plate-soft-touch-blue-65245.html",
    "photoType": "cover",
    "availability": "Check Australian stock"
  },
  {
    "title": "HPM Excel — Brown",
    "image": "hpm-excel-brown",
    "label": "Classic colour option",
    "text": "A brown Excel double power point for matching existing brown fittings or a warmer interior palette.",
    "detail": "Manufacturer product photo. Confirm availability and the suitable fitting when quoting.",
    "source": "https://www.hpm.com.au/en/catalog/products/hpm-excel-10a-double-power-point-brown-xl777br",
    "photoType": "outlet"
  },
];
