import React from 'react';
import Canvas from '../containers/canvas';
import Toolbar from '../containers/toolbar';
import ImageLibrary from '../containers/imageLibrary';
import PreviewMap from '../containers/map';
import UploadForm from '../containers/uploadForm';
import SizeSlider from '../containers/slider'
import InteriorColorPicker from '../containers/interiorColorPicker';
import LogOut from '../containers/logout';


require('../../scss/style.scss');

const MainApp = () => (
    <div className = "mainScreen" style = {{height: 600, width: 979, borderWidth: 0.5, borderStyle: 'solid', borderColor: '#13496e'}}>

            <div className="title" style = {{paddingTop: 3, paddingleft: 10, height:28, width: 980}}>   
                    Pushpin Creator<div style = {{float:'right', paddingRight:10}}><LogOut/></div> 
            </div>

            <div>
                    <Canvas />
            </div>

            <div className = "map" style = {{marginTop: -30, marginLeft: 0, marginRight: -10, height: 300, width: 300, borderWidth: 0.5, borderStyle: 'solid', borderColor: '#13496e'  }}>
                    <PreviewMap />
            </div>


            <div className = "imageLibrary" style = {{height: 235, width: 978, marginLeft: 1.5, float:'left'}}>
                <ImageLibrary />
            </div>

            <div className = "bottomBar" style = {{height: 1, width: 978}}>
            </div>



    </div>
);

export default MainApp;
