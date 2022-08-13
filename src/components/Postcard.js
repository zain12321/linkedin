import React from 'react'
import Posts from './Posts'


  const carditem = [ 
         {
             id:1,
             logo:'https://media-exp1.licdn.com/dms/image/C4D03AQHKWrzVmwjj7g/profile-displayphoto-shrink_100_100/0/1621015279502?e=1665014400&v=beta&t=yCnkqfH954AbMH5rAzECk1jsPqPhbQxrtiMSCKjjVU4',
             small:'Abdul Waheed Likes this',
             user:'https://media-exp1.licdn.com/dms/image/C4E0BAQEcbYsvzW8Nrg/company-logo_100_100/0/1634128814395?e=1660780800&v=beta&t=zM29LrGAz7nlWKgTeHM2HPWNADjrsynX2xCXkdDuvfE',
             title:'Agile District',
             experience:'91 Followers',
             time:'2h',
             desc1:'#New#Fresher',
             desc2:'#Fresher#Internship',
             desc3:'',
             desc4:'',
             image:'https://media-exp2.licdn.com/dms/image/C4E22AQHclWAJNdGnYg/feedshare-shrink_2048_1536/0/1658378866308?e=1661385600&v=beta&t=CxyYAKp1Ak_QEIVCDwSP_FYR15gqurbFsvvUX-4FcyQ',
             likes:'You and 3,402 others',
             comments:'2.k comments',
             shares:'345 shares'
         },
         {
            id:2,
            logo:'https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980',
            small:'Zain Fiaz Likes this',
            user:'https://media-exp2.licdn.com/dms/image/C4D03AQHYWP0QlDnbUw/profile-displayphoto-shrink_400_400/0/1655108677801?e=1660780800&v=beta&t=OkeHQWC8qp0lHkeHopf9oZTOwi2z11HOEL3w2CJQjyY',
            title:'Muhammad Zubair',
            experience:'React Native  ||  React js || Node js || Apollo || GraphQL',
            time:'3mo',
            desc1:'just wait',
            desc2:'',
            desc3:'',
            desc4:'#Happy#New#Year',
            image:'https://media-exp1.licdn.com/dms/image/C4E22AQHepjCc9QTG5Q/feedshare-shrink_800/0/1659583993794?e=1663200000&v=beta&t=Ce4ke0gyiOTeEeOoTsRkhGVcGTX8eBPpyvV8yGc4eNY',
            likes:'Zain Fiaz 1,909 others',
            comments:'234 comments ',
            shares:'34 shares'
        },
        {
            id:3,
            logo:'https://media-exp1.licdn.com/dms/image/C4E03AQEmqSOjvbghrg/profile-displayphoto-shrink_100_100/0/1645364966949?e=1657756800&v=beta&t=HzOL-BcUxY-nlOHj6F9AhRnVxV20EF7CRsb-cK_Bkus',
            small:'Ahmad Naveed likes this',
            user:'https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1660780800&v=beta&t=-bG2VUDEckdBv-_K7etVw_INkOeuN8pdAmGIkpnuD6I',
            title:'Amazon',
            experience:'Internet Seattle WA',
            time:'2mo',
            desc1:'Amazon',
            desc2:'',
            desc3:'',
            desc4:'#New#Logo',
            image:'https://media-exp2.licdn.com/dms/image/C5622AQHI7m4FaDCoPg/feedshare-shrink_800/0/1658174161206?e=1661385600&v=beta&t=m6AvosX7GmVxoM0MqsTwWQxxZ1hx2I4gBsbiM3Xp3s8',
            likes:'1.9m likes',
            comments:'290k comments',
            shares:'30k shares'
        },
      {
         id:5,
         logo:'https://media-exp2.licdn.com/dms/image/C4D03AQEUlbrPCSb_ug/profile-displayphoto-shrink_100_100/0/1631816086406?e=1663804800&v=beta&t=y6RhsgkiTuoUmtWXQ4HFV7-ffgVh_ra4eS51qg3CGzs',
         small:'Shazia Shakil Likes this',
         user:'https://media-exp2.licdn.com/dms/image/C4D0BAQHMEjA0QphATA/company-logo_100_100/0/1619154140049?e=1666224000&v=beta&t=9Lw-GEtklA4dMwqMXY1xC3LZihWWLWTJQEdxgOedVgg',
         title:'Aliplay',
         experience:'Good Experience',
         time:'1ye',
         desc1:'#Feel#happy',
         desc2:'',
         desc3:'',
         desc4:'#Joined',
         image:'https://media-exp1.licdn.com/dms/image/C4E22AQGLAKLXV7ukxw/feedshare-shrink_800/0/1659433080130?e=1662595200&v=beta&t=4PpIMY3VpQbOQu8BtPfe7pC6Wk6tBF-L4DbIZSVv4EY',
         likes:'Zain Fiaz 1,909 others',
         comments:'234 comments ',
         shares:'34 shares'
     },
     {
         id:6,
         logo:'https://media-exp2.licdn.com/dms/image/C4D03AQHYWP0QlDnbUw/profile-displayphoto-shrink_400_400/0/1655108677801?e=1660780800&v=beta&t=OkeHQWC8qp0lHkeHopf9oZTOwi2z11HOEL3w2CJQjyY',
         small:'Zubair Butt likes this',
         user:'https://media-exp2.licdn.com/dms/image/C5103AQGpA2OZUMTiZA/profile-displayphoto-shrink_100_100/0/1575450592914?e=1663804800&v=beta&t=Sz1Vk44vTlI1VFHOTaC9BYtCByFDxGOT5FYdG9meGGk',
         title:'Shaista Awan',
         experience:'',
         time:'1we',
         desc1:'#Eid#Mubarak',
         desc2:'#Happiness',
         desc3:'#Celebrating',
         desc4:'',
         image:'https://media-exp2.licdn.com/dms/image/C4D22AQGUvx7pE3TITw/feedshare-shrink_800/0/1650166465426?e=1661385600&v=beta&t=UkRJByhFDppKpzflf1HUoMJc7wplCULnrjaIUQM-c7c',
         likes:'1.9m likes',
         comments:'290k comments',
         shares:'30k shares'
     },
     {
        id:7,
        logo:'https://media-exp1.licdn.com/dms/image/C4D03AQFlPrK-eI1AGA/profile-displayphoto-shrink_100_100/0/1650516815723?e=1659571200&v=beta&t=w3FCyoOaDmEhz2duhXaUG9r0qx5v2V3eJ5dIpVjvSjw',
        small:'Abdul Waheed Likes this',
        user:'https://media-exp1.licdn.com/dms/image/C4D03AQFgLfg6xV-9AA/profile-displayphoto-shrink_100_100/0/1643928574504?e=1659571200&v=beta&t=mShXdRK1O8r_3o-gyhA6KBXjtECaTzVRu1St06fsdtc',
        title:'Safa Saida',
        experience:'91 Followers',
        time:'2h',
        desc1:'#Car#Work',
        desc2:'#New#Model',
        desc3:'',
        desc4:'',
        image:'https://media-exp2.licdn.com/dms/image/C5622AQFNfzGyBF32Ew/feedshare-shrink_2048_1536/0/1658374708804?e=1661385600&v=beta&t=jSrECzKfAytIBGy4K_Mc5P9zsgsSx3Lp80qUT2DTYkA',
        likes:'You and 3,402 others',
        comments:'2.k comments',
        shares:'345 shares'
    },
    {
       id:8,
       logo:'https://media-exp1.licdn.com/dms/image/C4D03AQH5cUIbTiY90g/profile-displayphoto-shrink_100_100/0/1654170901849?e=1659571200&v=beta&t=HkNzOgMngB4Sa756FZJPqV0aZSWvWgGdqothWDnK980',
       small:'Zain Fiaz Likes this',
       user:'https://media-exp1.licdn.com/dms/image/D4D35AQGx0CbypydZog/profile-framedphoto-shrink_100_100/0/1650656993560?e=1660118400&v=beta&t=vJC17-zqYccGCsFhiFKbPgheJ-p8I1ZmpG_jfpBWLSM',
       title:'John Doe',
       experience:'React Native  ||  React js || Node js || Apollo || GraphQL',
       time:'3mo',
       desc1:'just wait',
       desc2:'',
       desc3:'',
       desc4:'#Happy#New#Year',
       image:'https://media-exp2.licdn.com/dms/image/C4D22AQHGTYMxSJD2bw/feedshare-shrink_800/0/1658141810910?e=1661385600&v=beta&t=y6BOBahOFzqst77hkRxDAVov-mhvc7GLFO2lK4x6oY8',
       likes:'Zain Fiaz 1,909 others',
       comments:'234 comments ',
       shares:'34 shares'
   },
  
]

function Postcard() {
    // console.log("props data from post card",props)
  return (
    <div className=' sm:mt-6 md:mt-6 lg:mt-0'>
        {carditem?.map((item) => (
            <Posts {...item}/>
        ))}
    </div>
  )
}

export default Postcard
















// function Postcard(props) {
//     console.log("props data from post card",props)
//   return (
//     <div className=' sm:mt-6 md:mt-6 lg:mt-0'>
//         {props.data?.map((item) => (
//             <Posts {...item}/>
//         ))}
//     </div>
//   )
// }

// export default Postcard