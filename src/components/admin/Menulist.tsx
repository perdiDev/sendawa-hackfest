import React from 'react'
import Menu from './Menu'

const imageUrlEx = "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90"

export default function Menulist() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
      <Menu url={imageUrlEx} name="SATE PADANG" price={23000}/>
      <Menu url={imageUrlEx} name="SATE PADANG" price={23000}/>
      <Menu url={imageUrlEx} name="SATE PADANG" price={23000}/>
      <Menu url={imageUrlEx} name="SATE PADANG" price={23000}/>
      <Menu url={imageUrlEx} name="SATE PADANG" price={23000}/>
    </div>
  )
}
