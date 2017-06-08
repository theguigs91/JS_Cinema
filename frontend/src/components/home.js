import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Bienvenue sur JS Cinema</h1>
        <p>
          Tenez-vous au courant des films à l'affiche et réservez vos places
        </p>
      </div>
    );
  }
});

export default Home;
