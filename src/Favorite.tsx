import React from 'react'
import ReactDOM  from 'react-dom'
import Header from './header';
import gallery from './data/images.json';


function formatFileSize(bytes:number, decimalPoint:number) {
    if(bytes == 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

function Favorite() {
    return (
        <div className="App">
        <aside className='photo-details'> <p>rjgwpihgwpegh</p> </aside>
        <Header />
        
        <div className='gallery'>
          {gallery && gallery.map((data) => {
            return (
              <div className='photo' key={data.id}>
                <img className='photo-sm' src={data.url} alt='test picture'></img>
                <p className='photo-name'> {data.filename}</p>
                <p className='photo-size-sm'> {formatFileSize(data.sizeInBytes, 1 )} </p>
  
              </div>
            )
          })}
          <br />
        </div>
        
      </div>
    );
  }
  
  export default Favorite;
  