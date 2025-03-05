import React from 'react'
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
const Template = () => {
      const navigate = useNavigate();
          if(!localStorage.getItem('user')){
              navigate("/");
          }
      
  return (
    <section className='template'>
        <h1>Templates</h1>
        <div className="templates">
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
            <div className="card-temp">
                <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/c1f1e6648495c152b7f982b73e528de517b5a16e" alt="Images" />
                <h2>Notion</h2>
            </div>
        </div>
    </section>
  )
}

export default Template