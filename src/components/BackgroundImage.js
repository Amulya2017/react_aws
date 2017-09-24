/*import doctor from 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + doctor + ")"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}*/





/*import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

class TestBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
              <Text style={styles.text}>Fullscreen!</Text>
            </BackgroundImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'red',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});*/







/*import React from 'react';
  import BackgroundImage from 'react-background-image-loader';
 
  export default (props) => {
    const {source, ...otherProps} = props;
    const localImage = '/path/to/local/asset';
 
    return(
      <BackgroundImage src={source} placeholder={localImage} {...otherProps}>
        <div className="something-else">
          Some more markup
        </div>
        <SomeOtherReactComponent />
      </BackgroundImage>
    );
  }*/







/*import React, { Component } from 'react';
import doctor from 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./doctor.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

class TestBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
              <Text style={styles.text}>Doctor Portal</Text>
            </BackgroundImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

module.export = BackgroundImage;*/



/*import React from 'react';

export class BackgroundImage extends React.Component {
    render() {
        console.log(this.props.banners);
        // = '../images/banners/frontPageBanner.png'
        const bannerImg = this.props.image.backgroundImage;

       var DuckImage = require('C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png');

var bannerStyle = {
    backgroundImage: 'url(' + DuckImage + ')',
    backgroundSize: this.props.image.backgroundSize,
    backgroundPosition: this.props.image.backgroundPosition,
}

        return (
            <section key={this.props.key} className="login_wrapper" style={bannerStyle}>
                <div className="textbox">
                    <h2>{this.props.title}</h2>
                </div>
            </section>
        )
    }
}*/










// import React from 'react';
// const Image= React.createClass({
    
//     render: function() {
        
//         let imgUrl = 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png'
//     let styles = {
//         root: {
//             backgroundImage: 'url(' + imgUrl + ')',
//             backgroundSize: 'cover',
//             overflow: 'hidden',
//         },
//     }
//     }
// });

// export default Image;