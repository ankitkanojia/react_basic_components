import React, { Component } from 'react';
import FireBaseContext from "./../firebase-context";

class FirebaseAPIs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Students: []
    }
  }

  componentDidMount() {
    // GET method or Fetch data API call from firestore database
    FireBaseContext().collection("Students")
      .get()
      .then(collectionData => {
        // you will get student data collection in collectionData object
        const covertedData = collectionData.docs.map(doc => {
          const data = doc.data();
          const Id = doc.id;
          return { Id, ...data }
        });

        // This will convert the object along with the IDs.
        this.setState({
          Students: covertedData
        });

        console.log('data collection : ', collectionData);
      }).catch(err => {
        // Error or Exception occure
        console.log('error', err.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2>App Page</h2>
      </React.Fragment>
    );
  }
}

export default FirebaseAPIs;