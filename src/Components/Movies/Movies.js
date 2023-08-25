import React from 'react'

import "./Movies.css"

const MoviesData = [ 

  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAwLjRLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
    title: "King of Kotha",
    certificate:"UA",
    languages:"Malayalam , Kannada , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    title: "Jailer",
    certificate:"UA",
    languages:"Tamil , Malayalam , Kannada , Telugu , Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTkuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    title: "RDX",
    certificate:"UA",
    languages:"Malayalam , Kannada , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
    title: "Blue Beetle",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxMS41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363001-xgtxmsxmys-portrait.jpg",
    title: "Voice of Sathyanathan",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDIuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    title: "Gadar 2: The Katha Continues",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDQuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
    title: "OMG 2",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxNTEuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
    title: "Oppenheimer",
    certificate:"UA",
    languages:"Hindi,English"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTI4LjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-trnjveudsm-portrait.jpg",
    title: "Rocky Aur Rani Kii Prem Kahaani",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICA0NC41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-pzdcejeceq-portrait.jpg",
    title: "Barbie",
    certificate:"UA",
    languages:"English"
  
  },
  
  
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTUuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
    title: "Ghoomer",
    certificate:"UA",
    languages:"Hindi"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICAxNDUgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367000-rnxuzymwam-portrait.jpg",
    title: "Digital Village",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICA5MiBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365786-tsxzzbyvva-portrait.jpg",
    title: "Jailer (Malayalam)",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxMTkuNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-gdlsqkwwld-portrait.jpg",
    title: "Mission Impossible: Dead Reckoning - Part One",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
    
    
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxLjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365979-fcewhegsgv-portrait.jpg",
    title: "Corona Dhavan",
    certificate:"UA",
    languages:"Malayalam"
  
  },
  {
    imageLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
    title: "Meg 2: The Trench",
    certificate:"UA",
    languages:"English , Hindi , Telugu , Tamil"
  
  },
  
  
  
  
  
  ]

function Movies() {
  return (
    <div className="bookmyshow">{
      MoviesData.map((x) => {
  
        return (
          <div >
            
            <img src={x.imageLink} alt="" />
            <h2>{x.title}</h2>
            <p>{x.certificate}</p>
            <p>{x.languages}</p>
          </div>
        )
      }
      )
    }
      </div>
  )
}

export default Movies
