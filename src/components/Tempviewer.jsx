import React from 'react'
import "./view.css";

const Tempviewer = () => {
  return (
    <>
      <section className='viewer'>
            <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/98ecb4507f2ca027a972216016de2a67543fca79" alt="" />
            <div className="content">
                <h1>Notion</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque earum corrupti reiciendis, repudiandae, nostrum quod, blanditiis natus molestias obcaecati facilis suscipit eaque ipsum voluptatibus voluptates enim aperiam temporibus! Dolorem, veniam.</p>
                <div className="v-btn">
                    <button>preview</button>
                    <button>download</button>
                </div>
            </div>
        </section>  
    </>
  )
}

export default Tempviewer