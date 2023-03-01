import React, { useState, useEffect } from 'react';
import './App.css';
import gallery from './data/images.json';
import Header from './header';
import Aside from './aside-photo-info';

function formatFileSize(bytes: number, decimalPoint: number) {
  if (bytes === 0) return '0 Bytes';
  var k = 1000,
    dm = decimalPoint || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function truncate(str: string) {
  return str.length > 24 ? str.substring(0, 21) + "..." : str;
}


function App() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event:any) => {
  console.log("clicked")
    setIsActive(current => !current);
  };

  return (
    <div className="App row">
      <div className="main-container ">
        <Header />
        <div className='gallery'>
          {gallery && gallery.map((data) => {
            return (
              <div className='photo' key={data.id}>
                <div className={isActive ? "clicked" : ""} onClick={handleClick}>
                <img className='photo-sm' src={data.url} alt="image"></img>
                </div>
                <p className='photo-name'> {truncate(data.filename)}</p>
                <p className='photo-size-sm'> {formatFileSize(data.sizeInBytes, 1)} </p>

              </div>
            )
          })}
          <br />
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default App;
