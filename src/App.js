import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import ProfilePicChanger from './components/ProfilrPicChanger';
import Pic1 from './components/pics/female1.png';
import Pic2 from './components/pics/male1.png';
import Pic3 from './components/pics/female2.png';
import Pic4 from './components/pics/male2.png';
import Pic5 from './components/pics/female3.png';
import Pic6 from './components/pics/male3.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: ''
    }
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage
    })
  }

  render() {
    return (
      <div className="App">
        <h3>JMR</h3>
        <Avatar size={64} icon={<UserOutlined />} src={this.state.profileImage} />
        <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3} pic4={Pic4} pic5={Pic5} pic6={Pic6} />
      </div>
    );
  }
}
export default App;
