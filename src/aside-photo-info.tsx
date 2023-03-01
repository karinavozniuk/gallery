import React, { useState, useEffect } from 'react';
import './App.css';
import gallery from './data/images.json';

function formatFileSize(bytes: number, decimalPoint: number) {
    if (bytes === 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const PhotoInfo = () => {

    const [visibleDetails, setVisibleDetails] = useState (false);
    const handleClick = () => {
        setVisibleDetails(!visibleDetails)
    }
}



function Aside() {


    return (
        <aside className='photo-details side'>
            
                    <div>
                    <img className='photo-sm' src="#" alt="test"></img>
                    <p className='photo-name'> filename</p>
                    <p className='photo-size-sm'> size </p>
                    <table>
                        <thead>
                            <h3>Information</h3>
                        </thead>
                        <tbody>
                            <tr className="table-row uploaded">
                                <td className='tag'> Uploaded</td>
                                <td className='data'> </td>
                            </tr>
                            <tr className="table-row created">
                                <td className='tag'></td>
                                <td className='data'></td>
                            </tr>
                            <tr className="table-row modified">
                                <td className='tag'></td>
                                <td className='data'></td>
                            </tr>
                            <tr className="table-row dimensions">
                                <td className='tag'></td>
                                <td className='data'></td>
                            </tr>
                            <tr className="table-row resolution">
                                <td className='tag'></td>
                                <td className='data'></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <h3>Description</h3>
                            <p> </p>
                        </tfoot>
                    </table>
                    </div>
                </aside>
    );
}


export default Aside;
