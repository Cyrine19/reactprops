import React from 'react';
import Profile from './Profile/Profile';
import ProfilePhoto from './Profile/profile.jpg';
import HandleName from './HandleName';
import './App.css';




export class App extends React.Component {
  render(){
    return(
      <div  style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        
  
        <Profile  FullName="Cyrine Benali"/>
        <Profile Bio="i'll write my bio later"/>
        <Profile Profession="Agro-economist engineer"/>
        <img src={ProfilePhoto} alt="Profile" style={{ width: '300px' }}/>
        <div>
        
  
          <HandleName FullName="Cyrine Benali" />
        </div>
      </div>
    );
  }
  
}
export default App;
