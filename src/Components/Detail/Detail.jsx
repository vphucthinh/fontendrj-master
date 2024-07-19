import "./Detail.css"
import { assets } from "../../assets/assets"

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={assets.avatar} alt="" />
        <h2>Hotaru</h2>
        <p>Gomen, amanai. Ore wa ima~~ omae no</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
             <span>Chat Setting</span>
             <img src={assets.arrowUp} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
             <span>Privay % help</span>
             <img src={assets.arrowUp} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
             <span>Shared photos</span>
             <img src={assets.arrowDown} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                 <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-chill-9.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src={assets.download} alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                 <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-chill-9.jpg" alt="" />
               <span>photo_2024_2.png</span>
              </div>
              <img src={assets.download} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
             <span>Shared Files</span>
             <img src={assets.arrowUp} alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail
