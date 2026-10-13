export type WiringProductKind = "outlet" | "switch" | "dimmer";
export type WiringPhotoType = "complete" | "cover" | "mechanism" | "adaptor" | "assembly";
export interface WiringProductVariant {
  id: string;
  finish: string;
  sku: string;
  image: string;
  source: string;
  photoType: WiringPhotoType;
  availability: string;
}
export interface WiringProductGroup {
  id: string;
  title: string;
  kind: WiringProductKind;
  note: string;
  variants: WiringProductVariant[];
}
// Each page selects only its own product type; sources and matching finishes are independently checked.
export const wiringProducts: WiringProductGroup[] = [
  {
    "id": "clipsal-solis-t-outlet",
    "title": "Clipsal Solis T",
    "kind": "outlet",
    "note": "Coordinated designer finishes for outlets and metal toggle switches. USB-C and extra-switch outlet configurations can also be quoted.",
    "variants": [
      {
        "id": "clipsal-solis-brushed-brass",
        "finish": "Brushed Brass",
        "sku": "1025-BB",
        "image": "/img/power-points/clipsal-solis-brushed-brass.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-BB",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-ebony-aluminium",
        "finish": "Ebony Aluminium",
        "sku": "1025-EA",
        "image": "/img/power-points/clipsal-solis-ebony-aluminium.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-EA",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-platinum-aluminium",
        "finish": "Platinum Aluminium",
        "sku": "1025-PT",
        "image": "/img/power-points/clipsal-solis-platinum-aluminium.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-PT",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-white-ceramic",
        "finish": "White Ceramic",
        "sku": "1025-WC",
        "image": "/img/power-points/clipsal-solis-white-ceramic.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-WC",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-solis-outlet",
    "title": "Clipsal Solis",
    "kind": "outlet",
    "note": "Zen White and Zen Black outlets to coordinate with the Solis push-button switches.",
    "variants": [
      {
        "id": "clipsal-solis-zen-black",
        "finish": "Zen Black",
        "sku": "1025-ZB",
        "image": "/img/power-points/clipsal-solis-zen-black.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-ZB",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-zen-white",
        "finish": "Zen White",
        "sku": "1025-ZW",
        "image": "/img/power-points/clipsal-solis-zen-white.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/solis/double-switch-power-point-horizontal-mount-230v-240v-10a-1025?itemno=1025-ZW",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-zen-outlet",
    "title": "Clipsal Saturn Zen",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "clipsal-saturn-zen-outlet-zen-white",
        "finish": "Zen White",
        "sku": "Z4025-ZW",
        "image": "https://www.clipsal.com/clipsal-product-images/A0005608.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-zen/double-power-point-cover-horizontal-mount-250v-10a-z4025?itemno=Z4025-ZW",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-saturn-zen-outlet-zen-black",
        "finish": "Zen Black",
        "sku": "Z4025-ZB",
        "image": "https://www.clipsal.com/clipsal-product-images/Z4025-ZB-FRONT.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-zen/double-power-point-cover-horizontal-mount-250v-10a-z4025?itemno=Z4025-ZB",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-styl-outlet",
    "title": "Clipsal Iconic Styl",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "iconic-styl-crowne",
        "finish": "Crowne",
        "sku": "",
        "image": "/img/power-points/iconic-styl-crowne.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-CE",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-styl-shadow",
        "finish": "Silver Shadow",
        "sku": "",
        "image": "/img/power-points/iconic-styl-shadow.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-SH",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-styl-silver",
        "finish": "Silver",
        "sku": "",
        "image": "/img/power-points/iconic-styl-silver.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic-styl/styl-double-power-point-skin-horizontal-mount-250v-10a-s3025c?itemno=S3025C-SV",
        "photoType": "cover",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-silhouette-outlet",
    "title": "Hager Silhouette",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "hager-silhouette-aluminium",
        "finish": "Aluminium",
        "sku": "",
        "image": "/img/power-points/hager-silhouette-aluminium.webp",
        "source": "https://www.hagerelectro.com.au/silhouette",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-black",
        "finish": "Matt Black",
        "sku": "",
        "image": "/img/power-points/hager-silhouette-black.webp",
        "source": "https://www.hagerelectro.com.au/silhouette",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-gloss-white",
        "finish": "Gloss White",
        "sku": "",
        "image": "/img/power-points/hager-silhouette-gloss-white.webp",
        "source": "https://www.hagerelectro.com.au/silhouette",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-matt-white",
        "finish": "Matt White",
        "sku": "",
        "image": "/img/power-points/hager-silhouette-matt-white.webp",
        "source": "https://www.hagerelectro.com.au/silhouette",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-stainless-steel",
        "finish": "Stainless Steel",
        "sku": "",
        "image": "/img/power-points/hager-silhouette-stainless-steel.webp",
        "source": "https://www.hagerelectro.com.au/silhouette",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hpm-linea-outlet",
    "title": "HPM Linea",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "hpm-linea-black",
        "finish": "Black",
        "sku": "",
        "image": "/img/power-points/hpm-linea-black.webp",
        "source": "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-black-cdln777blbl",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-linea-white",
        "finish": "White",
        "sku": "",
        "image": "/img/power-points/hpm-linea-white.webp",
        "source": "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-white-cdln777wewe",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-linea-matt-silver",
        "finish": "Matt Silver",
        "sku": "",
        "image": "/img/power-points/hpm-linea-matt-silver.webp",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/linea/power-points",
        "photoType": "complete",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-asphalt",
        "finish": "Asphalt",
        "sku": "",
        "image": "/img/power-points/hpm-linea-asphalt.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876363577",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-gun-metal",
        "finish": "Gun Metal",
        "sku": "",
        "image": "/img/power-points/hpm-linea-gun-metal.webp",
        "source": "https://www.hpm.com.au/en/catalog/products/hpm-linea-horizontal-double-power-point-blackgunmetal-cdln777blgl",
        "photoType": "complete",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-ghost-gum",
        "finish": "Ghost Gum",
        "sku": "",
        "image": "/img/power-points/hpm-linea-ghost-gum.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876429113",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-ninja-khaki",
        "finish": "Ninja Khaki",
        "sku": "",
        "image": "/img/power-points/hpm-linea-ninja-khaki.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876461881",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-wet-elephant",
        "finish": "Wet Elephant",
        "sku": "",
        "image": "/img/power-points/hpm-linea-wet-elephant.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876527417",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-midnight-dash",
        "finish": "Midnight Dash",
        "sku": "",
        "image": "/img/power-points/hpm-linea-midnight-dash.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-double-switch-socket-cover-plate-only-10-colour-finishes?variant=43917876560185",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-cheeky-boy-blue",
        "finish": "Cheeky Boy Blue",
        "sku": "",
        "image": "/img/power-points/hpm-linea-cheeky-boy-blue.webp",
        "source": "https://www.tradezone.com.au/product/legrand-linea-double-powerpoint-cover-plate-soft-touch-blue-65245.html",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-usb-c-outlet",
    "title": "Clipsal Iconic USB-C",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "iconic-usb-c",
        "finish": "Vivid White",
        "sku": "",
        "image": "/img/power-points/iconic-usb-c.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/twin-socket-usb-type-c-fast-charger-3025usbc?itemno=3025USBC-VW",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-outlet",
    "title": "Clipsal Iconic",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "iconic-white",
        "finish": "Vivid White",
        "sku": "",
        "image": "/img/power-points/iconic-white.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-VW",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-warm-grey",
        "finish": "Warm Grey",
        "sku": "",
        "image": "/img/power-points/iconic-warm-grey.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-WY",
        "photoType": "cover",
        "availability": "Discontinued finish · check remaining stock"
      },
      {
        "id": "iconic-extra-white",
        "finish": "Extra White",
        "sku": "",
        "image": "/img/power-points/iconic-extra-white.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-XW",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-anthracite",
        "finish": "Anthracite",
        "sku": "",
        "image": "/img/power-points/iconic-anthracite.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-AN",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-cool-grey",
        "finish": "Cool Grey",
        "sku": "",
        "image": "/img/power-points/iconic-cool-grey.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-CY",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "iconic-extra-black",
        "finish": "Extra Black",
        "sku": "",
        "image": "/img/power-points/iconic-extra-black.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/double-power-point-skin-horizontal-mount-250v-10a-clip-on-3025c?itemno=3025C-XB",
        "photoType": "cover",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hpm-excel-outlet",
    "title": "HPM Excel",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "hpm-excel-white",
        "finish": "White",
        "sku": "",
        "image": "/img/power-points/hpm-excel-white.webp",
        "source": "https://www.hpm.com.au/en/catalog/products/hpm-excel-10a-double-power-point-white-cdxl777wewe",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-black",
        "finish": "Black",
        "sku": "",
        "image": "/img/power-points/hpm-excel-black.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-power-point-outlet-cover-only-available-in-4-colours-copy?variant=50282368762169",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-matt-silver",
        "finish": "Matt Silver",
        "sku": "",
        "image": "/img/power-points/hpm-excel-matt-silver.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-power-point-outlet-cover-only-available-in-4-colours-copy?variant=50282368827705",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-stainless-steel",
        "finish": "Stainless Steel",
        "sku": "",
        "image": "/img/power-points/hpm-excel-stainless-steel.webp",
        "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Stainless-Steel/p/10124070",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-polished-brass",
        "finish": "Polished Brass",
        "sku": "",
        "image": "/img/power-points/hpm-excel-polished-brass.webp",
        "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Polished-Brass/p/10124066",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-mist-grey",
        "finish": "Mist Grey",
        "sku": "",
        "image": "/img/power-points/hpm-excel-mist-grey.webp",
        "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Mist-Grey/p/10124064",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-beige",
        "finish": "Beige",
        "sku": "",
        "image": "/img/power-points/hpm-excel-beige.webp",
        "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Beige/p/10124059",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-gloss-cream",
        "finish": "Gloss Cream",
        "sku": "",
        "image": "/img/power-points/hpm-excel-gloss-cream.webp",
        "source": "https://www.idealelectrical.com/aie/category/Switches%2C-Plugs-%26-Sockets/Switches/Grid-%26-Cover-Plate/Cover-Plate-Excel-Series-For-Double-GPO-Power-Outlet-Gloss-Cream/p/10124547",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-excel-brown",
        "finish": "Brown",
        "sku": "",
        "image": "/img/power-points/hpm-excel-brown.webp",
        "source": "https://www.hpm.com.au/en/catalog/products/hpm-excel-10a-double-power-point-brown-xl777br",
        "photoType": "complete",
        "availability": "Specialist/older finish · check stock"
      }
    ]
  },
  {
    "id": "clipsal-2000-outlet",
    "title": "Clipsal 2000",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "clipsal-2000-white",
        "finish": "White",
        "sku": "",
        "image": "/img/power-points/clipsal-2000-white.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-cream",
        "finish": "Cream",
        "sku": "",
        "image": "/img/wiring-styles/clipsal-2000-cream.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-CM",
        "photoType": "complete",
        "availability": "Discontinued finish · check remaining stock"
      },
      {
        "id": "clipsal-2000-black",
        "finish": "Black",
        "sku": "",
        "image": "/img/wiring-styles/clipsal-2000-black.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-dark-blue",
        "finish": "Dark Blue",
        "sku": "",
        "image": "/img/wiring-styles/clipsal-2000-dark-blue.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-DB",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-green",
        "finish": "Green",
        "sku": "",
        "image": "/img/wiring-styles/clipsal-2000-green.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-GR",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-red",
        "finish": "Red",
        "sku": "",
        "image": "/img/wiring-styles/clipsal-2000-red.webp",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/twin-switch-socket-outlet-250v-10a-2025?itemno=2025-RD",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-classic-outlet",
    "title": "Clipsal Classic",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "clipsal-classic-outlet-white",
        "finish": "White",
        "sku": "C2025-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=A00021792&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-classic-outlet-cream",
        "finish": "Cream",
        "sku": "C2025-CM",
        "image": "https://download.se.com/files?p_Doc_Ref=ODAC2025-CM&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-CM",
        "photoType": "complete",
        "availability": "Discontinued finish · check remaining stock"
      },
      {
        "id": "clipsal-classic-outlet-black",
        "finish": "Black",
        "sku": "C2025-BK",
        "image": "https://download.se.com/files?p_Doc_Ref=ODAC2025-BK&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-classic-outlet-dark-blue",
        "finish": "Dark Blue",
        "sku": "C2025-DB",
        "image": "https://download.se.com/files?p_Doc_Ref=C202-DB-MAIN&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-DB",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-classic-outlet-green",
        "finish": "Green",
        "sku": "C2025-GR",
        "image": "https://download.se.com/files?p_Doc_Ref=C2025-GR_IOP&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-GR",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-classic-outlet-red",
        "finish": "Red",
        "sku": "C2025-RD",
        "image": "https://download.se.com/files?p_Doc_Ref=C2025-RD_IOP&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switched-socket-outlet-twin-250v-10a-c2025?itemno=C2025-RD",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-bticino-living-now-outlet",
    "title": "Legrand / BTicino Living Now",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "legrand-bticino-living-now-outlet-matt-black",
        "finish": "Matt Black",
        "sku": "LVN777ABL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LVN777ABL_Front_resize600.jpg?v=1774397014",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-double-powerpoint-autoswitched?variant=43915910938937",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-bticino-living-now-outlet-matt-white",
        "finish": "Matt White",
        "sku": "LVN777AWE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LVN777AWE_Front_resize600.jpg?v=1774397014",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-double-powerpoint-autoswitched?variant=43915910971705",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-bticino-living-now-switch",
    "title": "Legrand / BTicino Living Now",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "legrand-bticino-living-now-switch-matt-black",
        "finish": "Matt Black",
        "sku": "LVNSW2BL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LVNSW2BL_Front_resize600.jpg?v=1774397257",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-2-gang-switch-with-led?variant=43915913429305",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-bticino-living-now-switch-matt-white",
        "finish": "Matt White",
        "sku": "LVNSW2WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LVNSW2WE_Front_resize600.jpg?v=1774397257",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-2-gang-switch-with-led?variant=43915913462073",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-solis-t-switch",
    "title": "Clipsal Solis T",
    "kind": "switch",
    "note": "Metal toggle switches with coordinated designer finishes.",
    "variants": [
      {
        "id": "clipsal-solis-t-switch-brushed-brass",
        "finish": "Brushed Brass",
        "sku": "1041TA-BB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_baa24c0b-bf85-4588-a749-3c5f664aa5c3.jpg?v=1750979045",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-t-1-gang-toggle-switch-living-brass?variant=49878475276601",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-t-switch-ebony-aluminium",
        "finish": "Ebony Aluminium",
        "sku": "1041TA-EA",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_eddf909e-ec58-4572-8c63-e88c101f2509.jpg?v=1750979046",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-t-1-gang-toggle-switch-ebony-aluminium?variant=49878295773497",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-t-switch-platinum-aluminium",
        "finish": "Platinum Aluminium",
        "sku": "1041TA-PT",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_032109c1-e192-4e42-a5dd-3d71ff97f0b2.jpg?v=1750979044",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-t-1-gang-toggle-switch-platinum?variant=49878511288633",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-t-switch-white-ceramic",
        "finish": "White Ceramic",
        "sku": "1041TA-WC",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_42b28880-669f-44cc-be7f-1346b97cd456.jpg?v=1750979047",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-t-1-gang-toggle-switch-white-ceramic?variant=49878259302713",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-solis-switch",
    "title": "Clipsal Solis",
    "kind": "switch",
    "note": "Push-button switches in Zen White and Zen Black.",
    "variants": [
      {
        "id": "clipsal-solis-switch-zen-white",
        "finish": "Zen White",
        "sku": "1041PA-ZW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_75e33142-aa70-4650-8f69-9a2f72829495.jpg?v=1750979057",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-1-gang-switch?variant=49870053376313",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-switch-zen-black",
        "finish": "Zen Black",
        "sku": "1041PA-ZB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_d2b8a2a7-5d9a-44fc-a85c-29816a18c106.jpg?v=1750979056",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-1-gang-switch-zen-black?variant=49870104297785",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-zen-switch",
    "title": "Clipsal Saturn Zen",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "clipsal-saturn-zen-switch-z4061pbl-zw",
        "finish": "Zen White",
        "sku": "Z4061PBL-ZW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/files_52cee2a1-3a7a-497f-b9b4-e021fbbc4a4d.jpg?v=1750977918",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-saturn-zen-switch-1g-pb-250v-16ax-20a-led-white?variant=43918229307705",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-saturn-zen-switch-z4061pbl-zb",
        "finish": "Zen Black",
        "sku": "Z4061PBL-ZB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/files_92825c25-e9db-42d1-8a24-4d6f34fdbc24.jpg?v=1750977916",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-saturn-zen-switch-1g-pb-250v-16ax-20a-led-black?variant=43918231142713",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-styl-switch",
    "title": "Clipsal Iconic Styl",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "clipsal-iconic-styl-switch-crowne",
        "finish": "Crowne",
        "sku": "S3041VA-CE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_6651b57a-ec70-467d-ac45-693c7f56be43.jpg?v=1773091357",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-styl-1-gang-complete-switch-available-in-3-colours?variant=52029632872761",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-styl-switch-silver-shadow",
        "finish": "Silver Shadow",
        "sku": "S3041VA-SH",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_c6c16b27-2b59-400e-8700-a1869da579f9.jpg?v=1773091357",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-styl-1-gang-complete-switch-available-in-3-colours?variant=52029632905529",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-styl-switch-silver",
        "finish": "Silver",
        "sku": "S3041VA-SV",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_6bc01c3e-cb20-424c-8188-410b449841be.jpg?v=1773091357",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-styl-1-gang-complete-switch-available-in-3-colours?variant=52029632938297",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-essence-outlet",
    "title": "Clipsal Iconic Essence",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "clipsal-iconic-essence-outlet-arctic-white",
        "finish": "Arctic White",
        "sku": "E3025-AW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_b088608a-837f-4ea4-baaa-78c505a07c48.jpg?v=1773095127",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-essence-double-powerpoint-10a-available-in-2-colours?variant=52021872525625",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-essence-outlet-ash-grey",
        "finish": "Ash Grey",
        "sku": "E3025-AG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_13dda0ff-90b2-4c7a-904b-25b192e7552f.jpg?v=1773095127",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-essence-double-powerpoint-10a-available-in-2-colours?variant=52021872558393",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-essence-switch",
    "title": "Clipsal Iconic Essence",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "clipsal-iconic-essence-switch-ash-grey",
        "finish": "Ash Grey",
        "sku": "E3041VA-AG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_b038af6e-bed1-4933-ac31-890467ab539a.jpg?v=1773798530",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-essence-1-gang-complete-switch-available-in-2-colours?variant=52021451522361",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-essence-switch-arctic-white",
        "finish": "Arctic White",
        "sku": "E3041VA-AW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_886cf34d-4ef8-498b-9903-505fb72f6516.jpg?v=1773798646",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-essence-1-gang-complete-switch-available-in-2-colours?variant=52021451489593",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-switch",
    "title": "Clipsal Iconic",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "clipsal-iconic-switch-vivid-white",
        "finish": "Vivid White",
        "sku": "3041VA-VW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_8ff8385b-1ca8-4461-97d8-0949edd7a1e1.jpg?v=1773097719",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-3041va-vw-twin-switch-socket-outlet-10a-with-extra-switch-skin-only-crowne?variant=51991696703801",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-switch-extra-white",
        "finish": "Extra White",
        "sku": "3041VA-XW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_71cbbd9d-6304-42f7-b235-49da1011c140.jpg?v=1773097705",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-3041va-vw-twin-switch-socket-outlet-10a-with-extra-switch-skin-only-crowne?variant=51991696736569",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-switch-extra-black",
        "finish": "Extra Black",
        "sku": "3041C-XB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_94663194-67b3-4606-82d1-a8fcc1f560f6.png?v=1773098720",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-clipsal-iconic-1-gang-switch-plate-skin-only-5-finishes?variant=48129155694905",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-switch-anthracite",
        "finish": "Anthracite",
        "sku": "3041C-AN",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_304c4e99-89c8-4af0-beb4-5348d537672f.jpg?v=1773098721",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-clipsal-iconic-1-gang-switch-plate-skin-only-5-finishes?variant=48129155629369",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-switch-cool-grey",
        "finish": "Cool Grey",
        "sku": "3041C-CY",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_051bf5fb-ff47-49bd-bc51-df21bc7b3c8d.jpg?v=1773098721",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-clipsal-iconic-1-gang-switch-plate-skin-only-5-finishes?variant=48129155662137",
        "photoType": "cover",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-silhouette-switch",
    "title": "Hager Silhouette",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "hager-silhouette-switch-white-gloss",
        "finish": "White Gloss",
        "sku": "WBSSV1",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/306401_41.jpg?v=1738265124",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-silhouette-complete-switch-plates-1-to-6-gang?variant=47438704148793",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-switch-matt-white",
        "finish": "Matt White",
        "sku": "WBSSV1-MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/306401_41_f7a9eaf8-0eba-43c1-a4c4-43c1771b4c90.jpg?v=1738265124",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-silhouette-complete-switch-plates-1-to-6-gang?variant=47438704181561",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-switch-matt-black",
        "finish": "Matt Black",
        "sku": "WBSSV1-MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/356270_41.jpg?v=1738265124",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-silhouette-complete-switch-plates-1-to-6-gang?variant=47438704214329",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-switch-aluminium",
        "finish": "Aluminium",
        "sku": "WBSCV1-AL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBSCV1-AL_ProductPicture_NORMAL_306363_187.jpg?v=1736369997",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-silhouette-1-gang-switch-plate-skin-only?variant=43917901529401",
        "photoType": "cover",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-silhouette-switch-stainless-steel",
        "finish": "Stainless Steel",
        "sku": "WBSCV1-SS",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBSCV1-SS_ProductPicture_NORMAL_306365_187.jpg?v=1736369996",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-silhouette-1-gang-switch-plate-skin-only?variant=43917901562169",
        "photoType": "cover",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hpm-linea-switch",
    "title": "HPM Linea",
    "kind": "switch",
    "note": "Some coloured finishes are older or specialist stock. Check the matching plate and mechanism.",
    "variants": [
      {
        "id": "hpm-linea-switch-white",
        "finish": "White",
        "sku": "LN770/1WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1WE_600x600_7c7da251-dd31-452f-b1b2-d7c263f2250a.jpg?v=1745909215",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-1-gang-flush-switch?variant=43917872267577",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-linea-switch-black",
        "finish": "Black",
        "sku": "LN770/1BL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1BL_600x600_91c9a73f-92a2-46da-a504-c8e7cde55ab8.jpg?v=1745909215",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-linear-1-gang-flush-switch?variant=43917872300345",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-linea-switch-asphalt",
        "finish": "Asphalt",
        "sku": "LN770/1PLAS",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLAS_600x600_fb341d31-5d4e-4aa9-b5d8-0987625fb828.jpg?v=1745909326",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121206073",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-gun-metal",
        "finish": "Gun Metal",
        "sku": "LN770/1PLGL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLGL_600x600_4e5812aa-99ea-40dd-9d58-0f91ce2e2384.jpg?v=1745909326",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121238841",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-ghost-gum",
        "finish": "Ghost Gum",
        "sku": "LN770/1PLLG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLLG_600x600_4def97d1-ff1d-4a71-bc82-78529dfa9cbd.jpg?v=1745909327",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121271609",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-ninja-khaki",
        "finish": "Ninja Khaki",
        "sku": "LN770/1PLKH",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLKH_600x600_4bd5cf2d-1299-4d70-b849-0d3b0b8f5984.jpg?v=1745909327",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121304377",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-midnight-dash",
        "finish": "Midnight Dash",
        "sku": "LN770/1PLMI",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLMI_600x600_d3651c69-3546-425d-8e77-7ca115117e40.jpg?v=1745909327",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121337145",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-matt-silver",
        "finish": "Matt Silver",
        "sku": "LN770/1PLMS",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLMS_600x600_4b9cd4d0-e66f-49bd-b09b-11aaeca5add0.jpg?v=1745909327",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121369913",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      },
      {
        "id": "hpm-linea-switch-wet-elephant",
        "finish": "Wet Elephant",
        "sku": "LN770/1PLDG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/LN770-1PLDG_600x600_332ef87c-f2c2-4d2b-9f59-c07b8453a7f8.jpg?v=1745909327",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-hpm-linea?variant=43918121468217",
        "photoType": "cover",
        "availability": "Specialist/older finish · check stock"
      }
    ]
  },
  {
    "id": "legrand-excel-life-switch",
    "title": "Legrand Excel Life",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "legrand-excel-life-switch-white",
        "finish": "White",
        "sku": "ED770/1WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED770-1WE_600x600_839d284f-a57e-4ab4-9d03-9cfb6715f609.jpg?v=1745908636",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-dedicated-plate-1-gang-switch-available-in-3-colours?variant=43917855719737",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-switch-urban-grey",
        "finish": "Urban Grey",
        "sku": "ED770/1UG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED770-1UG_600x600_0edd4dc2-ea5c-4bb8-9d0b-84d32e1cd853.jpg?v=1745908636",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-dedicated-plate-1-gang-switch-available-in-3-colours?variant=43917855752505",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-switch-black",
        "finish": "Black",
        "sku": "ED770/1BL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED770-1BL_600x600px.jpg?v=1745908636",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-dedicated-plate-1-gang-switch-available-in-3-colours?variant=43917855785273",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-switch-matt-white",
        "finish": "Matt White",
        "sku": "ED770/1MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED770-1MW_Front.jpg?v=1745908637",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-dedicated-plate-1-gang-switch-available-in-3-colours?variant=43917855818041",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-switch-matt-black",
        "finish": "Matt Black",
        "sku": "ED770/1MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED770-1MB_Front.jpg?v=1745908637",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-dedicated-plate-1-gang-switch-available-in-3-colours?variant=43917855850809",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-excel-life-outlet",
    "title": "Legrand Excel Life",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "legrand-excel-life-outlet-white",
        "finish": "White",
        "sku": "ED777WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED777WE_600x600_e9d56a3e-ce87-4a66-abcc-5d13abebb107.jpg?v=1751589761",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-switch-socket-outlet-available-in-3-colours?variant=43917852049721",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-outlet-urban-grey",
        "finish": "Urban Grey",
        "sku": "ED777UG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED777UG_600x600_ab580f43-5a0b-4593-9087-e7c7cf89eeb1.jpg?v=1751589761",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-switch-socket-outlet-available-in-3-colours?variant=43917852082489",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-outlet-black",
        "finish": "Black",
        "sku": "ED777BL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED777BL_600x600px.jpg?v=1751589761",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-switch-socket-outlet-available-in-3-colours?variant=43917852115257",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-outlet-matt-white",
        "finish": "Matt White",
        "sku": "ED777MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED777MW_Front.jpg?v=1751494795",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-switch-socket-outlet-available-in-3-colours?variant=43917852148025",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-outlet-matt-black",
        "finish": "Matt Black",
        "sku": "ED777MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/ED777MB_Front.jpg?v=1751589761",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-excel-life-double-switch-socket-outlet-available-in-3-colours?variant=43917852180793",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-arteor-switch",
    "title": "Legrand Arteor",
    "kind": "switch",
    "note": "Functional assembly shown without a decorative surround. The matching surround is selected and quoted separately.",
    "variants": [
      {
        "id": "legrand-arteor-switch-white",
        "finish": "White",
        "sku": "AR770/1WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR770-1WE_600x600_b5a43611-061b-40d7-b1d9-377071529438.jpg?v=1745908256",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-1-gang-rocker-vertical-switch?variant=43916365496633",
        "photoType": "assembly",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-arteor-switch-magnesium",
        "finish": "Magnesium",
        "sku": "AR770/1MGN",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR770-1MGN_600.jpg?v=1745908256",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-1-gang-rocker-vertical-switch?variant=43916365529401",
        "photoType": "assembly",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-arteor-outlet",
    "title": "Legrand Arteor",
    "kind": "outlet",
    "note": "Functional assembly shown without a decorative surround. The matching surround is selected and quoted separately.",
    "variants": [
      {
        "id": "legrand-arteor-outlet-white",
        "finish": "White",
        "sku": "AR777WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR777WE_Front_600.jpg?v=1745908334",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-double-powerpoint-outlet?variant=43916353077561",
        "photoType": "assembly",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-arteor-outlet-magnesium",
        "finish": "Magnesium",
        "sku": "AR777MGN",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR777MGN_Front_600.jpg?v=1745908334",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-double-powerpoint-outlet?variant=43916353110329",
        "photoType": "assembly",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-allure-switch",
    "title": "Hager Allure",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "hager-allure-switch-gloss-white",
        "finish": "Gloss White",
        "sku": "WBHSV1",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHSV1.jpg?v=1738272403",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-1-gang-switch?variant=44024497471801",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-allure-switch-matt-white",
        "finish": "Matt White",
        "sku": "WBHSV1-MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHSV1-MW.jpg?v=1738272403",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-1-gang-switch?variant=44024497504569",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-allure-switch-matt-black",
        "finish": "Matt Black",
        "sku": "WBHSV1-MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHSV1-MB.jpg?v=1738272403",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-1-gang-switch?variant=44024497537337",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-allure-outlet",
    "title": "Hager Allure",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "hager-allure-outlet-gloss-white",
        "finish": "Gloss White",
        "sku": "WBHP2S",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHP2S.jpg?v=1738274197",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-double-powerpoint?variant=44024501436729",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-allure-outlet-matt-white",
        "finish": "Matt White",
        "sku": "WBHP2S-MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHP2S-MW.jpg?v=1738274197",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-double-powerpoint?variant=44024501469497",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-allure-outlet-matt-black",
        "finish": "Matt Black",
        "sku": "WBHP2S-MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBHP2S-MB.jpg?v=1738274197",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-allure-double-powerpoint?variant=44024501502265",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-finesse-switch",
    "title": "Hager Finesse",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "hager-finesse-switch-gloss-white",
        "finish": "Gloss White",
        "sku": "WBQSV1",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQSV1.jpg?v=1738267552",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-dedicated-1-gang-switch-available-in-3-colours?variant=43915639488825",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-finesse-switch-matt-white",
        "finish": "Matt White",
        "sku": "WBQSV1-MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQSV1-MW.jpg?v=1738267552",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-dedicated-1-gang-switch-available-in-3-colours?variant=43915639521593",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-finesse-switch-matt-black",
        "finish": "Matt Black",
        "sku": "WBQSV1-MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQSV1-MB.jpg?v=1738267552",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-dedicated-1-gang-switch-available-in-3-colours?variant=43915639554361",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-finesse-outlet",
    "title": "Hager Finesse",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "hager-finesse-outlet-gloss-white",
        "finish": "Gloss White",
        "sku": "WBQP2S",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQP2S.jpg?v=1738269324",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-twin-powerpoint-10a?variant=43915621007673",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-finesse-outlet-matt-white",
        "finish": "Matt White",
        "sku": "WBQP2S-MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQP2S-MW.jpg?v=1738269324",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-twin-powerpoint-10a?variant=43915621040441",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-finesse-outlet-matt-black",
        "finish": "Matt Black",
        "sku": "WBQP2S-MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/WBQP2S-MB.jpg?v=1738269324",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-finesse-twin-powerpoint-10a?variant=43915621073209",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-flat-cat-switch",
    "title": "Trader Flat Cat",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "trader-flat-cat-switch-white",
        "finish": "White",
        "sku": "FLSWV1G",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLSWV1G.jpg?v=1771450899",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-1-gang-complete-switch?variant=43917105594681",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-switch-black",
        "finish": "Black",
        "sku": "FLSWV1GBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLSWV1GBK.jpg?v=1771450899",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-1-gang-complete-switch?variant=43917105627449",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-switch-matt-black",
        "finish": "Matt Black",
        "sku": "FLSWV1GMBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLSWV1GMBK.jpg?v=1748486421",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-1-gang-complete-switch?variant=43917105660217",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-switch-matt-white",
        "finish": "Matt White",
        "sku": "FLSWV1GMW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLSWV1GMW.jpg?v=1748486421",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-1-gang-complete-switch?variant=43917105692985",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-flat-cat-outlet",
    "title": "Trader Flat Cat",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "trader-flat-cat-outlet-white",
        "finish": "White",
        "sku": "FLPP2G",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLPP2G.jpg?v=1748488373",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-twin-switched-socket-flpp2g?variant=43917112672569",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-outlet-matt-black",
        "finish": "Matt Black",
        "sku": "FLPP2GMBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLPP2GMBK.jpg?v=1771453961",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-twin-switched-socket-flpp2g?variant=43917112705337",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-outlet-matt-white",
        "finish": "Matt White",
        "sku": "FLPP2GMW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLPP2GMW.jpg?v=1771453961",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-twin-switched-socket-flpp2g?variant=43917112738105",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-flat-cat-outlet-black",
        "finish": "Black",
        "sku": "FLPP2GBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/FLPP2GBK.jpg?v=1748488373",
        "source": "https://www.powerpointsandswitches.com.au/products/flat-cat-slimline-twin-switched-socket-flpp2g?variant=43917112770873",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-senoa-simple-switch",
    "title": "Trader Senoa Simple",
    "kind": "switch",
    "note": "",
    "variants": [
      {
        "id": "trader-senoa-simple-switch-white",
        "finish": "White",
        "sku": "SENSWV1G",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/senswv1g__large_bc3bbe93-b841-4812-b34f-57745525517d.jpg?v=1753683503",
        "source": "https://www.powerpointsandswitches.com.au/products/senoa-simple-vertical-1-gang-switch-available-in-2-colours?variant=51025234166073",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-senoa-simple-switch-black",
        "finish": "Black",
        "sku": "SENSWV1GBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/senswv1gbk__large_a76702f6-f225-4251-93f8-7477c5a6e0ea.jpg?v=1753683503",
        "source": "https://www.powerpointsandswitches.com.au/products/senoa-simple-vertical-1-gang-switch-available-in-2-colours?variant=51025234198841",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-senoa-simple-outlet",
    "title": "Trader Senoa Simple",
    "kind": "outlet",
    "note": "",
    "variants": [
      {
        "id": "trader-senoa-simple-outlet-white",
        "finish": "White",
        "sku": "SENPP2G",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/SENPP2GCropped.jpg?v=1753683500",
        "source": "https://www.powerpointsandswitches.com.au/products/trader-senoa-simple-double-powerpoint?variant=44025134940473",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-senoa-simple-outlet-black",
        "finish": "Black",
        "sku": "SENPP2GBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/SENPP2GBKCropped.jpg?v=1753683500",
        "source": "https://www.powerpointsandswitches.com.au/products/trader-senoa-simple-double-powerpoint?variant=44025134973241",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-rotary-dimmer-dimmer",
    "title": "Clipsal Iconic rotary dimmer",
    "kind": "dimmer",
    "note": "Rotary dimming; matching knob and switch plate selected separately.",
    "variants": [
      {
        "id": "clipsal-iconic-rotary-dimmer-dimmer-42eledm2-vw",
        "finish": "42ELEDM2-VW",
        "sku": "42ELEDM2-VW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_d9c14c95-0abf-4cf9-8c8e-09325e54f288.png?v=1773281063",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-40-series-rotary-led-dimmer-module?variant=43972490592569",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-push-button-dimmer-dimmer",
    "title": "Clipsal Iconic push-button dimmer",
    "kind": "dimmer",
    "note": "Press to switch, hold to dim. Lighting load and control arrangement must be checked.",
    "variants": [
      {
        "id": "clipsal-iconic-push-button-dimmer-dimmer-41e300pbud2sm-vw",
        "finish": "41E300PBUD2SM-VW",
        "sku": "41E300PBUD2SM-VW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_7e2083f6-3593-41a8-a30d-c63649111186.jpg?v=1773279917",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-push-button-dimmer-350w-41e300pbud2sm-vw?variant=43917906149689",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-solis-t-rotary-controls",
    "title": "Clipsal Solis T rotary controls",
    "kind": "dimmer",
    "note": "Colour-matched rotary adaptor only; compatible Wiser dimmer and plate are quoted together.",
    "variants": [
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-white-ceramic",
        "finish": "White Ceramic",
        "sku": "40RWDA-WC",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_5e4f5c56-b48f-4518-835c-3a69ea349fad.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869123027257",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-ebony-aluminium",
        "finish": "Ebony Aluminium",
        "sku": "40RWDA-EA",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_fb2fbcad-e893-417d-ae9f-006ce59825d1.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869123060025",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-brushed-brass",
        "finish": "Brushed Brass",
        "sku": "40RWDA-BB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_c54648bb-7ddf-4394-8d11-f7205b37ae1c.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869123092793",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-platinum",
        "finish": "Platinum Aluminium",
        "sku": "40RWDA-PT",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_d87594ee-86fc-4ed2-a66a-27bc4c47cf4d.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869123125561",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-solis-rotary-controls",
    "title": "Clipsal Solis rotary controls",
    "kind": "dimmer",
    "note": "Colour-matched rotary adaptor only; compatible Wiser dimmer and plate are quoted together.",
    "variants": [
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-zen-white",
        "finish": "Zen White",
        "sku": "40RWDA-ZW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_0bcffc92-8500-4cdf-96bc-c83820a39421.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869122961721",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-solis-solis-t-rotary-controls-dimmer-zen-black",
        "finish": "Zen Black",
        "sku": "40RWDA-ZB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_aea5510d-766d-4893-ae50-3b4d335dabb5.jpg?v=1750979087",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-solis-wiser-rotary-adaptor?variant=49869122994489",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-wiser-smart-dimmer-dimmer",
    "title": "Clipsal Wiser smart dimmer",
    "kind": "dimmer",
    "note": "Smart dimming component; hub, wiring and app requirements depend on the selected system.",
    "variants": [
      {
        "id": "clipsal-wiser-smart-dimmer-dimmer-41epbdwclm-vw",
        "finish": "41EPBDWCLM-VW",
        "sku": "41EPBDWCLM-VW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_1fe68b31-d26c-4e99-aad7-3b89081dfc02.jpg?v=1773373259",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-41epbdwclm-vwclipsal-wiser-push-button-dimmer-controllink-indicator-led-3-wire-vivid-white?variant=43918308016441",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "diginet-ledsmart-rotary-dimmers-dimmer",
    "title": "Diginet LEDsmart rotary dimmers",
    "kind": "dimmer",
    "note": "MEDM rotary and MMDM/RT push-on/off rotary models. Matching plate and knob options are checked separately.",
    "variants": [
      {
        "id": "diginet-ledsmart-rotary-dimmers-dimmer-medm",
        "finish": "MEDM",
        "sku": "MEDM",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/Diginet-MEDM-dimmer.png?v=1668573269",
        "source": "https://www.powerpointsandswitches.com.au/products/diginet-medm-ledsmart-rotary-phase-dimmer?variant=43917624901945",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "diginet-ledsmart-rotary-dimmers-dimmer-mmdm-rt",
        "finish": "MMDM/RT",
        "sku": "MMDM/RT",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/Diginet-MMDM-RT-dimmer.png?v=1668573265",
        "source": "https://www.powerpointsandswitches.com.au/products/diginet-mmdm-rt-ledsmart-push-button-rotary-phase-dimmer?variant=43917624672569",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "diginet-ledsmart-push-button-dimmer-dimmer",
    "title": "Diginet LEDsmart push-button dimmer",
    "kind": "dimmer",
    "note": "",
    "variants": [
      {
        "id": "diginet-ledsmart-push-button-dimmer-dimmer-mmdm-pb",
        "finish": "MMDM/PB",
        "sku": "MMDM/PB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/Diginet-MMDM-PB-dimmer.png?v=1668573263",
        "source": "https://www.powerpointsandswitches.com.au/products/copy-of-diginet-mmdm-pb-ledsmart-push-button-phase-dimmer?variant=43917623525689",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hager-rotary-push-button-dimmers-dimmer",
    "title": "Hager rotary & push-button dimmers",
    "kind": "dimmer",
    "note": "",
    "variants": [
      {
        "id": "hager-rotary-push-button-dimmers-dimmer-wbmdur",
        "finish": "WBMDUR",
        "sku": "WBMDUR",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/471231_41.jpg?v=1738278892",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-rotary-dimmer-with-built-in-on-off?variant=44376929272121",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "hager-rotary-push-button-dimmers-dimmer-wbmdupb",
        "finish": "WBMDUPB",
        "sku": "WBMDUPB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/471233_41.jpg?v=1738278891",
        "source": "https://www.powerpointsandswitches.com.au/products/hager-universal-push-button-dimmer?variant=43917519814969",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-excel-life-push-button-dimmer-dimmer",
    "title": "Legrand Excel Life push-button dimmer",
    "kind": "dimmer",
    "note": "",
    "variants": [
      {
        "id": "legrand-excel-life-push-button-dimmer-dimmer-white",
        "finish": "White",
        "sku": "EM400A2PWE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EM400A2PWE_600x600_f16f2edd-5d97-4285-89fe-21d55b5a8ff7.jpg?v=1751581449",
        "source": "https://www.powerpointsandswitches.com.au/products/excel-life-push-button-dimmer-2-wire?variant=43917819052345",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-push-button-dimmer-dimmer-urban-grey",
        "finish": "Urban Grey",
        "sku": "EM400A2PUG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EM400A2UG_600x600_c101b153-769d-474a-99fa-ae39edfabd57.jpg?v=1751581449",
        "source": "https://www.powerpointsandswitches.com.au/products/excel-life-push-button-dimmer-2-wire?variant=43917819085113",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-push-button-dimmer-dimmer-black",
        "finish": "Black",
        "sku": "EM400A2PBL",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EM400A2PBL_600x600px.jpg?v=1751581449",
        "source": "https://www.powerpointsandswitches.com.au/products/excel-life-push-button-dimmer-2-wire?variant=43917819117881",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-push-button-dimmer-dimmer-matt-white",
        "finish": "Matt White",
        "sku": "EM400A2PMW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EM400A2PMW_Right.jpg?v=1751581449",
        "source": "https://www.powerpointsandswitches.com.au/products/excel-life-push-button-dimmer-2-wire?variant=43917819150649",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-push-button-dimmer-dimmer-matt-black",
        "finish": "Matt Black",
        "sku": "EM400A2PMB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EM400A2PMB_Right.jpg?v=1745908673",
        "source": "https://www.powerpointsandswitches.com.au/products/excel-life-push-button-dimmer-2-wire?variant=43917819183417",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-arteor-push-button-dimmer-dimmer",
    "title": "Legrand Arteor push-button dimmer",
    "kind": "dimmer",
    "note": "",
    "variants": [
      {
        "id": "legrand-arteor-push-button-dimmer-dimmer-white",
        "finish": "White",
        "sku": "AR400A2PMWE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR400A2PMWE_600.jpg?v=1745908276",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-push-button-all-load-2-wire-dimmer-mechanism?variant=43916336857401",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-arteor-push-button-dimmer-dimmer-magnesium",
        "finish": "Magnesium",
        "sku": "AR400A2PMMGN",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/AR400A2PMMGN_600.jpg?v=1745908276",
        "source": "https://www.powerpointsandswitches.com.au/products/arteor-770-push-button-all-load-2-wire-dimmer-mechanism?variant=43916336890169",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "bticino-living-now-dimmer-dimmer",
    "title": "BTicino Living Now dimmer",
    "kind": "dimmer",
    "note": "K4418 dimmer mechanism; the compatible Living Now control cover and plate are selected separately.",
    "variants": [
      {
        "id": "bticino-living-now-dimmer-dimmer-k4418",
        "finish": "K4418",
        "sku": "K4418",
        "image": "/img/wiring-styles/bticino-living-now-dimmer-dimmer-k4418.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/legrand-bticino-living-now-1-module-2-wire-universal-dimmer?variant=53348496376121",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "legrand-excel-life-with-netatmo-dimmer",
    "title": "Legrand Excel Life with Netatmo",
    "kind": "dimmer",
    "note": "Complete smart dimmer examples. Check compatible gateway, lamps and wiring.",
    "variants": [
      {
        "id": "legrand-excel-life-with-netatmo-dimmer-white",
        "finish": "White",
        "sku": "EWNDIM1WE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EWNDIM1WE_resize600.jpg?v=1749784855",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-excel-life-with-netatmo-1-gang-smart-dimmer?variant=43916208472377",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-with-netatmo-dimmer-matt-white",
        "finish": "Matt White",
        "sku": "EWNDIM1MW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EWNDIM1MW_resize600.jpg?v=1749784855",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-excel-life-with-netatmo-1-gang-smart-dimmer?variant=43916208537913",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "legrand-excel-life-with-netatmo-dimmer-matt-black",
        "finish": "Matt Black",
        "sku": "EWNDIM1MB",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/products/EWNDIM1MB_resize600.jpg?v=1749784855",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-excel-life-with-netatmo-1-gang-smart-dimmer?variant=43916208636217",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-zimi-senoa-smart-dimmer-dimmer",
    "title": "Trader / Zimi Senoa smart dimmer",
    "kind": "dimmer",
    "note": "Complete smart dimmer in white or black; app and system requirements are confirmed in the quote.",
    "variants": [
      {
        "id": "trader-zimi-senoa-smart-dimmer-dimmer-white",
        "finish": "White",
        "sku": "SENDIM1",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/sendim1__large_700603a4-65c6-43d1-8861-9b5748380392.jpg?v=1764208639",
        "source": "https://www.powerpointsandswitches.com.au/products/zimi-senoa-1-button-dimmer-switch?variant=51391635849529",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-zimi-senoa-smart-dimmer-dimmer-black",
        "finish": "Black",
        "sku": "SENDIM1BK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/sendim1bk__large_1a030bd1-645b-45b5-83ed-ad4c90984898.jpg?v=1764208639",
        "source": "https://www.powerpointsandswitches.com.au/products/zimi-senoa-1-button-dimmer-switch?variant=51391635882297",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-dimpala-push-on-off-rotary-dimmer-dimmer",
    "title": "Trader Dimpala push-on/off rotary dimmer",
    "kind": "dimmer",
    "note": "DIMPRE locator-light and DIMPREX no-glow models; dimmer mechanism shown, matching plate quoted separately.",
    "variants": [
      {
        "id": "trader-dimpala-push-on-off-rotary-dimmer-dimmer-green-glow",
        "finish": "Green Glow",
        "sku": "DIMPRE",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/dimpre__large_942cc5db-1b80-459a-b4db-8b4a08af4378.jpg?v=1786416376",
        "source": "https://www.powerpointsandswitches.com.au/products/meerkat-dimpala-digital-push-on-off-rotary-dimmer-400w?variant=54319328428345",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-dimpala-push-on-off-rotary-dimmer-dimmer-no-glow",
        "finish": "No Glow",
        "sku": "DIMPREX",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/dimprex__large_541a8bed-affe-4dd5-9ce3-31d330c74d3a.jpg?v=1786417338",
        "source": "https://www.powerpointsandswitches.com.au/products/meerkat-dimpala-digital-push-on-off-rotary-dimmer-400w?variant=54319328461113",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-2000-switch",
    "title": "Clipsal 2000",
    "kind": "switch",
    "note": "Older or discontinued finishes are shown for matching existing fittings.",
    "variants": [
      {
        "id": "clipsal-2000-switch-white-electric",
        "finish": "White Electric",
        "sku": "2031VA-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0002332&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-2031va?itemno=2031VA-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-switch-cream",
        "finish": "Cream",
        "sku": "2031VA-CM",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0002333&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-2031va?itemno=2031VA-CM",
        "photoType": "complete",
        "availability": "Discontinued fitting · check remaining stock"
      },
      {
        "id": "clipsal-2000-switch-black",
        "finish": "Black",
        "sku": "2031VA-BK",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0002341&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-2031va?itemno=2031VA-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-2000-switch-red",
        "finish": "Red",
        "sku": "2031VA-RD",
        "image": "https://m.media-amazon.com/images/I/41NNbAvkM-L._AC_SL1000_.jpg",
        "source": "https://www.amazon.com.au/Clipsal-2000-2031VA-RD-Switch-Vertical/dp/B095HBRXD4",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-classic-switch",
    "title": "Clipsal Classic",
    "kind": "switch",
    "note": "Older or discontinued finishes are shown for matching existing fittings.",
    "variants": [
      {
        "id": "clipsal-classic-switch-white-electric",
        "finish": "White Electric",
        "sku": "C2031VA-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A00029101&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-c2031va?itemno=C2031VA-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-classic-switch-brushed-aluminium-finish",
        "finish": "Brushed Aluminium Finish",
        "sku": "C2031C-BA",
        "image": "https://download.se.com/files?p_Doc_Ref=ODAC2031C-BA&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/switch-cover-1-gang-c2031c?itemno=C2031C-BA",
        "photoType": "cover",
        "availability": "Confirm current cover and matching mechanism"
      },
      {
        "id": "clipsal-classic-switch-cream",
        "finish": "Cream",
        "sku": "C2031VA-CM",
        "image": "https://download.se.com/files?p_Doc_Ref=ODAC2031VA-CM&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-c2031va?itemno=C2031VA-CM",
        "photoType": "complete",
        "availability": "Discontinued fitting · check remaining stock"
      },
      {
        "id": "clipsal-classic-switch-black",
        "finish": "Black",
        "sku": "C2031VA-BK",
        "image": "https://download.se.com/files?p_Doc_Ref=ODAC2031VA-BK&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/classic-c2000-series/flush-switch-1-gang-250vac-10a-standard-vertical-c2031va?itemno=C2031VA-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "hpm-excel-switch",
    "title": "HPM Excel",
    "kind": "switch",
    "note": "Older or discontinued finishes are shown for matching existing fittings.",
    "variants": [
      {
        "id": "hpm-excel-switch-white",
        "finish": "White",
        "sku": "XL770/1WE",
        "image": "https://assets.legrand.com/pim/PHOTOS-WEB/HP-XL770-1WE-WEB-F.jpg",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/excel",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-switch-gloss-black",
        "finish": "Gloss Black",
        "sku": "XLP770/1BLBL",
        "image": "https://assets.legrand.com/pim/PHOTOS-WEB/HP-CDXL770-1BLBL-WEB-F.jpg",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/excel",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-switch-beige",
        "finish": "Beige",
        "sku": "XL770/1BE",
        "image": "https://assets.legrand.com/pim/PHOTOS-WEB/HP-XL770-1BE-WEB-F.jpg",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/excel",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-switch-brown",
        "finish": "Brown",
        "sku": "XL770/1BR",
        "image": "https://assets.legrand.com/pim/PHOTOS-WEB/HP-XL770-1BR-WEB-F.jpg",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/excel",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "hpm-excel-switch-matt-silver-white-rocker",
        "finish": "Matt Silver (white rocker)",
        "sku": "XL770/1WEMS",
        "image": "https://assets.legrand.com/pim/PHOTOS-WEB/HP-XL770-1WEMS-WEB-F.jpg",
        "source": "https://www.hpm.com.au/en/catalog/electrical/power-points-switches-by-range/excel",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "trader-puma-quad-usb-a-c-outlet",
    "title": "Trader Puma quad USB-A+C",
    "kind": "outlet",
    "note": "Four sockets, two USB-A/C charging ports and an extra switch. Outlet/circuit limits and overall dimensions are checked before installation.",
    "variants": [
      {
        "id": "trader-puma-quad-usb-a-c-outlet-white",
        "finish": "White",
        "sku": "PU4X2ACSW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/pu4x2acsw__large_3a5aab63-59f6-46a9-83a8-cfeaedf7473c.jpg?v=1753140039",
        "source": "https://www.powerpointsandswitches.com.au/products/puma-fully-integrated-quad-powerpoint-with-4-usb-ports-a-c-extra-switch?variant=54319119106361",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "trader-puma-quad-usb-a-c-outlet-black",
        "finish": "Black",
        "sku": "PU4X2ACSWBK",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/pu4x2acswbk__large_2211e01f-675d-4e10-b0e6-65b117f1ad88.jpg?v=1786410655",
        "source": "https://www.powerpointsandswitches.com.au/products/puma-fully-integrated-quad-powerpoint-with-4-usb-ports-a-c-extra-switch?variant=54319119139129",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-rotary-control-finishes-dimmer",
    "title": "Clipsal Iconic rotary control finishes",
    "kind": "dimmer",
    "note": "Knob assembly only. Compatible dimmer mechanism and switch plate are selected separately.",
    "variants": [
      {
        "id": "clipsal-iconic-rotary-control-finishes-dimmer-anthracite",
        "finish": "Anthracite",
        "sku": "40EDIMKB-AN",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_a3113285-2e86-44da-b60a-aa8f2adaf1b0.png?v=1773106817",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-rotary-dimmer-knob-parts-pack?variant=43972477681977",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-rotary-control-finishes-dimmer-ash-grey",
        "finish": "Ash Grey",
        "sku": "40EDIMKB-AG",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_3f028feb-51dc-4490-8866-ca4426b3d5b6.png?v=1773106832",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-rotary-dimmer-knob-parts-pack?variant=43972477649209",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-rotary-control-finishes-dimmer-cool-grey",
        "finish": "Cool Grey",
        "sku": "40EDIMKB-CY",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_b5740473-de07-40a7-8786-8ea60c3b8857.png?v=1773106848",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-rotary-dimmer-knob-parts-pack?variant=43972477714745",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-rotary-control-finishes-dimmer-vivid-white",
        "finish": "Vivid White",
        "sku": "40EDIMKB-VW",
        "image": "https://cdn.shopify.com/s/files/1/0682/1727/4681/files/files_843645a2-408b-4765-924b-89204a51eb99.png?v=1773106865",
        "source": "https://www.powerpointsandswitches.com.au/products/clipsal-iconic-rotary-dimmer-knob-parts-pack?variant=43972477616441",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "bticino-living-now-dimmer-control-covers-dimmer",
    "title": "BTicino Living Now dimmer control covers",
    "kind": "dimmer",
    "note": "KW19 / KG19 dimmer control covers only, for the stated compatible dimmer mechanism; not an ordinary switch cover.",
    "variants": [
      {
        "id": "bticino-living-now-dimmer-control-covers-dimmer-black",
        "finish": "Black",
        "sku": "KG19",
        "image": "/img/wiring-styles/bticino-living-now-dimmer-control-covers-dimmer-black.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-2m-cover-for-dimmer-mech?variant=43915761189177",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      },
      {
        "id": "bticino-living-now-dimmer-control-covers-dimmer-white",
        "finish": "White",
        "sku": "KW19",
        "image": "/img/wiring-styles/bticino-living-now-dimmer-control-covers-dimmer-white.webp",
        "source": "https://www.powerpointsandswitches.com.au/products/hpm-legrand-living-now-2m-cover-for-dimmer-mech?variant=43915761221945",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-40-series-current-dimmers",
    "title": "Clipsal 40 Series LED dimmers",
    "kind": "dimmer",
    "note": "Current push-button, rotary and push-on/off rotary models. The compatible plate, control cap and lighting load are checked before installation.",
    "variants": [
      {
        "id": "clipsal-40-series-current-dimmers-40epbdm-vw",
        "finish": "Push-button · Vivid White",
        "sku": "40EPBDM-VW",
        "image": "https://download.se.com/files?p_Doc_Ref=40EPBDM-VW_DE_44535&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-push-button-40-series-350w-40epbdm?itemno=40EPBDM-VW",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-40-series-current-dimmers-40erdm-vw",
        "finish": "Rotary · Vivid White",
        "sku": "40ERDM-VW",
        "image": "https://download.se.com/files?p_Doc_Ref=40ERDM-VW_DE_44510&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-rotary-push-40-series-350w-40erdm?itemno=40ERDM-VW",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-40-series-current-dimmers-40erpbdm-vw",
        "finish": "Push-on/off rotary · Vivid White",
        "sku": "40ERPBDM-VW",
        "image": "https://download.se.com/files?p_Doc_Ref=40ERPBDM-VW_DE_44534&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-rotary-push-40-series-350w-40erpbdm?itemno=40ERPBDM-VW",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-30-series-current-dimmers",
    "title": "Clipsal 30 Series LED dimmers",
    "kind": "dimmer",
    "note": "Current push-button, rotary and push-on/off rotary models. The compatible plate, control cap and lighting load are checked before installation.",
    "variants": [
      {
        "id": "clipsal-30-series-current-dimmers-30epbdm-we",
        "finish": "Push-button · White Electric",
        "sku": "30EPBDM-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=30EPBDM-WE_DE_44533&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-push-button-30-series-350w-30epbdm?itemno=30EPBDM-WE",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-30-series-current-dimmers-30erdm-we",
        "finish": "Rotary · White Electric",
        "sku": "30ERDM-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=30ERDM-WE_DE_44545&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-rotary-push-30-series-350w-30erdm?itemno=30ERDM-WE",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-30-series-current-dimmers-30erpbdm-we",
        "finish": "Push-on/off rotary · White Electric",
        "sku": "30ERPBDM-WE",
        "image": "https://download.se.com/files?p_Doc_Ref=30ERPBDM-WE_DE_44512&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/clipsal-iconic/dimmer-rotary-push-30-series-350w-30erpbdm?itemno=30ERPBDM-WE",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-zen-rotary-dimmer",
    "title": "Clipsal Saturn Zen rotary dimmer",
    "kind": "dimmer",
    "note": "4062ELEDM mechanism for a compatible Saturn Zen plate and knob kit. A separate switch is required; the complete combination is quoted for your lighting load.",
    "variants": [
      {
        "id": "clipsal-saturn-zen-dimmer-4062eledm",
        "finish": "Rotary dimmer mechanism",
        "sku": "4062ELEDM-TR",
        "image": "https://download.se.com/files?default_image=DefaultProductImage.png&p_Doc_Ref=CLPIMG_I0000883&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/dimmer-mechanism-led-rotary-220-240v-ac-400w-4062eledm?itemno=4062ELEDM-TR",
        "photoType": "mechanism",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-zen-dimmer-knobs",
    "title": "Clipsal Saturn Zen dimmer controls",
    "kind": "dimmer",
    "note": "Knob accessory kit with matt black and matt white controls. Dimmer mechanism, switch plate and any separate switch are selected and quoted separately.",
    "variants": [
      {
        "id": "clipsal-saturn-zen-knob-kit",
        "finish": "Matt Black & Matt White kit",
        "sku": "Z4062EDIM-KB",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/Clipsal_Z4062Edim-KB_369x369.jpg?v=1750977921",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-zen/knob-dimmer-fan-control-z4062edim-kb?itemno=Z4062EDIM-KB",
        "photoType": "adaptor",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-outdoor-outlet",
    "title": "Clipsal Iconic Outdoor",
    "kind": "outlet",
    "note": "Outdoor double power point examples. The fitting and location are assessed for the installation.",
    "variants": [
      {
        "id": "clipsal-iconic-outdoor-outlet-xw",
        "finish": "Extra White",
        "sku": "O3025-XW",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_237de92f-ab90-4ab2-8575-4937381a98fc_700x700.png?v=1773717213",
        "source": "https://www.clipsal.com/products/power-points-switches/iconic-outdoor/twin-switched-socket-outlet-horizontal-10a-250v-o3025?itemno=O3025-XW",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-outdoor-outlet-bk",
        "finish": "Black",
        "sku": "O3025-BK",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_eb1df230-6816-42a7-8913-a963725d2d99_700x700.png?v=1773717246",
        "source": "https://www.clipsal.com/products/power-points-switches/iconic-outdoor/twin-switched-socket-outlet-horizontal-10a-250v-o3025?itemno=O3025-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-iconic-outdoor-switch",
    "title": "Clipsal Iconic Outdoor",
    "kind": "switch",
    "note": "Weather-resistant switching for outdoor locations. The fitting and installation conditions are checked before quoting.",
    "variants": [
      {
        "id": "clipsal-iconic-outdoor-switch-xw",
        "finish": "Extra White",
        "sku": "O3041HA-XW",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_cbcfb90b-d015-4b64-812d-243c39844d26_700x700.png?v=1773718845",
        "source": "https://www.clipsal.com/products/power-points-switches/iconic-outdoor/switch-horizontal-1-gang-20a-16ax-250v-o3041ha?itemno=O3041HA-XW",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-iconic-outdoor-switch-bk",
        "finish": "Black",
        "sku": "O3041HA-BK",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_68fcb2aa-a016-4504-b37c-f2a096cc8a57_700x700.png?v=1773718868",
        "source": "https://www.clipsal.com/products/power-points-switches/iconic-outdoor/switch-horizontal-1-gang-20a-16ax-250v-o3041ha?itemno=O3041HA-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-metal-stainless-outlet",
    "title": "Clipsal Metal Plate: Stainless Steel",
    "kind": "outlet",
    "note": "Stainless-steel double outlet examples with white or black inserts.",
    "variants": [
      {
        "id": "clipsal-metal-stainless-outlet-white",
        "finish": "Stainless Steel / White",
        "sku": "BSL25A-WE",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/products/BSL25A-WE_700x700.jpg?v=1750975532",
        "source": "https://www.clipsal.com/products/power-points-switches/metal-plate-series/twin-switch-socket-outlet-250v-10a-bsl-style-bsl25a?itemno=BSL25A-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-metal-stainless-outlet-black",
        "finish": "Stainless Steel / Black",
        "sku": "BSL25A-BK",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/products/clipsal-BSL25A-BK_700x700.png?v=1750975532",
        "source": "https://www.clipsal.com/products/power-points-switches/metal-plate-series/twin-switch-socket-outlet-250v-10a-bsl-style-bsl25a?itemno=BSL25A-BK",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-metal-brass-outlet",
    "title": "Clipsal Metal Plate: Polished Brass",
    "kind": "outlet",
    "note": "Polished-brass double outlet with white inserts; matching switches can be quoted.",
    "variants": [
      {
        "id": "clipsal-metal-brass-outlet-white",
        "finish": "Polished Brass / White",
        "sku": "BBSL25A-WE",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/products/BBSL25A-WE_700x700.jpg?v=1750975726",
        "source": "https://www.clipsal.com/products/power-points-switches/metal-plate-series/twin-switch-socket-outlet-250v-10a-bbsl-style-flat-plate-bbsl25a?itemno=BBSL25A-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-metal-stainless-switch",
    "title": "Clipsal Metal Plate: Stainless Steel",
    "kind": "switch",
    "note": "One-gang white and two-gang black examples are shown. The number of switches and matching mechanisms are confirmed in your quote.",
    "variants": [
      {
        "id": "clipsal-metal-stainless-switch-white",
        "finish": "Stainless Steel / White · 1 gang",
        "sku": "BSL31VA-WE",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_3ab018cc-56ee-4cb2-88ed-6972f2b25d7c_369x369.jpg?v=1750975445",
        "source": "https://www.clipsal.com/products/power-points-switches/metal-plate-series/flush-switch-1-gang-250vac-10a-range-bsl-style-standard-vertical-bsl31va?itemno=BSL31VA-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      },
      {
        "id": "clipsal-metal-stainless-switch-black",
        "finish": "Stainless Steel / Black · 2 gang",
        "sku": "BSL32VA-BK",
        "image": "https://download.se.com/files?default_image=DefaultProductImage.png&p_Doc_Ref=CLPIMG_A0004238&p_File_Type=rendition_369_jpg",
        "source": "https://www.se.com/au/en/product/BSL32VA-BK/flush-switch-metal-plate-series-2-gang-250vac-10a-range-bsl-style-standard-vert/",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-metal-brass-switch",
    "title": "Clipsal Metal Plate: Polished Brass",
    "kind": "switch",
    "note": "Polished-brass switch example with a white rocker. Other layouts are checked before quoting.",
    "variants": [
      {
        "id": "clipsal-metal-brass-switch-white",
        "finish": "Polished Brass / White · 1 gang",
        "sku": "BBSL31VA-WE",
        "image": "https://www.powerpointsandswitches.com.au/cdn/shop/files/files_fcbb2be9-8d0f-46f7-8f6a-b951aecda024_369x369.jpg?v=1750975617",
        "source": "https://www.clipsal.com/products/power-points-switches/metal-plate-series/flush-switch-1-gang-250vac-10a-range-bbsl-style-standard-vert-bbsl31va?itemno=BBSL31VA-WE",
        "photoType": "complete",
        "availability": "Confirm current stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-horizon-legacy-outlet",
    "title": "Clipsal Saturn / Horizon: Legacy",
    "kind": "outlet",
    "note": "Earlier glass and Horizon finishes for matching existing fittings. This range is discontinued; remaining stock and suitable alternatives must be checked.",
    "variants": [
      {
        "id": "clipsal-saturn-horizon-legacy-outlet-pw",
        "finish": "Pure White",
        "sku": "4025-PW",
        "image": "https://www.clipsal.com/clipsal-product-images/A0004745.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/double-switch-power-point-250v-10a-4025?itemno=4025-PW",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-outlet-eb",
        "finish": "Espresso Black",
        "sku": "4025-EB",
        "image": "https://www.clipsal.com/clipsal-product-images/A0004528.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/double-switch-power-point-250v-10a-4025?itemno=4025-EB",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-outlet-hb",
        "finish": "Horizon Black",
        "sku": "4025-HB",
        "image": "https://www.clipsal.com/clipsal-product-images/A0005008.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/double-switch-power-point-250v-10a-4025?itemno=4025-HB",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-outlet-hs",
        "finish": "Horizon Silver",
        "sku": "4025-HS",
        "image": "https://www.clipsal.com/clipsal-product-images/A0005009.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/double-switch-power-point-250v-10a-4025?itemno=4025-HS",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-outlet-om",
        "finish": "Ocean Mist",
        "sku": "4025-OM",
        "image": "https://www.clipsal.com/clipsal-product-images/A0004599.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/double-switch-power-point-250v-10a-4025?itemno=4025-OM",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      }
    ]
  },
  {
    "id": "clipsal-saturn-horizon-legacy-switch",
    "title": "Clipsal Saturn / Horizon: Legacy",
    "kind": "switch",
    "note": "Earlier glass and Horizon finishes for matching existing fittings. This range is discontinued; remaining stock and suitable alternatives must be checked.",
    "variants": [
      {
        "id": "clipsal-saturn-horizon-legacy-switch-pw",
        "finish": "Pure White",
        "sku": "4061PBL-PW",
        "image": "https://www.clipsal.com/clipsal-product-images/A0004905.jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/push-button-switch-led-1-gang-20a-4061pbl?itemno=4061PBL-PW",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-switch-eb",
        "finish": "Espresso Black",
        "sku": "4061PBL-EB",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0004667&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/push-button-switch-led-1-gang-20a-4061pbl?itemno=4061PBL-EB",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-switch-hb",
        "finish": "Horizon Black",
        "sku": "4061PBL-HB",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0005031&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/push-button-switch-led-1-gang-20a-4061pbl?itemno=4061PBL-HB",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-switch-hs",
        "finish": "Horizon Silver",
        "sku": "4061PBL-HS",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0005061&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/push-button-switch-led-1-gang-20a-4061pbl?itemno=4061PBL-HS",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      },
      {
        "id": "clipsal-saturn-horizon-legacy-switch-om",
        "finish": "Ocean Mist",
        "sku": "4061PBL-OM",
        "image": "https://download.se.com/files?p_Doc_Ref=CLPIMG_A0004702&p_File_Type=rendition_369_jpg",
        "source": "https://www.clipsal.com/products/power-points-switches/saturn-inc-saturn-horizon/push-button-switch-led-1-gang-20a-4061pbl?itemno=4061PBL-OM",
        "photoType": "complete",
        "availability": "Discontinued range · limited remaining stock"
      }
    ]
  }
];
