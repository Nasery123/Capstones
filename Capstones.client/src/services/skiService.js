import { AppState } from "../AppState.js"
import { skiApi } from "./AxiosService.js"

class SkiService {

}
// async getSkiForcast(optionsObject) {
//     const res = await axios.request(optionsObject);
//     console.log(res.data)
// }
// async getResorts() {
// const res = await skiApi.get('resort')
//     AppState.resorts = [
//         {
//             "slug": "49-degrees-north",
//             "name": "49 Degrees North",
//             "country": "US",
//             "region": "WA",
//             "location": {
//                 "latitude": 48.302353,
//                 "longitude": -117.564011
//             },
//             "url": "https://api.skiapi.com/v1/resort/49-degrees-north"
//         },
//         {
//             "slug": "alpine-meadows",
//             "name": "Alpine Meadows",
//             "country": "US",
//             "region": "CA",
//             "location": {
//                 "latitude": 39.148201,
//                 "longitude": -120.150902
//             },
//             "url": "https://api.skiapi.com/v1/resort/alpine-meadows"
//         },
//         {
//             "slug": "alta",
//             "name": "Alta",
//             "country": "US",
//             "region": "UT",
//             "location": {
//                 "latitude": 40.583828,
//                 "longitude": -111.63726
//             },
//             "url": "https://api.skiapi.com/v1/resort/alta"
//         },
//         {
//             "slug": "alyeska",
//             "name": "Alyeska",
//             "country": "US",
//             "region": "AK",
//             "location": {
//                 "latitude": 60.961445,
//                 "longitude": -149.102676
//             },
//             "url": "https://api.skiapi.com/v1/resort/alyeska"
//         },
//         {
//             "slug": "angel-fire",
//             "name": "Angel Fire",
//             "country": "US",
//             "region": "NM",
//             "location": {
//                 "latitude": 36.387402,
//                 "longitude": -105.273903
//             },
//             "url": "https://api.skiapi.com/v1/resort/angel-fire"
//         },
//         {
//             "slug": "arapahoe-basin",
//             "name": "Arapaho Basin",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.642464,
//                 "longitude": -105.871872
//             },
//             "url": "https://api.skiapi.com/v1/resort/arapahoe-basin"
//         },
//         {
//             "slug": "aspen-highlands",
//             "name": "Aspen Highlands",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.182522,
//                 "longitude": -106.855904
//             },
//             "url": "https://api.skiapi.com/v1/resort/aspen-highlands"
//         },
//         {
//             "slug": "aspen-mountain",
//             "name": "Aspen Mountain",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.186714,
//                 "longitude": -106.819275
//             },
//             "url": "https://api.skiapi.com/v1/resort/aspen-mountain"
//         },
//         {
//             "slug": "attitash",
//             "name": "Attitash",
//             "country": "US",
//             "region": "NH",
//             "location": {
//                 "latitude": 44.077778,
//                 "longitude": -71.282776
//             },
//             "url": "https://api.skiapi.com/v1/resort/attitash"
//         },
//         {
//             "slug": "beavercreek",
//             "name": "Beaver Creek",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.600464,
//                 "longitude": -106.517899
//             },
//             "url": "https://api.skiapi.com/v1/resort/beavercreek"
//         },
//         {
//             "slug": "big-sky",
//             "name": "Big Sky",
//             "country": "US",
//             "region": "MT",
//             "location": {
//                 "latitude": 45.283333,
//                 "longitude": -111.401389
//             },
//             "url": "https://api.skiapi.com/v1/resort/big-sky"
//         },
//         {
//             "slug": "big-white",
//             "name": "Big White",
//             "country": "CA",
//             "region": "BC",
//             "location": {
//                 "latitude": 49.888,
//                 "longitude": -119.495399
//             },
//             "url": "https://api.skiapi.com/v1/resort/big-white"
//         },
//         {
//             "slug": "bluemountain",
//             "name": "Blue Mountain",
//             "country": "CA",
//             "region": "ON",
//             "location": {
//                 "latitude": 44.50758,
//                 "longitude": -80.316116
//             },
//             "url": "https://api.skiapi.com/v1/resort/bluemountain"
//         },
//         {
//             "slug": "bolton-valley",
//             "name": "Bolton Valley",
//             "country": "US",
//             "region": "VT",
//             "location": {
//                 "latitude": 44.421673,
//                 "longitude": -72.84948
//             },
//             "url": "https://api.skiapi.com/v1/resort/bolton-valley"
//         },
//         {
//             "slug": "boreal",
//             "name": "Boreal",
//             "country": "US",
//             "region": "CA",
//             "location": {
//                 "latitude": 39.316502,
//                 "longitude": -120.270203
//             },
//             "url": "https://api.skiapi.com/v1/resort/boreal"
//         },
//         {
//             "slug": "breck",
//             "name": "Breckenridge",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.480724,
//                 "longitude": -106.066238
//             },
//             "url": "https://api.skiapi.com/v1/resort/breck"
//         },
//         {
//             "slug": "brettonwoods",
//             "name": "Bretton Woods",
//             "country": "US",
//             "region": "NH",
//             "location": {
//                 "latitude": 44.077122,
//                 "longitude": -71.340408
//             },
//             "url": "https://api.skiapi.com/v1/resort/brettonwoods"
//         },
//         {
//             "slug": "brianhead",
//             "name": "Brian Head",
//             "country": "US",
//             "region": "UT",
//             "location": {
//                 "latitude": 37.692753,
//                 "longitude": -112.848129
//             },
//             "url": "https://api.skiapi.com/v1/resort/brianhead"
//         },
//         {
//             "slug": "bridger-bowl",
//             "name": "Bridger Bowl",
//             "country": "US",
//             "region": "MT",
//             "location": {
//                 "latitude": 45.817974,
//                 "longitude": -110.89814
//             },
//             "url": "https://api.skiapi.com/v1/resort/bridger-bowl"
//         },
//         {
//             "slug": "brighton",
//             "name": "Brighton",
//             "country": "US",
//             "region": "UT",
//             "location": {
//                 "latitude": 40.620697,
//                 "longitude": -111.592041
//             },
//             "url": "https://api.skiapi.com/v1/resort/brighton"
//         },
//         {
//             "slug": "bromley-mountain",
//             "name": "Bromley Mountain",
//             "country": "US",
//             "region": "VT",
//             "location": {
//                 "latitude": 43.213402,
//                 "longitude": -72.935013
//             },
//             "url": "https://api.skiapi.com/v1/resort/bromley-mountain"
//         },
//         {
//             "slug": "burke-mountain",
//             "name": "Burke Mountain",
//             "country": "US",
//             "region": "VT",
//             "location": {
//                 "latitude": 44.587898,
//                 "longitude": -71.91745
//             },
//             "url": "https://api.skiapi.com/v1/resort/burke-mountain"
//         },
//         {
//             "slug": "buttermilk",
//             "name": "Buttermilk",
//             "country": "US",
//             "region": "CO",
//             "location": {
//                 "latitude": 39.206944,
//                 "longitude": -106.860474
//             },
//             "url": "https://api.skiapi.com/v1/resort/buttermilk"
//         },
//         {
//             "slug": "caberfae-peaks",
//             "name": "Caberfae Peaks",
//             "country": "US",
//             "region": "MI",
//             "location": {
//                 "latitude": 44.245014,
//                 "longitude": -85.719765
//             },
//             "url": "https://api.skiapi.com/v1/resort/caberfae-peaks"
//         },
//         {
//             "slug": "camelback",
//             "name": "Camelback Mountain",
//             "country": "US",
//             "region": "PA",
//             "location": {
//                 "latitude": 41.051389,
//                 "longitude": -75.355
//             },
//             "url": "https://api.skiapi.com/v1/resort/camelback"
//         }
//     ]//res.data.data
// }

// async getResort(slug) {
//     const res = await skiApi.get('resort/' + slug)
//     AppState.resort = res.data

export const skiService = new SkiService()
